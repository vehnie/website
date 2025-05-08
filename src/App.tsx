import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'Miguel Venâncio';
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App