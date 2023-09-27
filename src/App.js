import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutApp from './components/AboutApp';
import VerifyLocation from './components/VerifyLocation';
import ReportCrimePopup from './components/ReportCrimePopUp';

async function fetchData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
}
const data = await fetchData();

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
      <VerifyLocation data={data} />
    </>
  );
}

export default App;
