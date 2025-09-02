// Salve em: src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import FuturePaymentSimulator from './components/FuturePaymentSimulator';
import CalendarPage from './components/CalendarPage';
import NewsPage from './components/NewsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'simulador' | 'calendario' | 'noticias'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-200 font-poppins flex flex-col items-center antialiased">
      <Header setCurrentPage={setCurrentPage} />

      <main className="flex-grow w-full max-w-4xl px-4 py-12 md:px-8 lg:px-12">
        {(() => {
          switch (currentPage) {
            case 'home':
              return (
                <>
                  <Hero />
                  <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20 mt-12 transform transition-all duration-300 hover:shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
                      Simulador de Elegibilidade
                    </h2>
                    <Calculator />

                <div className="mt-8 flex justify-center">
                <button
                 onClick={() => setCurrentPage('simulador')}
                className="w-full py-3 rounded-md font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-colors"
               >
                Abrir Simulador de Futuros Pagamentos
               </button>
               </div>
                  </section>
                </>
              );
            case 'simulador':
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

      <Footer />
    </div>
  );
};

export default App;
