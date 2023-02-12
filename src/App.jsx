import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './parts/Home';
import About from './parts/About';
import Portfolio from './parts/Portfolio';
import Contact from './parts/Contact';

import './App.css';

function App() {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
