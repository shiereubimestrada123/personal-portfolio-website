import { createContext, useState } from 'react';

export const HamburgerContext = createContext();

const HamburgerProvider = ({ children }) => {
  const [toggleHamburger, setToggleHamburger] = useState('');

  const providerValue = {
    toggleHamburger,
    setToggleHamburger,
  };

  return (
    <HamburgerContext.Provider value={providerValue}>
      {children}
    </HamburgerContext.Provider>
  );
};

export default HamburgerProvider;
