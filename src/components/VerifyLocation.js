import React from "react";
import bairros from "../data/bairros";

function VerifyLocation() {
  console.log(bairros);
  return (
    <section className="verify-location">
      <div className="verify-location__form-wrapper">
        <h2 className="verify-location__title">Selecione um bairro:</h2>
        <select className="verify-location__dropdown">
          {bairros.map((bairro, i) => (
            <option key={i + 1} value={bairro.Name}>
              {bairro.Name}
            </option>
          ))}
        </select>
        <button className="button__search">Pesquisar</button>
      </div>
    </section>
  );
}

export default VerifyLocation;
