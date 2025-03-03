import React from 'react';
import { Droplet } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="pocetna" className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Droplet size={64} className="text-blue-200" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Водовод села Шебет</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Животна линија нашег села и темељ заједнице
        </p>
        <div className="text-2xl md:text-3xl font-bold animate-pulse">
          Чиста вода за све
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a 
            href="#o-vodovodu" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors"
          >
            Сазнај више
          </a>
          <a 
            href="#galerija" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Погледај галерију
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;