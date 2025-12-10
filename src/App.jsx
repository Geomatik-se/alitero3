import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingCTA from './components/common/FloatingCTA';
import HomePage from './pages/HomePage';
import ReferencesPage from './pages/ReferencesPage';
import InquiryPage from './pages/InquiryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ImpressumPage from './pages/ImpressumPage';
import PrivacyPage from './pages/PrivacyPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/references" element={<ReferencesPage />} />
              <Route path="/inquiry" element={<InquiryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;