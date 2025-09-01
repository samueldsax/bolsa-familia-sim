// Salve este código em: my-bolsa-familia-sim/src/App.tsx

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FuturePaymentSimulator from './components/FuturePaymentSimulator';
import CalendarPage from './components/CalendarPage';
import NewsPage from './components/NewsPage';

/**
 * Componente principal da aplicação.
 * Este componente gerencia a navegação entre as diferentes páginas da aplicação
 * usando o estado `currentPage` para simular as rotas.
 *
 * @returns {JSX.Element} O elemento JSX que representa a aplicação completa.
 */
const App: React.FC = () => {
  // Estado para controlar a página atual, pode ser 'home', 'simulador', 'calendario' ou 'noticias'
  const [currentPage, setCurrentPage] = useState<'home' | 'simulador' | 'calendario' | 'noticias'>('home');

  return (
    // Container principal com fundo gradiente e a fonte 'Poppins'.
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-poppins flex flex-col items-center antialiased">
      {/* O Header agora recebe a função para mudar a página */}
      <Header setCurrentPage={setCurrentPage} />

      {/* Área principal de conteúdo com padding generoso para um visual mais limpo. */}
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
                </>
              );
            case 'simulador':
              // O componente FuturePaymentSimulator só espera a prop `onGoBack`
              return <FuturePaymentSimulator onGoBack={() => setCurrentPage('home')} />;
            case 'calendario':
              return <CalendarPage />;
            case 'noticias':
              return <NewsPage />;
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
