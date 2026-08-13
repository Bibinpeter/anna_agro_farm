import React, { useState } from 'react';
import { Hammer, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PlantItem } from '../types';

interface StoneSectionProps {
  onAddToInquiry: (item: PlantItem) => void;
}

export const StoneSection: React.FC<StoneSectionProps> = ({ onAddToInquiry }) => {
  const [activeMaterial, setActiveMaterial] = useState<number>(0);

  const materials = [
    {
      name: 'Kerala Flamed Black Granite',
      use: 'Car Porches, Courtyard Walkways, Entrance Steps',
      durability: 'Lifetime Structural Grade',
      texture: 'Micro-flamed Non-slip Surface',
      desc: 'Sourced directly from Kerala granite quarries, heat-treated for slip-free grip during monsoon downpours.',
      image: '/assets/keralastone.jpg',
    },
    {
      name: 'Handcrafted Granite Stone Work',
      use: 'Lawn Pathways, Stone Masonry, Villa Courtyards',
      durability: 'Extreme Weather Grade',
      texture: 'Handcrafted Stone Masonry Finish',
      desc: 'Hand-cut irregular granite stone slabs placed gracefully across landscapes with custom stone borders.',
      image: '/assets/stone_work_custom.jpg',
    },
    {
      name: 'Kerala Natural Stonescaping & Basins',
      use: 'Front Verandas, Entryway Floating Lotus Bowls & Paving',
      durability: 'Handcrafted Solid Stone Heritage',
      texture: 'Hand-chiseled Traditional Reliefs',
      desc: 'Solid granite bowls and natural stonescaping hand-crafted by master masons in Kerala.',
      image: '/assets/keralastone.jpg',
    },
  ];

  return (
    <section id="stone-studio" className="relative py-24 bg-[#FBFBF8] border-t border-[#0E2918]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] font-mono text-xs text-[#265431] mb-3">
              <Hammer className="w-3.5 h-3.5" />
              <span>[ 04 / STONE WORK & STONESCAPING STUDIO ]</span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-[#0E2918]">
              Handcrafted <span className="text-[#265431]">Granite & Slate</span> Work
            </h2>
          </div>

          <p className="font-sans text-sm text-[#4A6B53] max-w-md font-normal">
            Complement your botanical garden with permanent natural stone paving, river rock borders, hand-carved water basins, and sloped retaining walls tailored for Kerala estates.
          </p>
        </div>

        {/* Studio Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Material Selection Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-mono text-xs text-[#265431] uppercase tracking-wider font-bold mb-4">
              [ SELECT STONE MATERIAL SPECIFICATION ]
            </h3>

            {materials.map((mat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveMaterial(idx)}
                className={`w-full text-left p-6 rounded-3xl transition-all duration-300 border ${
                  activeMaterial === idx
                    ? 'bg-white border-[#265431] shadow-md'
                    : 'glass-card-light border-[#0E2918]/10 hover:border-[#265431]/30'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-space font-bold text-lg text-[#0E2918]">
                    {mat.name}
                  </h4>
                  <span className="font-mono text-xs text-[#265431] font-bold">0{idx + 1}</span>
                </div>
                <p className="font-sans text-xs text-[#4A6B53] font-normal mb-3">
                  {mat.use}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#EBF4EE] text-[#265431] border border-[#265431]/20 font-bold">
                    {mat.durability}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Material Showcase Display */}
          <div className="lg:col-span-7">
            <div className="glass-card-light rounded-3xl p-8 border border-[#265431]/20 relative overflow-hidden">
              {/* Background Photography */}
              <div className="relative h-72 rounded-2xl overflow-hidden mb-6 border border-[#0E2918]/10 bg-[#FBFBF8]">
                <img
                  src={materials[activeMaterial].image}
                  alt={materials[activeMaterial].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2918]/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#265431] bg-white px-3 py-1 rounded border border-[#265431]/30 shadow-xs">
                    {materials[activeMaterial].texture}
                  </span>
                  <span className="font-mono text-xs text-[#0E2918] bg-white px-3 py-1 rounded border border-[#0E2918]/15 shadow-xs font-bold">
                    Crafted in Thrissur
                  </span>
                </div>
              </div>

              {/* Material Detail */}
              <h3 className="font-space font-extrabold text-2xl text-[#0E2918] mb-2">
                {materials[activeMaterial].name}
              </h3>

              <p className="font-sans text-sm text-[#4A6B53] leading-relaxed mb-6 font-normal">
                {materials[activeMaterial].desc}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#0E2918]">
                  <CheckCircle2 className="w-4 h-4 text-[#265431]" />
                  <span>Monsoon Algae & Slip Protection</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#0E2918]">
                  <CheckCircle2 className="w-4 h-4 text-[#265431]" />
                  <span>Heavy Car Load & Foot Traffic Capable</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#0E2918]">
                  <CheckCircle2 className="w-4 h-4 text-[#265431]" />
                  <span>Precision Hand-Chiseled Edges</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#0E2918]">
                  <CheckCircle2 className="w-4 h-4 text-[#265431]" />
                  <span>Custom On-Site Installation Team</span>
                </div>
              </div>

              {/* Call to Action */}
              <a
                href="https://wa.me/919446828709?text=Hello%20Anna%20Agro%20Farm,%20I%20am%20interested%20in%20your%20Stone%20Work%20and%20Granite%20Paving%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#265431] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0E2918] transition-all shadow-md"
              >
                <span>Request Stone Masonry Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
