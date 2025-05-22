
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-[#4CAF50] px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
      <img 
        src="https://s11.aconvert.com/convert/p3r68-cdx67/u86u2-9e6m1.jpg" 
        alt="Logo Pet Chop Clinic Boa Vida" 
        className="h-[60px]"
      />
      <h1 className="text-white text-2xl font-bold m-0">Pet Chop Clinic Boa Vida</h1>
      <nav className="sm:ml-auto">
        <a 
          href="https://wa.me/244948510101" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white font-semibold hover:text-[#FFB74D] transition-colors ml-0 sm:ml-5 inline-block mr-5 sm:mr-0"
        >
          WhatsApp
        </a>
        <a 
          href="https://www.instagram.com/petshop_angola_animais/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white font-semibold hover:text-[#FFB74D] transition-colors ml-0 sm:ml-5 inline-block mr-5 sm:mr-0"
        >
          Instagram
        </a>
        <a 
          href="mailto:petshopclinicboavida@gmail.com" 
          className="text-white font-semibold hover:text-[#FFB74D] transition-colors ml-0 sm:ml-5 inline-block"
        >
          E-mail
        </a>
      </nav>
    </header>
  );
};
