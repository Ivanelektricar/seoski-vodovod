import React from 'react';
import { Menu, X, Droplet } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Droplet className="mr-2" />
          <h1 className="text-2xl font-bold">Водовод Шебет</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#pocetna" className="hover:text-blue-200 transition-colors">Почетна</a>
          <a href="#o-vodovodu" className="hover:text-blue-200 transition-colors">О водоводу</a>
          <a href="#istorija" className="hover:text-blue-200 transition-colors">Историја</a>
          <a href="#kvalitet" className="hover:text-blue-200 transition-colors">Квалитет воде</a>
          <a href="#galerija" className="hover:text-blue-200 transition-colors">Галерија</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#pocetna" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              Почетна
            </a>
            <a 
              href="#o-vodovodu" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              О водоводу
            </a>
            <a 
              href="#istorija" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              Историја
            </a>
            <a 
              href="#kvalitet" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              Квалитет воде
            </a>
            <a 
              href="#galerija" 
              className="text-white hover:text-blue-200 transition-colors"
              onClick={toggleMobileMenu}
            >
              Галерија
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;