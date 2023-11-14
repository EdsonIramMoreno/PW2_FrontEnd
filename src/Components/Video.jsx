import React from 'react';
import '../assets/CSS/Video.css';

function Video(props) {
  return (
    <div className="video-container">
      <p className='titleVideo'>{props.title}</p>
      <iframe
        src={props.src}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;