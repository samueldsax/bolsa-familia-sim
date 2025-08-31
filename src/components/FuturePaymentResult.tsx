// Salve este código em: my-bolsa-familia-sim/src/components/FuturePaymentResult.tsx

import React from 'react';
import type { ResultData } from './FuturePaymentSimulator';

// Formata um número para o formato de moeda BRL (R$)
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

/**
 * Componente para exibir os resultados do simulador de pagamentos futuros.
 *
 * @param data - Os dados do resultado a serem exibidos.
 * @returns {JSX.Element} O elemento JSX que representa os cards de resultado.
 */
const FuturePaymentResult: React.FC<{ data: ResultData }> = ({ data }) => {
  const { currentBenefit, simulatedBenefit, difference, eligibility } = data;

  // Determina a cor do card de diferença (verde para aumento, vermelho para diminuição)
  const differenceColor = difference >= 0 ? 'text-green-500' : 'text-red-500';
  const differenceSign = difference > 0 ? '+' : '';

  return (
    <div className="mt-12 space-y-8">
      {/* Exibe o card de elegibilidade */}
      <div className={`p-6 rounded-xl text-center text-lg font-semibold shadow-md ${eligibility ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`} role="alert">
        {eligibility ? '✅ Sua família é elegível para o Bolsa Família com a renda informada.' : '❌ Sua família não atende ao critério de renda per capita.'}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card do Valor Atual Estimado */}
        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-white mb-2">Valor Atual Estimado</h4>
          <p className="text-4xl font-bold text-blue-400">
            {formatCurrency(currentBenefit)}
          </p>
        </div>

        {/* Card do Valor Simulado */}
        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-white mb-2">Valor Simulado</h4>
          <p className="text-4xl font-bold text-purple-400">
            {formatCurrency(simulatedBenefit)}
          </p>
        </div>

        {/* Card da Diferença */}
        <div className="bg-[#1e1325] p-6 rounded-2xl border border-purple-800 flex flex-col items-center text-center">
          <h4 className="text-xl font-semibold text-white mb-2">Diferença</h4>
          <p className={`text-4xl font-bold ${differenceColor}`}>
            {differenceSign}{formatCurrency(difference)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FuturePaymentResult;
