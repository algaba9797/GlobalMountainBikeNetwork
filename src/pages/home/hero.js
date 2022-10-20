import React from 'react';
import FakeBar from '../../assets/FakeBar.png'

const Hero = ({ featured = {} }) => {
  console.log(featured);

  return (
    <div className="Hero">
      <div className="Overlay">
      <img
        src={"https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg"}
        className="Play"
        alt="PlayIcon"
      />
        </div>

      <img
        src={`https://i.ytimg.com/vi/${featured?._id}/maxresdefault.jpg`}
        className="Featured"
        alt="Featured video"
      />
       <img
        src={FakeBar}
        className="FakeBar"
        alt="Search Bar"
      />
    </div>
  );
};

export default Hero;
