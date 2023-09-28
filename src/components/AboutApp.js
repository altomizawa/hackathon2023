import React from "react";

function AboutApp() {
  return (
    <div className="about" id="about-app">
      <h1 className="about__title">O QUE É?</h1>
      <h4 className="about__text">
        O AM I SAFE? é um aplicativo que visa ajudar todas as pessoas que não
        conhecem a cidade de São Paulo a se sentirem mais seguras quando
        estiverem lá, seja visitando ou a trabalho. Baseado em um banco de dados
        de 7 meses para trás, o aplicativo é capaz de dizer qual o nível de
        segurança de um bairro específico. O funcionamento é simples: basta
        escolher o bairro que você deseja pesquisar e o aplicativo imediatamente
        te retornará com uma pontuação de 'segurança' e ainda te sugerirá outras
        opções mais seguras, caso sua opção não seja.
      </h4>
    </div>
  );
}

export default AboutApp;
