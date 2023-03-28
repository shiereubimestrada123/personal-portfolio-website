import Home from "./parts/Home";
import About from "./parts/About";
import Project from "./parts/Project";
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
          <Project />
          <Contact />
        </HamburgerProvider>
      </NavProvider>
    </>
  );
}

export default App;
