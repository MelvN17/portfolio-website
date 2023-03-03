import React from 'react'
import { Icon } from 'react-icons-kit'
import {github} from 'react-icons-kit/feather/github'
import {linkedin} from 'react-icons-kit/feather/linkedin'
import {codepen} from 'react-icons-kit/feather/codepen'
import {twitter} from 'react-icons-kit/feather/twitter'

const SidebarLinks = () => {
  return (
    <div className='sideWrapper'>
        <span className='icons'>
          <a href="https://github.com/MelvN17" target="_blank" rel="noreferrer"><Icon icon={github} size={22.4} /></a>
        </span>
        <span className='icons'>
          <a href="https://www.linkedin.com/in/melvin-bulan-335987220/" target="_blank" rel="noreferrer"><Icon icon={linkedin} size={22.4} /></a>
        </span>
        <span className='icons'>
          <a href="https://codepen.io/MelvN17" target="_blank" rel="noreferrer"><Icon icon={codepen} size={22.4} /></a>
        </span>
        <span className='icons'>
          <a href="https://twitter.com/nmerubin" target="_blank" rel="noreferrer"><Icon icon={twitter} size={22.4} /></a>
        </span>
        <div class="vl"></div>
    </div>
    
  )
}

export default SidebarLinks