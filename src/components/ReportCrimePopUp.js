function preventSubmit(evt) {
  evt.preventDefault();
  console.log('prevented');
}

function ReportCrimePopup({ isPopupActive, setIsPopupActive }) {
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
        <button onClick={preventSubmit} className="report-crime-popup__button">
          ENVIAR
        </button>
      </form>
    </div>
  );
}

export default ReportCrimePopup;
