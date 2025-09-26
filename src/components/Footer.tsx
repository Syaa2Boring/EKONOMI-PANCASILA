import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">Ekonomi Pancasila</h1>
          <p className="text-gray-400 text-sm">Dibuat oleh Kelompok 6 Ekonomi dari Kelas X-2.</p>
        </div>

        <div className="flex space-x-6">
          <a href="#definisi" className="hover:text-gray-300 transition-colors">Definisi</a>
          <a href="#prinsip" className="hover:text-gray-300 transition-colors">Prinsip</a>
          <a href="#ciri" className="hover:text-gray-300 transition-colors">Ciri-ciri</a>
          <a href="#tujuan" className="hover:text-gray-300 transition-colors">Tujuan</a>
          <a href="#kelebihan" className="hover:text-gray-300 transition-colors">Kelebihan</a>
          <a href="#kekurangan" className="hover:text-gray-300 transition-colors">Kekurangan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;