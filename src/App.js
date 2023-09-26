import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutApp from './components/AboutApp';
import VerifyLocation from './components/VerifyLocation';
import ReportCrimePopup from './components/ReportCrimePopUp';

function App() {
  const [isPopupActive, setIsPopupActive] = useState(false);
  function handlePopup() {
    setIsPopupActive(!isPopupActive);
  }
  return (
    <>
      <ReportCrimePopup
        isPopupActive={isPopupActive}
        setIsPopupActive={handlePopup}
      />
      <Navbar isPopupActive={isPopupActive} setIsPopupActive={handlePopup} />
      <Header />
      <AboutApp />
      <VerifyLocation />
    </>
  );
}

export default App;
