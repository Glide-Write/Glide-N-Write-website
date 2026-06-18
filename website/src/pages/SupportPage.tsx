import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import tier1Img from '../../../assets/tiers/1.png';
import tier2Img from '../../../assets/tiers/2.png';
import tier3Img from '../../../assets/tiers/3.png';

gsap.registerPlugin(ScrollTrigger);

export default function SupportPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero animations
    gsap.from('.support-hero-text', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power3.out',
    });

    // Open Collective Cards
    gsap.fromTo('.oc-card', 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.oc-section',
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );

    // Patreon Cards
    gsap.fromTo('.patreon-card', 
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: '.patreon-section',
          start: 'top bottom',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, { scope: containerRef });

  const openCollectiveTiers = [
    {
      title: 'Quick Boost',
      desc: 'A one time donation to support the development of Glide & Write. Every contribution helps keep this assistive communication tool free and accessible for everyone.',
      interval: 'One time',
      amounts: '€5',
      btnText: 'Donate',
      link: 'https://opencollective.com/glide-and-write/contribute/backers-102896/checkout',
      featured: false,
    },
    {
      title: 'Community Backer',
      desc: 'Join our core community. Your monthly support directly funds continuous updates, bug fixes, and new features for the word tree sliding engine.',
      interval: 'Monthly',
      amounts: '€5',
      btnText: 'Become a Backer',
      link: 'https://opencollective.com/glide-and-write/contribute/community-backer-103063/checkout',
      featured: false,
    },
    {
      title: 'Corporate Sponsor',
      desc: 'For organizations supporting open source assistive technology. Includes your company logo on our GitHub README and Open Collective page.',
      interval: 'Monthly',
      amounts: '€100',
      btnText: 'Sponsor',
      link: 'https://opencollective.com/glide-and-write/contribute/corporate-sponsor-103064/checkout',
      featured: false,
    },
    {
      title: 'Project Champion',
      desc: 'A Premium tier for major backers. Includes prominent logo placement on our main repository, website, and priority discussions for future feature development.',
      interval: 'Monthly',
      amounts: '€250',
      btnText: 'Become a Champion',
      link: 'https://opencollective.com/glide-and-write/contribute/project-champion-103065/checkout',
      featured: false,
    },
    {
      title: 'Custom Donation',
      desc: 'Make a custom one-time or recurring contribution of your choosing.',
      interval: 'One time or Monthly',
      amounts: 'Any amount',
      btnText: 'Donate',
      link: 'https://opencollective.com/glide-and-write/donate?interval=month&amount=50&contributeAs=me',
      featured: false,
    }
  ];

  const patreonTiers = [
    {
      title: 'Glide Supporter',
      desc: 'Every journey starts with a single step! By joining this tier, you are helping keep Glide & Write free, accessible, and continuously improving. Your support covers basic development costs and keeps the coffee flowing.',
      amount: '€3 / month',
      img: tier1Img,
    },
    {
      title: 'Core Backer',
      desc: 'You are the backbone of the project. This tier directly funds new features, UI improvements, and dedicated time to refine the gesture recognition engine without compromising on quality.',
      amount: '€10 / month',
      img: tier2Img,
    },
    {
      title: 'Project Champion',
      desc: 'For organizations, clinics, or generous individuals who deeply believe in making assistive technology accessible to everyone. Your contribution provides the sustainable income needed to focus heavily on this project.',
      amount: '€100 / month',
      img: tier3Img,
    }
  ];

  return (
    <div ref={containerRef} className="pt-32 pb-24 min-h-screen bg-[#FAFAFA]">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-24 flex flex-col items-center text-center">
        <h1 className="support-hero-text text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
          Support Our Mission
        </h1>
        <p className="support-hero-text text-xl md:text-2xl text-gray-500 max-w-3xl font-medium leading-relaxed">
          Glide & Write is fully open-source and free for everyone. 
          Your support ensures we can continuously improve this assistive communication tool for those who need it most.
        </p>
      </section>

      {/* Open Collective Section */}
      <section className="oc-section max-w-7xl mx-auto px-8 mb-32">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Open Collective</h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            We partner with <a href="https://opencollective.com/europe" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline hover:text-gray-600 transition-colors">Open Source Europe</a> as our Fiscal Host to securely manage contributions transparently. 
            View our <a href="https://opencollective.com/glide-and-write" target="_blank" rel="noopener noreferrer" className="text-black font-bold underline hover:text-gray-600 transition-colors">Open Collective page</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {openCollectiveTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className="oc-card bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 h-full"
            >
              <div className="flex flex-col flex-1 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-black">
                    {tier.title}
                  </h3>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {tier.interval}
                  </span>
                </div>
                <p className="text-base leading-relaxed mb-6 text-gray-500">
                  {tier.desc}
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-bold uppercase tracking-wider mb-1 text-gray-400">
                    Suggested
                  </p>
                  <p className="text-xl font-bold text-black">
                    {tier.amounts}
                  </p>
                </div>
              </div>
              
              <a 
                href={tier.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full text-center px-8 py-4 rounded-full font-bold text-lg transition-transform duration-300 hover:scale-105 shrink-0 bg-[#1A1A1A] text-white shadow-lg shadow-black/10"
              >
                {tier.btnText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Patreon Section */}
      <section className="patreon-section max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-start mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Patreon</h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Prefer Patreon? Join our growing community of supporters and help us sustain long-term development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {patreonTiers.map((tier, idx) => (
            <div 
              key={idx} 
              className="patreon-card group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className="w-full aspect-[23/10] overflow-hidden bg-gray-50 relative">
                <img 
                  src={tier.img} 
                  alt={tier.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-black">{tier.title}</h3>
                </div>
                <p className="text-base text-gray-500 leading-relaxed mb-8 flex-1">
                  {tier.desc}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-[#FF424D]">
                    {tier.amount}
                  </span>
                  <a 
                    href="https://www.patreon.com/GlideWrite" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#FF424D] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/20"
                  >
                    Join Tier
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
