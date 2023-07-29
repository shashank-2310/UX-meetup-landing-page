/* eslint-disable no-unused-vars */
import React from "react";
import AlternateTimeline from "./AlternateTimeline";

const Schedule = () => {
  return (
    <div
      id="schedule"
      className="font-Mulish flex flex-col justify-center mx-auto items-center text-brown"
    >
      <h1 className="uppercase text-4xl mxs:text-3xl font-semibold my-5 mxs:my-3">Agenda</h1>
      <p className="capitalize font-medium text-base mxs:text-sm">August 5th, 2023</p>
      <p className="font-medium text-base mxs:text-sm">All times are in IST</p>
      <div className="w-full my-5">
        <AlternateTimeline/>
      </div>
    </div>
  );
};

export default Schedule;
