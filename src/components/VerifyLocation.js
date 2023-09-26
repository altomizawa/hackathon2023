import React, { useState } from "react";
import bairros from "../data/bairros";

function VerifyLocation() {
  console.log(bairros);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    setIsClicked(true);
  };
  return (
    <section className="verify-location">
      <div
        className={
          isClicked
            ? "verify-location__form-wrapper animation__next"
            : "verify-location__form-wrapper"
        }
        onAnimationEnd={() => setIsClicked(false)}
      >
        <h2 className="verify-location__title">Selecione um bairro:</h2>
        <select className="verify-location__dropdown">
          {bairros.map((bairro, i) => (
            <option key={i + 1} value={bairro.Name}>
              {bairro.Name}
            </option>
          ))}
        </select>
        <button onClick={handleClick} className="button__search">
          Pesquisar
        </button>
      </div>
    </section>
  );
}

export default VerifyLocation;
