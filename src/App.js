import React from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutApp from './components/AboutApp';
import VerifyLocation from './components/VerifyLocation';
import ReportCrimePopup from './components/ReportCrimePopUp';
import Footer from './components/Footer';

async function fetchData() {
  try {
    const response = await fetch('https://iackathon-api.onrender.com/');
    const data = await response.json();
    return data;
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
      <Footer />
    </>
  );
}

export default App;
