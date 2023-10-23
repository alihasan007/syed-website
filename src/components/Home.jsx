import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Syed Ali Hasan
        </h1>
        <h2 className="text-4xl font-bold text-[#8892b0]">
          Im a MERN Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Competent and proficient developer in JavaScript to cater customer
          needs and deliver innovative products that are high in quality and
          reliable with a keen sense of security. Skilled in logical reasoning
          and have good knowledge of data structures and algorithms.
        </p>
        <div>
          <button className=" group text-white border-2 py-3 px-6 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-2" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
