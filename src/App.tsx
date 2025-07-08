// Salve este código em: my-bolsa-familia-sim/src/App.tsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

/**
 * @returns {JSX.Element}
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center">
      <Header />
      <main className="flex-grow w-full max-w-4xl px-4 py-8 md:px-8 lg:px-12">
        <Hero />

        <section className="bg-white p-6 md:p-8 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">Simulador de Elegibilidade</h2>
          <Calculator />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
