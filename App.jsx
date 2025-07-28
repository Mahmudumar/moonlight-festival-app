import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import AboutContactPage from './pages/AboutContactPage';
import FaqPage from './pages/FaqPage';

const AppLayout = () => (
  <div className="bg-dark text-white p-3 d-flex flex-column min-vh-100">
    <Header />
    {/* the first class is for offline use */}
    <main className="flex-grow-1 container py-4 animate-fade-in">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <HashRouter future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true
    }}>
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
