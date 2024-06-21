import React, { useEffect, useState } from "react";

import ExampleDoc from "./../../Assets/files/YasminLotfyResume.pdf"

import Typed from "typed.js";
import me from "./../../Assets/Images/me.jpeg";

export default function Header() {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["&nbsp;Front-end Developer and Instructor"],
      typeSpeed: 50,
      backSpeed: 50,
      shuffle: true,
      cursorChar: "",
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className={`bg-white mt-20 md:flex-wrap md:flex md:justify-center md:items-center  dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}
      >
        <div className="mx-auto w-full md:w-1/2 ">
          <div className="glitch relative mt-5 overflow-hidden">
            <img
              src={me}
              className="w-full md:w-3/4 lg:w-1/2  mx-auto"
              alt="About_Me"
            />
            <div className="glitch__layers w-full md:w-3/4 lg:w-1/2 mx-auto">
              <div className="glitch__layer"></div>
              <div className="glitch__layer"></div>
              <div className="glitch__layer"></div>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left mt-16 md:mt-0  md:w-1/2 w-full ">
          {/* <img src={laptopLight} className="mx-auto  w-[150px] h-[150px]" /> */}
          <h1
            className={`text-slate-900 font-bold  text-5xl dark:text-white  my-3  tracking-tight`}
          >
            I'm <span className="dark:text-white">Jasmine</span> Lotfy
          </h1>
          <div className="py-4 font-bold text-2xl text-dark dark:text-white">
            A
            <span ref={el} />
          </div>
          <p className="text-xl py-5   dark:text-gray-200">
            I like to craft solid and scalable frontend products with great user
            experiences.
          </p>

          {/* <p className="text-xl pt-5 dark:text-white">
            HTML, CSS, Javascript, ReactJs, NextJs, ReduxToolkit, typescript,
            sass,{" "}
          </p> */}
          <a
            href={ExampleDoc}
            className=" text-black rounded-full px-10 py-4 my-4 inline-block dark:hover:bg-black hover:bg-darkPrimaryColor transition-all hover:text-white dark:text-gray-800 dark:hover:text-white  hover:border-darkSecColor hover:border-4 border-4 text-lg border-darkSecColor bg-darkSecColor"
            download="YasminLotfyResume" target='_blank'
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
