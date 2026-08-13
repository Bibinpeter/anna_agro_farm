import React from 'react';
import { Leaf, Award, Compass, Sun, Droplets, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section id="intro" className="relative py-24 bg-[#FBFBF8] border-y border-[#0E2918]/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#265431]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] font-mono text-xs text-[#265431]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>[ 02 / 15+ YEARS OF GARDEN LIFE & BOTANICAL HERITAGE ]</span>
            </div>

            <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-[#0E2918] leading-tight">
              Rooted in Thalikode. Guaranteeing <span className="text-[#265431]">15+ Years of Garden Lifespan</span> across Kerala.
            </h2>

            <p className="font-sans text-base text-[#4A6B53] font-light leading-relaxed">
              Situated in <strong className="text-[#0E2918]">Pulichode, Kaniyakuzhi, Thalikode (Pananchery, Thrissur)</strong>, Anna Agro Farm has spent over <strong className="text-[#265431] font-mono font-bold">15 years</strong> perfecting high-vitality soil mixtures, grafting resilient fruit saplings, and engineering permanent granite stone pathways.
            </p>

            <p className="font-sans text-base text-[#4A6B53] font-light leading-relaxed">
              Our 15-year garden life philosophy ensures that every flowering orchid, air-purifying indoor monstera, grafted mango & jackfruit tree, and lawn grass installation is built with deep root resilience to thrive through heavy monsoon rain and summer sun.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-card-light p-5 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-[#EBF4EE] border border-[#265431]/20 flex items-center justify-center text-[#265431] mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-space font-bold text-sm text-[#0E2918]">15+ Years Proven Lifespan</h4>
                <p className="font-sans text-xs text-[#4A6B53] mt-1 font-light">
                  Nurtured in organic Thalikode soil for enduring root health and 15+ year perennial growth.
                </p>
              </div>

              <div className="glass-card-light p-5 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-[#EBF4EE] border border-[#265431]/20 flex items-center justify-center text-[#265431] mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-space font-bold text-sm text-[#0E2918]">Master Grafting & Stone Masonry</h4>
                <p className="font-sans text-xs text-[#4A6B53] mt-1 font-light">
                  Pre-budded high yield jackfruit & mango saplings plus lifetime flamed granite stonescapes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#0E2918]/15 shadow-lg group">
              <img
                src="/assets/outdoor_plants.jpg"
                alt="Anna Agro Farm Thalikode Garden"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2918]/80 via-transparent to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-light">
                <div className="flex items-center gap-3.5">
                  <img
                    src="/assets/sabu_cp.jpg"
                    alt="Sabu C.P. - Owner of Anna Agro Farm"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#265431]/40 shadow-xs flex-shrink-0"
                  />
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#265431] block">[ OWNER & FOUNDER ]</span>
                    <h4 className="font-space font-extrabold text-sm text-[#0E2918]">Sabu C.P.</h4>
                    <span className="font-sans text-xs text-[#4A6B53] block mt-0.5 font-medium">Owner of Anna Agro Farm (Anna Nursery)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
