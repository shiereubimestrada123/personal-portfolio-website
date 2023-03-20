import { useContext } from 'react';
import Wave from 'react-wavify';
import Header from '../components/Header';

import { useNav } from '../hooks/useNav';

import { HamburgerContext } from '../contexts/HamburgerContext';

const Home = () => {
  const homeRef = useNav('Home');
  const { toggleHamburger, setToggleHamburger } = useContext(HamburgerContext);

  const handleToggleHamburger = () => {
    setToggleHamburger(false);
  };

  const renderHamburger = (
    <div className='fixed h-40 w-full bg-slate-400 z-50'>
      <div className='flex justify-end lg:hidden md:hidden'>
        <svg
          onClick={handleToggleHamburger}
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </div>
    </div>
  );

  const renderHomeDetails = (
    <div className='flex justify-center items-center h-3/4'>
      <div className='flex justify-around w-full'>
        <div className='flex items-center justify-evenly gap-10'>
          <div className='flex flex-col gap-4 ml-2'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
              </svg>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='flex items-center gap-4 text-5xl font-black'>
              Shiereubim Estrada
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-10 h-10'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
                />
              </svg>
            </p>
            <p className='relative pl-24 mr-auto text-center before:content-[""] before:block before:absolute before:left-[0] before:inset-y-1/2 before:h-[0.2rem] before:w-20 before:bg-slate-900'>
              Javascript Developer
            </p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div>
          {/* <img src={Sample} alt='' className='h-40 w-40' /> */}
          <p className='lg:block md:block hidden'>image</p>
        </div>
      </div>
    </div>
  );

  const renderWave = (
    <Wave
      className='grow'
      fill='#1277b0'
      paused={false}
      options={{
        height: 50,
        amplitude: 80,
        speed: 0.15,
        points: 3,
      }}
    />
  );

  return (
    <>
      <section
        className='h-screen flex flex-col'
        ref={homeRef}
        id='homeSection'
      >
        {toggleHamburger && renderHamburger}
        <Header />
        {renderHomeDetails}
        {renderWave}
      </section>
    </>
  );
};

export default Home;
