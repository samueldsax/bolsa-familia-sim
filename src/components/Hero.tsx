import React from 'react';

/**
 * @returns {JSX.Element} 
 */
const Hero: React.FC = () => {
  return (
    <section className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Como saber se tenho direito ao Bolsa Família (2025)</h2>

      <p className="mb-4 leading-relaxed">
        O programa Bolsa Família, atualmente em vigor no Brasil, é destinado a famílias em situação de pobreza ou extrema pobreza. Para ter direito ao benefício, é necessário atender a critérios relacionados à renda, cadastro social e compromissos com a saúde e a educação.
      </p>
      <p className="mb-4 leading-relaxed">
        O primeiro requisito é a renda mensal per capita da família, que deve ser de até <strong className="text-green-600">R$ 218 por pessoa</strong>. Esse valor é calculado somando-se toda a renda dos moradores da casa e dividindo pelo número total de pessoas. Por exemplo, uma família com renda total de R$ 1.090 e cinco membros tem renda per capita de R$ 218, estando no limite permitido.
      </p>
      <p className="mb-4 leading-relaxed">
        Além da renda, é obrigatório estar inscrito no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico). O cadastro deve ser realizado presencialmente em um CRAS (Centro de Referência de Assistência Social) ou unidade da assistência social do município. Ter o cadastro atualizado é essencial, mas não garante o recebimento imediato do Bolsa Família — a seleção é feita automaticamente pelo governo com base nas informações registradas e na disponibilidade orçamentária.
      </p>
      <p className="mb-4 leading-relaxed">
        Outro critério fundamental é o cumprimento de condicionalidades voltadas para o bem-estar social. As famílias beneficiárias devem garantir que as crianças e adolescentes estejam frequentando a escola com assiduidade, que as carteiras de vacinação estejam atualizadas e que gestantes realizem o pré-natal. Essas exigências visam promover o desenvolvimento social e interromper o ciclo da pobreza entre gerações.
      </p>
      <p className="mb-4 leading-relaxed">
        O governo disponibiliza diversas formas de consulta para verificar a situação cadastral e o status do benefício. Os cidadãos podem acessar essas informações por meio do Aplicativo Bolsa Família, App Caixa Tem, Portal do CadÚnico, ou entrando em contato pelo telefone 121, do Ministério do Desenvolvimento e Assistência Social.
      </p>
      <p className="mb-4 leading-relaxed italic">
        Segundo o portal oficial do Governo Federal, “as famílias que atendem aos critérios são automaticamente incluídas no programa, com base nas informações registradas no CadÚnico” (<a href="https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gov.br</a>). Já o portal InfoMoney reforça que “o valor mínimo do benefício atualmente é de R$ 600 por família, com adicionais de R$ 50 a R$ 150 por filhos, gestantes e lactantes” (<a href="https://www.infomoney.com.br/guias/bolsa-familia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">infomoney.com.br</a>).
      </p>
      <p className="mb-2 font-semibold text-gray-900">Em resumo, para saber se você tem direito ao Bolsa Família em 2025, deve:</p>
      <ul className="list-disc list-inside ml-4 mb-6 space-y-1">
        <li>Verificar se sua renda por pessoa é de até R$ 218;</li>
        <li>Estar com o CadÚnico atualizado;</li>
        <li>Cumprir as exigências de saúde e educação;</li>
        <li>Aguardar a seleção automática mensal feita pelo governo;</li>
        <li>Consultar sua situação nos canais oficiais (apps, portal ou telefone 121).</li>
      </ul>
      <p className="font-semibold text-gray-900">📝 Fontes:</p>
      <ul className="list-disc list-inside ml-4 text-sm text-gray-600">
        <li><a href="https://www.gov.br/pt-br/servicos/receber-o-bolsa-familia" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Governo Federal - Bolsa Família</a></li>
        <li><a href="https://www.infomoney.com.br/guias/bolsa-familia/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">InfoMoney - Quem tem direito ao Bolsa Família em 2025</a></li>
        <li><a href="https://www.seubeneficiodigital.com.br/bolsa-familia-consulta-cpf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Seu Benefício Digital - Consulta por CPF</a></li>
        <li><a href="https://economicnewsbrasil.com.br/bolsa-familia-2025-novos-criterios-e-valores-para-o-proximo-ano/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Economic News Brasil - Critérios 2025</a></li>
      </ul>
    </section>
  );
};

export default Hero;
