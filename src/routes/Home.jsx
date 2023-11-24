import {} from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <header className="header">
        <h1>Página Inicial</h1>
      </header>

      <div className="content">
        <h2 id="BemVindo">Bem-vindo à nossa página inicial</h2>
        </div>
        <div className="content">
      <h1>Sobre o Projeto</h1>
      <p>
        Bem-vindo ao nosso projeto dedicado ao Monitoramento de Saúde com Internet das Coisas (IoT).
        Este projeto nasceu da necessidade de abordar desafios significativos na área da saúde,
        incluindo a falta de prevenção e a acessibilidade limitada aos serviços médicos.
        Acreditamos que a tecnologia pode desempenhar um papel fundamental na superação desses obstáculos,
        proporcionando uma abordagem inovadora e proativa para cuidados com a saúde.
      </p>

      <h2>Nossa Missão</h2>
      <p>
        Nosso objetivo é desenvolver soluções que revolucionem a forma como entendemos e praticamos a saúde.
        Através da integração de sensores avançados, automação e análise de dados inteligente,
        buscamos criar um ambiente em que a prevenção seja a chave para uma vida saudável.
        Queremos tornar os cuidados com a saúde mais acessíveis, personalizados e eficientes.
      </p>

      <h2>Engajamento e Colaboração</h2>
      <p>
        Estamos entusiasmados em compartilhar este projeto e convidamos você a se envolver e colaborar conosco.
        Se você é um entusiasta da saúde, desenvolvedor, profissional da área médica ou simplesmente alguém interessado
        em contribuir para um futuro mais saudável, sua participação é valiosa.
      </p>
      </div>
      </div>
  );
}

export default Home;
