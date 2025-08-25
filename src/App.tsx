// Salve este código em: my-bolsa-familia-sim/src/App.tsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

/**
 * Componente principal da aplicação.
 * O layout foi completamente redesenhado para replicar o visual das imagens.
 * O design agora possui um fundo gradiente de azul e roxo, e todos os elementos
 * são centralizados e organizados em cards.
 *
 * @returns {JSX.Element} O elemento JSX que representa a aplicação completa.
 */
const App: React.FC = () => {
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
        {/* Renderiza a seção introdutória (Hero) */}
        <Hero />

        {/*
          Seção da calculadora com um card elegante e bordas arredondadas.
          O fundo é sutilmente mais claro que o corpo da página.
        */}
        <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20 mt-12 transform transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Simulador de Elegibilidade</h2>
          {/* Renderiza o componente da calculadora */}
          <Calculator />
        </section>
      </main>

      {/* Renderiza o rodapé */}
      <Footer />
    </div>
  );
};

export default App;
