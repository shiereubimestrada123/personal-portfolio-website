import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './parts/Hero';
import About from './parts/About';
import Portfolio from './parts/Portfolio';
import Contact from './parts/Contact';

import './App.css';

function App() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
