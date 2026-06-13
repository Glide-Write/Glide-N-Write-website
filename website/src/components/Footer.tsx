import { triggerDownloadModal } from './DownloadModal';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-8 text-center">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-balance">Ready to glide?</h2>
      <button 
        onClick={triggerDownloadModal}
        className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform duration-300 mb-16"
      >
        Get Glide & Write
      </button>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 text-gray-500 text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Glide & Write. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="mailto:hello@glideandwrite.org" className="hover:text-white transition-colors">hello@glideandwrite.org</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
