import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import firstMessageGif from '../../../assets/gifs/first_message_v2.gif';

gsap.registerPlugin(ScrollTrigger);

export default function SpeedTyping() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      scale: 0.95,
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-32 bg-[#FAFAFA] text-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left: Text */}
        <div ref={textRef} className="md:w-1/2 flex flex-col gap-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
            Lightning Fast <br/> Communication
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
            Master the art of rapid expression. By combining simple directional swipes and utilizing <span className="text-black font-bold">Quick Symbols</span> shortcuts, you can construct complex sentences effortlessly. 
          </p>
          <p className="text-lg text-gray-500 max-w-lg">
            No more hunting for letters. Muscle memory takes over, allowing you to communicate at the speed of your thoughts.
          </p>
        </div>

        {/* Right: GIF */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div 
            ref={imgRef}
            className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-black/5 border-[8px] border-white max-w-sm w-full bg-white"
          >
            <img 
              src={firstMessageGif} 
              alt="Typing speed demonstration" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
