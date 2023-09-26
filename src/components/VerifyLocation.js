import React from 'react';
import bairros from '../data/bairros';

function VerifyLocation() {
  console.log(bairros);
  return (
    <section className="verify-location">
      <div className="verify-location__form-wrapper">
        <h2 className="verify-location__title">Selecione um bairro:</h2>
        <select className="verify-location__dropdown">
          <option value={bairros[0].Name}>{bairros[0].Name}</option>
          <option value={bairros[1].Name}>{bairros[1].Name}</option>
          <option value={bairros[2].Name}>{bairros[2].Name}</option>
          <option value={bairros[3].Name}>{bairros[3].Name}</option>
          <option value={bairros[4].Name}>{bairros[4].Name}</option>
          <option value={bairros[5].Name}>{bairros[5].Name}</option>
          <option value={bairros[6].Name}>{bairros[6].Name}</option>
          <option value={bairros[7].Name}>{bairros[7].Name}</option>
        </select>
      </div>
    </section>
  );
}

export default VerifyLocation;
