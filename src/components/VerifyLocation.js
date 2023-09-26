import React from 'react';

function VerifyLocation() {
  return (
    <section className="verify-location">
      <div className="verify-location__form-wrapper">
        <h2 className="verify-location__title">Selecione um bairro:</h2>
        <select className="verify-location__dropdown">
          <option value="Vila Madalena">Vila Madalena</option>
          <option value="Vila Madalena">Vila Mariana</option>
          <option value="Vila Madalena">Pinheiros</option>
          <option value="Vila Madalena">Moema</option>
          <option value="Vila Madalena">Jardins</option>
        </select>
      </div>
    </section>
  );
}

export default VerifyLocation;
