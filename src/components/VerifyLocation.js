import React, { useState } from 'react';

function VerifyLocation({ data }) {
  const [selected, setSelected] = useState(null);
  const [bairro, setBairro] = useState('');

  const formSection = document.querySelector('.verify-location__form');
  const scoreSection = document.querySelector('.verify-location__score');
  // const detailSection = document.querySelector('verify-location__details')

  const handleSubmit = (e) => {
    e.preventDefault();
    formSection.classList.add('verify-location__form_inactive');
  };

  const handleRedo = () => {
    formSection.classList.remove('verify-location__form_inactive');
  };
  const handleDetails = () => {
    scoreSection.classList.add('verify-location__form_inactive');
  };

  const handleSeeScore = () => {
    scoreSection.classList.remove('verify-location__form_inactive');
  };

  const handleDropDownChange = (e) => {
    setSelected(e.target.value);
    setBairro(JSON.parse(e.target.value));
  };

  return (
    <section className="verify-location" id="verify-location">
      <div className="verify-location__form-wrapper">
        <div className="verify-location__form" id="form">
          <h2 className="verify-location__title">Selecione um bairro:</h2>
          <select
            className="verify-location__dropdown"
            onChange={handleDropDownChange}
            value={JSON.stringify(selected)}
          >
            {data.map((bairro, i) => (
              <option key={i + 1} value={JSON.stringify(bairro)}>
                {bairro.name}
              </option>
            ))}
          </select>
          <button onClick={handleSubmit} className="button__search">
            PESQUISAR
          </button>
        </div>
        <div className="verify-location__score" id="score">
          <div className="verify-location__navbar">
            <a onClick={handleRedo}>← REFAZER</a>
            <a onClick={handleDetails}>MAIS DETALHES →</a>
          </div>
          <h2 className="verify-location__title">
            O bairro {bairro.name} tem um nível de segurança de 6/10*.
          </h2>
          <p className="verify-location__text">
            VOCÊ ESTÁ NO BAIRRO MAIS SEGURO DA REGIÃO
          </p>

          <button className="verify-location__button">
            VEJA OPÇÕES MAIS SEGURAS
          </button>
          <p className="verify-location__disclaimer">
            * Baseado nos dados dos últimos 7 meses.
          </p>
        </div>
        <div className="verify-location__details" id="score">
          <div className="verify-location__navbar">
            <a onClick={handleSeeScore}>← VER SCORE</a>
          </div>
          <div className="verify-location__details-items">
            <h2 className="verify-location__details-title">
              DETALHES DO BAIRRO {bairro.name}*:
            </h2>
            <p className="verify-location__details-item">
              ACIDENTES DE TRÂNSITO: 43
            </p>
            <p className="verify-location__details-item">ESTUPROS: 43</p>
            <p className="verify-location__details-item">FURTOS: 43</p>
            <p className="verify-location__details-item">HOMICÍDIOS: 43</p>
            <p className="verify-location__details-item">
              LESÕES CORPORAIS: 43
            </p>
            <p className="verify-location__details-item">ROUBOS: 43</p>
          </div>
          <p className="verify-location__disclaimer">
            * Baseado nos dados dos últimos 7 meses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VerifyLocation;
