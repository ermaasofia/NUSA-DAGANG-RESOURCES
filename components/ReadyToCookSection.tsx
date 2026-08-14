'use client';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const rtcItems = [
  { id: 'rtc1', name: 'Sambal Tumis', img: '/rtc1.png' },
  { id: 'rtc2', name: 'Rendang Tok', img: '/rtc2.png' },
  { id: 'rtc3', name: 'Kari Daging', img: '/rtc3.png' },
  { id: 'rtc4', name: 'Tom Yum Heritage', img: '/rtc4.png' },
  { id: 'rtc5', name: 'Kurma Tradisi', img: '/rtc5.png' },
  { id: 'rtc6', name: 'Sup Rempah', img: '/rtc6.png' },
  { id: 'rtc7', name: 'Sambal Hijau', img: '/rtc7.png' },
  { id: 'rtc8', name: 'Gulai Kawah', img: '/rtc8.png' },
];

export default function ReadyToCookSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Stagger Entrance Animation (Left Column)
      if (textContainerRef.current) {
        const textElements = textContainerRef.current.querySelectorAll('.text-anim');
        gsap.fromTo(
          textElements,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // 2. Circular Orbit Animation (Right Column)
      if (orbitRef.current) {
        tweenRef.current = gsap.to(orbitRef.current, {
          rotation: 360,
          duration: 26,
          repeat: -1,
          ease: 'none',
        });

        // Keep food photos upright
        gsap.to(itemsRef.current, {
          rotation: -360,
          duration: 26,
          repeat: -1,
          ease: 'none',
        });
      }

      // 3. Scroll Velocity Speed Boost
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const speed = 1 + Math.min(Math.abs(self.getVelocity() / 300), 4);
          gsap.to(tweenRef.current, {
            timeScale: speed,
            duration: 0.2,
            overwrite: 'auto',
            onComplete: () => {
              gsap.to(tweenRef.current, { timeScale: 1, duration: 1.2 });
            },
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const totalItems = rtcItems.length;
  const radius = 195; // Equatorial Orbit Radius

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center overflow-hidden py-20 px-8 md:px-20"
    >
      {/* Top Center Tagline */}
      <div className="text-anim flex items-center gap-3 mb-8 text-center z-30">
        <span className="h-[2px] w-8 bg-amber-400"></span>
        <span className="text-xs uppercase tracking-[0.35em] text-amber-400 font-semibold">
          OUR SERVICES
        </span>
        <span className="h-[2px] w-8 bg-amber-400"></span>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Stacked Vertical Typography (Cols 1-5) */}
        <div ref={textContainerRef} className="lg:col-span-5 flex flex-col justify-center text-left space-y-4 z-20">
          
          {/* Stacked 3-Line Headline */}
          <div className="flex flex-col space-y-1">
            <div className="overflow-hidden">
              <h1 className="text-anim text-6xl md:text-8xl font-serif font-black tracking-tight leading-none text-white uppercase">
                READY
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-anim text-6xl md:text-8xl font-serif font-black tracking-tight leading-none text-amber-200/90 uppercase">
                TO
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-anim text-6xl md:text-8xl font-serif font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 uppercase">
                COOK
              </h1>
            </div>
          </div>

          {/* Editorial Description */}
          <p className="text-anim text-gray-400 text-sm md:text-base leading-relaxed max-w-sm pt-4 font-light">
            Authentic heritage recipes prepared with fresh, premium ingredients. Discover true Malaysian flavors in minutes.
          </p>

        </div>

        {/* RIGHT COLUMN: Static Pan + Rotating 8-Dish Orbit (Cols 6-12) */}
        <div className="lg:col-span-7 flex items-center justify-center relative min-h-[480px]">
          
          {/* Static Pan */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <img
              src="/pan.png"
              alt="Cooking Pan"
              className="w-[300px] h-[300px] md:w-[410px] md:h-[410px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
            />
          </div>

          {/* Orbiting Dishes */}
          <div
            ref={orbitRef}
            className="relative w-[420px] h-[420px] md:w-[480px] md:h-[480px] flex items-center justify-center z-20 will-change-transform"
          >
            {rtcItems.map((item, index) => {
              const angle = (index / totalItems) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={item.id}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                  onMouseEnter={() => tweenRef.current?.pause()}
                  onMouseLeave={() => tweenRef.current?.play()}
                  className="absolute w-15 h-15 md:w-18 md:h-18 rounded-full border-2 border-amber-400/80 shadow-[0_0_18px_rgba(251,191,36,0.35)] overflow-hidden cursor-pointer hover:scale-125 transition-transform duration-200 bg-[#121212] group"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Floating Tooltip Label */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -bottom-7 left-1/2 -translate-x-1/2 bg-black/90 text-[10px] text-amber-300 px-2 py-0.5 rounded border border-amber-400/40 whitespace-nowrap transition-opacity pointer-events-none">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
