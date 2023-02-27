import React from 'react';
import '../App.css'
import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';

const OtherProjSection = ({imageSrc, imageAlt, title, techStack, info, liveLink, githubLink})  => {
  return (
    <div className="card">
      <img className='img-card' src={imageSrc} alt={imageAlt} />
      <div className="card-content">
        <h2 className='proj-title'>{title}</h2>
        <div className='tech-stack'>
          {techStack.map((tech) => (
            <p className='tech' >{tech}</p>
          ))}
        </div>
        <p className='proj-info'>{info}</p>
        <div className="card-links">
          <a href={liveLink} target="_blank" rel="noreferrer" ><BiLinkExternal className='nav-icon'/></a>
          <a href={githubLink} target="_blank" rel="noreferrer"><SiGithub className='nav-icon'/></a>
        </div>
      </div>
    </div>
  );
}

export default OtherProjSection;
