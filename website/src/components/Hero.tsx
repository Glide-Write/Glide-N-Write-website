import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { triggerDownloadModal } from './DownloadModal';

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.2
    });
    gsap.from(subtitleRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      delay: 0.5
    });
  }, { scope: container });

  return (
    <main ref={container} className="min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 pt-32 pb-24 relative overflow-hidden">
      <h1 ref={titleRef} className="text-[clamp(3rem,6vw,6rem)] leading-[1.1] font-extrabold max-w-6xl mx-auto z-10 text-balance">
        Turn Simple Swipes <br className="hidden md:block" /> Into Spoken Words.
      </h1>
      
      <p ref={subtitleRef} className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto z-10 font-medium">
        A revolutionary text-to-speech app for non-verbal individuals. Slide your finger in four directions to build words rapidly and vocalize them instantly.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row gap-4 z-10 items-center justify-center">
        <a 
          href="#"
          className="bg-[#FF424D] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/20"
        >
          Patreon
        </a>
        <button 
          onClick={triggerDownloadModal}
          className="bg-black text-white px-10 py-4 rounded-full font-extrabold text-xl hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/20"
        >
          Get the App
        </button>
        <a 
          href="#"
          className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10"
        >
          Open Collective
        </a>
      </div>
      
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-100 rounded-full blur-[100px] z-0 opacity-50 pointer-events-none" />
    </main>
  );
}

