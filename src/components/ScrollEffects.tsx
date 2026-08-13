import React, { useEffect, useState } from 'react';
import { Leaf, Sparkles } from 'lucide-react';

export const ScrollEffects: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;

      setScrollProgress(progress);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Intersection Observer for scroll-triggered reveal animations
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const revealElements = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-scale, section > div, .glass-card-light'
    );

    revealElements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        el.classList.add('scroll-init');
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 🌟 1. Glowing Emerald Scroll Progress Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-[#265431]/10 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#265431] via-[#3A7D4C] via-[#86EFAC] to-[#265431] transition-all duration-75 shadow-[0_0_12px_rgba(38,84,49,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 🌿 2. Floating Parallax Leaf Orbs in Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Top Floating Leaf */}
        <div
          className="absolute top-1/3 left-6 text-[#265431]/10 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.08}deg)`,
          }}
        >
          <Leaf className="w-16 h-16 sm:w-24 sm:h-24" />
        </div>

        {/* Middle Right Floating Leaf */}
        <div
          className="absolute top-2/3 right-8 text-[#3A7D4C]/10 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${-scrollY * 0.1}px) rotate(${-scrollY * 0.06}deg)`,
          }}
        >
          <Leaf className="w-20 h-20 sm:w-32 sm:h-32" />
        </div>

        {/* Bottom Sparkle Glow */}
        <div
          className="absolute bottom-1/4 left-1/4 text-[#265431]/10 transition-transform duration-300 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.05}px) scale(${1 + (scrollY % 100) * 0.002})`,
          }}
        >
          <Sparkles className="w-12 h-12" />
        </div>
      </div>
    </>
  );
};
