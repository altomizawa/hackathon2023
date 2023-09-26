import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li className="navbar__item">
          <a href="#about-app">O QUE É?</a>
        </li>
        <li className="navbar__item navbar__button">
          <a href="#">ENVIAR OCORRÊNCIA</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
