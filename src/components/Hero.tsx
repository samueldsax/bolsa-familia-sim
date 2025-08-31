// Salve este código em: my-bolsa-familia-sim/src/components/Hero.tsx

import React from 'react';

/**
 * Componente da seção introdutória.
 * Apresenta as informações em cards visuais e atraentes, replicando o design da imagem.
 *
 * @returns {JSX.Element} O elemento JSX que representa a seção Hero.
 */
const Hero: React.FC = () => {
  return (
    <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-center">
        Como Funciona o Bolsa Família 2025
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center">
        O programa Bolsa Família, atualmente em vigor no Brasil, é destinado a famílias em situação de pobreza ou extrema pobreza. Para ter direito ao benefício, é necessário atender a critérios relacionados à renda, cadastro social e compromissos com a saúde e a educação.
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">Critérios de Elegibilidade</h3>
      {/* Grid com cards para os pontos-chave, cada um com um ícone */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Ponto 1: Renda */}
        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <div className="text-blue-400 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V9m0 3v2m0 3v2m0-7a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Renda Per Capita</h4>
          <p className="text-gray-400 text-sm">Até R$ 218 por pessoa na família</p>
          <p className="text-gray-500 text-xs mt-2">Ex: Família com 5 pessoas e renda de R$ 1.090 = R$ 218 per capta</p>
        </div>

        {/* Ponto 2: Cadastro */}
        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <div className="text-blue-400 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Cadastro Único</h4>
          <p className="text-gray-400 text-sm">Estar inscrito no CadÚnico atualizado</p>
          <p className="text-gray-500 text-xs mt-2">Cadastro deve ser feito presencialmente no CRAS</p>
        </div>

        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <div className="text-blue-400 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v9.584m-4.5-4.636l4.5 4.5 4.5-4.5M12 21.253a9.253 9.253 0 110-18.5 9.253 9.253 0 010 18.5z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Educação</h4>
          <p className="text-gray-400 text-sm">Crianças frequentando escola regularmente</p>
          <p className="text-gray-500 text-xs mt-2">Assiduidade escolar é obrigatória</p>
        </div>

        {/* Ponto 4: Saúde */}
        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <div className="text-blue-400 text-3xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">Saúde</h4>
          <p className="text-gray-400 text-sm">Vacinação em dia e pré-natal para gestantes</p>
          <p className="text-gray-500 text-xs mt-2">Carteira de vacinação atualizada</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
