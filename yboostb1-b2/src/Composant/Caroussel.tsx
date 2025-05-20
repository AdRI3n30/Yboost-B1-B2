import  { useState, useEffect, useRef } from "react";

interface Cocktail {
  Id: number;
  Name: string;
  Descri: string;
  Id_difficulte: string;
  Image: string;
  Ingredients: string;
  Temps: string;
}

const Carousel = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const groupSize = 3;

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await fetch("http://localhost:5000/cocktails");
        const data = await response.json();
        setCocktails(data.slice(0, 6)); 
      } catch (error) {
        console.error("Erreur fetch cocktails", error);
      }
    };

    fetchCocktails();
  }, []);

  const next = () => {
    setCurrentIndex((prev) =>
      (prev + groupSize) % cocktails.length
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      next();
    }, 4000);
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, cocktails]);

  const cardWidth = 300;
  const gap = 40; 
  const slideStep = cardWidth + gap;
  const visibleWidth = groupSize * cardWidth + (groupSize - 1) * gap;

  return (
    <section
      className="overflow-hidden relative mx-auto"
      style={{ width: `${visibleWidth}px`, height: '500px' }}
      aria-label="Carrousel de cocktails"
      role="region"
    >
      <div
        className="flex gap-10 transition-transform duration-700 ease-in-out"
        style={{
          width: `${cocktails.length * slideStep}px`,
          transform: `translateX(-${currentIndex * slideStep}px)`,
        }}
        aria-live="polite"
      >
        {cocktails.map((cocktail) => (
          <div
            key={cocktail.Id}
            className="w-[300px] h-[400px] flex-shrink-0 flex items-center justify-center"
            role="group"
            aria-label={`Cocktail ${cocktail.Name}`}
          >
            <div
              className="flex items-end w-[300px] h-[400px] bg-cover bg-center rounded-[20px] text-end text-white shadow-xl"
              style={{
                backgroundImage: `url(/image_cock/${cocktail.Image})`,
                boxShadow: "inset 0px -100px 46px -24px rgba(0,0,0,0.63)",
              }}
            >
              <a
                href={`/cocktails/${cocktail.Id}`}
                className="relative z-10 block w-full h-full"
                aria-label={`Voir la fiche du cocktail ${cocktail.Name}`}
              >
                <div className="p-5 h-full flex flex-col justify-end text-start">
                  <h2 className="text-xl font-bold mb-1">{cocktail.Name}</h2>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
