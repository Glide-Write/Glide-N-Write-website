import logoImg from '../../../assets/Logo/GW.png';
import { triggerDownloadModal } from './DownloadModal';

export default function Navbar() {
  return (
    <nav className="border-b border-black/5 w-full py-6 px-8 flex justify-between items-center bg-white/80 backdrop-blur-md fixed top-0 z-50">
      <div className="font-extrabold text-xl tracking-tight flex items-center gap-3">
        <img src={logoImg} alt="Glide & Write" className="w-8 h-8 object-contain" />
        Glide & Write
      </div>
      <button 
        onClick={triggerDownloadModal}
        className="bg-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300"
      >
        Download App
      </button>
    </nav>
  );
}
