import React, { useState } from "react";
import merdeka from "../assets/2024.jpg";
import lebaran from "../assets/lebaran.jpg";
import { Link } from "react-router-dom";
const Tab = () => {
  const tabs = [
    {
      year: 2024,
      events: [
        {
          imageSrc: merdeka,
          title: "Indonesia Independence Day 2024",
          description: `Our RW recently commemorated Indonesia's 79th Independence Day with a series of engaging events. The morning began with a dignified flag-raising ceremony, attended by residents of all ages. Following the ceremony, a vibrant array of traditional Indonesian games and competitions took place. The afternoon was dedicated to a cultural showcase featuring captivating dance performances and traditional music. To foster a stronger sense of community, a communal feast was held in the evening, allowing neighbors to come together and celebrate.`,
          documentationLink: "/documentation/2024/independence-day",
          eventdetailLink: "/eventdetail/independence-day"
        },
        {
          imageSrc: lebaran,
          title: "Idul Fitri 2024",
          description: `
          The Idul Fitri celebration in RW was full of joy and community spirit. It started with morning prayers at the mosque, followed by a lively street fair. The neighborhood was decorated with colorful lanterns and banners, and the air was filled with the aroma of traditional foods like ketupat and rendang.

          Families and friends came together to share meals, play games, and enjoy treats. Children had fun with craft activities and face painting. The highlight was the communal feast, where everyone gathered to celebrate and enjoy the end of Ramadan together. The event was a heartwarming display of local traditions and togetherness.`,
          documentationLink: "/documentation/2024/lebaran",
        },
      ],
    },
    {
      year: 2025,
      events: [
        {
          imageSrc: "https://via.placeholder.com/400x300.png?text=2025+Image",
          title: "Year-End Celebration 2025",
          description: "This is the description for the year 2025.",
          documentationLink: "/documentation/2025",
        },
      ],
    },
    {
      year: 2026,
      events: [
        {
          imageSrc: "https://via.placeholder.com/400x300.png?text=2026+Image",
          title: "Cultural Festival 2026",
          description: "This is the description for the year 2026.",
          documentationLink: "/documentation/2026",
        },
      ],
    },
    // Add more years as needed
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const toSlug = (str) => {
    return str
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-8 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tabs Section */}
      <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
        <div className="flex flex-row lg:flex-col justify-center lg:justify-start space-x-4 lg:space-x-0 lg:space-y-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 text-lg font-semibold transition-all duration-300 rounded-lg 
                ${
                  selectedTab.year === tab.year
                    ? " text-black border-[2.7px] border-purple-600 p-[2px]"
                    : " text-black border-2 border-gray-700 hover:border-gray-200"
                }
              `}
            >
              {tab.year}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-3/4">
        {selectedTab.events.map((event, index) => (
          <div key={index} className="relative p-6 ">
            <div className="relative overflow-hidden rounded-md shadow-sm mb-4 group">
              <Link
                to={{
                  pathname: `/documentation/${selectedTab.year}/${toSlug(
                    event.title
                  )}`,
                }}
                onClick={() => localStorage.setItem("title", event.title)}
                // href={`documentation/${selectedTab.year}/${toSlug(event.title)}`}
              >
                <img
                  src={event.imageSrc}
                  alt={`Image for ${event.year}`}
                  className="w-full h-full object-cover rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center">
                    <h3 className="text-white text-lg font-semibold">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Click for documentation
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="text-gray-700 text-md font-sans">
              {event.description} 
            </div>
            <button 
            
            className="text-black border border-black rounded-lg p-3">
              <Link
              to={{
                pathname: `/eventdetail/${toSlug(event.title)}`
              }}
              onClick={() => localStorage.setItem("title", event.title)}
              >More Detail</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
