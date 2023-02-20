import React from 'react'
import '../App.css'

const WorkSection = ({workWrapper}) => {
  return (
    <div className={workWrapper ? 'normColor' : 'dark'}>
       <div className="normCont">
         <div className="innWrapper cont">
            <div className="left">
                <div className="imgs"></div>
            </div>
            <div className="right">
                Test
            </div>
        </div>  
       </div>
    </div>
  )
}

export default WorkSection