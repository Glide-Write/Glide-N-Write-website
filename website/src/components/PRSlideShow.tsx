import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import pic1 from '../../../assets/PR-images/pic_1.png';
import pic2 from '../../../assets/PR-images/pic_2.png';
import pic3 from '../../../assets/PR-images/pic_3.png';

gsap.registerPlugin(ScrollTrigger);

const images = [pic1, pic2, pic3];

export default function PRSlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: container });

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={container} className="py-16 bg-[#FAFAFA] text-[#0A0A0A] relative w-full">
      <div className="max-w-5xl mx-auto px-8 flex flex-col items-center">
        
        <div 
          className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden shadow-2xl shadow-black/10 border-[8px] border-white group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            />
          ))}

          {/* Controls */}
          <div className="absolute inset-0 z-20 flex items-center justify-between px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevSlide}
              className="bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${
                  index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
