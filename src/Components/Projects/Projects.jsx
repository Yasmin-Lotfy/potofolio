import React from "react";
import ecomm from "./../../Assets/Images/ecommerce.webp";
import book from "./../../Assets/Images/book.webp";
import weather from "./../../Assets/Images/weather.jpg";
import recipe from "./../../Assets/Images/recipe.webp";
import quiz from "./../../Assets/Images/quiz.jpg";
import game from "./../../Assets/Images/game.jpg";
export default function Projects() {
  return (
    <>
      <div
        className={`bg-white pt-32   dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl`}
      >
        <h2 className="text-black main-title relative font-bold text-4xl capitalize dark:text-white text-center ">
          Projects
        </h2>
        <p className="dark:text-white text-xl text-center  text-black pt-10 w-1/2 mx-auto">
          Here are a few past design projects I've worked on. Want to see more?{" "}
          <a
            className="dark:text-cyan-200 text-darkSecColor"
            href="mailto:yasmin.lotfy11@gmail.com"
          >
            Email me
          </a>
          .
        </p>
        <div className="myExperience py-10 w-4/5 mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="proj-item relative rounded-lg ">
              <img src={ecomm} alt="" className="w-full" />
              <div className="overlay-proj text-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3 text-center flex-col text-white">
                <h2>E-Commerce website that allows people to register and buy products, add to cart and wishlist</h2>
                <a
                  href="https://ecommerce-app-chi-beryl.vercel.app/"
                  target="_blank"
                  className="btn-proj px-5 p-2 rounded-full mt-2"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="proj-item relative rounded-lg ">
              <img src={book} alt="" className="w-full" />
              <div className="overlay-proj text-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3 text-center flex-col text-white">
              <h2>
                Book Store website that allows people to read Books and change it in shelves according to reading status</h2>
                <a
                  href="https://book-library-alpha.vercel.app/"
                  target="_blank"
                  className="btn-proj px-5 p-2 rounded-full mt-5"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="proj-item relative rounded-lg ">
              <img src={weather} alt="" className="w-full" />
              <div className="overlay-proj text-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3 text-center flex-col text-white">
                <h2>
                Weather website allows you to get forecasts and access historical weather data available globally.                </h2>
                <a
                  href="https://weather-two-bay.vercel.app/"
                  target="_blank"
                  className="btn-proj px-5 p-2 rounded-full mt-5"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="proj-item relative rounded-lg ">
              <img src={recipe} alt="" className="w-full" />
              <div className="overlay-proj text-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3 text-center flex-col text-white">
                <h2>
                Recipe website includes high-quality images, descriptions, and a video for each recipe.                </h2>
                <a
                  href="https://recipe-nu-blue.vercel.app/"
                  target="_blank"
                  className="btn-proj px-5 p-2 rounded-full mt-5"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="proj-item relative rounded-lg ">
              <img src={quiz} alt="" className="w-full" />
              <div className="overlay-proj text-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3 text-center flex-col text-white">
                <h2>
                Website for multiple-choice quizzes where you can easily customize the number of questions and categories.                </h2>
                <a
                  href="https://quiz-zeta-cyan.vercel.app/"
                  target="_blank"
                  className="btn-proj px-5 p-2 rounded-full mt-5"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 p-3">
            <div className="proj-item relative rounded-lg ">
              <img src={game} alt="" className="w-full" />
              <div className="overlay-proj text-lg absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center p-3 text-center flex-col text-white">
                <h2>
                Game website offers a wide variety of games categorized by type. You can register to explore and enjoy the different games available.
                </h2>
                <a
                  href="https://game-rouge-mu.vercel.app/log"
                  target="_blank"
                  className="btn-proj px-5 p-2 rounded-full mt-5"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
