import React, { useState } from 'react';
import img from '../img/img6.jpg'

const tabs = [
  { name: 'Badminton', content: 'Connect your calendar and define your recording automations: channels, AI summary templates, and more.', img: img },
  { name: 'Volly', content: 'Record and share your meetings effortlessly with our integrations.', img: img },
  { name: 'Futsal', content: 'Integrate CRM tools to sync your customer data with meeting insights.', img: img },
  { name: 'Table Tennis', content: 'Collaborate across teams by integrating with popular tools.', img: img },
  { name: 'Karaoke', content: 'Automate your workflow with advanced integrations.', img: img },
];

const Competition = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-black text-white p-8">
      <h2 className="text-4xl font-normal text-center">Competition</h2>
      <p className="text-center text-lg text-gray-400 mb-8">Don't forget to doing some competition to keep up the spirit of strugle.</p>
      
      <div className="flex justify-center mb-8 space-x-4">
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
          <img src={activeTab.img} alt={activeTab.name} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Competition;
