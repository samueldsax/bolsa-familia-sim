
import React, { useState } from 'react';

/**
 * 
 * 
 * 
 *
 * @returns {JSX.Element}
 */
const Calculator: React.FC = () => {
  const [people, setPeople] = useState<number | ''>('');
  const [income, setIncome] = useState<number | ''>('');
  const [result, setResult] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const handleCheckEligibility = () => {
    
    if (typeof people !== 'number' || people <= 0 || typeof income !== 'number' || income < 0) {
      setResult('Por favor, preencha todos os campos com valores válidos.');
      setIsSuccess(false); 
      return; 
    }

    const threshold = 218;
    const incomePerCapita = income / people;

    if (incomePerCapita <= threshold) {
      
      setResult('✅ Você provavelmente tem direito ao Bolsa Família. Verifique seu cadastro no CRAS mais próximo.');
      setIsSuccess(true); 
    } else {
      setResult('❌ Você não atende ao critério de renda per capita. Lembre-se de manter o CadÚnico atualizado.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="people" className="block text-gray-700 text-lg font-medium mb-2">
          Quantas pessoas vivem na sua casa?
        </label>
        <input
          type="number" 
          id="people" 
          value={people} 
          onChange={(e) => setPeople(Number(e.target.value))}
          placeholder="Ex: 4" 
          min="1" 
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
          aria-label="Número de pessoas na casa" 
        />
      </div>

      <div>
        <label htmlFor="income" className="block text-gray-700 text-lg font-medium mb-2">
          Qual é a renda total mensal da sua família?
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-lg">R$</span>
          <input
            type="number" 
            id="income" 
            value={income} 
            onChange={(e) => setIncome(Number(e.target.value))} 
            placeholder="Ex: 1090.00" 
            min="0" 
            step="0.01" 
            className="w-full pl-10 p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            aria-label="Renda total mensal da família"
          />
        </div>
      </div>
      <button
        onClick={handleCheckEligibility} // Chama a função de verificação ao clicar.
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold text-lg
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Verificar se tenho direito
      </button>

      {result && (
        <div
          className={`p-4 rounded-md text-center text-lg font-medium ${
            isSuccess ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
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
