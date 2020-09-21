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
        <div className="my-5 mx-2">
          <Project></Project>
        </div>  
    </div>
  );
}

export default Portfolio;