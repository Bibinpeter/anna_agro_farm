import React from 'react';
import { X, Sun, Droplets, Shield, Plus, Check, MapPin, Sparkles } from 'lucide-react';
import { PlantItem } from '../types';

interface ItemModalProps {
  item: PlantItem | null;
  onClose: () => void;
  onAddToInquiry: (item: PlantItem) => void;
  isInInquiry: boolean;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToInquiry, isInInquiry }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0E2918]/60 backdrop-blur-md">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel-light rounded-3xl border border-[#265431]/20 p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#0E2918]/15 flex items-center justify-center text-[#0E2918] hover:text-[#265431] hover:border-[#265431] transition-colors shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs font-bold text-[#265431] uppercase tracking-wider px-3 py-1 rounded-full bg-[#EBF4EE] border border-[#265431]/20">
            [ {item.categoryLabel} ]
          </span>
        </div>

        {/* Title & Scientific Name */}
        <h3 className="font-space font-extrabold text-2xl sm:text-3xl text-[#0E2918] mb-1">
          {item.name}
        </h3>
        {item.scientificName && (
          <p className="font-cormorant italic text-sm text-[#265431] mb-4 font-medium">
            {item.scientificName}
          </p>
        )}

        {/* Image Display */}
        <div className="relative rounded-2xl overflow-hidden mb-6 border border-[#0E2918]/10 h-56 sm:h-72 bg-[#FBFBF8]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2918]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="font-mono text-sm font-bold text-[#265431] bg-white px-3 py-1.5 rounded-lg border border-[#265431]/30 shadow-xs">
              Price: {item.priceRange}
            </span>
            <span className="font-mono text-xs text-[#0E2918] bg-white/90 px-3 py-1.5 rounded-lg border border-[#0E2918]/15 shadow-xs font-semibold">
              Thalikode Farm Specimen
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-[#4A6B53] leading-relaxed mb-6 font-normal">
          {item.description}
        </p>

        {/* Specifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {item.sunlight && (
            <div className="p-3 rounded-xl bg-[#EBF4EE] border border-[#265431]/15">
              <span className="font-mono text-[10px] text-[#4A6B53] block uppercase mb-1 font-bold">Sunlight Need</span>
              <span className="font-sans text-xs font-semibold text-[#0E2918] flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#265431]" />
                {item.sunlight}
              </span>
            </div>
          )}

          {item.careLevel && (
            <div className="p-3 rounded-xl bg-[#EBF4EE] border border-[#265431]/15">
              <span className="font-mono text-[10px] text-[#4A6B53] block uppercase mb-1 font-bold">Care Level</span>
              <span className="font-sans text-xs font-semibold text-[#0E2918]">
                {item.careLevel}
              </span>
            </div>
          )}

          {item.waterNeed && (
            <div className="p-3 rounded-xl bg-[#EBF4EE] border border-[#265431]/15">
              <span className="font-mono text-[10px] text-[#4A6B53] block uppercase mb-1 font-bold">Water Need</span>
              <span className="font-sans text-xs font-semibold text-[#0E2918] flex items-center gap-1.5">
                <Droplets className="w-3.5 h-3.5 text-[#265431]" />
                {item.waterNeed}
              </span>
            </div>
          )}

          {item.stoneType && (
            <div className="p-3 rounded-xl bg-[#EBF4EE] border border-[#265431]/15">
              <span className="font-mono text-[10px] text-[#4A6B53] block uppercase mb-1 font-bold">Stone Material</span>
              <span className="font-sans text-xs font-semibold text-[#0E2918]">
                {item.stoneType}
              </span>
            </div>
          )}

          {item.durability && (
            <div className="p-3 rounded-xl bg-[#EBF4EE] border border-[#265431]/15">
              <span className="font-mono text-[10px] text-[#4A6B53] block uppercase mb-1 font-bold">Durability</span>
              <span className="font-sans text-xs font-semibold text-[#0E2918]">
                {item.durability}
              </span>
            </div>
          )}
        </div>

        {/* Features Tags */}
        <div className="mb-6">
          <span className="font-mono text-xs text-[#265431] block mb-2 font-bold">[ KEY HIGHLIGHTS ]</span>
          <div className="flex flex-wrap gap-2">
            {item.features.map((feat, idx) => (
              <span key={idx} className="font-mono text-xs px-3 py-1 rounded-full bg-[#EBF4EE] text-[#265431] border border-[#265431]/20 font-semibold">
                ✓ {feat}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#0E2918]/10">
          <button
            onClick={() => {
              onAddToInquiry(item);
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isInInquiry
                ? 'bg-[#0E2918] text-white shadow-md'
                : 'bg-[#265431] text-white hover:bg-[#0E2918] shadow-md'
            }`}
          >
            {isInInquiry ? (
              <>
                <Check className="w-4 h-4 text-[#86EFAC]" />
                <span>Added to Consultation Inquiry</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add to Consultation Basket</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
