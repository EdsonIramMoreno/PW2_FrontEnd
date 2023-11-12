import React from 'react';

function Video(props) {
  return (
    <div>
      <iframe
        src={props.src}
        title={props.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>{props.title}</p>
    </div>
  );
}

export default Video;
