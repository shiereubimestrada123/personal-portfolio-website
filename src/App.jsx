import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './parts/Home';
import About from './parts/About';
import Portfolio from './parts/Portfolio';
import Contact from './parts/Contact';

// import Header from './components/Header';

import NavProvider from './contexts/NavContext';
import HamburgerProvider from './contexts/HamburgerContext';

import './App.css';

function App() {
  return (
    <>
      <NavProvider>
        <HamburgerProvider>
          {/* <Header /> */}
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </HamburgerProvider>
      </NavProvider>
    </>
  );
}

export default App;
