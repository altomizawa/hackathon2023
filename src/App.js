import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import AboutApp from './components/AboutApp';
import VerifyLocation from './components/VerifyLocation';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutApp />
      <VerifyLocation />
    </>
  );
}

export default App;
