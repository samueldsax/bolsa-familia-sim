import React from 'react';

/** 
 * @returns {JSX.Element} 
 */
const Header: React.FC = () => {
  return (
    <header className="w-full bg-white py-4 shadow-sm text-gray-900">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">Calculadora Bolsa Família 2025</h1>
      </div>
    </header>
  );
};

export default Header;
