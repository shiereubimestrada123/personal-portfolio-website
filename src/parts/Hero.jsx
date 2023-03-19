import { useNav } from '../hooks/useNav';
import Wave from 'react-wavify';

const Navbar = () => {
  const heroRef = useNav('Hero');

  const renderWave = (
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
  );

  return (
    <section ref={heroRef} id='heroSection' className='h-screen flex flex-col'>
      {renderWave}
    </section>
  );
};

export default Navbar;
