import { useState } from 'react';
import bairros from '../data/bairros';
import ocorrencias from '../data/ocorrencias';

function ReportCrimePopup({ isPopupActive, setIsPopupActive }) {
  // PREVENT DEFAULT ACTION IN SUBMIT BUTTON
  function preventSubmit(evt) {
    evt.preventDefault();
    console.log('prevented');
    setIsPopupActive(false);
  }

  const [bairro, setBairro] = useState('');

  function handleDropDownChange(e) {
    console.log(e.target);
  }
  return (
    <div
      className={
        isPopupActive
          ? 'report-crime-popup report-crime-popup_active'
          : 'report-crime-popup'
      }
    >
      <form className="report-crime-popup__form">
        <a
          onClick={setIsPopupActive}
          className="report-crime-popup__close-button"
        >
          X
        </a>
        <h3 className="report-crime-popup__title">ENVIAR OCORRÊNCIA</h3>
        <select
          className="verify-location__dropdown"
          onChange={handleDropDownChange}
          value={bairro}
        >
          {bairros.map((bairro, i) => (
            <option key={i + 1} value={bairro}>
              {bairro.zona}
            </option>
          ))}
        </select>

        <select
          className="verify-location__dropdown"
          // onChange={handleDropDownChange}
          //value="tucuruvi"
        >
          {bairros[0].bairros.map((bairro, i) => (
            <option key={i + 1} value={bairro}>
              {bairro}
            </option>
          ))}
        </select>

        <select
          className="verify-location__dropdown"
          // onChange={handleDropDownChange}
          //value="tucuruvi"
        >
          {ocorrencias.map((ocorrencia, i) => (
            <option key={i + 1} value={ocorrencia}>
              {ocorrencia}
            </option>
          ))}
        </select>

        <button onClick={preventSubmit} className="report-crime-popup__button">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default ReportCrimePopup;
