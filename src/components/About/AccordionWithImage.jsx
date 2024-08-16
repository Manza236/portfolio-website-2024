import React, { useState } from 'react';


// Import images from the assets folder
import programmingImage from "../../assets/programming-professionals.webp";
import eeeImage from "../../assets/eee-professionals.webp";
import civilImage from "../../assets/civil-professionals.webp";
import biomedicalImage from "../../assets/bio-medical-professionals.webp";
//Mechanical 

//Agriculture 

export default function AccordionWithImage() {
  const [isOpen, setIsOpen] = useState(null);
  const toggle = (currentIdx) => setIsOpen((prevIdx) => (prevIdx === currentIdx ? null : currentIdx));

  const slidersInfo = [
    { img: programmingImage, title: "CSE", des: "The most dangerous phrase in the language is, 'We've always done it this way' by Grace Hopper" },
    { img: eeeImage, title: "EEE", des: "The present is theirs; the future, for which I really worked, is mine by Nikola Tesla" },
    { img: civilImage, title: "CIVIL", des: "The road to success is always under construction. - Lily Tomlin" },
    { img: biomedicalImage, title: "Bio-Medical", des: "The purpose of biomedical engineering is to improve the quality of human health and life. - Unknown" },
  ];

  return (
    <div className="flex justify-center gap-4 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8 rounded-3xl">
      {slidersInfo.map((slide, idx) => (
        <div
          onClick={() => toggle(idx)}
          className={`relative h-[600px] rounded-3xl bg-gray-200 shadow-lg transition-all duration-500 ease-in-out ${isOpen === idx ? 'w-[300px] md:w-[400px]' : 'w-[100px]'}`}
          key={idx}
        >
          <img width={640} height={540} className="h-full rounded-3xl object-cover shadow-inner" src={slide.img} alt="accordion navigate ui" />
          <img
            width={64}
            height={64}
            className={`absolute bottom-5 border border-white transition-all duration-500 shadow-md md:border-2 ${isOpen === idx ? 'left-4' : 'left-1/2 -translate-x-1/2 duration-700'} h-10 w-10 rounded-full object-cover md:h-[50px] md:w-[50px]`}
            src={slide.img}
            alt="accordion navigate ui"
          />
          <div className={`absolute bottom-5 left-[45%] text-white transition-all duration-300 md:left-[100px] ${isOpen === idx ? 'opacity-100' : 'opacity-0 '}`}>
            <h3 className="text-lg font-semibold md:text-3xl bg-black bg-opacity-50 p-1 rounded-lg">${slide.title}</h3>
            <p className="text-sm md:text-xl bg-black bg-opacity-50 p-1 rounded-lg">${slide.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
