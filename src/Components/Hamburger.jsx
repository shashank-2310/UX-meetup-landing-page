// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerLine = `h-1 w-8/12 my-0.5 rounded-full bg-brown transition ease transform duration-300`;

  return (
    <>
      <button
        className="hidden ham-menu-button mxs:flex flex-col h-8 w-9 border-2 border-brown rounded justify-center items-center group"
        onClick={(e) => {
          setIsOpen(!isOpen);
          document.querySelector(".ham-menu").classList.toggle("hidden");
          e.preventDefault;
        }}
      >
        <div
          className={`${hamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${hamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </>
  );
}
