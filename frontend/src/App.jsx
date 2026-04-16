import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PhilosophyPage from './pages/PhilosophyPage';
import ContactPage from './pages/ContactPage';
import { FreeClassProvider, useFreeClass } from './context/FreeClassContext';
import FreeClassModal from './components/FreeClassModal';
import CookieConsent from './components/CookieConsent';

const AppContent = () => {
  const { isModalOpen, closeModal } = useFreeClass();
  
  return (
    <div className="min-h-screen bg-[#F9F7F4] flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/filosofia" element={<PhilosophyPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
      <CookieConsent />
      <FreeClassModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};


function App() {
  return (
    <Router>
      <FreeClassProvider>
        <ScrollToTop />
        <AppContent />
      </FreeClassProvider>
    </Router>
  );
}

export default App;

