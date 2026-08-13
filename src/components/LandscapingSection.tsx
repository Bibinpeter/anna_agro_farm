import React from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowUpRight, Sun, Droplets } from 'lucide-react';

export const LandscapingSection: React.FC = () => {
  const steps = [
    { num: '01', title: 'On-Site Thalikode Consultation', desc: 'Our landscape architect visits your home or villa plot to evaluate soil quality, sunlight angles, and drainage slope.' },
    { num: '02', title: 'Bespoke 3D Garden Masterplan', desc: 'We present a tailored layout mapping out velvet grass lawns, stone pathways, flowering plant borders, and water fountains.' },
    { num: '03', title: 'Soil Enrichment & Plant Prep', desc: 'Enriching soil with organic red earth, coco peat, and selecting nurtured nursery saplings acclimatized in Thalikode.' },
    { num: '04', title: 'Precision Execution & Maintenance', desc: 'Flawless granite stone laying, lawn laying, lighting setup, followed by optional scheduled garden care contracts.' },
  ];

  return (
    <section id="landscaping" className="relative py-24 bg-[#FBFBF8] border-t border-[#0E2918]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] font-mono text-xs text-[#265431] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>[ 05 / LANDSCAPE GARDEN DECORATION & DESIGN ]</span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-[#0E2918]">
              Full Estate <span className="text-[#265431]">Landscape Engineering</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#4A6B53] max-w-md font-normal">
            Transform raw outdoor space into a lush tropical oasis complete with natural grass lawn carpet, ambient night lights, stone rockeries, and water features.
          </p>
        </div>

        {/* Process Steps Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card-light p-6 rounded-3xl border border-[#0E2918]/10 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#265431] block mb-3">
                  [ STEP {step.num} ]
                </span>
                <h4 className="font-space font-bold text-lg text-[#0E2918] mb-2">
                  {step.title}
                </h4>
                <p className="font-sans text-xs text-[#4A6B53] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Lawn & Greenery */}
          <div className="glass-card-light rounded-3xl p-8 border border-[#265431]/20 relative overflow-hidden group">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src="/assets/green_grass.jpg"
                alt="Immaculate Green Grass Lawn Turf Landscape"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2918]/50 via-transparent to-transparent" />
            </div>
            <span className="font-mono text-xs text-[#265431] uppercase tracking-wider block font-bold mb-1">
              [ VELVET LAWN & TROPICAL FLORA ]
            </span>
            <h3 className="font-space font-bold text-2xl text-[#0E2918] mb-3">
              Immaculate Green Grass Lawn Turf
            </h3>
            <p className="font-sans text-sm text-[#4A6B53] font-normal leading-relaxed mb-6">
              We lay weed-free, lush green natural turf rolls paired with vibrant tropical flower borders and shady palm trees for private villas and resorts in Kerala.
            </p>
            <a
              href="https://wa.me/919446828709?text=Hello%20Anna%20Agro%20Farm,%20I%20am%20interested%20in%20Lawn%20Grass%20Installation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#265431] hover:underline"
            >
              <span>Inquire Lawn Grass Pricing</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: Fountains & Outdoor Lighting */}
          <div className="glass-card-light rounded-3xl p-8 border border-[#265431]/20 relative overflow-hidden group">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <img
                src="/assets/pond_light.jpg"
                alt="Garden Pond Lights and Underwater Illumination"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2918]/50 via-transparent to-transparent" />
            </div>
            <span className="font-mono text-xs text-[#265431] uppercase tracking-wider block font-bold mb-1">
              [ WATER & NIGHT ILLUMINATION ]
            </span>
            <h3 className="font-space font-bold text-2xl text-[#0E2918] mb-3">
              Garden Pond Lights & Water Illumination
            </h3>
            <p className="font-sans text-sm text-[#4A6B53] font-normal leading-relaxed mb-6">
              Engage all senses with underwater pond illumination, ambient garden night lights, warm tree uplighting, and carved stone water features.
            </p>
            <a
              href="https://wa.me/919446828709?text=Hello%20Anna%20Agro%20Farm,%20I%20am%20interested%20in%20Water%20Fountains%20and%20Garden%20Lighting."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#265431] hover:underline"
            >
              <span>Inquire Water & Light Systems</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
