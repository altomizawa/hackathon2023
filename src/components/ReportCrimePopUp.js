import { useState } from "react";
import bairros from "../data/bairros";
import ocorrencias from "../data/ocorrencias";

function ReportCrimePopup({ isOpen, onClose }) {
  // PREVENT DEFAULT ACTION IN SUBMIT BUTTON
  function preventSubmit(evt) {
    evt.preventDefault();
    onClose();
    setRegionSelection();
  }

  const [regionSelection, setRegionSelection] = useState(
    "Selecione uma região"
  );

  return (
    <div
      className={
        isOpen
          ? "report-crime-popup report-crime-popup_active"
          : "report-crime-popup"
      }
    >
      <form className="report-crime-popup__form">
        <button onClick={onClose} className="report-crime-popup__close-button">
          X
        </button>
        <h3 className="report-crime-popup__title">ENVIAR OCORRÊNCIA</h3>
        <select
          className="verify-location__dropdown"
          onChange={(e) => setRegionSelection(e.target.value)}
          value={regionSelection}
        >
          <option>Selecione uma região</option>
          {bairros.map((zona, i) => (
            <option key={i + 1} value={zona.zona}>
              {zona.zona}
            </option>
          ))}
        </select>

        <select className="verify-location__dropdown">
          {bairros[0].bairros.map((bairro, i) => (
            <option key={i + 1} value={bairro}>
              {bairro}
            </option>
          ))}
        </select>

        <select className="verify-location__dropdown">
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
