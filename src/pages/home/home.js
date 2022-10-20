import Hero from "./hero";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [homeData, setHomeData] = useState(0);
  useEffect(() => {
    fetch("https://www.globalcyclingnetwork.com/api/videos")
      .then((response) => response.json())
      .then(({ videos }) => {
        setHomeData(videos);
        console.log(videos);
      });
  }, []);

  return (
    <div>
      <img
        src={"https://www.gmbn.com/imgs/gmbnTextBlack.svg"}
        className="App-logo"
        alt="logo"
      />
      <Hero featured={homeData[0]} />
    </div>
  );
};

export default Home;
