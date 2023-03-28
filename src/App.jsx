import Home from "./parts/Home";
import About from "./parts/About";
import Portfolio from "./parts/Portfolio";
import Contact from "./parts/Contact";

import NavProvider from "./contexts/NavContext";
import HamburgerProvider from "./contexts/HamburgerContext";

import "./App.css";

function App() {
  return (
    <>
      <NavProvider>
        <HamburgerProvider>
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
