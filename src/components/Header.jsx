import { useContext } from 'react';
import { NavContext } from '../contexts/NavContext';
import SE from '../assets/se.png';

const Header = () => {
  const { activeLinkId } = useContext(NavContext);

  const navLinks = ['Hero', 'About', 'Portfolio', 'Contact'];

  const handleClickLogo = () => {
    document
      .getElementById('heroSection')
      .scrollIntoView({ behavior: 'smooth' });
  };

  const renderNavLink = (nav) => {
    const scrollToId = `${nav.toLowerCase()}Section`;

    const handleClickNav = () => {
      document
        .getElementById(scrollToId)
        .scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <ul key={nav}>
        <li>
          <button onClick={handleClickNav}>{nav}</button>
        </li>
      </ul>
    );
  };

  return (
    <header className='fixed flex items-center justify-around left-0 right-0 mt-2'>
      <img
        onClick={handleClickLogo}
        src={SE}
        alt='SE'
        className='h-20 w-20 cursor-pointer'
      />
      {navLinks.map((nav) => renderNavLink(nav))}
    </header>
  );
};

export default Header;
