"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { IoCloseCircleOutline } from "react-icons/io5";

const projects = [
  {
    id: "1",
    date: "2024",
    name: "IU World Tour",
    thumb: "/assets/projects/iu-thumb.jpg",
    tools: "Next.js, tailwindcss, Framer Motion, shadcn/ui",
    description: "",
    images: [
      "/assets/projects/iu-desktop1.png",
      "/assets/projects/iu-desktop2.png",
      "/assets/projects/iu-desktop3.png",
    ],
  },
];

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {projects.map((project, index) => {
        return (
          <section className="container mx-auto h-[100vh] w-full">
            <div className="flex flex-col lg:flex-row justify-center items-center h-full">
              <img
                onClick={() => setOpenModal(true)}
                src={project.thumb}
                alt=""
                className="relative lg:w-2/6 shadow-zinc-950 shadow-2xl cursor-pointer"
              />
              <div className="absolute flex flex-col justify-center items-end lg:right-[400px]">
                <h2 className="text-[54px] lg:text-[108px] font-bold">
                  P.0{project.id}
                </h2>
                <p className="description font-semibold">{project.name}</p>
              </div>
            </div>
            {/* modal */}
            {openModal && (
              <div className="container modal fixed bg-white my-14 top-0 left-0 right-0 h-[100vh] w-full z-10">
                <div className="flex flex-row justify-center items-center">
                  {/* main content */}
                  <div className="flex flex-col">
                    {/* modal description */}
                    <div className="flex flex-col lg:flex-row justify-center items-center">
                      <div className="relative lg:left-[200px]">
                        <h2 className="text-[54px] lg:text-[108px] font-bold">
                          P.0{project.id}
                        </h2>
                        <p className="description font-semibold">
                          {project.name}
                        </p>
                      </div>
                      <div className="my-2 lg:my-0">
                        <img
                          src={project.thumb}
                          alt=""
                          className="relative w-7/12"
                        />
                      </div>
                      <div className="relative lg:right-[180px] flex flex-col lg:text-start lg:self-end gap-y-3 font-semibold">
                        <p>
                          Project name:
                          <br /> {project.name}
                        </p>
                        <p>
                          Date created:
                          <br /> {project.date}
                        </p>
                        <p>
                          Tools:
                          <br /> {project.tools}
                        </p>
                      </div>
                    </div>
                    {/* modal body */}
                    <div className="py-20">
                      <div>
                        <img src={project.images[0]} alt="" />
                      </div>
                      <div className="flex flex-col lg:flex-row py-20">
                        <img
                          src={project.images[1]}
                          alt=""
                          className="lg:w-6/12"
                        />
                        <div className="lg:w-6/12"></div>
                      </div>
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-6/12"></div>
                        <img
                          src={project.images[2]}
                          alt=""
                          className="lg:w-6/12"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* close modal button */}
                <div className="fixed top-[350px] right-0 lg:right-5 cursor-pointer">
                  <IoCloseCircleOutline
                    onClick={() => setOpenModal(false)}
                    className="text-3xl hover:text-black/60"
                  />
                </div>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
};

export default Projects;
