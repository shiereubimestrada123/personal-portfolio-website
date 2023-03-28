import { useNav } from "../hooks/useNav";

const Portfolio = () => {
  const portfolioRef = useNav("Portfolio");

  return (
    <section
      ref={portfolioRef}
      id="portfolioSection"
      className="min-h-screen flex flex-col"
    >
      Portfolio
    </section>
  );
};

export default Portfolio;
