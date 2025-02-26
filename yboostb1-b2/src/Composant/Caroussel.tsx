import React, { useState, useEffect } from 'react';

const Caroussel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const images = [
    "https://imgs.search.brave.com/zKBLgkPqkaoe9lu5kS9EJlUdBSPPOW7tnDuA-0_HglU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvRnJl/ZVBob3Rvcy9GcmVl/LVBob3RvLTc0MHg0/OTItMjE1ODIwMTIy/Mi5qcGc",
    "https://imgs.search.brave.com/3cLUMmFbGSoL8WMRs5eOXcc1rQEH9wB_K_1yNAu-63s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA5LzgzLzIzLzgx/LzM2MF9GXzk4MzIz/ODExNl80OG1OZnl2/SzlFWGJVMHlrWXZt/YmR5ZHl2MGFxSFVl/Vi5qcGc",
    "https://imgs.search.brave.com/_8kl_Czv2EYgTEJEZuHzjR0vekGFNQOdvRLjK06MT4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjM2/MTc5OTk0L2ZyL3Bo/b3RvL2ltYWdlLW1p/Y3Jvc2NvcGlxdWUt/ZGUtbnltcGglQzMl/QTllLWRlLWxhLXRp/Z2UtZGFxdXN0aW8u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVF6RDZfUTEwWEIz/d05PSzhaemUzcnVk/QTM4RVVtVzJJamNE/UTkxalpOU2s9",
  ];

  const links = [
    "https://example.com/page1",  
    "https://example.com/page2",  
    "https://example.com/page3",  
  ];

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => getCircularIndex(prevIndex + 1, images.length));
    }
  };

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => getCircularIndex(prevIndex - 1, images.length));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500); // Délai correspondant à la durée de la transition
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className='absolute bg-black flex h-full w-full justify-center items-center gap-4 overflow-hidden pt-16'>
      <div className='absolute w-100 h-100 font-bold text-white top-[20%] text-xl'>
      Bienvenue sur Cocktail Paradise
      </div>

      {/* Image à gauche */}
      <a href={links[getCircularIndex(currentIndex + 1, images.length)]} target="_blank" rel="noopener noreferrer">
        <img
          src={images[getCircularIndex(currentIndex + 1, images.length)]}
          alt="carousel"
          className="w-48 h-64 object-cover rounded-lg box-shadow-[0,0,0,rgb(147, 0, 0)]"
        />
      </a>

      {/* Image centrale */}
      <a href={links[getCircularIndex(currentIndex, images.length)]} target="_blank" rel="noopener noreferrer">
        <img
          src={images[getCircularIndex(currentIndex, images.length)]}
          alt="carousel"
          className="w-56 h-80 object-cover rounded-lg"
        />
      </a>

      {/* Image à droite */}
      <a href={links[getCircularIndex(currentIndex - 1, images.length)]} target="_blank" rel="noopener noreferrer">
        <img
          src={images[getCircularIndex(currentIndex - 1, images.length)]}
          alt="carousel"
          className="w-48 h-64 object-cover rounded-lg"
        />
      </a>
      <div className='absolute w-100 h-100 flex justify-center text-center items-center font-bold text-white mt-[100%] text-xl'>
      Découvrez nos cocktails les plus savoureux
      </div>
    </div>
  );
};

export default Caroussel;