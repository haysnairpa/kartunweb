import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { motion } from "framer-motion"; // Import Framer Motion

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";

const Gallery = () => {
  const { year } = useParams();
  const location = useLocation();

  const title = location.state?.title || localStorage.getItem("title") || "Default Title";

  let data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
  ];

  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const getImg = (img) => {
    setModalImg(img);
    setModal(true);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  const imageVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0,}
  }

  const generateFloatingAnimation = () => {
    const yOffset = Math.random() * 10 + 5; // Random vertical offset between 5px and 15px
    const rotateOffset = Math.random() * 2 - 1; // Random rotate between -1deg and 1deg
    const scaleOffset = Math.random() * 0.02 + 0.98; // Random scale between 0.98 and 1.02

    return {
      y: [0, -yOffset, 0], // Random floating direction
      rotate: [0, rotateOffset, -rotateOffset, 0], // Random rotation
      scale: [1, scaleOffset, 1], // Random scaling effect
    };
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-center font-bold mb-4">{title}</h1>
      <p className="text-center mb-5">See one of our documentation for {year}.</p>

      {/* Modal for displaying the clicked image */}
      <motion.div
        initial="hidden"
        animate={modal ? "visible" : "hidden"}
        variants={modalVariants}
        className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70 transition-transform duration-500 ease-in-out ${
          modal ? "z-50 opacity-100 visible scale-100" : "opacity-0 invisible scale-0"
        }`}
      >
        <img src={modalImg} className="max-w-full max-h-full object-contain" />
        <CloseRoundedIcon
          onClick={() => setModal(false)}
          className="fixed top-2 right-2 w-8 h-8 p-1 bg-black/40 text-white cursor-pointer"
        />
      </motion.div>

      {/* Gallery grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {data.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => getImg(item.img)}
            className=" mb-4 cursor-pointer"
            variants={imageVariants}
            initial='hidden'
            animate='visible'
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              type: 'spring',
              stiffness: 100, // control spring stiffness
              damping: 15, // control spring damping
              ease: 'easeInOut'
            }}
          >
            <motion.img
              src={item.img}
              alt={`image ${index}`}
              className="w-full h-full object-cover transition-all hover:scale-110 "
              animate={generateFloatingAnimation()}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
