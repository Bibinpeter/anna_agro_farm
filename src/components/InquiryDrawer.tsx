import React, { useState } from 'react';
import { X, Trash2, MessageSquare, ShoppingBag, Plus, Minus, CheckCircle2 } from 'lucide-react';
import { InquiryItem } from '../types';

interface InquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearBasket: () => void;
}

export const InquiryDrawer: React.FC<InquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBasket,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    let msg = `Hello Anna Agro Farm (Thalikode, Thrissur), I would like to place a consultation inquiry for the following items:%0A%0A`;

    items.forEach((inq, idx) => {
      msg += `${idx + 1}. *${inq.item.name}* (Qty: ${inq.quantity})%0A   Category: ${inq.item.categoryLabel}%0A   Price Range: ${inq.item.priceRange}%0A%0A`;
    });

    if (customerName) msg += `Name: ${customerName}%0A`;
    if (customerLocation) msg += `Location in Kerala: ${customerLocation}%0A`;

    msg += `%0APlease confirm availability and on-site delivery/installation timelines!`;
    return `https://wa.me/919446828709?text=${msg}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#0E2918]/60 backdrop-blur-md">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md glass-panel-light border-l border-[#265431]/20 p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
          
          {/* Top Header */}
          <div>
            <div className="flex items-center justify-between border-b border-[#0E2918]/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#265431]" />
                <h3 className="font-space font-extrabold text-xl text-[#0E2918]">
                  Consultation Basket
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white border border-[#0E2918]/15 flex items-center justify-center text-[#0E2918] hover:text-[#265431]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Item List */}
            {items.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#265431] mx-auto mb-3 opacity-40" />
                <p className="font-space font-bold text-base text-[#0E2918]">Your basket is empty</p>
                <p className="font-sans text-xs text-[#4A6B53] mt-1 font-normal">
                  Browse our plant catalog and stone work collection to add items for inquiry.
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-2 scrollbar-thin">
                {items.map((inq) => (
                  <div
                    key={inq.item.id}
                    className="p-4 rounded-2xl bg-white border border-[#0E2918]/10 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={inq.item.image}
                        alt={inq.item.name}
                        className="w-12 h-12 rounded-xl object-cover border border-[#265431]/20 bg-[#FBFBF8]"
                      />
                      <div>
                        <h4 className="font-space font-bold text-xs text-[#0E2918] line-clamp-1">
                          {inq.item.name}
                        </h4>
                        <span className="font-mono text-[10px] text-[#265431] font-bold">
                          {inq.item.priceRange}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(inq.item.id, -1)}
                        className="w-6 h-6 rounded bg-[#EBF4EE] border border-[#265431]/20 flex items-center justify-center text-[#0E2918] text-xs hover:border-[#265431]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs text-[#265431] font-bold px-1">
                        {inq.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(inq.item.id, 1)}
                        className="w-6 h-6 rounded bg-[#EBF4EE] border border-[#265431]/20 flex items-center justify-center text-[#0E2918] text-xs hover:border-[#265431]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(inq.item.id)}
                        className="w-6 h-6 rounded bg-[#EBF4EE] text-red-500 hover:text-red-700 flex items-center justify-center ml-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Form & Submit Actions */}
          {items.length > 0 && (
            <div className="pt-6 border-t border-[#0E2918]/10 space-y-4">
              <div>
                <label className="font-mono text-[10px] text-[#265431] uppercase block mb-1 font-bold">
                  Your Name (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dr. Rajesh Thrissur"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-white border border-[#0E2918]/15 rounded-xl px-3.5 py-2 text-xs text-[#0E2918] placeholder-[#4A6B53]/50 focus:outline-none focus:border-[#265431]"
                />
              </div>

              <div>
                <label className="font-mono text-[10px] text-[#265431] uppercase block mb-1 font-bold">
                  Kerala Town / District
                </label>
                <input
                  type="text"
                  placeholder="e.g. Thalikode, Thrissur"
                  value={customerLocation}
                  onChange={(e) => setCustomerLocation(e.target.value)}
                  className="w-full bg-white border border-[#0E2918]/15 rounded-xl px-3.5 py-2 text-xs text-[#0E2918] placeholder-[#4A6B53]/50 focus:outline-none focus:border-[#265431]"
                />
              </div>

              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#265431] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0E2918] transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Inquiry via WhatsApp</span>
              </a>

              <button
                onClick={onClearBasket}
                className="w-full text-center font-mono text-[11px] text-[#4A6B53] hover:text-red-500 py-1 transition-colors font-semibold"
              >
                Clear Inquiry Basket
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
