import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import projects from  '../../utils/projects.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Project() {
  return (

    <Carousel autoPlay>
      {projects.map( (project) => (
        <div className="project" key={project.title}>
          <img alt={project.title} src={project.imagePath}/>
          <div className="legend">
            <p>{project.title}</p>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">LiveUrl </a>
            <a href={project.gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Project;