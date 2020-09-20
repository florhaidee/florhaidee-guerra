import React, {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Project = ({project}) => {
  const {title,imagePath,liveUrl,gitHub} = project

  return (
    <div>
      <img alt={title} src={"https://i.imgur.com/xm1xGNnm.jpg"}/>
      <div className="legend">
        <p>{title}</p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">LiveUrl </a>
        <a href={gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default Project;