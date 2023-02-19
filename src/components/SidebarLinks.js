import React from 'react'
import { Icon } from 'react-icons-kit'
import {github} from 'react-icons-kit/feather/github'
import {linkedin} from 'react-icons-kit/feather/linkedin'
import {codepen} from 'react-icons-kit/feather/codepen'
import {twitter} from 'react-icons-kit/feather/twitter'
import {facebook} from 'react-icons-kit/feather/facebook'
const SidebarLinks = () => {
  return (
    <div className='sideWrapper'>
        <span className='icons'><Icon icon={github} size={22.4} /></span>
        <span className='icons'><Icon icon={linkedin} size={22.4} /></span>
        <span className='icons'><Icon icon={codepen} size={22.4} /></span>
        <span className='icons'><Icon icon={twitter} size={22.4} /></span>
        <span className='icons'><Icon icon={facebook} size={22.4} /></span>
        <div class="vl"></div>
    </div>
    
  )
}

export default SidebarLinks