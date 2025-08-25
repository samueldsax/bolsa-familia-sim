// Salve este código em: my-bolsa-familia-sim/src/components/Header.tsx

import React from 'react';

/**
 * Componente de cabeçalho.
 * O título utiliza um gradiente vibrante de azul para roxo.
 *
 * @returns {JSX.Element} O elemento JSX que representa o cabeçalho.
 */
const Header: React.FC = () => {
  return (
    <header className="w-full py-12 text-gray-200">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cfc] to-[#4581f9] transition-all duration-300">
          Calculadora Bolsa Família
        </h1>
        <p className="text-lg text-gray-400 mt-4">Como saber se tenho direito ao Bolsa Família (2025)</p>
      </div>
    </header>
  );
};

export default Header;
