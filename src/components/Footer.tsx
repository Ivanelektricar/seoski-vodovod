import React from 'react';
import { Droplet, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Droplet className="mr-2" />
              <h2 className="text-2xl font-bold">Водовод Шебет</h2>
            </div>
            <p className="text-blue-300">Чиста вода за све</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#pocetna" className="hover:text-blue-300 transition-colors">Почетна</a>
            <a href="#o-vodovodu" className="hover:text-blue-300 transition-colors">О водоводу</a>
            <a href="#istorija" className="hover:text-blue-300 transition-colors">Историја</a>
            <a href="#kvalitet" className="hover:text-blue-300 transition-colors">Квалитет воде</a>
            <a href="#galerija" className="hover:text-blue-300 transition-colors">Галерија</a>
          </div>
        </div>
        
        <hr className="border-blue-700 my-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакт</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+381 xx xxx xxxx</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>vodovod@sebet.rs</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Село Шебет, Србија</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Радно време</h3>
            <p className="mb-2">Канцеларија водовода:</p>
            <p>Понедељак - Петак: 8:00 - 16:00</p>
            <p>Викенд: Затворено</p>
            <p className="mt-2 text-blue-300">За хитне случајеве доступни смо 24/7</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">О нама</h3>
            <p>
              Водовод села Шебет је у власништву и под управом локалне заједнице. 
              Сви приходи се улажу у одржавање и унапређење система.
            </p>
          </div>
        </div>
        
        <div className="text-center text-blue-300">
          <p>&copy; 2025 Водовод села Шебет. Сва права задржана.</p>
          <p className="mt-2">Направљено са ❤️ за нашу заједницу</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;