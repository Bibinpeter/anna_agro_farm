import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, ShieldCheck, MapPin, MessageSquare, Compass, Award, CheckCircle2 } from 'lucide-react';
import { nurseryStats } from '../data/nurseryData';

interface HeroProps {
  onExploreCatalog: () => void;
}

export const Hero3D: React.FC<HeroProps> = ({ onExploreCatalog }) => {
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const videoRef3 = useRef<HTMLVideoElement | null>(null);
  const videoRef4 = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [activeVideo, setActiveVideo] = useState<number>(0);

  const playlist = [
    {
      title: '🌸 1. Garden Blooming (0s - 5s)',
      src1: 'https://cdn.pixabay.com/video/2023/06/24/168572-839370257_large.mp4',
      src2: 'https://assets.mixkit.co/videos/preview/mixkit-blooming-pink-flowers-time-lapse-42994-large.mp4',
      startTime: 0,
      ref: videoRef1,
    },
    {
      title: '🍈 2. Jackfruit Farm (jackfruitvdo.mp4 5s - 10s)',
      src1: '/assets/jackfruitvdo.mp4',
      src2: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-green-leaves-42991-large.mp4',
      startTime: 0,
      ref: videoRef2,
    },
    {
      title: '🥭 3. Green Mango (magovdo.mp4 10s - 15s)',
      src1: '/assets/magovdo.mp4',
      src2: 'https://assets.mixkit.co/videos/preview/mixkit-ripe-mangoes-hanging-from-a-tree-42988-large.mp4',
      startTime: 0,
      ref: videoRef3,
    },
    {
      title: '🌵 4. Cactus Garden (cactuvdo.mp4 15s - 20s, starts from 10th sec)',
      src1: '/assets/cactuvdo.mp4',
      src2: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-green-leaves-42991-large.mp4',
      startTime: 10, // Plays starting from 10th second mark!
      ref: videoRef4,
    },
  ];

  // Rotate videos every 5 seconds endlessly (1 -> 2 -> 3 -> 4 -> 1...)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVideo((prev) => {
        const nextIndex = (prev + 1) % playlist.length;
        const nextRef = playlist[nextIndex].ref.current;
        if (nextRef) {
          nextRef.currentTime = playlist[nextIndex].startTime || 0;
          nextRef.play().catch(() => {});
        }
        return nextIndex;
      });
    }, 5000); // 5 Seconds per video

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Drifting Emerald Organic Particles
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -Math.random() * 0.5 - 0.2,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(38, 84, 49, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#265431';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#FBFBF8]">
      {/* Background Multi-Video Sequence featuring cactuvdo.mp4 (starting at 10s mark) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        {/* Video 1: Garden Blooming (0s - 5s) */}
        <video
          ref={videoRef1}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center scale-105 filter saturate-125 brightness-105 transition-opacity duration-1000 ${
            activeVideo === 0 ? 'opacity-85' : 'opacity-0 pointer-events-none'
          }`}
        >
          <source src={playlist[0].src1} type="video/mp4" />
          <source src={playlist[0].src2} type="video/mp4" />
        </video>

        {/* Video 2: Jackfruit Video jackfruitvdo.mp4 (5s - 10s) */}
        <video
          ref={videoRef2}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center scale-105 filter saturate-125 brightness-105 transition-opacity duration-1000 ${
            activeVideo === 1 ? 'opacity-85' : 'opacity-0 pointer-events-none'
          }`}
        >
          <source src={playlist[1].src1} type="video/mp4" />
          <source src={playlist[1].src2} type="video/mp4" />
        </video>

        {/* Video 3: Green Mango Video magovdo.mp4 (10s - 15s) */}
        <video
          ref={videoRef3}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center scale-105 filter saturate-125 brightness-105 transition-opacity duration-1000 ${
            activeVideo === 2 ? 'opacity-85' : 'opacity-0 pointer-events-none'
          }`}
        >
          <source src={playlist[2].src1} type="video/mp4" />
          <source src={playlist[2].src2} type="video/mp4" />
        </video>

        {/* Video 4: Cactus Video cactuvdo.mp4 (15s - 20s, starting @ 10s mark) */}
        <video
          ref={videoRef4}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center scale-105 filter saturate-125 brightness-105 transition-opacity duration-1000 ${
            activeVideo === 3 ? 'opacity-85' : 'opacity-0 pointer-events-none'
          }`}
        >
          <source src={playlist[3].src1} type="video/mp4" />
          <source src={playlist[3].src2} type="video/mp4" />
        </video>

        {/* Ultra-Light Translucent Overlay Mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBF8]/55 via-[#FBFBF8]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFBF8]/65 via-transparent to-[#FBFBF8]/65" />
      </div>

      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto">
        
        {/* Main Headline Starts Immediately at Top */}
        <div className="max-w-5xl mb-6">
          <h1 className="font-space font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#0E2918] leading-[1.02]">
            <span className="text-[#265431]">15+ Years</span> of <span className="text-[#265431]">Garden Life</span> & Precision Earthscaping.
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-xl text-[#0E2918] max-w-2xl font-normal leading-relaxed mb-8 bg-white/60 p-3.5 rounded-2xl border border-white/80 backdrop-blur-xs">
          Anna Agro Farm is Kerala’s premier botanical enterprise situated in <strong className="text-[#0E2918] font-semibold">Thalikode, Thrissur</strong>. Backed by <strong className="text-[#265431] font-mono font-bold">15+ years of garden lifespan mastery</strong>, we cultivate vibrant flowering flora, air-purifying indoor greenery, grafted fruit trees (mango, jackfruit, coconut), and execute bespoke granite stone work.
        </p>

        {/* Action Triggers */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-6">
          <button
            onClick={onExploreCatalog}
            className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#265431] text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_10px_30px_rgba(38,84,49,0.25)] hover:bg-[#0E2918] transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Compass className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-500" />
            <span>Explore Botanical & Fruit Collection</span>
          </button>

          <a
            href="https://wa.me/919446828709?text=Hello%20Anna%20Agro%20Farm,%20I%20am%20interested%20in%20a%20landscaping%20and%20stone%20work%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-[#265431]/30 bg-white/95 text-[#0E2918] hover:bg-[#EBF4EE] hover:border-[#265431] font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs w-full sm:w-auto"
          >
            <MessageSquare className="w-4 h-4 text-[#265431]" />
            <span>WhatsApp: 9446828709</span>
          </a>
        </div>
      </div>

      {/* Metric Counters Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-3xl border border-[#265431]/15 bg-white/95 backdrop-blur-xl shadow-sm">
          {nurseryStats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l border-[#265431]/20 pl-4">
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#265431]">
                {stat.value}
              </span>
              <span className="font-sans text-xs text-[#4A6B53] font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
