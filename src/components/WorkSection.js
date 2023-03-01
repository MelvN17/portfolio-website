import React from 'react'
import '../App.css'

const WorkSection = ({lightBg, titleShown, reverseCard, projImg}) => {

  return (
    <section className="workContainer">
       <div className= "title" style={{display: titleShown ? "block" : "none"}}>
          <h1>Featured Works</h1>
       </div>
       <div className="normCont">
         <div className={reverseCard ? "normal" : "reverse"}>
            <div className="left">
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus voluptates impedit adipisci quas dolorum quos eum praesentium perferendis! Odio minus vero porro accusantium obcaecati aspernatur.</p>
            </div>
            <img className="right" src={projImg} alt="Project 1" />
        </div>  
       </div>
    </section>
  )
}

export default WorkSection