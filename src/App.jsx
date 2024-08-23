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
