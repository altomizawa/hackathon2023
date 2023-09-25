import React from 'react';

function Header() {
  return (
    <div className="header">
      <img className='header__image'src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Bairro_dos_jardins_em_s%C3%A3o_paulo_%281%29_%28cropped%29.jpg/1200px-Bairro_dos_jardins_em_s%C3%A3o_paulo_%281%29_%28cropped%29.jpg"></img>
      <div className='header__title-wrapper'>
        <h1 className="header__title">AM I SAFE?</h1>
        <h4 className="header__subtitle">
          SAIBA QUAL LUGAR EVITAR ANTES DE IR
        </h4>
        <button className="header__button">VERIFICAR LOCAL</button>
      </div>
    </div>
  );
}

export default Header;
