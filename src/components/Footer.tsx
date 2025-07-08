import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 text-gray-600 text-sm text-center mt-10">
      <div className="max-w-4xl mx-auto px-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} Calculadora Bolsa Família. Todos os direitos reservados a xirvo.</p>
        <div className="flex flex-wrap justify-center space-x-4">
          <a href="https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gov.br/bolsafamilia</a>
          <a href="https://cadunico.dataprev.gov.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">cadunico.dataprev.gov.br</a>
          <a href="https://www.caixa.gov.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">caixa.gov.br</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;