import { useNav } from "../hooks/useNav";

import MyPhoto from "../assets/my-photo.png";

const About = () => {
  const aboutRef = useNav("About");

  return (
    <section
      ref={aboutRef}
      id="aboutSection"
      className="lg:max-h-screen md:max-h-screen h-auto flex flex-col w-full"
    >
      <div className="relative flex justify-center items-center">
        <h1 className="uppercase font-outline-2">About</h1>
        <h1 className="absolute lg:text-6xl text-4xl uppercase text-[#ccc4ac] font-black tracking-wider">
          About Me
        </h1>
      </div>
      <div className="relative lg:top-[-5rem] md:top-0 top-0 flex justify-between items-center lg:flex-row md:flex-row flex-col lg:mx-20 md:mx-15 mx-5">
        <div className="blob w-1/2">
          <img src={MyPhoto} alt="My Photo" className="" />
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full">
          <h2 className="text-center">Javascript | Frontend Developer</h2>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
