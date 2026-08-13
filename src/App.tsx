import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { IntroSection } from './components/IntroSection';
import { CategoryShowcase } from './components/CategoryShowcase';
import { StoneSection } from './components/StoneSection';
import { LandscapingSection } from './components/LandscapingSection';
import { LocationSection } from './components/LocationSection';
import { InquiryDrawer } from './components/InquiryDrawer';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { PlantItem, InquiryItem } from './types';

export const App: React.FC = () => {
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll for silky 60 FPS scroll performance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleAddToInquiry = (item: PlantItem) => {
    setInquiryItems((prev) => {
      const existing = prev.find((inq) => inq.item.id === item.id);
      if (existing) {
        return prev.map((inq) =>
          inq.item.id === item.id ? { ...inq, quantity: inq.quantity + 1 } : inq
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setInquiryItems((prev) =>
      prev
        .map((inq) => {
          if (inq.item.id === id) {
            const newQty = inq.quantity + delta;
            return newQty > 0 ? { ...inq, quantity: newQty } : null;
          }
          return inq;
        })
        .filter(Boolean) as InquiryItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setInquiryItems((prev) => prev.filter((inq) => inq.item.id !== id));
  };

  const handleClearBasket = () => {
    setInquiryItems([]);
  };

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060C07] text-[#F4F6F0] font-sans antialiased overflow-x-hidden selection:bg-[#C6F19D] selection:text-[#060C07]">
      {/* Glowing Desktop Cursor */}
      <CustomCursor />

      {/* Alethia Dark Navbar */}
      <Navbar
        onNavigate={scrollToId}
        inquiryCount={inquiryItems.reduce((acc, curr) => acc + curr.quantity, 0)}
        onOpenInquiryDrawer={() => setIsDrawerOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero3D
          onExploreCatalog={() => scrollToId('catalog')}
        />
        <IntroSection />
        <CategoryShowcase
          onAddToInquiry={handleAddToInquiry}
          inquiryItemIds={inquiryItems.map((inq) => inq.item.id)}
        />
        <StoneSection onAddToInquiry={handleAddToInquiry} />
        <LandscapingSection />
        <LocationSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Inquiry Slide-Over Drawer */}
      <InquiryDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        items={inquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearBasket={handleClearBasket}
      />
    </div>
  );
};

export default App;
