import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Feature from "./components/Feature";
import Tab from "./components/Tab";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import EventDetail from "./components/EventDetail";

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
                  <Hero />
                  <Who />
                  <Feature />
                  <h2 className="text-3xl text-center font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
                    Our Activities
                  </h2>
                  <p className="mt-4 text-base text-center leading-7 text-gray-600 sm:mt-8 font-pj">
                    See out activities in the last year
                  </p>
                  <Tab />
                </>
              }
            />
            <Route path="/documentation/:year/:title" element={<Gallery />} />
            <Route path="/eventdetail/:title" element={<EventDetail/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
