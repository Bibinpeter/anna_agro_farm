import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Emerald Ring */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full transition-transform duration-150 ease-out hidden md:block ${
          isPointer ? 'scale-150 bg-[#265431]/15 border border-[#265431]' : 'scale-100 border border-[#265431]/40'
        }`}
        style={{
          width: '36px',
          height: '36px',
          left: `${position.x - 18}px`,
          top: `${position.y - 18}px`,
        }}
      />
      {/* Inner Emerald Center Dot */}
      <div
        className="fixed pointer-events-none z-50 w-2 h-2 bg-[#265431] rounded-full shadow-[0_0_8px_rgba(38,84,49,0.5)] hidden md:block"
        style={{
          left: `${position.x - 4}px`,
          top: `${position.y - 4}px`,
        }}
      />
    </>
  );
};
