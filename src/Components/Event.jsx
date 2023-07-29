// eslint-disable-next-line no-unused-vars
import React from "react";

const Event = () => {
  return (
    <div id="event" className="my-5 text-brown text-justify leading-normal text-lg mxs:text-base flex flex-col justify-center items-center font-Mulish w-full">
      <div className="w-1/2 mxs:w-10/12 text-center mx-auto tracking-wide">
        <h1 className="uppercase font-semibold text-5xl mxs:text-3xl my-5">
          About the event
        </h1>
        <p className="my-5">
          UX Design Meetup is dedicated to bringing together professionals,
          enthusiasts, or simply anyone who is interested in how to deliver
          outstanding UX and find the best tools and practices for evaluating
          and collecting user requirements.
        </p>
        <p className="my-5">
          It is a great opportunity to deepen your knowledge in terms of
          approaches, and methodology as well as gain hands-on experience during
          the workshop.
        </p>
        <p className="my-5">
          You will love it if you are a UX practitioner, product manager,
          front-end developer, marketing specialist, or just getting started
          with web design.
        </p>
        <h1 className="font-medium text-2xl mxs:text-xl mt-12 mb-8 mxs:mb-4 mxs:mt-9">
          You should definitely take part, and here is why:
        </h1>
      </div>
      <div className="flex flex-row mxs:flex-col justify-between items-center w-3/4 mxs:w-11/12 mb-8">
        <div className="flex mxs:flex-row justify-between items-center w-full mx-auto">
          <div className="flex flex-col justify-center items-center leading-loose md:mx-auto">
            <i className="fa-solid fa-star text-3xl my-2 text-cyan-800" />
            <p className="font-medium text-base text-center">
              6 exceptional
              <br />
              industry speakers
            </p>
          </div>
          <div className="flex flex-col justify-center items-center leading-loose">
            <i className="fa-solid fa-lock-open text-3xl my-2 text-emerald-600" />
            <p className="font-medium text-base text-center">
              access to our
              <br />
              close community
            </p>
          </div>
        </div>

        <div className="flex mx-auto mxs:flex-row justify-between items-center w-full">
          <div className="flex flex-col justify-center items-center leading-loose md:mx-auto">
            <i className="fa-solid fa-fire text-3xl my-2 text-orange-400" />
            <p className="font-medium text-base text-center">
              hottest user-centric
              <br />
              design topics
            </p>
          </div>
          <div className="flex flex-col justify-center items-center leading-loose mxs:mr-6">
            <i className="fa-solid fa-heart text-3xl my-2 text-red-400" />
            <p className="font-medium text-base text-center">
              1000 +<br />
              satisfactory
              <span className="md:hidden">
                <br />
              </span>
              participants
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
