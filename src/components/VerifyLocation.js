import React, { useState } from 'react';
import bairros from '../data/bairros';

function VerifyLocation({ data }) {
  const [isClicked, setIsClicked] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClicked(true);
    console.log('Selected bairro:', selected);
  };

  const handleDropDownChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <section className="verify-location">
      <div
        className={
          isClicked
            ? 'verify-location__form-wrapper animation__next'
            : 'verify-location__form-wrapper'
        }
        onAnimationEnd={() => setIsClicked(false)}
      >
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
          Pesquisar
        </button>
      </div>
    </section>
  );
}

export default VerifyLocation;
