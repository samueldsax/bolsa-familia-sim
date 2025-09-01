// Salve este código em: my-bolsa-familia-sim/src/components/CalendarTable.tsx

import React from 'react';

// Dados mockados do calendário de pagamentos
const calendarData = [
  { nisFinal: 1, date: '18 de Janeiro' },
  { nisFinal: 2, date: '19 de Janeiro' },
  { nisFinal: 3, date: '22 de Janeiro' },
  { nisFinal: 4, date: '23 de Janeiro' },
  { nisFinal: 5, date: '24 de Janeiro' },
  { nisFinal: 6, date: '25 de Janeiro' },
  { nisFinal: 7, date: '26 de Janeiro' },
  { nisFinal: 8, date: '29 de Janeiro' },
  { nisFinal: 9, date: '30 de Janeiro' },
  { nisFinal: 0, date: '31 de Janeiro' },
];

/**
 * Componente que exibe o calendário de pagamentos.
 * Usa um layout de grade responsivo para uma visualização clara.
 *
 * @returns {JSX.Element} O elemento JSX da tabela de calendário.
 */
const CalendarTable: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {calendarData.map((item) => (
        <div key={item.nisFinal} className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center shadow-md">
          <p className="text-2xl font-semibold text-purple-400">NIS Final</p>
          <p className="text-6xl font-extrabold text-blue-400 mt-2">{item.nisFinal}</p>
          <p className="text-xl font-bold text-white mt-4">{item.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CalendarTable;
