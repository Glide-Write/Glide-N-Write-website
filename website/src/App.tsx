import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import { Analytics } from '@vercel/analytics/react';

import HomePage from './pages/HomePage';
import SupportPage from './pages/SupportPage';

function App() {
  return (
    <Router>
      <div className="font-['Cabinet_Grotesk'] bg-[#FAFAFA] text-[#0A0A0A] w-full max-w-full overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </div>
        <Footer />
        <DownloadModal />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
