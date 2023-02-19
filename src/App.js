import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar.js';
import { FirstPart } from './components/FirstPart.js';

function App() {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <MainSection />
      <FirstPart />
    </div>
  );
}

export default App;
