import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Feature from "./components/Feature";
import Tab from "./components/Tab";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Independence from "./event/Independence";
import IdulAdha from "./event/IdulAdha";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero">
                    <Hero />
                  </section>
                  <section id="who">
                    <Who />
                  </section>
                  <section id="feature">
                    <Feature />
                  </section>
                  <motion.h2
                    className="text-3xl text-center font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                  >
                    Our Activities
                  </motion.h2>
                  <motion.p
                    className="mt-4 text-base text-center leading-7 text-gray-600 sm:mt-8 font-pj"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 2, ease: "easeOut" }}
                  >
                    See out activities in the last year
                  </motion.p>
                  <section id="activities">
                    <Tab />
                  </section>
                </>
              }
            />
            <Route path="/documentation/:year/:title" element={<Gallery />} />
            <Route
              path="/eventdetail/independence-day"
              element={<Independence />}
            />
            <Route path="/eventdetail/idul-adha" element={<IdulAdha />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
