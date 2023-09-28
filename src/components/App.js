import React from "react";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import AboutApp from "./AboutApp";
import VerifyLocation from "./VerifyLocation";
import ReportCrimePopup from "./ReportCrimePopUp";
import Footer from "./Footer";

async function fetchData() {
  try {
    const response = await fetch("https://iackathon-api.onrender.com/");
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
