import React from "react";
import img from '../img/img5.jpg'
import { useLocation } from "react-router-dom";
import EventDetailContent from "./EventDetailContent";
import Competition from "./Competition";


const EventDetail = () => {
  const title = localStorage.getItem("title");

  return (
    <div>
      {/* <h1 className="mt-8 text-center text-4xl font-normal text-black sm:text-4xl  lg:text-5xl xl:text-6xl">
        {title}
      </h1> */}
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full opacity-60"
            src={img}
            alt=""
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="tracking-tighter text-white">
                {/* <span className="font-sans font-normal text-7xl">Master</span> */}
                <br />
                <span className="font-serif italic font-normal text-8xl">
                  {title}
                </span>
              </h1>
              <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
                Indonesia Independence day 79 in 2024 that held in 40 Neighborhood, Babelan, Bahagia, Bekasi. Wanna see what we do? scroll down!
              </p>
              <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
                {/* <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                  role="button"
                >
                  Get started
                </a>

                <a
                  href="#"
                  title=""
                  className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            leading-6
                            transition-all
                            duration-200
                            bg-transparent
                            border-2
                            rounded-full
                            sm:leading-8
                            text-white
                            border-primary
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                            hover:text-black
                            sm:text-lg
                            focus:ring-offset-secondary
                        "
                  role="button"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z"
                    />
                  </svg>
                  Watch trailer
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
          <a
            href="#"
            title=""
            className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            role="button"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    <EventDetailContent/>
    <Competition/>
    </div>
  );
};

export default EventDetail;
