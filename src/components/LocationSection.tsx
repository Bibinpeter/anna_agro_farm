import React from 'react';
import { MapPin, Phone, Clock, MessageSquare, ExternalLink, Navigation, Compass, Truck } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/place/Anna+agro+farm,+rode+Pulichode,+Mudikode+-+Thalikode+Rd,+Kaniyakuzhi,+Thalikode,+Pananchery,+Kerala+680652/data=!4m2!3m1!1s0x3ba7e55c4075a13f:0x979194437f700551!18m1!1e1`;

  return (
    <section id="location" className="relative py-24 bg-[#FBFBF8] border-t border-[#0E2918]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] font-mono text-xs text-[#265431] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>[ 06 / KERALA LOCATION & GOOGLE MAPS ]</span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-[#0E2918]">
              Visit <span className="text-[#265431]">Anna Agro Farm</span>
            </h2>
          </div>

          <p className="font-sans text-sm text-[#4A6B53] max-w-md font-normal">
            Walk through our botanical farm & nursery in Thalikode to inspect flowering plants, grafted fruit trees (mango, jackfruit, coconut), and stone paving displays.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card Column */}
          <div className="lg:col-span-5 glass-card-light p-8 rounded-3xl border border-[#265431]/20 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs text-[#265431] font-bold block uppercase mb-2">
                [ OFFICIAL FARM ADDRESS ]
              </span>
              <h3 className="font-space font-bold text-2xl text-[#0E2918] mb-2">
                Anna Agro Farm (Anna Nursery)
              </h3>
              <p className="font-sans text-sm text-[#4A6B53] font-normal leading-relaxed mb-6">
                Pulichode, Mudikode - Thalikode Rd,<br />
                Kaniyakuzhi, Thalikode, Pananchery,<br />
                Kerala — 680652
              </p>

              {/* Distance & Route Highlights */}
              <div className="space-y-2.5 p-4 rounded-2xl bg-[#EBF4EE] border border-[#265431]/15 font-mono text-xs mb-6">
                <div className="flex items-center justify-between text-[#4A6B53]">
                  <span className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-[#265431]" />
                    <span>Road Access:</span>
                  </span>
                  <span className="text-[#0E2918] font-bold">Mudikode - Thalikode Rd</span>
                </div>
                <div className="flex items-center justify-between text-[#4A6B53]">
                  <span className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-[#265431]" />
                    <span>Panchayath:</span>
                  </span>
                  <span className="text-[#0E2918] font-bold">Pananchery, Thrissur</span>
                </div>
                <div className="flex items-center justify-between text-[#4A6B53]">
                  <span className="flex items-center gap-2">
                    <Navigation className="w-3.5 h-3.5 text-[#265431]" />
                    <span>Pin Code:</span>
                  </span>
                  <span className="text-[#265431] font-bold">680652</span>
                </div>
              </div>

              {/* Timing & Contact */}
              <div className="space-y-3 font-sans text-xs">
                <div className="flex items-center gap-3 text-[#4A6B53]">
                  <Clock className="w-4 h-4 text-[#265431]" />
                  <span>Open Daily: 8:00 AM – 6:30 PM (Including Sundays)</span>
                </div>
                <div className="flex items-center gap-3 text-[#4A6B53]">
                  <Phone className="w-4 h-4 text-[#265431]" />
                  <a href="tel:+919446828709" className="text-[#0E2918] hover:text-[#265431] font-mono font-bold text-sm">
                    +91 94468 28709
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[#4A6B53]">
                  <MessageSquare className="w-4 h-4 text-[#265431]" />
                  <a href="https://wa.me/919446828709" target="_blank" rel="noopener noreferrer" className="text-[#265431] hover:underline font-mono font-semibold">
                    WhatsApp Direct Inquiry: 9446828709
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[#4A6B53]">
                  <Truck className="w-4 h-4 text-[#265431]" />
                  <span>Doorstep Plant & Stone Delivery across Kerala</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Route */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#265431] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0E2918] transition-all shadow-md"
            >
              <span>Open Exact Location in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Map Embed Column */}
          <div className="lg:col-span-7 glass-card-light rounded-3xl overflow-hidden border border-[#265431]/20 min-h-[420px] relative">
            <iframe
              title="Anna Agro Farm Thalikode Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.8!2d76.3242!3d10.5367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e55c4075a13f%3A0x979194437f700551!2sAnna%20agro%20farm!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[420px] border-0 saturate-125 brightness-105 opacity-95"
              allowFullScreen
              loading="lazy"
            />
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 px-4 py-2 rounded-xl glass-panel-light font-mono text-xs text-[#265431] font-bold border border-[#265431]/20 shadow-xs">
              [ ANNA AGRO FARM • THALIKODE KANIYAKUZHI ]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
