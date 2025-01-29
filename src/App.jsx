import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.scss';
import Home from './pages/Home';
import WhatsappIcon from './components/WhatsAppIcon';

const App = () => {
  return (
    <>
    <WhatsappIcon/>
      <Home />
    </>
  );
};

export default App;
