import React from 'react'
import '../App.css'

const WorkSection = ({lightBg, titleShown, reverseCard, projImg}) => {

  return (
    <div className={lightBg ? 'normColor' : 'dark'}>
       <div className= "title" style={{display: titleShown ? "block" : "none"}}>
          <h1>Featured Works</h1>
       </div>
       <div className="normCont">
         <div className={reverseCard ? "innWrapper" : "rev"}>
            <div className="left">
               
            </div>
            <div className="right">
            <img className="imgBanner" src={projImg} alt="Project 1" />
            </div>
        </div>  
       </div>
    </div>
  )
}

export default WorkSection