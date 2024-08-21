import React, { useState } from "react";
import heroImg from '../img/img5.jpg';
import compImg from '../img/img6.jpg';
import flagImg from '../img/img3.jpg';

const tabs = [
  { name: 'Badminton', content: 'Connect your calendar and define your recording automations: channels, AI summary templates, and more.', img: compImg },
  { name: 'Volly', content: 'Record and share your meetings effortlessly with our integrations.', img: compImg },
  { name: 'Futsal', content: 'Integrate CRM tools to sync your customer data with meeting insights.', img: compImg },
  { name: 'Table Tennis', content: 'Collaborate across teams by integrating with popular tools.', img: compImg },
  { name: 'Karaoke', content: 'Automate your workflow with advanced integrations.', img: compImg },
];

const Independence = () => {
  const title = localStorage.getItem("title");
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div>
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full opacity-60"
            src={heroImg}
            alt="Hero"
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="tracking-tighter text-white">
                <span className="font-serif italic font-normal text-6xl sm:text-8xl">
                  {title}
                </span>
              </h1>
              <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
                Indonesia Independence day 79 in 2024 that held in 40 Neighborhood, Babelan, Bahagia, Bekasi. Wanna see what we do? Scroll down!
              </p>
            </div>
          </div>
        </div>

        <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
          <a
            href="#"
            title="Scroll Down"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>

      <section className="relative py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Raising the Indonesian Flag
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Of course, this is one of the mandatory things that must be carried out on Independence Day, with the young people as the flag-raising squad.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0">
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: 'blur(64px)' }}
                  width="444"
                  height="536"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                  <defs>
                    <linearGradient id="c" x1="82.7339" y1="550.792" x2="-39.945" y2="118.965" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
              </div>

              <img className="relative w-full max-w-md mx-auto rounded-lg opacity-85" src={flagImg} alt="Flag Raising" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white p-8">
        <h2 className="text-4xl font-normal text-center">Competition</h2>
        <p className="text-center text-lg text-gray-400 mb-8">
          Don't forget to do some competitions to keep up the spirit of struggle.
        </p>

        <div className="flex justify-center mb-8 space-x-4 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeTab.name === tab.name ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' : 'bg-gray-800 text-gray-400'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-4">
            <h3 className="text-2xl font-bold mb-4">{activeTab.name}</h3>
            <p className="mb-4">{activeTab.content}</p>
          </div>
          <div className="flex-1">
            <img src={activeTab.img} alt={activeTab.name} className="rounded-lg shadow-lg w-full md:max-w-xs mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Independence;
