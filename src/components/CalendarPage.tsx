// Salve este código em: my-bolsa-familia-sim/src/components/CalendarPage.tsx

import React from 'react';
import CalendarTable from './CalendarTable';

/**
 * Página do calendário de pagamentos do Bolsa Família.
 * Exibe um título e o componente de tabela com as datas.
 *
 * @returns {JSX.Element} O elemento JSX da página do calendário.
 */
const CalendarPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cfc] to-[#4581f9] transition-all duration-300 mb-8">
        Calendário de Pagamentos
      </h1>
      <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Confira as datas de pagamento por NIS</h2>
        <CalendarTable />
      </section>
    </div>
  );
};

export default CalendarPage;
