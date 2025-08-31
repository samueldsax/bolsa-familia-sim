// Salve este código em: my-bolsa-familia-sim/src/App.tsx

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FuturePaymentSimulator from './components/FuturePaymentSimulator';

/**
 * Componente principal da aplicação.
 * O layout foi completamente redesenhado para replicar o visual das imagens.
 * O design agora possui um fundo gradiente de azul e roxo, e todos os elementos
 * são centralizados e organizados em cards.
 *
 * @returns {JSX.Element} O elemento JSX que representa a aplicação completa.
 */
const App: React.FC = () => {
  // Estado para controlar a página atual, pode ser 'home' ou 'simulador'
  const [currentPage, setCurrentPage] = useState<'home' | 'simulador'>('home');

  return (
    // Container principal com fundo gradiente e a fonte 'Poppins'.
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-poppins flex flex-col items-center antialiased">
      {/*
        Comentário para SEO:
        As meta tags de SEO, como <title> e <meta name="description">,
        devem ser adicionadas no arquivo public/index.html.
      */}

      {/* Renderiza o novo cabeçalho */}
      <Header />

      {/*
        Área principal de conteúdo com padding generoso para um visual mais limpo.
      */}
      <main className="flex-grow w-full max-w-4xl px-4 py-12 md:px-8 lg:px-12">
        {/* Usamos um switch para exibir a página correta com base no estado `currentPage` */}
        {(() => {
          switch (currentPage) {
            case 'home':
              return (
                <>
                  <Hero />
                  <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20 mt-12 transform transition-all duration-300 hover:shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Simulador de Elegibilidade</h2>
                    <Calculator />
                  </section>
                  <div className="text-center mt-8">
                    <button
                      onClick={() => setCurrentPage('simulador')}
                      className="py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg
                               bg-gradient-to-r from-purple-500 to-blue-600
                               hover:from-purple-600 hover:to-blue-700
                               focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75
                               transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      Ir para o Simulador de Futuros Pagamentos
                    </button>
                  </div>
                </>
              );
            case 'simulador':
              // O componente FuturePaymentSimulator só espera a prop `onGoBack`
              return <FuturePaymentSimulator onGoBack={() => setCurrentPage('home')} />;
            default:
              return null;
          }
        })()}
      </main>

      {/* Renderiza o rodapé */}
      <Footer />
    </div>
  );
};

export default App;
