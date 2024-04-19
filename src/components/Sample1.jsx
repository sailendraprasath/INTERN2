import React from "react";
import Simg2 from "../assets/Simg2.png";
import Simg3 from "../assets/Simg3.png";
import Simg4 from "../assets/Simg4.png";
import Simg5 from "../assets/Simg5.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Sample1 = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-sm:max-w-[300px] max-sm:mx-auto">
        <div className="select-none lg:ml-[150px] lg:mt-[150px]    mt-[200px] ml-[200px] max-sm:mt-[15px] max-sm:ml-[10px]  2xl:mt-[600px] md:ml-[80px] md:mt-[160px] mx-auto">
          <h1 className="   text-gray-600/50 text-5xl max-sm:text-4xl lg:text-5xl 2xl:text-9xl md:text-4xl">
            PROJECT
          </h1>
          <h1 className="font-extrabold text-3xl max-sm:text-3xl lg:text-3xl 2xl:text-8xl md:text-3xl">
            LOREM
          </h1>
          <div className="mt-10 ml-10 md:ml-5 md:mt-5 2xl:ml-[130px] 2xl:mt-[80px] max-sm:hidden">
            <FaArrowRight className="ml-14 mt-5 size-7 md:size-5 md:ml-14 md:mt-3 2xl:size-12  2xl:ml-20 text-black/60" />
            <FaArrowLeft className="-mt-7 size-7 md:size-5 md:-mt-5 2xl:size-12 2xl:-ml-10 2xl:-mt-11 text-black/60" />
          </div>
        </div>
        <div>
          <div className="absolute -ml-[90px] lg:-ml-[110px] 2xl:-ml-[400px] md:-ml-[100px] max-sm:mt-[100px] max-sm:mx-auto max-sm:px-2 max-sm:ml-[-155px] ">
            <img
              src={Simg2}
              alt=""
              className="w-[550px] 2xl:w-[1400px] max-sm:w-[300px]"
            />
          </div>
          <div className="relative max-sm:mt-[385px] max-sm:ml-[-147px] max-sm:w-[150px]  mt-[545px] md:mt-[470px] md:-ml-[100px] 2xl:mt-[1380px] lg:mt-[467px] bg-white 2xl:w-[450px] md:w-[130px] w-[150px] lg:w-[160px] lg:p-3 max-sm:p-3 p-3 md:p-3 2xl:p-10 2xl:px-0.5 lg:-ml-[112px] -ml-[90px] 2xl:-ml-[400px]">
            <h1 className="2xl:text-6xl 2xl:font-thin md:font-thin max-sm:font-thin">
              View Project
            </h1>
            <FaArrowRight className="2xl:size-12 2xl:ml-[360px] 2xl:-mt-[50px] max-sm:ml-[100px] max-sm:-mt-[20px] ml-28  -mt-[16px] md:ml-[100px] md:mt-[-18px] lg:ml-28 lg:-mt-[17px]" />
          </div>
        </div>
      </div>
      {/* about mattum ahmm paa  */}
      <div className=" grid grid-cols-2 max-sm:max-w-[300px] max-sm:p-[20px] max-sm:py-[50px] max-sm:mx-auto max-w-[1440px] md:max-w-[768px] md:p-[20px] md:py-[40px] lg:p-[20px] lg:py-[80px] p-[40px] ml-[200px] 2xl:max-w-[2560px] 2xl:py-[300px] lg:max-w-[1024px]">
        <div>
          <img
            src={Simg3}
            alt=""
            className="max-sm:w-[90px] lg:w-[250px] md:w-[200px] w-[250px] 2xl:w-[600px]"
          />
          <img
            src={Simg4}
            alt=""
            className="max-sm:w-[90px] max-sm:ml-[100px] max-sm:mt-[-65px] lg:w-[250px] lg:ml-[280px] lg:mt-[-200px] md:w-[200px] md:ml-[220px] md:mt-[-170px] w-[250px] ml-[280px] mt-[-200px] 2xl:w-[500px] 2xl:ml-[650px] 2xl:mt-[-500px]"
          />
          <img
            src={Simg5}
            alt=""
            className="max-sm:w-[90px] max-sm:mt-[-40px] lg:w-[250px] lg:mt-[-90px] md:w-[200px] md:mt-[-50px] w-[250px] mt-[-80px] 2xl:w-[600px]"
          />
        </div>
        <div className="max-sm:hidden">
          <h1 className="lg:text-5xl lg:ml-[180px] md:text-4xl md:ml-[120px] text-6xl ml-32 2xl:text-9xl 2xl:ml-[250px] text-gray-600/85  font-semibold">
            ABOUT...!!
          </h1>
          <h1 className="lg:w-[400px] lg:py-[30px]  lg:ml-[80px] md:w-[300px] md:py-[30px] md:ml-[80px] w-[500px] 2xl:w-[800px] 2xl:ml-[180px] 2xl:py-[80px] mt-[20px] py-[30px] text-black/65 font-My1 md:text-sm lg:text-text-2xl 2xl:text-5xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
            accusantium dolor, perspiciatis maxime possimus quod, consectetur,
            ea quo iure error debitis. Tempora iste, delectus ullam praesentium
            reprehenderit neque excepturi! Enim.
          </h1>
        </div>
        <div className="hidden lg:hidden md:hidden 2xl:hidden max-sm:max-w-[300px] text-gray-600/75 text-font-bold max-sm:ml-[100px] mx-auto">
          <h1>A |</h1>
          <h1>| B</h1>
          <h1>O |</h1>
          <h1>| U</h1>
          <h1>T |</h1>
        </div>
        <div className="hidden lg:hidden md:hidden 2xl:hidden max-sm:max-w-[300px] py-6 mx-auto">
          <h1 className="font-medium text-black/75 text-sm text-center w-[280px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            molestiae hic minima officiis magni quidem provident, error
            aspernatur inventore animi quibusdam exercitationem dicta delectus
            enim quos totam eligendi quaerat velit.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Sample1;
