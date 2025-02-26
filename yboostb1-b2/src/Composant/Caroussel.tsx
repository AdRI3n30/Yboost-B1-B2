import React, { useState, useEffect } from 'react';

const Caroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://imgs.search.brave.com/zKBLgkPqkaoe9lu5kS9EJlUdBSPPOW7tnDuA-0_HglU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMjE1ODIwMTIy/Mi5qcGc",
    "https://imgs.search.brave.com/3cLUMmFbGSoL8WMRs5eOXcc1rQEH9wB_K_1yNAu-63s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzgzLzIzLzgx/LzM2MF9GXzk4MzIz/ODExNl80OG1OZnl2/SzlFWGJVMHlrWXZt/YmR5ZHl2MGFxSFVl/Vi5qcGc",
    "https://imgs.search.brave.com/_8kl_Czv2EYgTEJEZuHzjR0vekGFNQOdvRLjK06MT4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM2/MTc5OTk0L2ZyL3Bo/b3RvL2ltYWdlLW1p/Y3Jvc2NvcGlxdWUt/ZGUtbnltcGglQzMl/QTllLWRlLWxhLXRp/Z2UtZGFxdXN0aW8u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVF6RDZfUTEwWEIz/d05PSzhaemUzcnVk/QTM4RVVtVzJJamNE/UTkxalpOU2s9",
  ];

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => getCircularIndex(prevIndex + 1, images.length));
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex justify-center items-center overflow-hidden">
      <div className="relative flex justify-center items-center gap-4 w-[70%]">
        {images.map((image, index) => {
          const position = getCircularIndex(index - currentIndex, images.length);

          // Calcul de la taille, opacité et translation en fonction de la position
          const size = position === 1 ? 'scale-110' : 'scale-90';
          const opacity = position === 1 ? 'opacity-100' : 'opacity-80';
          const translate = position === 0 
            ? '-translate-x-[130%]' 
            : position === 2 
            ? 'translate-x-[130%]' 
            : 'translate-x-0';

          // Uniformisation du z-index pour toutes les images
          const zIndex = position === 1 ? 'z-30' : 'z-20';

          return (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className={`absolute transition-transform transition-opacity duration-1000 ease-in-out object-cover rounded-lg shadow-lg 
                ${size} ${zIndex} ${opacity} ${translate}
              `}
              style={{
                width: position === 1 ? '320px' : '280px',
                height: position === 1 ? '420px' : '370px',
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out, z-index 1s',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Caroussel;
