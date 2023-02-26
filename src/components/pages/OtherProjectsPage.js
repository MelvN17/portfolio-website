import React from 'react'
import '../../App.css';
import { BiLinkExternal  } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

const OtherProjects = () => {
  return (
    <section className='opWrapper'>
        <h1 className='otherProj'>Other Projects</h1>
        <div className="containerWrapper">
            <div className="item">
              <img className='img-card' src={require("../../img/proj1.png")} alt="test" />
              <div className="content">
                <h2 className='proj-title'>Title</h2>
                <div className='tech-stack'>
                  <p className='tech'>React</p>
                  <p className='tech'>Firebase</p>
                  <p className='tech'>NodeJS</p>
                  <p className='tech'>Vercel</p>
                </div>
                <p className='proj-info'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. consectetur adipisicing elit. </p>
                <div className="links">
                  <a href="/#" target="_blank"><BiLinkExternal className='nav-icon'/></a>
                  <a href="/#" target="_blank"><SiGithub className='nav-icon'/></a>
                </div>
              </div>
            </div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>
   </section>
  )
}

export default OtherProjects