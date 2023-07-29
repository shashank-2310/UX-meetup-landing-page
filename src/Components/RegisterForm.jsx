// eslint-disable-next-line no-unused-vars
import React from "react";
import person from "../assets/person.png";

export default function RegisterForm() {
  return (
    <div
      id="register"
      className="w-10/12 mxs:w-full text-left text-brown font-Mulish py-10 tracking-wide flex flex-row mxs:flex-col justify-around items-center"
    >
      <form className="mx-auto border border-brown rounded-md p-6 bg-brown bg-opacity-5 flex justify-center items-center flex-col">
        <div className="flex flex-col justify-start items-start my-2">
          <label htmlFor="name" className="font-medium text-base my-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            minLength={3}
            className="rounded-md w-full text-lg py-1 px-2 outline-none focus:border border-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start my-2">
          <label htmlFor="email" className="font-medium text-base my-1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            minLength={5}
            className="rounded-md w-full text-lg py-1 px-2 outline-none focus:border border-cyan-500"
          />
        </div>
        <div className="flex flex-col justify-start items-start my-2">
          <label htmlFor="number" className="font-medium text-base my-1">
            Phone number
          </label>
          <input
            type="number"
            name="number"
            id="number"
            required
            minLength={10}
            className="rounded-md w-full text-lg py-1 px-2 outline-none focus:border border-cyan-500"
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 w-full my-4 bg-brown border border-black rounded-md text-white font-semibold hover:bg-transparent hover:text-brown capitalize"
        >
          book tickets
        </button>
      </form>

      <div className="w-1/3 mxs:flex mxs:justify-center mxs:items-center mxs:my-3 mxs:w-3/5 mxs:mx-auto">
        <img src={person} alt="person" />
      </div>
    </div>
  );
}
