// Salve este código em: my-bolsa-familia-sim/src/components/FuturePaymentForm.tsx

import React, { useState } from 'react';
import type { FormData } from './FuturePaymentSimulator';

/**
 * Componente do formulário para o simulador de pagamentos futuros.
 * Inclui campos dinâmicos e opções adicionais.
 *
 * @param onSubmit - Função de callback para enviar os dados.
 * @returns {JSX.Element} O elemento JSX que representa o formulário.
 */
const FuturePaymentForm: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
  const [income, setIncome] = useState<number | ''>('');
  const [people, setPeople] = useState<number | ''>('');
  const [dependents, setDependents] = useState<{ id: number; age: number }[]>([]);
  const [isPregnant, setIsPregnant] = useState<boolean>(false);
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [nextDependentId, setNextDependentId] = useState<number>(0);

  /**
   * Adiciona um novo dependente ao formulário.
   */
  const addDependent = () => {
    setDependents([...dependents, { id: nextDependentId, age: 0 }]);
    setNextDependentId(nextDependentId + 1);
  };

  /**
   * Remove um dependente do formulário.
   * @param id - O ID do dependente a ser removido.
   */
  const removeDependent = (id: number) => {
    setDependents(dependents.filter(d => d.id !== id));
  };

  /**
   * Atualiza a idade de um dependente.
   * @param id - O ID do dependente.
   * @param age - A nova idade.
   */
  const updateDependentAge = (id: number, age: number) => {
    setDependents(dependents.map(d => (d.id === id ? { ...d, age } : d)));
  };

  /**
   * Lida com o envio do formulário, validando os dados e chamando a função `onSubmit`.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof income !== 'number' || income < 0 || typeof people !== 'number' || people <= 0) {
      // Use um modal ou mensagem personalizada em vez de alert()
      console.error("Por favor, preencha a renda e o número de pessoas.");
      return;
    }

    const data: FormData = {
      income: income,
      people: people,
      dependents,
      isPregnant,
      isStudent
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="w-full">
          <label htmlFor="income" className="block text-gray-300 text-lg font-medium mb-3">
            Renda familiar total
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

        <div className="w-full">
          <label htmlFor="people" className="block text-gray-300 text-lg font-medium mb-3">
            Quantidade de pessoas na casa
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
      </div>

      <div className="w-full">
        <div className="flex justify-between items-center mb-4">
          <label className="block text-gray-300 text-lg font-medium">Dependentes (idade)</label>
          <button type="button" onClick={addDependent} className="py-2 px-4 rounded-xl font-bold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200">
            Adicionar Dependente
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {dependents.map((d) => (
            <div key={d.id} className="relative">
              <input
                type="number"
                value={d.age}
                onChange={(e) => updateDependentAge(d.id, Number(e.target.value))}
                placeholder="Idade"
                min="0"
                className="w-full p-4 border border-purple-800 bg-[#1e1325] rounded-xl text-gray-200 text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300"
              />
              <button
                type="button"
                onClick={() => removeDependent(d.id)}
                className="absolute top-1 right-1 text-red-400 hover:text-red-500 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="isPregnant"
            checked={isPregnant}
            onChange={(e) => setIsPregnant(e.target.checked)}
            className="form-checkbox h-6 w-6 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
          />
          <label htmlFor="isPregnant" className="text-gray-300 text-lg font-medium">Há uma gestante na família?</label>
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="isStudent"
            checked={isStudent}
            onChange={(e) => setIsStudent(e.target.checked)}
            className="form-checkbox h-6 w-6 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
          />
          <label htmlFor="isStudent" className="text-gray-300 text-lg font-medium">Há estudante matriculado entre 7 e 18 anos?</label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-lg
                   bg-gradient-to-r from-blue-500 to-purple-600
                   hover:from-blue-600 hover:to-purple-700
                   focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-75
                   transition duration-300 ease-in-out transform hover:scale-105"
      >
        Simular Pagamentos
      </button>
    </form>
  );
};

export default FuturePaymentForm;
