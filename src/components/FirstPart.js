import React from 'react'
import { homeObjOne, homeObjTwo, homeObjThree } from './Data.js'
import WorkSection from './WorkSection.js'

export const FirstPart = () => {
  return (
    <div>
        <WorkSection {...homeObjOne} />
        <WorkSection {...homeObjTwo} />
        <WorkSection {...homeObjThree} />
    </div>
  )
}
