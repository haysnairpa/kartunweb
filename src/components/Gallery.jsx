import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";

const Gallery = () => {
  const { year } = useParams();
  const location = useLocation();
  console.log(location.state)
  //   const { state } = location;

  const title = location.state?.title || localStorage.getItem('title') || "Default Title";

  let data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
  ];

  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const getImg = (img) => {
    setModalImg(img);
    setModal(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl text-center font-bold mb-4">{title}</h1>
      <p className="text-center mb-5">See one of our documentation for {year}.</p>
      <div className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black transition-transform duration-500 ease-in-out  ${modal ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-0"}`}>
        <img src={modalImg} className="max-w-full max-h-full object-contain" />
        <CloseRoundedIcon 
          onClick={() => setModal(false)}
          className="fixed top-2 right-2 w-8 h-8 p-1 bg-black/40 text-white cursor-pointer"
        />
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => getImg(item.img)}
              className="mb-4 cursor-pointer transition-transform duration-350 hover:opacity-80"
            >
              <img
                src={item.img}
                alt={`image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
