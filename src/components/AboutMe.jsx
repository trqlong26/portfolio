"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { slideIn } from "../../variants";

const AboutMe = () => {
  return (
    <motion.div
      variants={slideIn("left", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, threshold: 0.3 }}
      className="container flex flex-col justify-center items-center mt-16"
    >
      <div className="flex flex-col w-full lg:w-6/12 justify-center text-center lg:text-start items-center py-32">
        <h1 className="text-[54px] lg:text-[108px] font-bold">Hello World!</h1>
        <p>
          I'm Quang Long Tran, a knowledge seeker on a lifelong journey of
          learning. From software engineering bootcamp to new horizons, my
          passion drives me to explore and grow. I aim to become a programmer
          who constantly learns and innovates to contribute to the community.
        </p>
        <Link
          href={
            "https://drive.google.com/file/d/1HJVabgSsh77dStknvOOltwAxo0LlGmxq/view?usp=sharing"
          }
          target="_blank"
          className="mt-10 border border-black py-3 px-3"
        >
          my resume
        </Link>
      </div>
    </motion.div>
  );
};

export default AboutMe;
