import React from "react";
import { useState } from "react";


function SaferOptions(saferOptions) {
  console.log(saferOptions)
  const [isSaferPopupActive, setIsSaferPopupActive] = useState(false)
  function togglePopup(){
    setIsSaferPopupActive(!isSaferPopupActive)
  }
  


  return (
    <div className={isSaferPopupActive ? 'safer-options-popup' : 'safer-options-popup_inactive'}>
        <button onClick={togglePopup}>Fechar X</button>
        <h2 className='safer-options-popup__title'>Essas opções são mais seguras dentro da mesma região selecionada</h2>
        <p className="safer-options-popup__text">bairros aqui</p>
   
    </div>
  );
}

export default SaferOptions;
