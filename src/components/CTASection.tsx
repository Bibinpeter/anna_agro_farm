import React from 'react';
import { MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#FBFBF8] border-t border-[#0E2918]/10 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#265431]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="glass-card-light p-12 sm:p-16 rounded-3xl border border-[#265431]/20 max-w-4xl mx-auto space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] font-mono text-xs text-[#265431]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[ ANNA AGRO FARM • THALIKODE KERALA ]</span>
          </div>

          <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-[#0E2918] leading-tight">
            Ready to Plan Your Fruit Orchard, Villa Garden & Stone Walkway?
          </h2>

          <p className="font-sans text-base text-[#4A6B53] font-normal max-w-2xl mx-auto leading-relaxed">
            Contact Anna Agro Farm today at <strong className="text-[#0E2918] font-mono font-bold">9446828709</strong> to arrange an on-site landscape consultation, order grafted fruit saplings (mango, jackfruit, coconut), or plan granite stone paving in Kerala.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/919446828709?text=Hello%20Anna%20Agro%20Farm,%20I%20would%20like%20to%20book%20a%20landscaping%20and%20fruit%20plant%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#265431] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0E2918] transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp: 9446828709</span>
            </a>

            <a
              href="tel:+919446828709"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-[#265431]/30 bg-white text-[#0E2918] hover:bg-[#EBF4EE] font-mono text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#265431]" />
              <span>Call +91 94468 28709</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
