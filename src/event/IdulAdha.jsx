import React from "react";
import { motion } from "framer-motion";
import heroImg from '../img/img5.jpg';
import qurbanImg from '../assets/test.png'; // Replace with an appropriate image for Qurban
import distributionImg from '../assets/lebaran.jpg'; // Replace with an appropriate image for meat distribution

const IdulAdha = () => {
  const title = localStorage.getItem("title");

  // Variants for different animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

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
    <div>
      <motion.div
        className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0">
          <motion.img
            className="object-cover w-full h-full opacity-60"
            src={heroImg}
            alt="Hero"
            variants={fadeIn}
          />
        </div>

        <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-xl mx-auto text-center">
              <motion.h1
                className="tracking-tighter text-white"
                variants={fadeInUp}
              >
                <span className="font-serif italic font-normal text-6xl sm:text-8xl">
                  {splitText(title)}
                </span>
              </motion.h1>
              <motion.p
                className="mt-5 font-sans text-base font-normal text-white text-opacity-70"
                variants={fadeInUp}
              >
                {splitText('Commemorating Idul Adha 1445 H in 40 Neighborhood, Babelan, Bahagia, Bekasi. Learn about our activities below.')}
              </motion.p>
            </div>
          </div>
        </div>

        <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
          <motion.a
            href="#"
            title="Scroll Down"
            className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"
            role="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
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
          </motion.a>
        </div>
      </motion.div>

      <section className="relative py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <motion.div
          className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Animal Sacrifice Ceremony
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                As part of our Idul Adha celebrations, we will perform the Qurban ritual, sacrificing livestock as an act of worship and gratitude.
              </p>
            </motion.div>

            <motion.div className="relative" variants={fadeIn}>
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

              <motion.img
                className="relative w-full max-w-md mx-auto rounded-lg opacity-85"
                src={qurbanImg}
                alt="Qurban"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="bg-black text-white p-8">
        <motion.h2
          className="text-4xl font-normal text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Meat Distribution
        </motion.h2>
        <motion.p
          className="text-center text-lg text-gray-400 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          After the Qurban, the meat is distributed to those in need, symbolizing our commitment to community and charity.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center">
          
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={distributionImg}
              alt="Meat Distribution"
              className="rounded-lg shadow-lg w-full md:max-w-xs mx-auto"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IdulAdha;
