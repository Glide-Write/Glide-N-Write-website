import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import secondMessageGif from '../../../assets/gifs/second_message_v2.gif';

gsap.registerPlugin(ScrollTrigger);

export default function SupportUs() {
  const container = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

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
    <section ref={container} className="py-32 bg-white text-[#0A0A0A] relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        {/* Left: GIF */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div 
            ref={imgRef}
            className="relative rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-[8px] border-white max-w-sm w-full bg-white"
          >
            <img 
              src={secondMessageGif} 
              alt="Glide and Write App Demonstration" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div ref={textRef} className="md:w-1/2 flex flex-col gap-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1]">
            Free. Open Source. <br/> For Everyone.
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed max-w-lg">
            Glide & Write is <span className="text-black font-bold">100% free and open-source</span>. It was built from the ground up to empower non-verbal individuals with a fast, effortless voice.
          </p>
          <p className="text-lg text-gray-500 max-w-lg">
            We rely entirely on community support to keep the project alive, maintain servers, and continue adding new features. If this app helps you or a loved one, please consider making a donation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="https://www.patreon.com/GlideWrite" 
              className="bg-[#FF424D] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-red-500/20"
            >
              Support on Patreon
            </a>
            <a 
              href="https://opencollective.com/glide-and-write" 
              className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center shadow-lg shadow-black/10"
            >
              Open Collective
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
