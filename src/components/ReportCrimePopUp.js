import React from 'react';

function ReportCrimePopup() {
  return (
    <div className="report-crime-popup">
      <form className="report-crime-popup__form">
        <a className="report-crime-popup__close-button">X</a>
        <h3 className="report-crime-popup__title">REPORT NEW CRIME!</h3>
        <input className="report-crime-popup__input" placeholder="Nome"></input>
        <input
          className="report-crime-popup__input"
          placeholder="bairro"
        ></input>
        <input
          className="report-crime-popup__input"
          placeholder="Tipo de crime"
        ></input>
        <button className="report-crime-popup__button">ENVIAR</button>
      </form>
    </div>
  );
}

export default ReportCrimePopup;
