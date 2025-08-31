// Salve este código em: my-bolsa-familia-sim/src/components/FuturePaymentSimulator.tsx

import React, { useState } from 'react';
import FuturePaymentForm from './FuturePaymentForm';
import FuturePaymentResult from './FuturePaymentResult';

// Definições de tipos para os dados do formulário e do resultado
export interface FormData {
  income: number;
  people: number;
  dependents: { id: number; age: number }[];
  isPregnant: boolean;
  isStudent: boolean;
}

export interface ResultData {
  currentBenefit: number;
  simulatedBenefit: number;
  difference: number;
  eligibility: boolean;
}

/**
 * Componente da página principal do simulador de pagamentos futuros.
 * Gerencia o estado do formulário e do resultado.
 *
 * @param onGoBack - Função de callback para voltar à página principal.
 * @returns {JSX.Element} O elemento JSX que representa a página do simulador.
 */
const FuturePaymentSimulator: React.FC<{ onGoBack: () => void }> = ({ onGoBack }) => {
  const [resultData, setResultData] = useState<ResultData | null>(null);

  /**
   * Função para lidar com o envio do formulário, calculando e exibindo o resultado.
   * @param data - Os dados do formulário.
   */
  const handleFormSubmit = (data: FormData) => {
    // Regras de Benefício do Bolsa Família (valores fixos para o cálculo)
    const BASE_BENEFIT = 600;
    const CHILD_BENEFIT = 150;
    const DEPENDENT_BENEFIT = 50;
    const PREGNANT_BENEFIT = 50;
    const STUDENT_BENEFIT = 50;
    const INCOME_THRESHOLD = 218;

    // 1. Calcular a elegibilidade baseada na renda per capita
    const incomePerCapita = data.income / data.people;
    const eligibility = incomePerCapita <= INCOME_THRESHOLD;

    // 2. Calcular o benefício atual
    let currentBenefit = BASE_BENEFIT;
    const children_0_6 = data.dependents.filter(d => d.age >= 0 && d.age <= 6).length;
    const children_7_18 = data.dependents.filter(d => d.age >= 7 && d.age <= 18).length;

    currentBenefit += children_0_6 * CHILD_BENEFIT;
    currentBenefit += children_7_18 * DEPENDENT_BENEFIT;
    if (data.isPregnant) currentBenefit += PREGNANT_BENEFIT;
    if (data.isStudent) currentBenefit += STUDENT_BENEFIT;
    
    // Se a família não for elegível, o benefício é 0
    if (!eligibility) {
        currentBenefit = 0;
    }


    // 3. Simular o valor futuro (exemplo: adicionando um dependente 0-6 anos)
    let simulatedBenefit = currentBenefit;
    
    // Supondo que a simulação é para um novo bebê ou alteração na família
    if (eligibility) { // A simulação só faz sentido se a família for elegível
        const simulated_children_0_6 = children_0_6 + 1; // Simular um novo bebê
        const simulated_income = data.income;
        const simulated_people = data.people + 1;
        
        const simulated_income_per_capita = simulated_income / simulated_people;
        const simulated_eligibility = simulated_income_per_capita <= INCOME_THRESHOLD;
        
        if (simulated_eligibility) {
             simulatedBenefit = BASE_BENEFIT;
             simulatedBenefit += simulated_children_0_6 * CHILD_BENEFIT;
             simulatedBenefit += children_7_18 * DEPENDENT_BENEFIT;
             if (data.isPregnant) simulatedBenefit += PREGNANT_BENEFIT;
             if (data.isStudent) simulatedBenefit += STUDENT_BENEFIT;
        } else {
             simulatedBenefit = 0;
        }

    }


    const difference = simulatedBenefit - currentBenefit;

    setResultData({
      currentBenefit,
      simulatedBenefit,
      difference,
      eligibility,
    });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-[#8a5cfc] to-[#4581f9] transition-all duration-300 mb-8">
        Simulador de Futuros Pagamentos
      </h1>
      <section className="bg-[#120a16] p-8 md:p-12 rounded-3xl shadow-xl shadow-purple-950/20 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Simule o Valor</h2>
        <FuturePaymentForm onSubmit={handleFormSubmit} />
        {resultData && <FuturePaymentResult data={resultData} />}
      </section>

      <div className="text-center mt-8 space-x-4">
        <button
          onClick={onGoBack}
          className="py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg
                     bg-gradient-to-r from-blue-500 to-purple-600
                     hover:from-blue-600 hover:to-purple-700
                     focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75
                     transition duration-300 ease-in-out transform hover:scale-105"
        >
          Voltar para a Calculadora
        </button>
      </div>
    </div>
  );
};

export default FuturePaymentSimulator;
