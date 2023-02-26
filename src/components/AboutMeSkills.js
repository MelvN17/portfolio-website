import React from 'react'
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiSass,
         SiFirebase, SiNodedotjs,
         SiFigma, SiGit, SiLinuxmint,
         SiCloudera, SiPython, SiCsharp, SiJava
} from "react-icons/si";
import TechStackBtn from './TechStackBtn';
const AboutMeSkills = () => {
  return (
    <section className="skills-wrapper">
        <div className="content-wrapper">
            <div className="title">
                <h2>Front-End Technologies</h2>
                <TechStackBtn icon={<SiHtml5 className='icon html'/>} text="HTML" />
                <TechStackBtn icon={<SiCss3 className='icon css'/>} text="CSS" />
                <TechStackBtn icon={<SiJavascript className='icon js'/>} text="Javascript" />
                <TechStackBtn icon={<SiReact className='icon react'/>} text="React" />
                <TechStackBtn icon={<SiSass className='icon scss'/>} text="SCSS/SASS" />
                <TechStackBtn icon={<SiBootstrap className='icon bs'/>} text="Bootstrap" />
                
            </div>
            <div className="title">
                <h2>Back-End Technologies</h2>
                <TechStackBtn icon={<SiFirebase className='icon firebase'/>} text="Firebase" />
                <TechStackBtn icon={<SiNodedotjs className='icon nodejs'/>} text="NodeJS" />
                
            </div>
            <div className="title">
                <h2>Other technologies</h2>
                <TechStackBtn icon={<SiFigma className='icon figma'/>} text="Figma" />
                <TechStackBtn icon={<SiGit className='icon git'/>} text="Git" />
                <TechStackBtn icon={<SiLinuxmint className='icon lm'/>} text="Linux Mint" />
               
            </div>
            <div className="title extra">
                <h2>Languages I have been exposed to</h2>
                <TechStackBtn icon={<SiCloudera className='icon c'/>} text="C Language" />
                <TechStackBtn icon={<SiCsharp className='icon csharp'/>} text="C#" />
                <TechStackBtn icon={<SiPython className='icon python'/>} text="Python" />
                <TechStackBtn icon={<SiJava className='icon java'/>} text="Java" />
            </div>
           
        </div>
        {/* <div className="content-wrapper bottom">
        <div className="title extra">
                <h2>Other Languages I have been exposed to</h2>
                <TechStackBtn icon={<SiCloudera className='icon c'/>} text="C Language" />
                <TechStackBtn icon={<SiCsharp className='icon csharp'/>} text="C#" />
                <TechStackBtn icon={<SiPython className='icon python'/>} text="Python" />
        </div>
        </div> */}
    </section>
  )
}

export default AboutMeSkills