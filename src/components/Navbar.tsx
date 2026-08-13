import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, MapPin, ArrowUpRight, Leaf, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
  inquiryCount: number;
  onOpenInquiryDrawer: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, inquiryCount, onOpenInquiryDrawer, onOpenAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top Floating Light Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'glass-nav-light py-3.5 shadow-sm' : 'bg-gradient-to-b from-[#FBFBF8]/95 via-[#FBFBF8]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Location */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group text-left focus:outline-none flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full border border-[#265431]/20 bg-white flex items-center justify-center text-[#265431] group-hover:bg-[#265431] group-hover:text-white transition-all duration-300 shadow-sm">
              <Leaf className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <div>
              <span className="font-space font-extrabold text-lg md:text-xl tracking-tight text-[#0E2918] block leading-none">
                ANNA AGRO FARM
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#265431] block mt-1 font-bold">
                [ THALIKODE • THRISSUR ]
              </span>
            </div>
          </button>

          {/* Center Consultation Status Pill */}
          <div className="hidden lg:flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] text-[11px] font-mono text-[#265431] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#265431] animate-ping" />
            <span className="font-bold">● NURSERY & FARM OPEN</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Inquiry Basket Button */}
            <button
              onClick={onOpenInquiryDrawer}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#265431]/30 bg-white text-[#0E2918] hover:border-[#265431] shadow-xs transition-all duration-300"
              title="View Consultation Inquiry Basket"
            >
              <ShoppingBag className="w-4 h-4 text-[#265431]" />
              <span className="font-mono text-xs font-bold text-[#265431]">{inquiryCount}</span>
            </button>

            {/* WhatsApp Direct Link with 9446828709 */}
            <a
              href="https://wa.me/919446828709?text=Hello%20Anna%20Agro%20Farm,%20I%20am%20interested%20in%20your%20plants,%20fruit%20trees,%20landscaping,%20and%20stone%20work%20in%20Thalikode."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold px-4 py-2 rounded-full border border-[#265431]/30 bg-[#265431] text-white hover:bg-[#0E2918] transition-all duration-300 shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>9446828709</span>
            </a>

            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-[#0E2918]/20 bg-white hover:bg-[#0E2918] hover:text-white text-[#0E2918] transition-all duration-300 shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              <span className="text-xs font-mono uppercase tracking-wider font-bold">
                {isOpen ? 'Close' : 'Menu'}
              </span>
              {isOpen ? (
                <X className="w-4 h-4 text-[#265431]" />
              ) : (
                <Menu className="w-4 h-4 text-[#265431] group-hover:text-white group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Light Overlay Navigation */}
      <div
        className={`fixed inset-0 z-30 bg-[#FBFBF8]/98 backdrop-blur-2xl transition-all duration-700 ease-in-out flex flex-col justify-between p-6 sm:p-12 md:p-16 overflow-y-auto ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#265431]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="h-16" />

        {/* Navigation Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto relative z-10">
          <div className="lg:col-span-8 flex flex-col space-y-2">
            {[
              { id: 'hero', label: 'Home / Overview', num: '[ 01 ]' },
              { id: 'intro', label: 'Nursery Heritage & Philosophy', num: '[ 02 ]' },
              { id: 'catalog', label: 'Plants & Fruit Tree Catalog', num: '[ 03 ]' },
              { id: 'stone-studio', label: 'Stone Work & Stonescaping', num: '[ 04 ]' },
              { id: 'landscaping', label: 'Landscape Garden Design', num: '[ 05 ]' },
              { id: 'location', label: 'Thalikode Location & Directions', num: '[ 06 ]' },
            ].map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="group flex items-center justify-between text-left py-3 border-b border-[#0E2918]/10 hover:border-[#265431] transition-all duration-300"
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="font-mono text-xs text-[#265431] font-bold">
                    {item.num}
                  </span>
                  <span className="font-space font-extrabold text-2xl md:text-4xl text-[#0E2918] group-hover:text-[#265431] group-hover:translate-x-3 transition-all duration-300">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#0E2918]/30 group-hover:text-[#265431] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </button>
            ))}

            {onOpenAdmin && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAdmin();
                }}
                className="group flex items-center justify-between text-left py-3 border-b border-[#265431]/20 hover:border-[#265431] transition-all duration-300 mt-2 bg-[#EBF4EE] px-4 rounded-2xl"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-[#265431] font-bold">
                    [ ADMIN ]
                  </span>
                  <span className="font-space font-extrabold text-xl md:text-2xl text-[#265431]">
                    Owner Admin Control Panel
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#265431]" />
              </button>
            )}
          </div>

          {/* Right Contact Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#0E2918]/10 lg:pl-12">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#265431] font-bold block mb-2">
                [ LOCATION ADDRESS ]
              </span>
              <p className="font-sans text-sm text-[#0E2918]/80 leading-relaxed font-light">
                <strong className="text-[#0E2918] font-semibold">Anna Agro Farm (Anna Nursery)</strong><br />
                Pulichode, Mudikode - Thalikode Rd,<br />
                Kaniyakuzhi, Thalikode, Pananchery,<br />
                Kerala 680652
              </p>
            </div>

            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#265431] font-bold block mb-2">
                [ DIRECT CONTACT & WHATSAPP ]
              </span>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+919446828709"
                  className="flex items-center gap-2 text-[#0E2918] hover:text-[#265431] font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#265431]" />
                  <span className="font-mono font-bold">+91 94468 28709</span>
                </a>
                <a
                  href="https://wa.me/919446828709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#0E2918] hover:text-[#265431] font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#265431]" />
                  <span>WhatsApp: 9446828709</span>
                </a>
                <a
                  href="#location"
                  onClick={() => handleNavClick('location')}
                  className="flex items-center gap-2 text-[#0E2918] hover:text-[#265431] font-medium transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#265431]" />
                  <span>Open Google Maps Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info inside menu */}
        <div className="max-w-7xl mx-auto w-full pt-6 border-t border-[#0E2918]/10 flex items-center justify-between font-mono text-xs text-[#0E2918]/60">
          <span>ANNA AGRO FARM © {new Date().getFullYear()}</span>
          <span>THALIKODE • PANANCHERY • KERALA</span>
        </div>
      </div>
    </>
  );
};
