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
        Communicate
        <span 
          className="inline-block w-32 h-14 md:w-40 md:h-20 rounded-full align-middle bg-cover bg-center mx-2 md:mx-4 shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
          style={{ backgroundImage: 'url("/assets/screenshots/Settings-2.png")' }}
        />
        smoothly without <br className="hidden md:block" /> lifting your finger.
      </h1>
      
      <p ref={subtitleRef} className="mt-8 text-xl text-gray-500 max-w-2xl mx-auto z-10 font-medium">
        Gesture-based text-to-speech for non-verbal individuals. 
        Empowering your voice through intuitive design.
      </p>

      <div className="mt-12 flex gap-4 z-10">
        <button 
          onClick={triggerDownloadModal}
          className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
        >
          Get the App
        </button>
      </div>
      
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-100 rounded-full blur-[100px] z-0 opacity-50 pointer-events-none" />
    </main>
  );
}
