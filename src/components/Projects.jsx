import Image from "next/image";

const projects = [
  {
    thumb: "",
    index: "1",
  },
];

const Projects = () => {
  return (
    <section className="h-[80vh] xl:h-[850px]">
      {projects.map((project, index) => {
        return (
          <div className="container flex mx-auto h-full justify-center items-center">
            {/* project thumb */}
            <div>
              <Image src={project.thumb} />
            </div>
            {/* project number */}
            <div>
              <span>P.0{project.index}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
