import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../workData.js'
import WorkSection from '../WorkSection.js'

export const WorkPage = () => {
  return (
    <div>
        <WorkSection {...homeObjOne} />
        <WorkSection {...homeObjTwo} />
        <WorkSection {...homeObjThree} />
        <WorkSection {...homeObjFour} />
    </div>
  )
}
