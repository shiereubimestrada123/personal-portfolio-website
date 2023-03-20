import Wave from 'react-wavify';
import Typewriter from 'typewriter-effect';

import { useNav } from '../hooks/useNav';

const Home = () => {
  const homeRef = useNav('Home');

  const renderTypewriter = (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString('Hello World!')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
      }}
    />
  );

  const renderWave = (
    <Wave
      className='grow'
      fill='#1277b0'
      paused={false}
      options={{
        height: 800,
        amplitude: 80,
        speed: 0.15,
        points: 3,
      }}
    />
  );

  return (
    <>
      <section
        ref={homeRef}
        id='homeSection'
        className='h-screen flex flex-col justify-center bg-slate-100'
      >
        {/* <div className='flex justify-around'>
          <p>name</p>
          <p>image</p>
        </div> */}
        {renderWave}
      </section>
    </>
  );
};

export default Home;
