import React from 'react';
import { Leaf, ArrowUp, MapPin, Phone, MessageSquare, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl = `https://www.google.com/maps/place/Anna+agro+farm,+rode+Pulichode,+Mudikode+-+Thalikode+Rd,+Kaniyakuzhi,+Thalikode,+Pananchery,+Kerala+680652/data=!4m2!3m1!1s0x3ba7e55c4075a13f:0x979194437f700551!18m1!1e1`;

  return (
    <footer className="bg-[#FBFBF8] border-t border-[#0E2918]/10 pt-16 pb-12 text-[#4A6B53]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#0E2918]/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#EBF4EE] border border-[#265431]/20 flex items-center justify-center text-[#265431]">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-space font-extrabold text-xl text-[#0E2918]">
                ANNA AGRO FARM
              </span>
            </div>

            <p className="font-sans text-xs text-[#4A6B53] font-normal leading-relaxed max-w-sm">
              Kerala’s premier botanical enterprise situated in <strong className="text-[#0E2918]">Pulichode, Thalikode, Pananchery, Thrissur</strong>. Cultivating beautiful flowered plants, indoor air purifiers, outdoor fruit trees (Mango, Jackfruit, Coconut), landscape garden decor, and handcrafted stone work.
            </p>

            {/* Owner & Founder Badge */}
            <div className="pt-3">
              <div className="p-4 rounded-2xl glass-card-light border border-[#265431]/20 flex items-center gap-4 shadow-sm max-w-sm">
                <img
                  src="/assets/sabu_cp.jpg"
                  alt="Sabu C.P. - Owner of Anna Agro Farm"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#265431]/40 shadow-xs flex-shrink-0"
                />
                <div>
                  <div className="font-mono text-[10px] font-bold text-[#265431] uppercase tracking-wider mb-0.5">
                    [ FOUNDER & OWNER ]
                  </div>
                  <h4 className="font-space font-extrabold text-base text-[#0E2918]">
                    Sabu C.P.
                  </h4>
                  <p className="font-sans text-xs text-[#4A6B53] font-medium leading-tight">
                    Owner, Anna Agro Farm
                  </p>
                  <a
                    href="https://wa.me/919446828709?text=Hello%20Sabu%20C.P.,%20I%20am%20contacting%20you%20regarding%20Anna%20Agro%20Farm."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[10px] text-[#265431] font-bold mt-1 hover:underline"
                  >
                    <span>Connect with Sabu C.P.</span> ➔
                  </a>
                </div>
              </div>
            </div>

            <div className="font-mono text-xs text-[#265431] font-bold pt-2">
              [ PIN 680652 • PANANCHERY, KERALA ]
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-sans text-xs">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#265431] font-bold block mb-3">
              [ QUICK NAVIGATION ]
            </span>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#265431] transition-colors font-medium">Home / Overview</a></li>
              <li><a href="#intro" className="hover:text-[#265431] transition-colors font-medium">Nursery Heritage</a></li>
              <li><a href="#catalog" className="hover:text-[#265431] transition-colors font-medium">Plant & Fruit Tree Catalog</a></li>
              <li><a href="#stone-studio" className="hover:text-[#265431] transition-colors font-medium">Stone Work Studio</a></li>
              <li><a href="#landscaping" className="hover:text-[#265431] transition-colors font-medium">Garden Landscaping</a></li>
              <li><a href="#location" className="hover:text-[#265431] transition-colors font-medium">Thalikode Location</a></li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3 font-sans text-xs">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#265431] font-bold block mb-3">
              [ OFFICIAL FARM ADDRESS ]
            </span>
            <p className="font-normal leading-relaxed text-[#0E2918]">
              Anna Agro Farm (Anna Nursery)<br />
              Pulichode, Mudikode - Thalikode Rd,<br />
              Kaniyakuzhi, Thalikode, Pananchery,<br />
              Kerala — 680652<br />
              Open Daily: 8:00 AM – 6:30 PM
            </p>

            <div className="pt-2 space-y-1.5 font-mono text-xs">
              <a href="tel:+919446828709" className="block text-[#0E2918] hover:text-[#265431] font-bold">
                Phone: +91 94468 28709
              </a>
              <a href="https://wa.me/919446828709" target="_blank" rel="noopener noreferrer" className="block text-[#265431] hover:underline font-bold">
                WhatsApp: 9446828709
              </a>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="block text-[#4A6B53] hover:text-[#265431] font-semibold">
                Open Google Maps Location ➔
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#4A6B53]">
          <div className="flex flex-wrap items-center gap-2">
            <span>ANNA AGRO FARM © {new Date().getFullYear()} • THALIKODE, PANANCHERY, KERALA</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/bibin-peter-33493a2a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF4EE] text-[#265431] border border-[#265431]/20 font-bold hover:bg-[#265431] hover:text-white transition-all shadow-2xs"
              title="Connect with Bibin Peter on LinkedIn"
            >
              <span>✨ Website Created by</span>
              <span className="underline decoration-1 underline-offset-2 font-extrabold">Bibin Peter</span>
            </a>

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#0E2918] text-white font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-[#265431] transition-all shadow-2xs"
              >
                <Lock className="w-3 h-3 text-[#86EFAC]" />
                <span>Admin Panel</span>
              </button>
            )}
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#265431] hover:text-[#0E2918] transition-colors font-bold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
