import React from 'react';

function Navbar({ isPopupActive, setIsPopupActive }) {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li className="navbar__item">
          <a href="#about-app">O QUE É?</a>
        </li>
        <button onClick={setIsPopupActive} className="navbar__button" href="#">
          ENVIAR OCORRÊNCIA
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
