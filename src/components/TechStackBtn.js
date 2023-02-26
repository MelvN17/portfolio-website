import React from 'react'

const TechStackBtn = ({icon, text}) => {
  return (
    <section>
          <div className="btnStyle">
            {icon}
            <p>{text}</p>
          </div>
    </section>
  )
}

export default TechStackBtn