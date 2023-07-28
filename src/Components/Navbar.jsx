// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const navBtnClasses =
    "capitalize hover:underline focus:outline-none focus:underline underline-offset-2";

  const hamClasses =
    "capitalize transition duration-300 block my-2 w-max p-3 rounded-md hover:shadow-lg hover:bg-brown hover:text-white focus:shadow-lg focus:bg-brown focus:text-white";
  return (
    <>
      <div className="flex flex-row justify-between items-center font-Mulish text-brown text-center text-2xl tracking-wide w-full p-2">
        <div className="flex justify-center items-center pl-16 mxs:mx-2 mxs:pl-0">
          <h1 className="font-Neucha uppercase font-medium tracking-wide text-3xl hover:underline underline-offset-4">
            fox&fairy
          </h1>
        </div>

        <Hamburger />

        <div className="flex flex-row justify-evenly items-center font-semibold tracking-wide text-lg w-7/12 mxs:hidden">
          <Link className={navBtnClasses}>event</Link>
          <Link className={navBtnClasses}>schedule</Link>
          <Link className={navBtnClasses}>sponsors</Link>
          <button
            type="button"
            className="capitalize px-4 py-2 rounded-md border border-brown hover:bg-brown hover:text-white hover:border-black hover:shadow-lg focus:bg-brown focus:text-white focus:border-black focus:shadow-lg "
          >
            book tickets
          </button>
        </div>
      </div>

      <div className="hidden ham-menu relative text-3xl tracking-wide font-semibold text-center">
        <div className="absolute h-screen inset-x-0 z-20 flex justify-start pt-28 items-center flex-col backdrop-blur-md bg-transparent">
          <Link className={hamClasses}>event</Link>
          <Link className={hamClasses}>schedule</Link>
          <Link className={hamClasses}>sponsors</Link>
          <button
            type="button"
            className="capitalize transition duration-300 block my-5 w-10/12 py-3 rounded-md border border-brown hover:bg-brown hover:text-white hover:border-black hover:shadow-lg focus:bg-brown focus:text-white focus:border-black focus:shadow-lg "
          >
            book tickets
          </button>
        </div>
      </div>
    </>
  );
}
