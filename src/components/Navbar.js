import React from "react";

function Navbar({ onButtonClick }) {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li className="navbar__item">
          <a href="#about-app">O QUE É?</a>
        </li>
        <li>
          <button
            type="button"
            onClick={onButtonClick}
            className="navbar__button"
            href="#"
          >
            ENVIAR OCORRÊNCIA
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
