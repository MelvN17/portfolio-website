import React from 'react';
import './App.css';
import MainSection from './components/MainSection';
import Navbar from './components/Navbar.js';
import WorkSection from './components/WorkSection';
function App() {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <Navbar />
        <MainSection />
        <WorkSection />
      </div>
    </div>
  );
}

export default App;
