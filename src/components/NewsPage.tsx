// Salve este código em: my-bolsa-familia-sim/src/components/NewsPage.tsx

import React from 'react';
import NewsCard from './NewsCard';

// Dados mockados de notícias
const newsData = [
  {
    id: 1,
    title: 'Governo divulga novo calendário de pagamentos do Bolsa Família para 2025',
    summary: 'O Ministério do Desenvolvimento Social publicou o calendário oficial para o ano. Os pagamentos seguirão a ordem do final do número de identificação social (NIS) dos beneficiários. Confira as datas para não perder a sua.',
    link: 'https://www.gov.br/mds/pt-br'
  },
  {
    id: 2,
    title: 'Mudanças nas regras do Bolsa Família: o que você precisa saber',
    summary: 'Novas regulamentações foram aprovadas para a inclusão de famílias em situação de vulnerabilidade. Entenda como as alterações podem afetar sua elegibilidade e os valores recebidos.',
    link: 'https://www.gov.br/mds/pt-br'
  },
  {
    id: 3,
    title: 'Alerta: saiba como se proteger de golpes que usam o nome do Bolsa Família',
    summary: 'Criminosos têm usado o nome do programa para aplicar golpes por meio de links falsos e mensagens de texto. O MDS orienta os beneficiários a ficarem atentos e nunca fornecerem dados pessoais por canais não oficiais.',
    link: 'https://www.gov.br/mds/pt-br'
  },
];

/**
 * Página de notícias.
 * Exibe um título e os cards de notícias.
 *
 * @returns {JSX.Element} O elemento JSX da página de notícias.
 */
const NewsPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cfc] to-[#4581f9] transition-all duration-300 mb-8">
        Notícias Oficiais
      </h1>
      <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Atualizações importantes sobre o programa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map(news => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
