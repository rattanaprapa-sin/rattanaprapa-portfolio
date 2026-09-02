import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Footer from './components/Footer';
import HomePage from './pages/home';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(() => {
    // Check if it's the first time visiting in this session
    return !sessionStorage.getItem('hasVisited');
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('hasVisited', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <HomePage />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;

