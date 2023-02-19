import React from 'react'
import {Typewriter} from 'react-simple-typewriter'
import '../App.css'


const TitleDesc = () => {
 

  return (
    
    <div>
        <div className='header' >
            I am a {' '}
           <span className='desc'>
            <Typewriter 
                words={['Front-End Developer', 'ServiceNow Developer', 'College Student']}
                loop={true}
                cursor
                cursorStyle='<'
                typeSpeed={80}
                deleteSpeed={40}
            /> 
           </span>         
         
        </div>
    </div>
  )
}

export default TitleDesc