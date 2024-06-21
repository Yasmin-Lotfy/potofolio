import React from "react";

export default function About() {
  return (
    <>
      <div className={`bg-white pt-32   dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}>
        <h2 className="text-black main-title relative font-bold text-4xl capitalize dark:text-white text-center ">
          About me
        </h2>
        <p className="dark:text-white text-xl text-center  text-black pt-10 w-1/2 mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
        <div className="myExperience py-10 container mx-auto flex-wrap flex justify-center items-start">
          <div className=" w-full md:w-1/2 xl:w-1/3 p-5  text-center">
            <div className="exp-cont dark:bg-grey-300 bg-gray-200  rounded-xl p-10">
              <div className="icon  flex justify-center items-center bg-darkSecColor text-white rounded-full">
                <i className="fa-solid fa-xl  fa-code"></i>
              </div>
              <h3 className=" font-bold text-3xl py-3">Frontend Developer</h3>
              <p className="text-xl">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <h4 className="text-2xl font-bold  py-4">Skills:</h4>
              <ul className="text-xl font-medium">
                
                <li>Javascript</li>
                <li>ReactJs</li>
                <li>NextJs</li>
                <li>ReduxToolkit</li>
                <li>TypeScript</li>
                <li>Sass</li>
                <li>HTML </li>
                <li>Css</li>
                <li>Bootstrap</li>
                <li>TailwindCSS</li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-5  text-center">
            <div className="exp-cont dark:bg-grey-300 bg-gray-200 rounded-xl p-10">
              <div className="icon  flex justify-center items-center bg-darkSecColor text-white rounded-full">
                <i className="fa-solid fa-xl fa-book"></i>
              </div>
              <h3 className=" font-bold text-3xl py-3">Instructor</h3>
              <p className="text-xl">
                I genuinely care about people, and enjoy helping them work on
                their craft.
              </p>
              <h4 className="text-2xl font-bold  py-4">Skills:</h4>
              <ul className="text-xl font-medium">
                <li>4+ years experience </li>
                <li>10+ short courses</li>
                <li>100+ students</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
