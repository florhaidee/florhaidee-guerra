import React from 'react';
import Project from '../Project';
import projects from  '../../utils/projects.json'

function Portfolio() {
//   const {
//     navigation = [],
//     setCurrentNavigation,
//     currentNavigation
//   } = props;

  return (
    <div className="flex-row px-1">
        <h2> My Latest Projects! </h2>
        <section className="flex-row px-1">
            {projects.map((project) => (
                <Project project={project} key={project.title}></Project>
            ))}
        </section>
    </div>
  );
}

export default Portfolio;