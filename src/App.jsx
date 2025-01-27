import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import whatsappIcon from './assets/images/whatsapp.png';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <div className="whatsapp-icon">
        <a href="https://wa.me/9116577183" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" />
        </a>
      </div>
      <Home />
    </>
  );
};

export default App;
