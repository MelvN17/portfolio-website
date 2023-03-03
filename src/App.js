import React from 'react';
import './App.css';
import HeroPage from './components/pages/HeroPage';
import Navbar from './components/pages/Navbar.js';
import { WorkPage } from './components/pages/WorkPage.js';
import OtherProjectsPage from './components/pages/OtherProjectsPage.js';
import FooterPage from './components/pages/FooterPage.js';
import AboutPage from './components/pages/AboutPage.js';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="wrapper">
      <div className="nav-wrapper">
        <Navbar />
      </div>
      <HeroPage />
      <AboutPage />
      <WorkPage />
      <OtherProjectsPage />
      <Contact />
      <FooterPage />
    </div>
  );
}

export default App;
