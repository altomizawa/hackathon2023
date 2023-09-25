import React from 'react';

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">IS IS SAFE?</h1>
      <h4 className="header__subtitle">
        Descubra se o local que você vai é seguro.
      </h4>
      <button className="header__button">VERIFICAR LOCAL</button>
    </div>
  );
}

export default Header;
