import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpeedTyping from './components/SpeedTyping';
import Features from './components/Features';
import BentoGrid from './components/BentoGrid';
import SupportUs from './components/SupportUs';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';

function App() {
  return (
    <div className="font-['Cabinet_Grotesk'] bg-[#FAFAFA] text-[#0A0A0A] w-full max-w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SpeedTyping />
      <Features />
      <BentoGrid />
      <SupportUs />
      <Footer />
      <DownloadModal />
    </div>
  );
}

export default App;
