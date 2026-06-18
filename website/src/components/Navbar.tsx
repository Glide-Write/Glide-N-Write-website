import { Link } from 'react-router-dom';
import logoImg from '../../../assets/Logo/GW.png';
import { triggerDownloadModal } from './DownloadModal';

export default function Navbar() {
  return (
    <nav className="border-b border-black/5 w-full py-6 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md fixed top-0 z-50">
      <Link to="/" className="font-extrabold text-xl tracking-tight flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
        <img src={logoImg} alt="Glide & Write" className="w-8 h-8 object-contain" />
        Glide & Write
      </Link>
      <div className="flex items-center gap-6">
        <Link 
          to="/support" 
          className="text-gray-600 hover:text-black font-bold text-sm transition-colors duration-300"
        >
          Support Us
        </Link>
        <a 
          href="https://github.com/Glide-Write/Glide-N-Write" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-black font-bold text-sm transition-colors duration-300"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <button 
          onClick={triggerDownloadModal}
          className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/10"
        >
          Download App
        </button>
      </div>
    </nav>
  );
}
