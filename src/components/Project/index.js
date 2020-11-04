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
            <p>{project.title}</p>
            <div className="align-center">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <UseAnimations
                animation={explore}
                size={65}
                pathCss="stroke:  #3b061a; stroke-width: 5%;"
                /> <span>Demo URL</span>
              </a>
              <a href={project.gitHub} target="_blank" rel="noopener noreferrer">
                <UseAnimations
                animation={github}
                size={65}
                pathCss="stroke:  #3b061a; stroke-width: 5%;"
                /> <span>GitHub URL</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Project;