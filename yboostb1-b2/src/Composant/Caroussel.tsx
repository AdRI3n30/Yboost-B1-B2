import React, { useState, useEffect, useRef } from "react";
import Items_cocktails from "./Items_cocktails.tsx"; // adapte le chemin si nécessaire

const Carousel = () => {
  // Nombre de composants à afficher dans le carrousel
  const totalItems = 6;

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const timeoutRef = useRef(null);

  const getCircularIndex = (index) => {
    return (index + totalItems) % totalItems;
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

  const visibleItems = [
    getCircularIndex(currentIndex),
    getCircularIndex(currentIndex + 1),
    getCircularIndex(currentIndex + 2),
  ];

  return (
    <div className="w-full h-[500px] bg-black flex items-center justify-center overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: "translateX(0%)",
          width: "1000px",
        }}
      >
        {visibleItems.map((idx) => (
          <div
            key={idx}
            className="w-[300px] h-[400px] mx-6 flex-shrink-0 flex items-center justify-center"
          >
            <Items_cocktails />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
