import { useState, useEffect } from 'react';

export const triggerDownloadModal = () => {
  window.dispatchEvent(new Event('show-download-modal'));
};

export default function DownloadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShow = () => setIsOpen(true);
    window.addEventListener('show-download-modal', handleShow);
    return () => window.removeEventListener('show-download-modal', handleShow);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white text-black p-8 rounded-3xl max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          ✕
        </button>
        <div className="text-center">
          <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
            🚀
          </div>
          <h3 className="text-2xl font-extrabold mb-4">Almost There!</h3>
          <p className="text-gray-600 mb-8 font-medium">
            We're putting the final touches on our App Store and Google Play releases. In the meantime, you can check out our open-source repository on GitHub.
          </p>
          <div className="flex flex-col gap-3">
            <a 
              href="https://github.com/Glide-Write/Glide-N-Write" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-black text-white font-bold py-4 px-6 rounded-xl hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              View on GitHub
            </a>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full bg-gray-100 text-black font-bold py-4 px-6 rounded-xl hover:bg-gray-200 transition-colors duration-300"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
