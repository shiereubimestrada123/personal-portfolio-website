import { useNav } from "../hooks/useNav";

const Project = () => {
  const projectRef = useNav("Project");

  return (
    <section
      ref={projectRef}
      id="projectSection"
      className="min-h-screen flex flex-col"
    >
      <div className="relative flex justify-center items-center">
        <h1 className="uppercase font-outline-2">Projects</h1>
        <h1 className="absolute lg:text-6xl text-4xl uppercase text-[#ccc4ac] font-black tracking-wider">
          My Projects
        </h1>
      </div>
    </section>
  );
};

export default Project;
