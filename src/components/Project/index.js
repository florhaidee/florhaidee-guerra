import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import projects from  '../../utils/projects.json'
import { Carousel } from 'react-responsive-carousel';
import UseAnimations from "react-useanimations";
import github  from 'react-useanimations/lib/github'
import explore  from 'react-useanimations/lib/explore'

function Project() {
  return (
    <Carousel autoPlay>
      {projects.map( (project) => (
        <div className="project" key={project.title}>
          <img alt={project.title} src={project.imagePath}/>
          <div className="legend">
            <h5>{project.title}</h5>
            <h6>{project.description}</h6>
            <h6>{project.technologies}</h6>
            <div className="align-center">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <UseAnimations
                animation={explore}
                size={46}
                pathCss="stroke:  #3b061a; stroke-width: 5%;"
                /> <span>Demo</span>
              </a>
              <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                <UseAnimations
                animation={github}
                size={46}
                pathCss="stroke:  #3b061a; stroke-width: 5%;"
                /> <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Project;