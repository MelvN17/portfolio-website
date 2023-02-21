import React from 'react'
import '../App.css'

const WorkSection = ({lightBg, titleShown, reverseCard, projImg}) => {

  return (
    <div className={lightBg ? 'normColor' : 'dark'}>
       
       <div className="normCont">
         <div className={reverseCard ? "innWrapper" : "rev"}>
            <div className="left">
               
            </div>
            <div className="right">
             
            </div>
        </div>  
       </div>
    </div>
  )
}

export default WorkSection