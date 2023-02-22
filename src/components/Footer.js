import React from 'react'
import '../App.css'
const Footer = () => {
  return (
    <div className='footerWrapper'>
        <div className="footerContent">
            <div className="title">
                <h3>Home</h3>
                <p>Work</p>
                <p>About</p>
                <p>Tools</p>
                <p>Contact</p>
                <p>Resume</p>
            </div>
            <div className="title">
                <h3>Socials</h3>
                <p>Github</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
                <p>Facebook</p>
            </div>
            <div className="title">
                <h3>Extra</h3>
                <p>Source Code</p>
                <p>About</p>
            </div>
        </div>
        <div className="footerBottom">
            <p>© Melvin S. Bulan 2023</p>
        </div>

    </div>
  )
}

export default Footer