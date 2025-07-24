
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutContactPage from './pages/AboutContactPage';
import FaqPage from './pages/FaqPage';

const AppLayout= () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about-contact" element={<AboutContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="sitemap" element={<HomePage />} /> {/* Simplified sitemap to link home */}
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
// Coded by Umar Mahmud Ahmad with junior dev support from Gemini & ChatGPT 
