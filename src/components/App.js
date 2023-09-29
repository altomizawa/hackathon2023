import React from "react";
import { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import AboutApp from "./AboutApp";
import VerifyLocation from "./VerifyLocation";
import ReportCrimePopup from "./ReportCrimePopUp";
import Footer from "./Footer";
import SaferOptions from "./SaferOptionsPopup";


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
  const isSaferOptionsPopupActive = false;

  return (
    <>
      <ReportCrimePopup
        isOpen={isPopupActive}
        onClose={() => setIsPopupActive()}
      />
      <Navbar onButtonClick={() => setIsPopupActive(true)} />
      <Header />
      <AboutApp />
      <VerifyLocation data={data} />
      <SaferOptions />
      <Footer />
    </>
  );
}

export default App;
