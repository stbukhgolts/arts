import React from 'react';
import './video.css';

const Video = () => {
  return (
    <section className="video-container">
      <video className="video" loop autoPlay muted>
        <source
          src="https://denis-creative.com/wp-content/uploads/2018/01/video.mp4"
          type="video/mp4"
        />
        <source
          src="https://denis-creative.com/wp-content/uploads/2018/01/video.ogv"
          type="video/ogv"
        />
        <source
          src="https://denis-creative.com/wp-content/uploads/2018/01/video.webm"
          type="video/webm"
        />
      </video>
    </section>
  );
};

export default Video;
