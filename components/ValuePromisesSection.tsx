'use client';
import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const valueCards = [
  { num: '01', title: 'Zero Preservatives', desc: 'Long-lasting natural quality without compromise.' },
  { num: '02', title: 'Authentic Flavors', desc: 'True heritage recipes crafted for perfection.' },
  { num: '03', title: 'Premium Sourcing', desc: 'Finest handpicked spices from local growers.' },
  { num: '04', title: 'Ready to Cook', desc: 'Convenient, fast, and authentic culinary solutions.' },
  { num: '05', title: 'Quality Assured', desc: 'Strict food safety and unmatched hygiene standards.' }
];

export default function ValuePromisesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 200);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-[#0a0a0a] text-white flex flex-col justify-center overflow-hidden"
    >
      {/* Title Header */}
      <div className="text-center mb-8 px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide uppercase text-white mb-2">
          OUR VALUE PROMISES
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Dive into authentic excellence powered by quality.
        </p>
      </div>

      {/* Horizontal Cards Track */}
      <div className="w-full overflow-visible pl-[10vw]">
        <div 
          ref={trackRef} 
          className="flex gap-8 items-center flex-nowrap will-change-transform pr-[20vw]"
        >
          {valueCards.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[280px] h-[300px] md:w-[340px] md:h-[340px] bg-[#121212] border border-[#2a2a2a] hover:border-yellow-500/50 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-2xl transition-all duration-300 group"
            >
              <span className="text-5xl md:text-6xl font-black text-yellow-400/90 mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.num}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
