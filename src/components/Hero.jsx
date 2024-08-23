import React from 'react';
import kartar from '../assets/2024.jpg'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div>
      <section className="relative pt-12 overflow-hidden bg-black sm:pt-16 z-10">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animasi subtitle dengan efek mengetik berulang */}
            <motion.p
              className="text-sm font-normal tracking-widest uppercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                <Typewriter
                  words={['Our Official Website']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </motion.p>

            {/* Animasi judul dengan efek mengetik sekali */}
            <motion.h1
              className="mt-8 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Typewriter
                words={['Youth Organization of 40 Neighborhood']}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.h1>

            {/* Animasi tombol dengan border gradient dan animasi path */}
            <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
              <motion.div
                className="relative inline-flex items-center justify-center w-full sm:w-auto group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 50"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                  }}
                >
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "cyan", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "purple", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <motion.rect
                    x="1"
                    y="1"
                    width="198"
                    height="48"
                    rx="24"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                    }}
                  />
                </motion.svg>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black rounded-full sm:w-auto"
                  role="button"
                >
                  Explore Now
                </a>
              </motion.div>
            </div>
          </div>

          <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
              <svg
                className="blur-3xl filter"
                style={{ filter: "blur(64px)" }}
                width="645"
                height="413"
                viewBox="0 0 645 413"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z"
                  fill="url(#d)"
                />
                <defs>
                  <linearGradient
                    id="d"
                    x1="665.741"
                    y1="178.506"
                    x2="296.286"
                    y2="474.62"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "var(--color-cyan-500)" }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "var(--color-purple-500)" }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Animasi gambar muncul dari atas */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <img
                className="relative w-full max-w-5xl mx-auto rounded-lg opacity-75"
                src={kartar}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
