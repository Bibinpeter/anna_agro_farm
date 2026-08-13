import React, { useState } from 'react';
import { ArrowRight, Sun, Droplets, Scissors } from 'lucide-react';

interface GrassVariety {
  name: string;
  type: string;
  idealFor: string;
  maintenance: string;
  sunlight: string;
  desc: string;
}

const grassVarieties: GrassVariety[] = [
  {
    name: 'Mexican Carpet Grass',
    type: 'Fine Soft Leaf Turf',
    idealFor: 'Residential lawns, villa courtyards, luxury resort gardens',
    maintenance: 'Low to Medium',
    sunlight: 'Partial to Full Sun',
    desc: 'Dense, velvety green carpet grass with excellent weed resistance and a ultra-soft cushion feel underfoot.',
  },
  {
    name: 'Bermuda Grass',
    type: 'High Traffic Lawn Turf',
    idealFor: 'Play areas, sports grounds, expansive estate lawns',
    maintenance: 'Medium',
    sunlight: 'Full Sunlight',
    desc: 'Extremely durable and fast-recovering grass with deep root anchorage, built for heavy foot movement.',
  },
  {
    name: 'St. Augustine Grass',
    type: 'Broad Leaf Shade Turf',
    idealFor: 'Shaded courtyard spaces, tree-canopy gardens',
    maintenance: 'Low',
    sunlight: 'Shade & Filtered Sunlight',
    desc: 'Thick blue-green blades designed to thrive in shaded environments beneath tropical palms and canopy trees.',
  },
  {
    name: 'Pearl Grass / Korean Turf',
    type: 'Ornamental Dense Turf',
    idealFor: 'Border walkways, stepping stone inserts, rockeries',
    maintenance: 'Low',
    sunlight: 'Full Sun to Light Shade',
    desc: 'Compact, cushion-like dark green grass requiring minimal mowing, perfect around garden stepping stones.',
  },
];

export const GrassSection: React.FC = () => {
  const [selectedVariety, setSelectedVariety] = useState<GrassVariety>(grassVarieties[0]);

  return (
    <section id="grass" className="relative py-32 bg-[#FBFBF8] text-[#0E2918] overflow-hidden">
      {/* Sunlight Flare Overlay */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#265431]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-[#265431] font-bold block mb-3">
            04 • LAWN TURF ARCHITECTURE
          </span>
          <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0E2918]">
            THE GREEN <br />
            <span className="text-[#265431] font-cormorant italic font-normal tracking-normal lowercase text-5xl sm:text-7xl md:text-8xl">
              underfoot.
            </span>
          </h2>
          <p className="mt-6 font-sans text-base md:text-lg text-[#0E2918]/80 font-light leading-relaxed">
            A lush lawn sets the tranquil foundation of every great Kerala garden. We supply, lay, and nourish premium grass rolls and turf varieties matched to your shade and sunlight conditions.
          </p>
        </div>

        {/* Wide Full-Bleed Grass Banner */}
        <div className="relative rounded-3xl overflow-hidden mb-16 border border-[#0E2918]/10 shadow-xl h-80 sm:h-[420px] group">
          <img
            src="/assets/green_grass.jpg"
            alt="Anna Agro Farm Green Grass Lawn Landscape"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#A8D4B1] font-bold block">
                NATURAL LAWN TURF
              </span>
              <span className="font-syne font-bold text-2xl md:text-3xl text-white">
                Freshly Cultivated Grass Rolls & Turf Supply
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-xs text-[#265431] font-bold shadow-sm">
              <Sun className="w-4 h-4 text-[#265431]" />
              <span>Full Sun & Shade Options</span>
            </div>
          </div>
        </div>

        {/* Interactive Grass Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {grassVarieties.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVariety(item)}
                className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                  selectedVariety.name === item.name
                    ? 'bg-[#265431] border-[#265431] text-white shadow-md'
                    : 'bg-white border-[#0E2918]/10 text-[#0E2918]/70 hover:border-[#265431]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-syne font-bold text-lg">{item.name}</span>
                  <span className={`text-xs font-sans font-semibold ${selectedVariety.name === item.name ? 'text-[#A8D4B1]' : 'text-[#265431]'}`}>
                    {item.type}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Grass Details Card */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-[#0E2918]/10 shadow-lg">
            <span className="text-xs uppercase tracking-widest text-[#265431] font-bold block mb-1">
              SELECTED TURF VARIETY
            </span>
            <h3 className="font-syne font-extrabold text-3xl text-[#0E2918] mb-3">
              {selectedVariety.name}
            </h3>
            <p className="font-sans text-base text-[#0E2918]/80 font-light leading-relaxed mb-8">
              {selectedVariety.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#0E2918]/10">
              <div className="p-4 rounded-xl bg-[#F4F6F0] border border-[#0E2918]/5">
                <Sun className="w-4 h-4 text-[#265431] mb-1" />
                <span className="text-[11px] text-[#265431] uppercase tracking-wider block font-bold">Sunlight</span>
                <span className="font-syne text-sm font-bold text-[#0E2918]">{selectedVariety.sunlight}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F6F0] border border-[#0E2918]/5">
                <Scissors className="w-4 h-4 text-[#265431] mb-1" />
                <span className="text-[11px] text-[#265431] uppercase tracking-wider block font-bold">Maintenance</span>
                <span className="font-syne text-sm font-bold text-[#0E2918]">{selectedVariety.maintenance}</span>
              </div>
              <div className="p-4 rounded-xl bg-[#F4F6F0] border border-[#0E2918]/5">
                <Droplets className="w-4 h-4 text-[#265431] mb-1" />
                <span className="text-[11px] text-[#265431] uppercase tracking-wider block font-bold">Best For</span>
                <span className="font-syne text-xs font-bold text-[#0E2918] truncate block">{selectedVariety.idealFor}</span>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href={`https://wa.me/919400000000?text=Hello%20Anna%20Gardens,%20I%20am%20interested%20in%20${encodeURIComponent(
                  selectedVariety.name
                )}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#265431] hover:bg-[#1E4627] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
              >
                <span>Enquire Turf Pricing & Installation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
