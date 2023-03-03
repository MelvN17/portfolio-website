import React from 'react'
import '../../App.css'
import {Link} from "react-scroll"
const Footer = () => {
  return (
    <footer className='footerWrapper'>
        <div className="footerContent">
            <div className="title">
                <h3>Home</h3>
                <p><Link to="about" smooth={true} duration={500}>About</Link></p>
                <p><Link to="tools" smooth={true} duration={500}>Tools</Link></p>
                <p><Link to="work" smooth={true} duration={500}>Work</Link></p>
                <p><Link to="contact" smooth={true} duration={500}>Contact</Link></p>
                <p><a href="https://drive.google.com/file/d/1j2PHO1cOkjl84V5hbkhpLHCHmMPToIrV/view?usp=sharing" target={'_blank'} rel="noreferrer">Resume</a></p>
            </div>
            <div className="title">
                <h3>Socials</h3>
                <p><a href="https://github.com/MelvN17" target="_blank" rel="noreferrer">Github</a></p>
                <p><a href="https://www.linkedin.com/in/melvin-bulan-335987220/" target="_blank" rel="noreferrer">LinkedIn</a></p>
                <p><a href="https://codepen.io/MelvN17" target="_blank" rel="noreferrer">Codepen</a></p>
                <p><a href="https://twitter.com/nmerubin" target="_blank" rel="noreferrer">Twitter</a></p>
            </div>
            <div className="title">
                <h3>Extra</h3>
                <p><a href="https://github.com/MelvN17/portfolio-website" target="_blank" rel="noreferrer">Source Code</a></p>
            </div>
        </div>
        <div className="footerBottom">
            <p>© Melvin S. Bulan 2023</p>
        </div>
    </footer>
  )
}

export default Footer