import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          K6 EKONOMI
        </h2>

        <nav className="hidden sm:flex space-x-6 text-gray-600 font-medium">
          <a href="#definisi" className="hover:text-gray-900 transition">
            Definisi
          </a>
          <a href="#prinsip" className="hover:text-gray-900 transition">
            Prinsip
          </a>
          <a href="#ciri" className="hover:text-gray-900 transition">
            Ciri-ciri
          </a>
          <a href="#tujuan" className="hover:text-gray-900 transition">
            Tujuan
          </a>
          <a href="#kelebihan" className="hover:text-gray-900 transition">
            Kelebihan
          </a>
          <a href="#kekurangan" className="hover:text-gray-900 transition">
            Kekurangan
          </a>
        </nav>

        {/* Tombol menu (mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-gray-800 px-4 py-4 space-y-2">
          <a href="#definisi" className="block text-white transition-colors" onClick={() => setIsOpen(false)}>Definisi</a>
          <a href="#prinsip" className="block text-white transition-colors" onClick={() => setIsOpen(false)}>Prinsip</a>
          <a href="#ciri" className="block text-white transition-colors" onClick={() => setIsOpen(false)}>Ciri-ciri</a>
          <a href="#tujuan" className="block text-white transition-colors" onClick={() => setIsOpen(false)}>Tujuan</a>
          <a href="#kelebihan" className="block text-white transition-colors" onClick={() => setIsOpen(false)}>Kelebihan</a>
          <a href="#Kekurangan" className="block text-white transition-colors" onClick={() => setIsOpen(false)}>Kekurangan</a>
        </nav>
      )}

    </header>
  );
};

export default Header;