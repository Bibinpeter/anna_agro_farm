import React from 'react';
import { Sprout, Sun, Droplets, ShieldCheck, ArrowRight } from 'lucide-react';

export const JackfruitSection: React.FC = () => {
  return (
    <section id="jackfruit" className="relative py-32 md:py-48 bg-[#F4F6F0] text-[#0E2918] overflow-hidden border-t border-[#0E2918]/5">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#265431]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-[#265431] font-bold block mb-3">
                03 • FEATURED BOTANICAL
              </span>
              <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0E2918] leading-[0.95]">
                START WITH <br />
                <span className="text-[#265431] font-cormorant italic font-normal tracking-normal lowercase text-5xl sm:text-7xl md:text-8xl">
                  a root.
                </span>
              </h2>
            </div>

            <p className="font-sans text-lg text-[#0E2918]/80 font-light leading-relaxed">
              Jackfruit holds a special place in Kerala&apos;s agricultural culture. At Anna Gardens, our grafted jackfruit budding saplings are propagated for maximum health, rapid establishment, and sweet high-yield harvests.
            </p>

            {/* Feature Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  icon: Sprout,
                  title: 'Healthy Budding Saplings',
                  desc: 'Hand-grafted from high-yield mother trees.',
                },
                {
                  icon: Sun,
                  title: 'Kerala Climate Fit',
                  desc: 'Thrives in monsoon rainfall & tropical sun.',
                },
                {
                  icon: Droplets,
                  title: 'Vigorous Rootstock',
                  desc: 'Accelerated soil anchor & disease resistance.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Quality Guaranteed',
                  desc: 'Inspected and certified healthy before delivery.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-[#0E2918]/10 shadow-sm hover:border-[#265431]/50 transition-colors">
                  <item.icon className="w-5 h-5 text-[#265431] mb-2" />
                  <h3 className="font-syne font-bold text-sm text-[#0E2918]">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#0E2918]/60 mt-0.5 font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/919400000000?text=Hello%20Anna%20Gardens,%20I%20want%20to%20order%20Jackfruit%20budding%20plants."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#265431] hover:bg-[#1E4627] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md"
              >
                <span>Order Jackfruit Saplings</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Clean Jackfruit Plant Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#0E2918]/10 group">
              <img
                src="/assets/jackfruit_budding.jpg"
                alt="Anna Gardens Clean Jackfruit Budding Plant"
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#0E2918]/10 shadow-md">
                <span className="font-syne font-bold text-lg text-[#0E2918] block">
                  ANNA GARDENS BUDDING SAPLING
                </span>
                <span className="font-sans text-xs text-[#265431] block mt-1 font-semibold">
                  Propagated in Thalicode Nursery • Ready for planting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
