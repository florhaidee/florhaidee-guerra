import React, {useState} from 'react';


const PhotoList = ({project}) => {
  const {title,imagePath,liveUrl,gitHub} = project

  return (
    <div className="flex-row">
        <img
            src={imagePath}
            alt={title}
            className="img-thumbnail mx-2"
        />
        <p>{title}</p>
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Deployed Url</a>
        <a href={gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
};

export default PhotoList;