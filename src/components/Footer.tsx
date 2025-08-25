// Salve este código em: my-bolsa-familia-sim/src/components/Footer.tsx

import React from 'react';

/**
 * Componente de rodapé com design minimalista, adaptado ao tema escuro.
 *
 * @returns {JSX.Element} O elemento JSX que representa o rodapé.
 */
const Footer: React.FC = () => {
  return (
    // Rodapé com fundo cinza escuro, borda superior sutil e texto claro.
    <footer className="w-full bg-[#1e1325] py-8 text-gray-400 text-sm text-center mt-12 border-t border-purple-800">
      {/* Container interno para centralizar o conteúdo. */}
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Parágrafo de direitos autorais. */}
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Calculadora Bolsa Família. Todos os direitos reservados a xirvo.
        </p>
        <p className="text-xs text-gray-500">Este site não é oficial do governo. As informações são baseadas em fontes públicas oficiais.</p>
        {/* Links para sites oficiais, estilizados para o tema escuro. */}
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <a href="https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia" target="_blank" rel="noopener noreferrer" className="py-2 px-4 rounded-xl border border-purple-800 text-blue-400 hover:underline hover:text-blue-500 transition-colors duration-200">gov.br/bolsafamilia</a>
          <a href="https://cadunico.dataprev.gov.br/" target="_blank" rel="noopener noreferrer" className="py-2 px-4 rounded-xl border border-purple-800 text-blue-400 hover:underline hover:text-blue-500 transition-colors duration-200">cadunico.dataprev.gov.br</a>
          <a href="https://www.caixa.gov.br/" target="_blank" rel="noopener noreferrer" className="py-2 px-4 rounded-xl border border-purple-800 text-blue-400 hover:underline hover:text-blue-500 transition-colors duration-200">caixa.gov.br</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
