import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import talkImg from '../../../assets/screenshots/Talk.png';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const [activeMode, setActiveMode] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveMode((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearTimeout(timeout);
  }, [activeMode]);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 10%",
        end: "bottom 80%",
        pin: pinnedRef.current,
      });

      itemsRef.current.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 100,
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });
    });
  }, { scope: container });

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  return (
    <section ref={container} className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16">
        
        {/* Left Pinned Content */}
        <div ref={pinnedRef} className="md:w-1/3">
          <h2 className="text-5xl font-extrabold mb-6">Dual Modes</h2>
          <p className="text-gray-400 text-lg">
            Whether you are just learning the gestures or you are a power user gliding rapidly, we have a mode designed exactly for your pace.
          </p>
        </div>

        {/* Right Scrolling Gallery */}
        <div className="md:w-2/3 flex flex-col gap-24">
          <div ref={addToRefs} className="relative w-full min-h-[500px] rounded-[32px] bg-zinc-900 p-8 md:p-12 flex items-center overflow-hidden">
            <img src={talkImg} alt="Talk Mode" className="absolute right-0 top-10 h-[120%] object-contain transform translate-x-12 rotate-6 opacity-80 md:opacity-100" />
            <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-12">
              <div className={`transition-all duration-500 cursor-pointer ${activeMode === 0 ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`} onClick={() => setActiveMode(0)}>
                <h3 className="text-3xl font-bold mb-4">Step Mode</h3>
                <p className="text-gray-400">
                  Perform each swipe as a discrete action. Perfect for beginners to build muscle memory before advancing to gliding.
                </p>
              </div>
              <div className={`transition-all duration-500 cursor-pointer ${activeMode === 1 ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}`} onClick={() => setActiveMode(1)}>
                <h3 className="text-3xl font-bold mb-4">Glide Mode</h3>
                <p className="text-gray-400">
                  String movements together continuously. Lift your finger only when the word is complete. Speak effortlessly at the speed of thought.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
