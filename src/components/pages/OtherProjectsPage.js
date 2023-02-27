import React from 'react'
import '../../App.css';
import { otherProjOne, otherProjTwo, otherProjThree, otherProjFour, otherProjFive, otherProjSix } from '../OtherProjData.js'
import OtherProjSection from "../OtherProjSection.js";

const OtherProjects = () => {
  return (
    <section className='opWrapper'>
        <h1 className='otherProj'>Other Projects</h1>
        <div className="containerWrapper">
          <OtherProjSection {...otherProjOne} />
          <OtherProjSection {...otherProjTwo} />
          <OtherProjSection {...otherProjThree} />
          <OtherProjSection {...otherProjFour} />
          <OtherProjSection {...otherProjFive} />
          <OtherProjSection {...otherProjSix} />
        </div>
   </section>
  )
}

export default OtherProjects