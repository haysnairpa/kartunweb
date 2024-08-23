import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImg from "../img/img5.jpg";
import compImg from "../img/img6.jpg";
import flagImg from "../img/img3.jpg";

const tabs = [
  { name: "Badminton", content: "A thrilling showdown of smashes and drops! Our badminton tournament saw players of all levels competing for the coveted championship title. From intense rallies to unexpected upsets, every match kept the crowd on the edge of their seats.", img: compImg },
  { name: "Volleyball", content: "The volleyball tournament was a testament to the power of teamwork and athleticism. Spikes soared over the net, digs kept the rallies alive, and serves were aimed with precision. The energy on the court was contagious, and the crowd cheered on their favorite teams.", img: compImg },
  { name: "Futsal", content: "The futsal pitch was a whirlwind of action as teams battled for possession and goals. With lightning-fast dribbles and powerful shots, players showcased their skills and teamwork. The final match was a nail-biter, with the winning goal scored in the dying seconds.", img: compImg },
  { name: "Table Tennis", content: "The table tennis tables were the stage for a series of intense rallies. With lightning-fast reflexes and delicate touch, players showcased their mastery of the game. The tournament was a true test of skill and concentration.", img: compImg },
  { name: "Karaoke", content: "The karaoke competition was a celebration of talent and individuality. Contestants belted out their favorite songs, from classic hits to modern pop. The judges had a tough time choosing the winners, as each performance was unique and entertaining.", img: compImg },
];

const floatingAnimation = () => {
  const yOffset = Math.random() * 10 + 5; // Random vertical offset between 5px and 15px
  const rotateOffset = Math.random() * 2 - 1; // Random rotate between -1deg and 1deg
  const scaleOffset = Math.random() * 0.02 + 0.98; // Random scale between 0.98 and 1.02

  return {
    y: [0, -yOffset, 0], // Random floating direction
    rotate: [0, rotateOffset, -rotateOffset, 0], // Random rotation
    scale: [1, scaleOffset, 1], // Random scaling effect
  };
};

const Independence = () => {
  const title = localStorage.getItem("title");
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const splitText = (text) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.05, delay: index * 0.05 }}
      >
        {char}
      </motion.span>
    ));

  return (
    <div className="overflow-hidden">
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
                  {splitText(title)}
                </span>
              </h1>
              <p className="mt-5 font-sans text-base font-normal text-white text-opacity-70">
                {splitText("Indonesia Independence day 79 in 2024 that held in 40 Neighborhood, Babelan, Bahagia, Bekasi. Wanna see what we do? Scroll down!")}
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
            <motion.svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </a>
        </div>
      </div>

      <section className="relative py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <motion.h1
                className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Raising the Indonesian Flag
              </motion.h1>
              <motion.p
                className="mt-4 text-lg font-normal text-gray-400 sm:mt-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Of course, this is one of the mandatory things that must be carried out on Independence Day, with the young people as the flag-raising squad.
              </motion.p>
            </div>

            <div className="relative">
              <motion.div
                className="absolute inset-0"
                animate={floatingAnimation()}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: "blur(64px)" }}
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
              </motion.div>

              <motion.img
                className="relative w-full max-w-md mx-auto rounded-lg opacity-85"
                src={flagImg}
                alt="Flag Raising"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white p-8">
        <h2 className="text-4xl font-normal text-center">Competition</h2>
        <p className="text-center text-lg text-gray-400 mb-8">
          Don't forget to participate in the race so that Independence Day feels even more lively. Which race will you participate in? Let's see the list!
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              className={`px-4 py-2 rounded ${
                activeTab.name === tab.name ? "bg-purple-500 text-white" : "bg-gray-700 text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {tab.name}
            </motion.button>
          ))}
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={activeTab.name}
        >
          <motion.img
            src={activeTab.img}
            alt={activeTab.name}
            className="mx-auto mb-4 rounded-lg w-full lg:max-w-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.p
            className="text-center lg:text-left lg:ml-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab.content}
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default Independence;
