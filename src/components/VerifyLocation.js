import React, { useState } from "react";

function VerifyLocation({ data }) {
  const [bairro, setBairro] = useState("");
  const [dropdownSelection, setDropdownSelection] = useState(
    "Selecione um bairro"
  );
  const [cardActive, setCardActive] = useState(true);
  const [cardScoreActive, setCardScoreActive] = useState(false);
  const [cardDetailActive, setCardDetailActive] = useState(false);

  //FUNCTIONS TO HANDLE THE NAVIGATION WITHIN SECTION
  const handleSubmit = (e) => {
    e.preventDefault();
    setCardActive(false);
    setCardScoreActive(true);
  };

  const handleRedo = () => {
    setCardScoreActive(false);
    setCardActive(true);
  };
  const handleDetails = () => {
    setCardScoreActive(false);
    setCardDetailActive(true);
  };

  const handleSeeScore = () => {
    setCardDetailActive(false);
    setCardScoreActive(true);
  };

  //CONTROL EVERY CHANGE IN THE DROPDOWN MENU
  const handleDropDownChange = (e) => {
    setBairro(JSON.parse(e.target.value));
    setDropdownSelection(e.target.value);
  };

  //CREATE AN ARRAY THAT SHOWS NEIGHBORHOODS SAFER THAN SELECTION
  const saferToGo = data.filter(
    (item) =>
      item.TOTAL > bairro.TOTAL &&
      item.REGIÃO === bairro.REGIÃO &&
      item.TOTAL > 6
  );

  console.log(saferToGo);

  //FUNCTION THAT RETURNS THE TEXT EXPLAINING HOW SAFE THE NEIGHBORHOOD IS
  function isItSafeText() {
    if (bairro.TOTAL < 4) {
      return "VOCÊ ESTÁ NUM BAIRRO PERIGOSO";
    } else if (bairro.TOTAL < 5) {
      return "VOCÊ ESTÁ NUM BAIRRO MENOS SEGURO";
    } else if (bairro.TOTAL > 4) {
      return "ESSE BAIRRO É RELATIVAMENTE SEGURO";
    } else if (bairro.TOTAL > 7) {
      return "VOCÊ ESTÁ NUM DOS BAIRROS MAIS SEGUROS DA REGIÃO";
    }
  }

  //VARIABLES TO CONTROL THE LENGTH OF THE BAR GRAPHS
  const acidentesTransito = () => (bairro.ACIDENTES_TRANSITO * 9) / 2 + "%";
  const estupros = () => (bairro.ESTUPRO * 9) / 2 + "%";
  const furtos = () => (bairro.FURTOS * 9) / 2 + "%";
  const homicidios = () => (bairro.HOMICIDIO * 9) / 2 + "%";
  const lesoescorporais = () => (bairro.LESAO * 9) / 2 + "%";
  const roubos = () => (bairro.ROUBOS * 9) / 2 + "%";

  return (
    <section className="verify-location" id="verify-location">
      {/* Verify location form */}
      <div className="verify-location__form-wrapper">
        <div
          className={
            cardActive
              ? "verify-location__form"
              : "verify-location__form_inactive"
          }
          id="form"
        >
          <h2 className="verify-location__title">Selecione um bairro:</h2>
          <select
            className="verify-location__dropdown"
            onChange={handleDropDownChange}
            value={dropdownSelection}
          >
            <option value="">Selecione um bairro</option>
            {data.map((bairro, i) => (
              <option key={i + 1} value={JSON.stringify(bairro)}>
                {bairro.BAIRRO}
              </option>
            ))}
          </select>
          <button
            type="submit"
            onClick={handleSubmit}
            className="button button__search"
          >
            PESQUISAR
          </button>
        </div>

        {/* Location Score form */}
        <div
          className={
            cardScoreActive
              ? "verify-location__score"
              : "verify-location__form_inactive"
          }
          id="score"
        >
          <div className="verify-location__navbar">
            <button type="button" className="button" onClick={handleRedo}>
              ← REFAZER
            </button>
            <button type="button" className="button" onClick={handleDetails}>
              DETALHES →
            </button>
          </div>
          <h2 className="verify-location__title">
            O bairro {bairro.BAIRRO} tem um nível de segurança de {bairro.TOTAL}
            /10*.
          </h2>
          <p className="verify-location__text">{isItSafeText()}</p>

          <button className="verify-location__button">
            VEJA OPÇÕES MAIS SEGURAS
          </button>
          <p className="verify-location__disclaimer">
            * Baseado nos dados dos últimos 7 meses.
          </p>
        </div>

        {/* Details Form */}
        <div
          className={
            cardDetailActive
              ? "verify-location__details"
              : " verify-location__form_inactive"
          }
          id="score"
        >
          <div className="verify-location__navbar">
            <button type="button" className="button" onClick={handleSeeScore}>
              ← VER SCORE
            </button>
          </div>
          <div className="verify-location__details-items">
            <h2 className="verify-location__details-title">
              DETALHES DO BAIRRO {bairro.BAIRRO}*:
              {/* <br />
              <span style={{ fontSize: "1rem" }}>
                (Barras maiores são melhores)
              </span> */}
            </h2>
            <div className="verify-location__details-container">
              <div className="verify-location__details-wrapper">
                <div
                  className="verify-location__details-graph"
                  style={{ width: acidentesTransito() }}
                ></div>
                <p className="verify-location__details-item">
                  ACIDENTES DE TRÂNSITO
                </p>
                <p className="verify-location__details-item">
                  {bairro.ACIDENTES_TRANSITO}/10
                </p>
              </div>
              <div className="verify-location__details-wrapper">
                <div
                  className="verify-location__details-graph"
                  style={{ width: estupros() }}
                ></div>
                <p className="verify-location__details-item">ESTUPROS:</p>
                <p className="verify-location__details-item">
                  {bairro.ESTUPRO}/10
                </p>
              </div>
              <div className="verify-location__details-wrapper">
                <div
                  className="verify-location__details-graph"
                  style={{ width: furtos() }}
                ></div>
                <p className="verify-location__details-item">FURTOS:</p>
                <p className="verify-location__details-item">
                  {bairro.FURTOS}/10
                </p>
              </div>
              <div className="verify-location__details-wrapper">
                <div
                  className="verify-location__details-graph"
                  style={{ width: homicidios() }}
                ></div>
                <p className="verify-location__details-item">HOMICÍDIOS:</p>
                <p className="verify-location__details-item">
                  {bairro.HOMICIDIO}/10
                </p>
              </div>
              <div className="verify-location__details-wrapper">
                <div
                  className="verify-location__details-graph"
                  style={{ width: lesoescorporais() }}
                ></div>
                <p className="verify-location__details-item">
                  LESÕES CORPORAIS:
                </p>
                <p className="verify-location__details-item">
                  {bairro.LESAO}/10
                </p>
              </div>
              <div className="verify-location__details-wrapper">
                <div
                  className="verify-location__details-graph"
                  style={{ width: roubos() }}
                ></div>
                <p className="verify-location__details-item">ROUBOS:</p>
                <p className="verify-location__details-item">
                  {bairro.ROUBOS}/10
                </p>
              </div>
            </div>
          </div>
          <p className="verify-location__disclaimer">
            * Baseado nos dados dos últimos 7 meses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default VerifyLocation;
