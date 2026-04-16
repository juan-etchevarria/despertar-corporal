import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import PhilosophyPage from './pages/PhilosophyPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
      </div>
    </Router>
  );
}

export default App;
