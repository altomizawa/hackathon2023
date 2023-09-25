import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__items">
        <li className="navbar__item">
          <a href="#">O que é?</a>
        </li>
        <li className="navbar__item navbar__button">
          <a href="#">Enviar ocorrência</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
