import React from 'react';
import Video from './Video.jsx'

function VideoComponent() {
  return (
    <div className="Videos">

      <Video 
      src="https://www.youtube.com/embed/jM8pyBUU-eE?si=MsqYjiIzYpQ7-LJz"
      title="YouTube video player"

      />

      <Video 
      src="https://www.youtube.com/embed/jM8pyBUU-eE?si=MsqYjiIzYpQ7-LJz"
      title="YouTube video player"

      />

    <Video 
      src="https://www.youtube.com/embed/jM8pyBUU-eE?si=MsqYjiIzYpQ7-LJz"
      title="YouTube video player"

      />

    <Video 
      src="https://www.youtube.com/embed/jM8pyBUU-eE?si=MsqYjiIzYpQ7-LJz"
      title="YouTube video player"

      />
    </div>
  );
}

export default VideoComponent;
