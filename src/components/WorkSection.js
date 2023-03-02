import React from 'react'
import '../App.css'

const WorkSection = ({reverseCard, projImg, titleShown, title, techStack, info, liveLink, githubLink}) => {

  return (
    <section className="workContainer" id="work">
       <div className= "page-title" style={{display: titleShown ? "block" : "none"}}>
          <h1>Featured Works</h1>
       </div>
       <div className="normCont">
         <div className={reverseCard ? "normal" : "reverse"}>
            <div className="left">
               <div className="left-container">
                  <h2 className='work-title'>{title}</h2>
                  <div className='tech-stack'>
                     {techStack.map((tech) => (
                        <p className='tech' >{tech}</p>
                     ))}
                  </div>
                  <p className='work-info'>{info}</p>
                  <div className="work-links">
                     <a href={liveLink} target="_blank" rel="noreferrer" ><button>Live Link</button></a>
                     <a href={githubLink} target="_blank" rel="noreferrer"><button>Source Code</button></a>
                  </div>
               </div>
            </div>
            <img className="right" src={projImg} alt="Project 1" />
        </div>  
       </div>
    </section>
  )
}

export default WorkSection