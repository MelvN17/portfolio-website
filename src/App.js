import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar.js';
import { FirstPart } from './components/FirstPart.js';
import OtherProjects from './components/OtherProjects.js';

function App() {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <MainSection />
      <FirstPart />
      <OtherProjects />
    </div>
  );
}

export default App;
