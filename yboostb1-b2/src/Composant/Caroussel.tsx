import React, { useState, useEffect, useRef } from "react";

const Carousel = () => {
  const images = [
    "https://cdn-ikphhgl.nitrocdn.com/MDXiwuZNYFhpWkyKZnkUxOYMelioZPnB/assets/images/optimized/rev-e2def49/www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-tropical-kamasutra.jpg",
    "https://www.villaschweppes.com/app/uploads/2019/01/20736-le-cocktail-green-river-orig-3-683x1024.jpg",
    "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/recette/16x9/cocktail-sangria-noel.JPEG",
    "https://www.liquor.com/thmb/IjKQql6LcjTyCWuqbi_aMicEL6c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/whiskey-smash-720x720-recipe-c696cdf017494dbd981e51dca3f4402e.jpg",
    "https://img.cuisineaz.com/1024x768/2017/08/08/i131418-punch-des-iles-curacao-rondelles-d-orange-menthe-fraiche-et-cerises-confites.jpeg",
    "https://cdn-ikphhgl.nitrocdn.com/MDXiwuZNYFhpWkyKZnkUxOYMelioZPnB/assets/images/optimized/rev-e2def49/www.destinationcocktails.fr/wp-content/uploads/2018/04/cocktail-manhattan-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const getCircularIndex = (index) => {
    return (index + images.length) % images.length;
  };

  const next = () => {
    setCurrentIndex((prev) => getCircularIndex(prev + 1));
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex]);

  const visibleImages = [
    images[getCircularIndex(currentIndex)],
    images[getCircularIndex(currentIndex + 1)],
    images[getCircularIndex(currentIndex + 2)],
  ];

  return (
    <div className="w-full h-[500px] bg-black flex items-center justify-center overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: "translateX(0%)",
          width: "900px",
        }}
      >
        {visibleImages.map((src, idx) => (
          <div
            key={idx}
            className="w-[300px] h-[400px] mx-4 flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={src}
              alt={`cocktail-${idx}`}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
