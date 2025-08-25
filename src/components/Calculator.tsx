// Salve este código em: my-bolsa-familia-sim/src/components/Calculator.tsx

import React, { useState } from 'react';

/**
 * Componente da calculadora.
 * Agora os inputs ficam um abaixo do outro em todas as telas, para
 * melhor usabilidade em dispositivos móveis.
 *
 * @returns {JSX.Element} O elemento JSX que representa a calculadora.
 */
const Calculator: React.FC = () => {
  // Estados para os inputs e o resultado
  const [people, setPeople] = useState<number | ''>('');
  const [income, setIncome] = useState<number | ''>('');
  const [result, setResult] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  /**
   * Função que é chamada ao verificar a elegibilidade.
   * Realiza a validação e o cálculo da renda per capita.
   */
  const handleCheckEligibility = () => {
    // Validação básica
    if (typeof people !== 'number' || people <= 0 || typeof income !== 'number' || income < 0) {
      setResult('Por favor, preencha todos os campos com valores válidos.');
      setIsSuccess(false);
      return;
    }

    // Define o limite de renda per capita para o Bolsa Família
    const threshold = 218;
    // Calcula a renda per capita
    const incomePerCapita = income / people;

    // Compara e define a mensagem de resultado
    if (incomePerCapita <= threshold) {
      setResult('✅ Você provavelmente tem direito ao Bolsa Família.');
      setIsSuccess(true);
    } else {
      setResult('❌ Você não atende ao critério de renda per capita.');
      setIsSuccess(false);
    }
  };

  return (
    // Container com layout flexível e espaçamento
    <div className="space-y-8">
      {/*
        Container de inputs agora com layout de uma única coluna (vertical).
        Removi as classes de grid para que os elementos se organizem um abaixo do outro,
        o que melhora a usabilidade em telas pequenas.
      */}
      <div className="flex flex-col gap-6">
        {/* Campo de input para o número de pessoas */}
        <div className="w-full">
          <label htmlFor="people" className="block text-gray-300 text-lg font-medium mb-3">
            Quantas pessoas vivem na sua casa?
          </label>
          <input
            type="number"
            id="people"
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            placeholder="Ex: 4"
            min="1"
            className="w-full p-4 border border-purple-800 bg-[#1e1325] rounded-xl text-gray-200 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
            aria-label="Número de pessoas na casa"
          />
        </div>

        {/* Campo de input para a renda total */}
        <div className="w-full">
          <label htmlFor="income" className="block text-gray-300 text-lg font-medium mb-3">
            Qual é a renda total mensal da sua família?
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 text-lg font-semibold">R$</span>
            <input
              type="number"
              id="income"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              placeholder="Ex: 1090.00"
              min="0"
              step="0.01"
              className="w-full pl-12 p-4 border border-purple-800 bg-[#1e1325] rounded-xl text-gray-200 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              aria-label="Renda total mensal da família"
            />
          </div>
        </div>
      </div>

      {/* Botão de verificação com gradiente e efeito de hover */}
      <button
        onClick={handleCheckEligibility}
        className="w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg
                   bg-gradient-to-r from-blue-500 to-purple-600
                   hover:from-blue-600 hover:to-purple-700
                   focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75
                   transition duration-300 ease-in-out transform hover:scale-105"
      >
        Verificar Elegibilidade
      </button>

      {/* Exibição do resultado dinâmico */}
      {result && (
        <div
          className={`w-full p-6 rounded-xl text-center text-lg font-semibold shadow-md ${
            isSuccess ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
          role="alert"
        >
          {result}
        </div>
      )}
    </div>
  );
};

export default Calculator;
