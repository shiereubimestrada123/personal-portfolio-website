import React from 'react';
import { Link } from 'react-scroll';
import Wave from 'react-wavify';

import SE from '../assets/se.png';

const Navbar = () => {
  return (
    <div className='h-screen flex flex-col' id='home'>
      {/* <header className='fixed top-0 left-0 bottom-0 z-50 ease-in duration-300 overflow-y-auto'> */}
      <nav className='flex items-center justify-between px-20'>
        <img src={SE} alt='SE' className='h-20 w-20' />
        <ul className='flex gap-4'>
          <li className=''>
            <Link
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href='#home'
              className='flex items-center'
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href='#about'
              className='nav-link scrollto'
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to='portfolio'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href='#portfolio'
              className='nav-link scrollto'
            >
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              href='#contact'
              className='nav-link scrollto'
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* </header> */}
      <Wave
        className='grow'
        fill='#1277b0'
        paused={false}
        options={{
          height: 600,
          amplitude: 80,
          speed: 0.15,
          points: 3,
        }}
      />
    </div>
  );
};

export default Navbar;
