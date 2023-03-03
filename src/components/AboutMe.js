import React from 'react';
import '../App.css'
import profilePic from "../img/img1.jpg";

const AboutMe = () => {
  return (
    <section className="about-wrapper" id="about">
        <div className="about-container">
            <div className="about-left">
            <div class="content"> 
              <h1>About Me</h1>
              <p>Hi, I'm Melvin Bulan, and I'm currently studying Computer Science at Cebu Institute of Technology - University. I started programming in 2019, and my passion has always been to create beautiful, minimalistic, and modern responsive websites </p> 
              <p> As a web developer, I'm constantly learning and experimenting with new technologies to enhance user experiences, and I'm excited to continue growing and contributing to the industry.</p>
            </div>
            </div>
            <img src={profilePic} alt="ProfilePic"  className="about-right" /> 
        </div> 
    </section>
  );
};

export default AboutMe;
