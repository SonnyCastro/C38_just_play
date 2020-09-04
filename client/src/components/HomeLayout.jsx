import React from 'react';
import './HomeLayout.scss';
import BackgroundVideo from '../components/justplay.mp4';

const HomeLayout = () => {
  return (
    <div class="wrapper">
      <input type="checkbox" />
      <div class="video">
        <video
          type=".mp4"
          controls="true"
          src={BackgroundVideo}
          loop
          autoPlay
        ></video>
      </div>
      <div class="text">
        <span data-text="WE WERE BORN TO PLAY"></span>
      </div>
    </div>
  );
};

export default HomeLayout;
