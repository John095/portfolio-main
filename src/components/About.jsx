import React from "react";

// import img
import Image from "../assets/img/about-me.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                John Ndirangu
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                I’m a results-driven web developer with 4 years of experience
                building and managing websites and web applications for small
                businesses and startups. <br />
                <br />I work closely with clients to understand their goals and
                requirements, then deliver web designs, prototypes and fully
                functional websites on time, within budget and with exceptional
                quality.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all rounded-md">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
