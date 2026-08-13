import React, { useState, useMemo } from 'react';
import { Calculator, MessageSquare, Sparkles, Check, ChevronRight } from 'lucide-react';
import { EstimationState } from '../types';

export const LandscapeEstimator: React.FC = () => {
  const [plotArea, setPlotArea] = useState<number>(1200);
  const [propertyType, setPropertyType] = useState<EstimationState['propertyType']>('villa');
  const [includeLawn, setIncludeLawn] = useState<boolean>(true);
  const [includeStonePaving, setIncludeStonePaving] = useState<boolean>(true);
  const [includeFlowering, setIncludeFlowering] = useState<boolean>(true);
  const [includeWaterFeature, setIncludeWaterFeature] = useState<boolean>(false);
  const [includeIndoor, setIncludeIndoor] = useState<boolean>(false);

  // Calculate estimated budget
  const estimatedCost = useMemo(() => {
    let basePerSqFt = 0;
    if (includeLawn) basePerSqFt += 35;
    if (includeStonePaving) basePerSqFt += 110;
    if (includeFlowering) basePerSqFt += 45;

    let fixedAddons = 0;
    if (includeWaterFeature) fixedAddons += 45000;
    if (includeIndoor) fixedAddons += 12000;

    let multiplier = 1.0;
    if (propertyType === 'resort') multiplier = 1.25;
    if (propertyType === 'commercial') multiplier = 1.15;

    const subtotal = (plotArea * basePerSqFt + fixedAddons) * multiplier;
    const minEstimate = Math.round(subtotal * 0.9);
    const maxEstimate = Math.round(subtotal * 1.15);

    return { minEstimate, maxEstimate };
  }, [plotArea, propertyType, includeLawn, includeStonePaving, includeFlowering, includeWaterFeature, includeIndoor]);

  const generateWhatsAppMessage = () => {
    const text = `Hello Anna Agro Farm (Thalikode, Thrissur), I calculated a landscape & plant budget estimate on your website:%0A%0A- Plot Area: ${plotArea} sq ft%0A- Property Type: ${propertyType.toUpperCase()}%0A- Included Options:%0A${includeLawn ? '  • Natural Lawn Turf%0A' : ''}${includeStonePaving ? '  • Granite & Stone Paving%0A' : ''}${includeFlowering ? '  • Flowering & Garden Plants%0A' : ''}${includeWaterFeature ? '  • Water Fountain Feature%0A' : ''}${includeIndoor ? '  • Indoor Air-Purifying Plants%0A' : ''}%0A- Estimated Range: ₹${estimatedCost.minEstimate.toLocaleString('en-IN')} - ₹${estimatedCost.maxEstimate.toLocaleString('en-IN')}%0A%0APlease let me know when your team can do an on-site visit in Kerala!`;
    return `https://wa.me/919446828709?text=${text}`;
  };

  return (
    <section id="estimator" className="relative py-24 bg-[#08140C] border-t border-[#C6F19D]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C6F19D]/30 bg-[#0F1F11] font-mono text-xs text-[#C6F19D] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>[ 06 / INTERACTIVE GARDEN & STONE BUDGET ESTIMATOR ]</span>
          </div>
          <h2 className="font-syne font-extrabold text-3xl sm:text-5xl text-[#F4F6F0] mb-4">
            Calculate Your <span className="text-[#C6F19D]">Landscaping Budget</span>
          </h2>
          <p className="font-sans text-sm text-[#A3B899] font-light">
            Select your plot dimensions, stone paving preferences, lawn turf, and plant selection to get an instant cost range for your Thrissur home or estate.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-[#C6F19D]/20 space-y-8">
            {/* Plot Area Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="font-mono text-xs text-[#C6F19D] font-bold uppercase">
                  [ 1. LAND / GARDEN PLOT AREA ]
                </label>
                <span className="font-mono text-lg font-extrabold text-[#F4F6F0] bg-[#060C07] px-4 py-1.5 rounded-xl border border-[#C6F19D]/30">
                  {plotArea.toLocaleString()} <span className="text-xs text-[#C6F19D]">sq ft</span>
                </span>
              </div>

              <input
                type="range"
                min="200"
                max="10000"
                step="100"
                value={plotArea}
                onChange={(e) => setPlotArea(Number(e.target.value))}
                className="w-full h-2 bg-[#060C07] rounded-lg appearance-none cursor-pointer accent-[#C6F19D]"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#A3B899] mt-2">
                <span>200 sq ft (Compact Courtyard)</span>
                <span>5,000 sq ft</span>
                <span>10,000+ sq ft (Estate Villa)</span>
              </div>
            </div>

            {/* Property Type Radio */}
            <div>
              <label className="font-mono text-xs text-[#C6F19D] font-bold uppercase block mb-3">
                [ 2. PROPERTY TYPE ]
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'residential', label: 'Home Garden' },
                  { id: 'villa', label: 'Luxury Villa' },
                  { id: 'resort', label: 'Resort / Stay' },
                  { id: 'commercial', label: 'Commercial' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id as any)}
                    className={`py-3 px-3 rounded-xl font-mono text-xs font-semibold text-center border transition-all ${
                      propertyType === type.id
                        ? 'bg-[#C6F19D] text-[#060C07] border-[#C6F19D] shadow-[0_0_15px_rgba(198,241,157,0.3)]'
                        : 'bg-[#060C07] text-[#A3B899] border-[#C6F19D]/20 hover:text-[#F4F6F0]'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Options Checkboxes */}
            <div>
              <label className="font-mono text-xs text-[#C6F19D] font-bold uppercase block mb-3">
                [ 3. SELECT SERVICES & ELEMENTS TO INCLUDE ]
              </label>
              <div className="space-y-3">
                {[
                  { state: includeLawn, setState: setIncludeLawn, label: 'Lush Velvet Lawn Grass Installation (Bermuda / Mexican)' },
                  { state: includeStonePaving, setState: setIncludeStonePaving, label: 'Kerala Flamed Black Granite & Slate Stone Paving' },
                  { state: includeFlowering, setState: setIncludeFlowering, label: 'Flowering Plants, Orchids & Garden Shrub Borders' },
                  { state: includeWaterFeature, setState: setIncludeWaterFeature, label: 'Natural Stone Waterfall & Recirculating Fountain' },
                  { state: includeIndoor, setState: setIncludeIndoor, label: 'Air-Purifying Indoor Plants Set (Monstera, Snake Plant)' },
                ].map((opt, idx) => (
                  <label
                    key={idx}
                    onClick={() => opt.setState(!opt.state)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      opt.state
                        ? 'bg-[#0F1F11] border-[#C6F19D] text-[#F4F6F0]'
                        : 'bg-[#060C07]/50 border-[#C6F19D]/15 text-[#A3B899]'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        opt.state ? 'bg-[#C6F19D] border-[#C6F19D] text-[#060C07]' : 'border-[#C6F19D]/30'
                      }`}
                    >
                      {opt.state && <Check className="w-3.5 h-3.5 font-bold" />}
                    </div>
                    <span className="font-sans text-xs font-medium">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#C6F19D]/30 space-y-6 sticky top-28">
            <div className="flex items-center justify-between border-b border-[#C6F19D]/20 pb-4">
              <span className="font-mono text-xs font-bold text-[#C6F19D] uppercase tracking-wider">
                [ ESTIMATED BUDGET RANGE ]
              </span>
              <span className="font-mono text-[10px] text-[#A3B899]">THALICODE RATES</span>
            </div>

            {/* Calculated Output Display */}
            <div>
              <div className="font-syne font-extrabold text-3xl sm:text-4xl text-[#C6F19D] text-lime-glow mb-1">
                ₹{estimatedCost.minEstimate.toLocaleString('en-IN')} – ₹{estimatedCost.maxEstimate.toLocaleString('en-IN')}
              </div>
              <p className="font-sans text-xs text-[#A3B899] font-light">
                *Approximate turn-key estimate including plant supply, stone masonry, and labor in Thrissur district.
              </p>
            </div>

            {/* Breakdown List */}
            <div className="space-y-2 pt-4 border-t border-[#C6F19D]/15 font-mono text-xs">
              <div className="flex justify-between text-[#A3B899]">
                <span>Total Plot Area:</span>
                <span className="text-[#F4F6F0]">{plotArea} sq ft</span>
              </div>
              <div className="flex justify-between text-[#A3B899]">
                <span>Selected Elements:</span>
                <span className="text-[#C6F19D]">
                  {[includeLawn, includeStonePaving, includeFlowering, includeWaterFeature, includeIndoor].filter(Boolean).length} Active
                </span>
              </div>
              <div className="flex justify-between text-[#A3B899]">
                <span>On-Site Location:</span>
                <span className="text-[#F4F6F0]">Kerala (Thrissur District)</span>
              </div>
            </div>

            {/* Direct Send to WhatsApp */}
            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-[#C6F19D] text-[#060C07] font-mono text-xs font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(198,241,157,0.3)]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Estimate to WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
