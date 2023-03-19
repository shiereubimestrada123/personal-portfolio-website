import { useNav } from '../hooks/useNav';

const About = () => {
  const aboutRef = useNav('About');

  return (
    <section
      ref={aboutRef}
      id='aboutSection'
      className='h-screen flex flex-col'
    >
      About
    </section>
  );
};

export default About;
