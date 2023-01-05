import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { AiFillGithub } from "react-icons/ai";

import { motion } from "framer-motion";

const Project = ({ item }) => {
  return (
    <div
      key={item.id}
      className="flex flex-col items-center text-center transition-all ease-in-out duration-300"
    >
      <div className="mb-8 w-80 relative">
        <img className="rounded-2xl z-10" src={item.image} alt="" />
        <div className="flex justify-center items-center absolute opacity-0 z-20  bg-black/50 top-0 left-0 w-full h-full hover:opacity-100 transition-all ease-in-out duration-300">
          <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] mx-5 cursor-pointer bg-black/70">
            <a
              href={item.linkto}
              target="_blank"
              className="flex justify-center items-center"
            >
              <EyeIcon className="text-xs w-[50%] h-[50%] text-white" />
            </a>
          </div>
          <div className="flex justify-center items-center rounded-full w-[40px] h-[40px] mx-5 cursor-pointer bg-black/70">
            <AiFillGithub className="text-xs w-[50%] h-[50%] text-white" />
          </div>
        </div>
      </div>
      <p className="capitalize text-accent text-base mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
      <p className="text-base max-w-md text-white">
        Link: &nbsp;
        <a
          className="decoration-none text-accent hover:text-accent-hover"
          href={item.linkto}
          target="_blank"
        >
          {item.linkto}
        </a>
      </p>
    </div>
  );
};

export default Project;
