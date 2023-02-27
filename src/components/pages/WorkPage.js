import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../workData.js'
import WorkSection from '../WorkSection.js'

export const WorkPage = () => {
  return (
    <section>
        <WorkSection {...homeObjOne} />
        <WorkSection {...homeObjTwo} />
        <WorkSection {...homeObjThree} />
        <WorkSection {...homeObjFour} />
    </section>
  )
}
