import React from 'react';

function Video(props) {
  return (
    <div>
      <p>{props.title}</p>
      <iframe
        title={props.title}
        src={props.src}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
