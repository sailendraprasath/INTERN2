import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Simg1 from "../assets/Simg1.png";

const Sample = () => {
  const [nav, SetNav] = useState(false);
  const Links = [
    { name: "MAIN", link: "/" },
    { name: "GALLERY", link: "/" },
    { name: "PROJECTS", link: "/" },
    { name: "CERTIFICATION", link: "/" },
    { name: "CONTACTS", link: "/" },
  ];
  return (
    <>
      <div className=" max-sm:max-w-[300px]  mx-auto flex justify-between items-center  table-fixed bg-myfont3 cursor-default select-none">
        <div className="flex items-center  max-sm:w-full lg:w-full ">
          <div className="flex flex-row  items-center  px-8 lg:pt-5">
            <div>
              <img
                src={Simg1}
                alt=""
                className=" md:w-[100px] md:mt-5 xl:w-[100px] 2xl:w-[100px] lg:w-[90px]  max-sm:w-[200px] max-sm:mt-5 lg:ml-10 lg:mt-5 max-sm:ml-16 max-sm:mx-auto"
              />
            </div>
            <div className="lg:ml-[800px] max-sm:hidden  items-center">
              <ul className="flex xl:-ml-[400px] md:ml-[110px] lg:-ml-[600px] ">
                {Links.map((link) => (
                  <li
                    key={link.name}
                    className={`my-2 max-sm:text-[6px] md:text-[13px] 2xl:text-[14px] md:mt-[20px] font-My1 lg:text-[13px] xl:text-[14px] ml-8 2xl:ml-24 text-black`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile menu and overlay */}
          {nav ? (
            <div className="bg-black/80 lg:hidden fixed w-full h-screen z-10 top-0 left-0"></div>
          ) : (
            " "
          )}
          <div
            className={
              nav
                ? "fixed top-0 left-0 w-[250px] lg:hidden md:hidden h-screen bg-white z-10 duration-300"
                : "fixed top-0 left-[-100%] w-[300px] lg:hidden h-screen bg-white z-10 duration-300"
            }
          >
            {/* Left Side Closer */}
            <IoMdClose
              onClick={() => SetNav(!nav)}
              size={30}
              className="absolute right-6 top-12 lg:hidden cursor-pointer text-black  duration-700 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300 "
            />
          </div>

          {/* mobile menu  */}
          <div
            onClick={() => SetNav(!nav)}
            className="flex items-center lg:hidden md:hidden px-4"
          >
            <div className="cursor-pointer duration-700 mx-auto ml-16 rotate-180 scale-90 transition hover:scale-125 hover:-rotate-180  hover:duration-300">
              <IoMdMenu size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sample;
