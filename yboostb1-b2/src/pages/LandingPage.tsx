import React, { useEffect, useState } from 'react';
import { GlassWater as GlassCheers } from 'lucide-react';
import '../styles/animations.css';

const LandingPage: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [hover, setHover] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; tx: number; ty: number }>>([]);

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);

    // Create particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      tx: (Math.random() - 0.5) * 200,
      ty: (Math.random() - 0.5) * 200
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="landing-container relative min-h-screen bg-gradient-to-br from-black via-zinc-900 to-amber-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bubbles */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 10}s`
            }}
          />
        ))}
        
        {/* Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              '--tx': `${particle.tx}px`,
              '--ty': `${particle.ty}px`,
              animationDelay: `${Math.random() * 5}s`
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Glass bottle silhouette */}
      <div className="absolute right-0 bottom-0 opacity-10 w-1/2 h-3/4">
        <div className="bottle-shape" />
      </div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 text-center">
        <div className={`transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <GlassCheers className="mx-auto h-16 w-16 text-amber-500 mb-6 animate-float" />
        </div>

        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
          <span className={`block overflow-hidden transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            <span className="block">Shake</span>
          </span>
          <span className={`block text-amber-500 overflow-hidden transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
            <span className="block">Labs</span>
          </span>
        </h1>

        <div className={`mt-6 max-w-2xl text-zinc-300 text-lg sm:text-xl transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '600ms'}}>
          <p className="leading-relaxed">
            L'art de la mixologie rencontre l'innovation.
            <br />Préparez-vous à vivre une expérience sensorielle unique.
          </p>
        </div>

        <div className={`mt-10 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '800ms'}}>
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => window.location.href = '/home'}
            className={`relative group bg-amber-600 hover:bg-amber-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 overflow-hidden ${hover ? 'pr-12' : 'pr-8'}`}
          >
            <span className="relative z-10">
              Découvrir l'expérience
            </span>
            <span className={`absolute right-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${hover ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'}`}>
              →
            </span>
            <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent`}></div>
          </button>
        </div>

        <div className={`mt-16 transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '1000ms'}}>
          <p className="text-zinc-500 text-sm">
            © 2025 ShakeLabs. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-amber-700/30 rounded-tl-md" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-amber-700/30 rounded-br-md" />
    </div>
  );
};

export default LandingPage;