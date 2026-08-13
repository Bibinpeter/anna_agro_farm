import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  num: string;
  title: string;
  location: string;
  category: string;
  image: string;
  desc: string;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'RESIDENTIAL VILLA COURTYARD',
    location: 'Thrissur, Kerala',
    category: 'Lawn & Tropical Flora',
    image: '/assets/grass_landscape.jpg',
    desc: 'Integrated Mexican carpet lawn with grafted jackfruit sapling borders and slate walkways for a contemporary residence.',
  },
  {
    num: '02',
    title: 'ZEN STONE & WATER PATHWAY',
    location: 'Guruvayur, Kerala',
    category: 'Decorative Stone Design',
    image: '/assets/decorative_stones.jpg',
    desc: 'Custom polished river pebble borders with hand-cut granite stepping stones across a serene shaded courtyard.',
  },
  {
    num: '03',
    title: 'HERITAGE KERALA ESTATE GARDEN',
    location: 'Chalakudy, Kerala',
    category: 'Full Garden Development',
    image: '/assets/hero_topiary_white.jpg',
    desc: 'Lush botanical garden featuring native Kerala canopy trees, topiary sapling groves, and structured lawn turfs.',
  },
];

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#F4F6F0] text-[#0E2918] overflow-hidden border-t border-[#0E2918]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#0E2918]/10">
          <div>
            <span className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-[#265431] font-bold block mb-3">
              07 • PORTFOLIO STORIES
            </span>
            <h2 className="font-syne font-extrabold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0E2918]">
              RECENT <br />
              <span className="text-[#265431] font-cormorant italic font-normal tracking-normal lowercase text-5xl sm:text-7xl md:text-8xl">
                transformations.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-sans text-sm text-[#0E2918]/70 max-w-sm font-light">
            A glimpse into our completed botanical landscapes and residential garden developments across Thrissur district.
          </p>
        </div>

        {/* Projects Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-white border border-[#0E2918]/10 hover:border-[#265431] shadow-sm transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 font-sans text-xs font-bold text-[#265431] px-3 py-1 rounded-full bg-white/90 shadow-sm">
                  {proj.num}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#265431] block font-bold">
                    {proj.location} • {proj.category}
                  </span>
                  <h3 className="font-syne font-extrabold text-xl text-[#0E2918] mt-1 group-hover:text-[#265431] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-sans text-xs text-[#0E2918]/70 mt-2 font-light leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0E2918]/10 flex items-center justify-between text-xs text-[#265431] font-bold">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
