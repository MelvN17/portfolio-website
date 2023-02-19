import React from 'react'
import TitleDesc from './TitleDesc.js';
import '../App.css'
import Button from './Button.js';

import SidebarLinks from './SidebarLinks.js';

const MainSection = () => {
  return (
    <div className='mainWrapper'>
        <p>Hi! My name is</p>
        <h1>Melvin Bulan</h1>
        <TitleDesc />
        <Button fSize={21} textBtn = "View Works"/>
        <div class="scrollDown">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <SidebarLinks />
        
    </div>
  )
}

export default MainSection