import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Извор водовода на планини изнад села Шебет",
      location: "Извор"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Главни резервоар за воду капацитета 50.000 литара",
      location: "Резервоар"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1584824388878-91a76c1dc4e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Централна пумпна станица која обезбеђује притисак у мрежи",
      location: "Пумпна станица"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1543674892-7d64d45facad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Јавна чесма у центру села - омиљено место окупљања",
      location: "Јавна чесма"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1588796388882-a634d398a6e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Лабораторија за контролу квалитета воде",
      location: "Лабораторија"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Мештани током акције одржавања водоводне мреже",
      location: "Одржавање"
    }
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="galerija" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Галерија водовода</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64">
                <img 
                  src={photo.src} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="text-white font-bold">{photo.location}</div>
                </div>
              </div>
              <div className="p-4 bg-gray-50">
                <p className="text-gray-800">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={goToPrevious}
            >
              <ChevronLeft size={32} />
            </button>
            
            <div className="max-w-4xl max-h-[80vh] relative">
              <img 
                src={photos[currentPhotoIndex].src} 
                alt={photos[currentPhotoIndex].caption} 
                className="max-h-[70vh] max-w-full"
              />
              <div className="text-white text-center mt-4 text-xl">
                {photos[currentPhotoIndex].caption}
              </div>
            </div>
            
            <button 
              className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
              onClick={goToNext}
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;