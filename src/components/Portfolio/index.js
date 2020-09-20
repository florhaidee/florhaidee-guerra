import React from 'react';
import Project from '../Project';
import projects from  '../../utils/projects.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Portfolio() {
//   const {
//     navigation = [],
//     setCurrentNavigation,
//     currentNavigation
//   } = props;

  return (
    <div className="flex-row px-1">
        <h2> My Latest Projects! </h2>
        <Carousel autoPlay>
            {projects.map((project) => (
                <Project project={project} key={project.title}></Project>
            ))}
        </Carousel>
    </div>
  );
}

export default Portfolio;