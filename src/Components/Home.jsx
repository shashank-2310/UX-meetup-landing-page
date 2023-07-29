// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";
import Image from "../assets/Image.svg";
import arrow from "../assets/arrow.svg";
import arc from "../assets/arc.svg";
import zzblack from "../assets/zig-zag-black.svg";
import zzwhite from "../assets/zig-zag-white.svg";

const Home = () => {
  return (
    <>
      <div className="mxs:pt-5 flex flex-row mxs:flex-col justify-between mxs:justify-center items-center text-brown font-Mulish h-full w-full z-0">
        <div className="flex flex-col justify-start mxs:justify-center mxs:items-center items-start w-1/2 mxs:w-full tracking-wide my-2">
          <div className="w-min h-min">
            <img
              src={zzblack}
              alt="zig-zag"
              className="absolute top-32 left-10 mxs:w-11 mxs:top-20 mxs:left-5"
            />
          </div>
          <div className="ml-24 mxs:mx-auto mxs:flex mxs:justify-center mxs:items-center mxs:flex-col">
            <h1 className="font-light tracking-wide text-3xl pt-2 mb-10 mxs:my-11 mxs:border-b-2 mxs:border-brown mxs:rounded-sm ">
              <span className="mxs:hidden">-</span> UX Meetup 2023
            </h1>
            <h1 className="uppercase font-Pompiere text-8xl mxs:mt-1 mxs:text-7xl text-black mxs:z-10">
              designers
            </h1>
            <hr className="bg-yellow rounded-full border-0 mxs:h-4 h-5 w-[22.6rem] mxs:w-[17.1rem] mxs:-mt-5 -mt-7 mxs:z-0" />
            <h1 className="uppercase font-Pompiere text-8xl mxs:text-7xl mxs:my-1 text-black py-5">
              meet
            </h1>
            <p className="my-6 text-2xl mxs:text-xl mxs:leading-normal mxs:text-center mxs:w-3/4 w-11/12">
              Great <span className="text-purple">design</span> is a force of
              nature. A design meet that is designed to change the way you think
            </p>
            <div className="relative mxs:w-full">
              <img
                src={zzblack}
                alt="zig-zag"
                className="absolute bottom-60 right-40 -rotate-45 mxs:right-12 mxs:w-12 mxs:bottom-56"
              />
            </div>
            <button
              type="button"
              className="capitalize tracking-wide px-4 py-2 mxs:my-3 rounded-md font-semibold border border-black bg-brown text-white hover:border-brown hover:shadow-lg focus:bg-transparent focus:text-black focus:border-brown focus:shadow-lg "
            >
              <Link
                to="register"
                spy={true}
                smooth={true}
                offset={15}
                duration={750}
              >
                Register now
              </Link>
            </button>
            <div className="hidden mxs:flex items-center justify-center flex-col my-10">
              <p className="font-normal text-base text-center">
                Scroll to explore
              </p>
              <img
                src={arrow}
                alt="arrow"
                className="mt-3 animate-bounce border-2 rounded-full border-brown p-1"
              />
            </div>
            <div className="relative mxs:hidden">
              <img
                src={arc}
                alt="arc"
                className="absolute -top-[6.5rem] left-40 w-1/4"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between mxs:justify-center items-center mxs:w-full w-1/2 z-0 relative mb-2 mt-5 ">
          <div className="bg-purple bg-opacity-50 rounded-full p-20 absolute top-8 left-14 mxs:p-8 mxs:-top-3 mxs:left-8" />
          <div className="z-10">
            <img
              src={Image}
              alt="image"
              className="scale-90 mxs:w-3/4 mxs:mx-auto"
            />
          </div>
          <div className="bg-yellow bg-opacity-50 rounded-full p-16 absolute bottom-7 right-20 mxs:p-8 mxs:-bottom-3 mxs:right-8" />
          <div className="z-10">
            <img
              src={zzwhite}
              alt="zig-zag"
              className="absolute z-0 bottom-28 left-24 mxs:w-16 mxs:left-8 mxs:bottom-20 "
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row mxs:hidden justify-between items-center -mt-11 font-Mulish tracking-wide mx-24">
        <button
          type="button"
          className="underline underline-offset-1 capitalize font-bold"
        >
          need help?
        </button>
        <div className=" flex items-center justify-center flex-col ">
          <p className="font-light text-center">Scroll to explore</p>
          <img
            src={arrow}
            alt="arrow"
            className="mt-1 animate-bounce border-2 rounded-full border-brown p-1"
          />
        </div>
        <div className="invisible" />
      </div>
    </>
  );
};

export default Home;
