// Salve este código em: my-bolsa-familia-sim/src/components/NewsCard.tsx

import React from 'react';

/**
 * Interface para as propriedades do componente NewsCard.
 */
interface NewsCardProps {
  title: string;
  summary: string;
  link: string;
}

/**
 * Componente de card para exibir uma notícia.
 * @param props - Título, resumo e link da notícia.
 * @returns {JSX.Element} O elemento JSX do card de notícia.
 */
const NewsCard: React.FC<NewsCardProps> = ({ title, summary, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col h-full">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-base mb-4 flex-grow">{summary}</p>
        <div className="mt-auto">
          <span className="text-blue-400 font-semibold hover:underline">
            Leia mais →
          </span>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
