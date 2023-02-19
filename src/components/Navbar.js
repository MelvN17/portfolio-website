import React, {useState} from 'react'
import { Icon } from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import {x} from 'react-icons-kit/feather/x'


const Navbar = () => {

  const [toggle,setToggle] = useState(false);
  const handleToggle =()=>{
    setToggle(!toggle)
  }
  return (
  <nav className={toggle?'navbar expanded':'navbar'}>
    <img className="logo" src= {require("../img/logobg.png")} alt="logo"/>
    <ul className="links">
      <li>Work</li>
      <li>About</li>
      <li>Tools</li>
      <li>Contact</li>
      <li className='resumeBtn nav'>Resume</li>
    </ul>
    <div className="toggle-icon" onClick={handleToggle}>
      {toggle? <Icon icon={x} size={28} />:<Icon icon={menu} size={28} />}
    </div>
  </nav>
  )
}

export default Navbar