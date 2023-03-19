import { useNav } from '../hooks/useNav';

const Portfolio = () => {
  const portfolioRef = useNav('Portfolio');

  return (
    <section
      ref={portfolioRef}
      id='portfolioSection'
      className='h-screen flex flex-col'
    >
      Portfolio
    </section>
  );
};

export default Portfolio;
