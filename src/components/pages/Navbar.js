import React, {useState} from 'react'
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'
import {Link} from "react-scroll"

const Navbar = () => {

  const [toggle,setToggle] = useState(false);
  const handleToggle =()=>{
    setToggle(!toggle)
  }
  return (
  <nav className={toggle?'navbar expanded':'navbar'}>
    <img className="logo" src= {require("../../img/logobg.png")} alt="logo"/>
    <ul className="links">
      <li><Link to="about" smooth={true} duration={700}>About</Link></li>
      <li><Link to="tools" smooth={true} duration={700}>Tools</Link></li>
      <li><Link to="work" smooth={true} duration={700}>Work</Link></li>
      <li><Link to="contact" smooth={true} duration={700}>Contact</Link></li>
      <li className='resumeBtn nav'><a href="https://drive.google.com/file/d/1j2PHO1cOkjl84V5hbkhpLHCHmMPToIrV/view?usp=sharing" target={'_blank'} rel="noreferrer">Resume</a></li>
    </ul>
    <div className="toggle-icon" onClick={handleToggle}>
      {toggle? <Icon icon={x} size={28} />:<Icon icon={menu} size={28} />}
    </div>
  </nav>
  )
}

export default Navbar