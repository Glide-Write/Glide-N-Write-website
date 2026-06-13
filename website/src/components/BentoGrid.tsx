import { useState, useEffect } from 'react';

import quickGif from '../../../assets/gifs/Quick_v2.gif';

import theme1 from '../../../assets/screenshots/themes/1.png';
import theme2 from '../../../assets/screenshots/themes/2.png';
import theme3 from '../../../assets/screenshots/themes/3.png';
import theme4 from '../../../assets/screenshots/themes/4.png';
import theme5 from '../../../assets/screenshots/themes/5.png';
import theme6 from '../../../assets/screenshots/themes/6.png';

import lang1 from '../../../assets/screenshots/language/1.png';
import lang2 from '../../../assets/screenshots/language/2.png';
import lang3 from '../../../assets/screenshots/language/3.png';
import lang4 from '../../../assets/screenshots/language/4.png';
import lang5 from '../../../assets/screenshots/language/5.png';
import lang6 from '../../../assets/screenshots/language/6.png';
import lang7 from '../../../assets/screenshots/language/7.png';
import lang8 from '../../../assets/screenshots/language/8.png';
import lang9 from '../../../assets/screenshots/language/9.png';
import lang10 from '../../../assets/screenshots/language/10.png';
import lang11 from '../../../assets/screenshots/language/11.png';
import lang12 from '../../../assets/screenshots/language/12.png';

const themeImages = [theme1, theme2, theme3, theme4, theme5, theme6];
const langImages = [lang1, lang2, lang3, lang4, lang5, lang6, lang7, lang8, lang9, lang10, lang11, lang12];

function Slideshow({ images, interval = 2000, className = "", imgClassName = "object-cover" }: { images: string[], interval?: number, className?: string, imgClassName?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const prevIndex = (index - 1 + images.length) % images.length;

  return (
    <div className={`relative ${className}`}>
      {images.map((img, i) => {
        const isActive = i === index;
        const isPrev = i === prevIndex;
        
        return (
          <img
            key={i}
            src={img}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${imgClassName} ${
              isActive ? "opacity-100 z-20" : isPrev ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            alt={`Slide ${i}`}
          />
        );
      })}
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16">Unleash Your Vocabulary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Quick Symbols Block */}
        <div className="group p-10 md:p-12 flex flex-col bg-[#0A0A0A] text-white rounded-[32px] md:h-[500px] h-auto overflow-hidden transition-transform duration-700 hover:scale-[1.02]">
          <div className="z-10 relative mb-12">
            <h3 className="text-3xl font-bold mb-4">Quick Symbols</h3>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              Instantly access essential punctuation and common symbols with simple, intuitive gestures. No need to switch keyboards or break your flow.
            </p>
          </div>
          
          <div className="flex-grow flex justify-center items-end mt-auto pb-4">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 w-full max-w-[420px] aspect-[480/286]">
              <img 
                src={quickGif} 
                alt="Quick Symbols Demonstration" 
                className="absolute inset-0 w-full h-full object-contain bg-black transform group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>
        </div>
        
        {/* Talk On vs. Entry On */}
        <div className="group p-10 md:p-12 flex flex-col justify-center bg-blue-50 text-blue-900 rounded-[32px] md:h-[500px] h-auto transition-transform duration-700 hover:scale-[1.02]">
          <h3 className="text-4xl font-bold mb-6">Talk On vs. Entry On</h3>
          <p className="text-xl opacity-80 leading-relaxed max-w-md">
            Easily toggle states. Switch to <span className="font-bold">Entry On</span> to instantly record new gesture pathways and expand your personal dictionary.
          </p>
        </div>
        
        {/* Global Languages */}
        <div className="group p-10 md:p-12 flex flex-col bg-zinc-100 rounded-[32px] h-auto transition-transform duration-700 hover:scale-[1.02]">
          <div className="z-10 relative mb-12">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Languages</h3>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed max-w-sm">
              Express yourself effortlessly in multiple languages, opening up your world.
            </p>
          </div>
          <div className="flex-grow flex justify-center items-center">
            <div className="relative rounded-[24px] shadow-2xl overflow-hidden border-[8px] border-white w-full max-w-[400px] aspect-[1080/1092] transform group-hover:scale-[1.02] transition-transform duration-700">
               <Slideshow images={langImages} interval={1500} className="w-full h-full bg-white" imgClassName="object-contain" />
            </div>
          </div>
        </div>

        {/* Custom Themes */}
        <div className="group p-10 md:p-12 flex flex-col bg-purple-50 rounded-[32px] h-auto transition-transform duration-700 hover:scale-[1.02]">
          <div className="z-10 relative mb-12">
            <h3 className="text-3xl font-bold text-purple-900 mb-4">Custom Themes</h3>
            <p className="text-lg text-purple-700 font-medium leading-relaxed max-w-sm">
              Personalize your app's aesthetic. Choose a look that matches your style perfectly.
            </p>
          </div>
          <div className="flex-grow flex justify-center items-center">
            <div className="relative rounded-[32px] shadow-2xl overflow-hidden border-[8px] border-white w-full max-w-[300px] aspect-[1080/2136] transform group-hover:scale-[1.02] transition-transform duration-700">
               <Slideshow images={themeImages} interval={1800} className="w-full h-full bg-white" imgClassName="object-contain" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
