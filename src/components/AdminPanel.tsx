import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  Clock,
  Search,
  LayoutDashboard,
  Package,
  MessageSquare,
  Settings,
  Leaf,
  Phone,
  Eye,
  ShieldCheck,
  Save,
} from 'lucide-react';
import { PlantItem, CategoryType } from '../types';
import { nurseryItems as defaultItems } from '../data/nurseryData';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: PlantItem[];
  onUpdateItems: (items: PlantItem[]) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateItems,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [loginError, setLoginError] = useState<string>('');

  const [activeTab, setActiveTab] = useState<'dashboard' | 'catalog' | 'settings'>('dashboard');

  // Search & Filter in Catalog Tab
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Edit / Add Item Form State
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<Partial<PlantItem>>({
    id: '',
    name: '',
    scientificName: '',
    category: 'indoor',
    categoryLabel: 'Indoor Plants',
    description: '',
    priceRange: '₹250 - ₹650',
    image: '/assets/bonsai.webp',
    careLevel: 'Easy',
    sunlight: 'Bright Indirect Light',
    waterNeed: 'Medium',
    features: ['Easy Care', 'Thrives in Kerala Soil'],
  });

  // Check auth from localStorage on open
  useEffect(() => {
    const authStatus = localStorage.getItem('anna_nursery_admin_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN: 9446828709 or admin
    if (pinInput.trim() === '9446828709' || pinInput.trim().toLowerCase() === 'admin' || pinInput.trim() === '1234') {
      setIsAuthenticated(true);
      setLoginError('');
      localStorage.setItem('anna_nursery_admin_auth', 'true');
    } else {
      setLoginError('Invalid Admin PIN. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('anna_nursery_admin_auth');
  };

  // Add or Update Item
  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem.name || !editingItem.priceRange) return;

    let updatedList: PlantItem[];
    const categoryLabels: Record<CategoryType, string> = {
      all: 'All Offerings',
      indoor: 'Indoor Plants',
      flowered: 'Flowered Plants',
      fruits: 'Fruit Trees',
      outdoor: 'Outdoor Trees',
      landscape: 'Landscape Decor',
      stone: 'Stone Work',
    };

    const newItem: PlantItem = {
      id: editingItem.id || `item-${Date.now()}`,
      name: editingItem.name || 'New Botanical Variety',
      scientificName: editingItem.scientificName || '',
      category: (editingItem.category as CategoryType) || 'indoor',
      categoryLabel: categoryLabels[(editingItem.category as CategoryType) || 'indoor'],
      description: editingItem.description || 'Nurtured in organic Thalikode nursery soil.',
      priceRange: editingItem.priceRange || '₹250 - ₹650',
      image: editingItem.image || 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
      careLevel: editingItem.careLevel || 'Easy',
      sunlight: editingItem.sunlight || 'Bright Indirect Light',
      waterNeed: editingItem.waterNeed || 'Medium',
      features: typeof editingItem.features === 'string' 
        ? (editingItem.features as string).split(',').map(s => s.trim()) 
        : (editingItem.features || ['High Quality Sapling']),
    };

    if (editingItem.id) {
      // Update
      updatedList = items.map((i) => (i.id === editingItem.id ? newItem : i));
    } else {
      // Add
      updatedList = [newItem, ...items];
    }

    onUpdateItems(updatedList);
    setIsEditing(false);
    setEditingItem({
      id: '',
      name: '',
      scientificName: '',
      category: 'indoor',
      categoryLabel: 'Indoor Plants',
      description: '',
      priceRange: '₹250 - ₹650',
      image: '/assets/bonsai.webp',
      careLevel: 'Easy',
      sunlight: 'Bright Indirect Light',
      waterNeed: 'Medium',
      features: ['Easy Care'],
    });
  };

  // Delete Item
  const handleDeleteItem = (id: string) => {
    if (window.confirm('Are you sure you want to delete this plant/stone item from the catalog?')) {
      const updated = items.filter((i) => i.id !== id);
      onUpdateItems(updated);
    }
  };

  const openNewItemForm = () => {
    setEditingItem({
      id: '',
      name: '',
      scientificName: '',
      category: 'indoor',
      categoryLabel: 'Indoor Plants',
      description: '',
      priceRange: '₹250 - ₹650',
      image: '/assets/bonsai.webp',
      careLevel: 'Easy',
      sunlight: 'Bright Indirect Light',
      waterNeed: 'Medium',
      features: ['Nurtured in Thalikode Soil', 'High Resilience Sapling'],
    });
    setIsEditing(true);
  };

  const openEditItemForm = (item: PlantItem) => {
    setEditingItem(item);
    setIsEditing(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0E2918]/70 backdrop-blur-lg overflow-y-auto">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] glass-panel-light rounded-3xl border border-[#265431]/25 p-5 sm:p-8 shadow-2xl overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border border-[#0E2918]/15 flex items-center justify-center text-[#0E2918] hover:text-[#265431] hover:border-[#265431] transition-colors shadow-xs z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LOGIN SCREEN IF NOT AUTHENTICATED */}
        {!isAuthenticated ? (
          <div className="my-auto py-12 max-w-md mx-auto w-full text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#EBF4EE] border border-[#265431]/30 flex items-center justify-center text-[#265431] mx-auto shadow-sm">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF4EE] border border-[#265431]/20 font-mono text-xs text-[#265431] mb-2 font-bold">
                [ ANNA AGRO FARM • ADMIN PORTAL ]
              </div>
              <h3 className="font-space font-extrabold text-2xl text-[#0E2918]">
                Owner & Management Access
              </h3>
              <p className="font-sans text-xs text-[#4A6B53] mt-1 font-normal">
                Enter Sabu C.P.&apos;s Admin PIN to manage catalog items, inquiries, and farm settings.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 pt-2">
              <div>
                <input
                  type="password"
                  placeholder="Enter Admin PIN"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full bg-[#FBFBF8] border border-[#0E2918]/20 rounded-xl px-4 py-3 text-center font-mono text-sm text-[#0E2918] placeholder-[#4A6B53]/60 focus:outline-none focus:border-[#265431] transition-colors shadow-2xs"
                  autoFocus
                />
                {loginError && (
                  <p className="font-mono text-xs text-red-600 mt-2 font-semibold">{loginError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-[#265431] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0E2918] transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Unlock Admin Dashboard</span>
                <ShieldCheck className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          /* AUTHENTICATED ADMIN DASHBOARD */
          <div className="space-y-6">
            {/* Admin Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#0E2918]/10">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/sabu_cp.jpg"
                  alt="Sabu C.P."
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#265431]/40 shadow-xs"
                />
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#265431] uppercase tracking-wider block">
                    [ ADMIN CONTROL PANEL ]
                  </span>
                  <h3 className="font-space font-extrabold text-xl text-[#0E2918]">
                    Sabu C.P. • Owner Workspace
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full border border-red-200 bg-red-50 text-red-700 hover:bg-red-100 font-mono text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Lock Panel</span>
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-2 border-b border-[#0E2918]/10 pb-2">
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeTab === 'dashboard'
                    ? 'bg-[#265431] text-white shadow-xs'
                    : 'bg-white text-[#4A6B53] border border-[#0E2918]/10 hover:text-[#0E2918]'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Overview Dashboard</span>
              </button>

              <button
                onClick={() => setActiveTab('catalog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeTab === 'catalog'
                    ? 'bg-[#265431] text-white shadow-xs'
                    : 'bg-white text-[#4A6B53] border border-[#0E2918]/10 hover:text-[#0E2918]'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Manage Plant & Stone Catalog ({items.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  activeTab === 'settings'
                    ? 'bg-[#265431] text-white shadow-xs'
                    : 'bg-white text-[#4A6B53] border border-[#0E2918]/10 hover:text-[#0E2918]'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Farm Business Settings</span>
              </button>
            </div>

            {/* TAB 1: OVERVIEW DASHBOARD */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#265431]/20 shadow-2xs">
                    <span className="font-mono text-[10px] text-[#4A6B53] font-bold block uppercase">
                      Total Cultivated Offerings
                    </span>
                    <span className="font-space font-extrabold text-3xl text-[#265431] mt-1 block">
                      {items.length}
                    </span>
                    <span className="font-sans text-[10px] text-[#4A6B53] mt-1 block">
                      Plants, Trees & Stone Craft
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#265431]/20 shadow-2xs">
                    <span className="font-mono text-[10px] text-[#4A6B53] font-bold block uppercase">
                      Fruit Tree Saplings
                    </span>
                    <span className="font-space font-extrabold text-3xl text-[#265431] mt-1 block">
                      {items.filter((i) => i.category === 'fruits').length}
                    </span>
                    <span className="font-sans text-[10px] text-[#4A6B53] mt-1 block">
                      Mango, Jackfruit, Coconut
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#EBF4EE] border border-[#265431]/30 shadow-2xs">
                    <span className="font-mono text-[10px] text-[#265431] font-bold block uppercase">
                      Primary Contact Number
                    </span>
                    <span className="font-mono font-extrabold text-lg text-[#0E2918] mt-1 block">
                      9446828709
                    </span>
                    <span className="font-sans text-[10px] text-[#4A6B53] mt-1 block">
                      Sabu C.P. Direct WhatsApp
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-[#265431]/20 shadow-2xs">
                    <span className="font-mono text-[10px] text-[#4A6B53] font-bold block uppercase">
                      Farm Location Pin
                    </span>
                    <span className="font-mono font-bold text-sm text-[#0E2918] mt-1 block">
                      680652
                    </span>
                    <span className="font-sans text-[10px] text-[#4A6B53] mt-1 block">
                      Pananchery, Thrissur
                    </span>
                  </div>
                </div>

                {/* Recent Items Quick List */}
                <div className="p-6 rounded-3xl bg-white border border-[#0E2918]/10 shadow-xs">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-space font-bold text-base text-[#0E2918]">
                      Active Catalog Summary
                    </h4>
                    <button
                      onClick={() => setActiveTab('catalog')}
                      className="font-mono text-xs font-bold text-[#265431] hover:underline"
                    >
                      Manage All Items ➔
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {items.slice(0, 6).map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-2xl bg-[#FBFBF8] border border-[#0E2918]/10 flex items-center gap-3"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 rounded-xl object-cover border border-[#0E2918]/10"
                        />
                        <div className="overflow-hidden">
                          <h5 className="font-space font-bold text-xs text-[#0E2918] truncate">
                            {item.name}
                          </h5>
                          <span className="font-mono text-[10px] text-[#265431] font-bold block">
                            {item.priceRange}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CATALOG CRUD MANAGER */}
            {activeTab === 'catalog' && (
              <div className="space-y-6">
                {/* Action Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#0E2918]/10">
                  <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#265431]" />
                    <input
                      type="text"
                      placeholder="Search item name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#FBFBF8] border border-[#0E2918]/15 rounded-xl pl-9 pr-3 py-1.5 text-xs text-[#0E2918] placeholder-[#4A6B53]/60 focus:outline-none focus:border-[#265431]"
                    />
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <select
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="bg-[#FBFBF8] border border-[#0E2918]/15 rounded-xl px-3 py-1.5 text-xs text-[#0E2918] font-mono focus:outline-none"
                    >
                      <option value="all">All Categories</option>
                      <option value="indoor">Indoor Plants</option>
                      <option value="flowered">Flowered Plants</option>
                      <option value="fruits">Fruit Trees</option>
                      <option value="outdoor">Outdoor Trees</option>
                      <option value="landscape">Landscape Decor</option>
                      <option value="stone">Stone Work</option>
                    </select>

                    <button
                      onClick={openNewItemForm}
                      className="px-4 py-2 rounded-full bg-[#265431] text-white font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-[#0E2918] transition-colors shadow-xs whitespace-nowrap"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add New Plant / Stone Item</span>
                    </button>
                  </div>
                </div>

                {/* Edit / Add Modal Form Overlay */}
                {isEditing && (
                  <div className="p-6 rounded-3xl bg-[#EBF4EE] border border-[#265431]/30 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-space font-bold text-lg text-[#0E2918]">
                        {editingItem.id ? 'Edit Botanical Item' : 'Add New Botanical Variety'}
                      </h4>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="text-[#4A6B53] hover:text-[#0E2918]"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <form onSubmit={handleSaveItem} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                      <div>
                        <label className="font-mono text-[10px] uppercase font-bold text-[#265431] block mb-1">
                          Item Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Grafted Mango Sapling"
                          value={editingItem.name || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-white border border-[#0E2918]/15 text-[#0E2918]"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-[10px] uppercase font-bold text-[#265431] block mb-1">
                          Scientific Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Mangifera Indica"
                          value={editingItem.scientificName || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, scientificName: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-white border border-[#0E2918]/15 text-[#0E2918]"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-[10px] uppercase font-bold text-[#265431] block mb-1">
                          Category *
                        </label>
                        <select
                          value={editingItem.category || 'indoor'}
                          onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value as CategoryType })}
                          className="w-full p-2.5 rounded-xl bg-white border border-[#0E2918]/15 text-[#0E2918] font-mono"
                        >
                          <option value="indoor">Indoor Plants</option>
                          <option value="flowered">Flowered Plants</option>
                          <option value="fruits">Fruit Trees</option>
                          <option value="outdoor">Outdoor Trees</option>
                          <option value="landscape">Landscape Decor</option>
                          <option value="stone">Stone Work</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-mono text-[10px] uppercase font-bold text-[#265431] block mb-1">
                          Price Range *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. ₹250 - ₹650"
                          value={editingItem.priceRange || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, priceRange: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-white border border-[#0E2918]/15 text-[#0E2918]"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="font-mono text-[10px] uppercase font-bold text-[#265431] block mb-1">
                          Image URL or Path (/assets/...) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="/assets/bonsai.webp or https://..."
                          value={editingItem.image || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-white border border-[#0E2918]/15 text-[#0E2918] font-mono"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="font-mono text-[10px] uppercase font-bold text-[#265431] block mb-1">
                          Description
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Write plant features and details..."
                          value={editingItem.description || ''}
                          onChange={(e) => setEditingItem({ ...editingItem, description: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-white border border-[#0E2918]/15 text-[#0E2918]"
                        />
                      </div>

                      <div className="sm:col-span-2 flex items-center justify-end gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 rounded-full border border-[#0E2918]/20 text-[#0E2918] font-mono text-xs font-bold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-2 rounded-full bg-[#265431] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0E2918] shadow-xs flex items-center gap-1.5"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Item to Catalog</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* Items Table / Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items
                    .filter((item) => {
                      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
                      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
                      return matchesCategory && matchesSearch;
                    })
                    .map((item) => (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-white border border-[#0E2918]/10 shadow-2xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-36 rounded-xl overflow-hidden mb-3 bg-[#FBFBF8]">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            <span className="absolute top-2 left-2 font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-white/90 text-[#265431]">
                              {item.categoryLabel}
                            </span>
                          </div>

                          <h4 className="font-space font-bold text-sm text-[#0E2918] line-clamp-1">
                            {item.name}
                          </h4>
                          {item.scientificName && (
                            <p className="font-cormorant italic text-xs text-[#265431] truncate">
                              {item.scientificName}
                            </p>
                          )}
                          <p className="font-mono text-xs font-bold text-[#265431] mt-1">
                            {item.priceRange}
                          </p>
                        </div>

                        <div className="flex items-center justify-end gap-2 pt-3 mt-3 border-t border-[#0E2918]/10">
                          <button
                            onClick={() => openEditItemForm(item)}
                            className="p-2 rounded-lg bg-[#EBF4EE] text-[#265431] hover:bg-[#265431] hover:text-white transition-colors"
                            title="Edit Item"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                            title="Delete Item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* TAB 3: FARM SETTINGS */}
            {activeTab === 'settings' && (
              <div className="p-6 rounded-3xl bg-white border border-[#0E2918]/10 space-y-6">
                <div className="flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-[#265431]" />
                  <div>
                    <h4 className="font-space font-bold text-lg text-[#0E2918]">
                      Anna Agro Farm Business Configuration
                    </h4>
                    <p className="font-sans text-xs text-[#4A6B53]">
                      Official business profile details linked across WhatsApp and Google Maps.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
                  <div className="p-4 rounded-2xl bg-[#FBFBF8] border border-[#0E2918]/10">
                    <span className="font-mono text-[10px] font-bold text-[#265431] uppercase block mb-1">
                      Proprietor / Owner Name
                    </span>
                    <span className="font-space font-bold text-base text-[#0E2918]">Sabu C.P.</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FBFBF8] border border-[#0E2918]/10">
                    <span className="font-mono text-[10px] font-bold text-[#265431] uppercase block mb-1">
                      Official Phone & WhatsApp
                    </span>
                    <span className="font-mono font-bold text-base text-[#0E2918]">+91 94468 28709</span>
                  </div>

                  <div className="sm:col-span-2 p-4 rounded-2xl bg-[#FBFBF8] border border-[#0E2918]/10">
                    <span className="font-mono text-[10px] font-bold text-[#265431] uppercase block mb-1">
                      Farm & Nursery Address
                    </span>
                    <p className="font-normal text-[#0E2918] leading-relaxed">
                      Anna Agro Farm (Anna Nursery), Pulichode, Mudikode - Thalikode Rd, Kaniyakuzhi, Thalikode, Pananchery, Kerala — 680652
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#EBF4EE] border border-[#265431]/20 font-mono text-xs text-[#265431] flex items-center gap-3 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#265431]" />
                  <span>System Status: All 16 components, 4 videos, and custom plant downloads synced.</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
