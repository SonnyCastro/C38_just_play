import React from 'react';
import BackgroundVideo from '../components/justplay.mp4';
import './HomeLayout.scss';

const HomeLayout = () => (
  <div class="wrapper">
    <input type="checkbox" />
    <div class="video" type="video" autoPlay>
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

export default HomeLayout;
