// Salve este código em: my-bolsa-familia-sim/src/components/Header.tsx

import React from 'react';

/**
 * Componente de cabeçalho com o logo, título e botões de navegação.
 * @param setCurrentPage - Função para mudar a página atual.
 * @returns {JSX.Element} O elemento JSX do cabeçalho.
 */
const Header: React.FC<{ setCurrentPage: (page: 'home' | 'simulador' | 'calendario' | 'noticias') => void }> = ({ setCurrentPage }) => {
  // Função para lidar com a ativação das notificações push
  const handleEnableNotifications = () => {
    // Verifica se as notificações são suportadas no navegador
    if ('Notification' in window && 'serviceWorker' in navigator) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Exibe uma notificação de exemplo
          new Notification('Notificações Ativadas!', {
            body: 'Agora você receberá alertas sobre o calendário e notícias do Bolsa Família.',
            icon: '/icons/icon-192x192.png'
          });
          // Aqui você poderia adicionar a lógica para se inscrever para notificações push
          // com um serviço de backend, se fosse um projeto real.
          console.log('Notificações ativadas com sucesso.');
        } else {
          console.log('Permissão de notificação negada.');
        }
      }).catch(error => {
        console.error('Erro ao solicitar permissão para notificações:', error);
      });
    } else {
      console.warn('Notificações e/ou Service Workers não são suportados neste navegador.');
    }
  };

  return (
    <header className="w-full bg-[#120a16] py-4 px-4 sm:px-8 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-lg shadow-purple-950/20">
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-xl text-white">
          BF
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">Bolsa Família Fácil</h1>
      </div>
      <nav className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
        <button
          onClick={() => setCurrentPage('home')}
          className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          Início
        </button>
        <button
          onClick={() => setCurrentPage('calendario')}
          className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          Calendário
        </button>
        <button
          onClick={() => setCurrentPage('noticias')}
          className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          Notícias
        </button>
        <button
          onClick={handleEnableNotifications}
          className="py-2 px-4 rounded-full font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
        >
          Ativar Notificações
        </button>
      </nav>
    </header>
  );
};

export default Header;
