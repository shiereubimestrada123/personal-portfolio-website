import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './parts/Hero';
import About from './parts/About';
import Portfolio from './parts/Portfolio';
import Contact from './parts/Contact';

import Header from './components/Header';

import NavProvider from './contexts/NavContext';

import './App.css';

function App() {
  return (
    <>
      <NavProvider>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </NavProvider>
    </>
  );
}

export default App;
