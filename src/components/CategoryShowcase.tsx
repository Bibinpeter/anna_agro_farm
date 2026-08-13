import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Check, Eye, Sparkles, Leaf } from 'lucide-react';
import { nurseryItems } from '../data/nurseryData';
import { CategoryType, PlantItem } from '../types';
import { ItemModal } from './ItemModal';

interface CategoryShowcaseProps {
  items?: PlantItem[];
  onAddToInquiry: (item: PlantItem) => void;
  inquiryItemIds: string[];
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ items = nurseryItems, onAddToInquiry, inquiryItemIds }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [modalItem, setModalItem] = useState<PlantItem | null>(null);

  const categories: { id: CategoryType; label: string; icon: string }[] = [
    { id: 'all', label: 'All Offerings', icon: '✨' },
    { id: 'flowered', label: 'Flowered Plants', icon: '🌺' },
    { id: 'indoor', label: 'Indoor Plants', icon: '🌿' },
    { id: 'fruits', label: 'Mango, Jackfruit & Fruits', icon: '🥭' },
    { id: 'outdoor', label: 'Outdoor Trees', icon: '🌳' },
    { id: 'landscape', label: 'Landscape Decor', icon: '🏡' },
    { id: 'stone', label: 'Stone Work', icon: '派' },
  ];

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.scientificName && item.scientificName.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesTag = true;
      if (selectedTag === 'kerala') matchesTag = !!item.popularForKerala;
      if (selectedTag === 'easy') matchesTag = item.careLevel === 'Easy';
      if (selectedTag === 'sun') matchesTag = item.sunlight?.includes('Sun') ?? false;

      return matchesCategory && matchesSearch && matchesTag;
    });
  }, [activeCategory, searchQuery, selectedTag]);

  return (
    <section id="catalog" className="relative py-24 bg-[#FBFBF8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#265431]/20 bg-[#EBF4EE] font-mono text-xs text-[#265431] mb-3">
              <span>[ 03 / BOTANICAL & EARTHSCAPING COLLECTION ]</span>
            </div>
            <h2 className="font-space font-extrabold text-3xl sm:text-5xl text-[#0E2918]">
              Explore Plants, <span className="text-[#265431]">Fruit Trees</span> & Stone Craft
            </h2>
          </div>

          <p className="font-sans text-sm text-[#4A6B53] max-w-md font-normal">
            Filter our cultivated varieties of flowering flora, indoor air purifiers, fruit saplings (Mango, Jackfruit, Coconut), landscape lawn grass, and natural stone paving.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-[#0E2918]/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#265431] text-white shadow-md'
                  : 'bg-white text-[#4A6B53] border border-[#0E2918]/15 hover:text-[#0E2918] hover:border-[#265431]/40'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Search & Tag Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-4 rounded-2xl glass-card-light">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#265431]" />
            <input
              type="text"
              placeholder="Search mango, jackfruit, orchids, granite..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FBFBF8] border border-[#0E2918]/15 rounded-xl pl-10 pr-4 py-2 text-xs text-[#0E2918] placeholder-[#4A6B53]/60 focus:outline-none focus:border-[#265431] transition-colors"
            />
          </div>

          {/* Tag Shortcuts */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto">
            <span className="font-mono text-[11px] text-[#4A6B53] mr-1 hidden md:inline">Quick Filter:</span>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'easy', label: 'Easy Care' },
              { id: 'sun', label: 'Full Sun' },
            ].map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-3 py-1.5 rounded-lg font-mono text-[11px] font-semibold transition-all whitespace-nowrap ${
                  selectedTag === tag.id
                    ? 'bg-[#EBF4EE] text-[#265431] border border-[#265431]/40'
                    : 'bg-white text-[#4A6B53] border border-[#0E2918]/10 hover:text-[#0E2918]'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid - 2 per row on mobile (grid-cols-2) */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-card-light">
            <Leaf className="w-10 h-10 text-[#265431] mx-auto mb-3 opacity-50" />
            <h4 className="font-space font-bold text-lg text-[#0E2918]">No offerings match your search</h4>
            <p className="font-sans text-xs text-[#4A6B53] mt-1">Try adjusting your category filter or search keyword.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredItems.map((item) => {
              const isInInquiry = inquiryItemIds.includes(item.id);

              return (
                <div
                  key={item.id}
                  className="group relative glass-card-light rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-xs"
                >
                  <div>
                    {/* Image Area */}
                    <div
                      className="relative h-36 sm:h-52 overflow-hidden bg-[#FBFBF8] cursor-pointer"
                      onClick={() => setModalItem(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E2918]/40 via-transparent to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between">
                        <span className="font-mono text-[8px] sm:text-[10px] uppercase font-bold px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-white/90 text-[#265431] border border-[#265431]/20 backdrop-blur-md shadow-2xs truncate max-w-[85%]">
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Quick Eye Modal Trigger */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalItem(item);
                        }}
                        className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 border border-[#265431]/30 flex items-center justify-center text-[#265431] hover:bg-[#265431] hover:text-white transition-all shadow-xs"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-3 sm:p-5">
                      <h3
                        onClick={() => setModalItem(item)}
                        className="font-space font-bold text-xs sm:text-base text-[#0E2918] group-hover:text-[#265431] transition-colors line-clamp-1 cursor-pointer"
                      >
                        {item.name}
                      </h3>
                      {item.scientificName && (
                        <p className="font-cormorant italic text-[10px] sm:text-xs text-[#265431] mb-1 sm:mb-2 font-medium truncate">
                          {item.scientificName}
                        </p>
                      )}

                      <p className="font-sans text-[10px] sm:text-xs text-[#4A6B53] font-normal line-clamp-2 mb-2 sm:mb-4 leading-relaxed hidden sm:block">
                        {item.description}
                      </p>

                      {/* Features */}
                      <div className="hidden sm:flex flex-wrap gap-1.5 mb-4">
                        {item.features.slice(0, 2).map((feat, idx) => (
                          <span key={idx} className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#EBF4EE] text-[#265431] border border-[#265431]/10">
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-3 sm:p-5 pt-0 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-1.5 sm:gap-0 border-t border-[#0E2918]/10 mt-auto">
                    <span className="font-mono text-[10px] sm:text-xs font-extrabold text-[#265431]">
                      {item.priceRange}
                    </span>

                    <button
                      onClick={() => onAddToInquiry(item)}
                      className={`flex items-center justify-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full font-mono text-[9px] sm:text-[11px] font-bold uppercase transition-all duration-300 ${
                        isInInquiry
                          ? 'bg-[#265431] text-white shadow-xs'
                          : 'bg-[#EBF4EE] text-[#265431] hover:bg-[#265431] hover:text-white border border-[#265431]/20'
                      }`}
                    >
                      {isInInquiry ? (
                        <>
                          <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span>Inquire</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Item Details Modal */}
      <ItemModal
        item={modalItem}
        onClose={() => setModalItem(null)}
        onAddToInquiry={onAddToInquiry}
        isInInquiry={modalItem ? inquiryItemIds.includes(modalItem.id) : false}
      />
    </section>
  );
};
