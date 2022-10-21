import Hero from "./hero";
import Rail from "../../components/rail";
import React, { useState, useEffect } from "react";

// Logo disappear missing animation
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (100 < currentScrollPos) {
    document.getElementById("App-Logo").style.opacity = "0";
  } else {
    document.getElementById("App-Logo").style.opacity = "1";
  }
}

const rails = ["LATEST VIDEOS", "DIRT SHED SHOW", "HOW TO", "MTB MAINTENANCE", "RAIL 1", "Rail 2", "Rail 3"];

const Home = () => {
  const [homeData, setHomeData] = useState(0);
  useEffect(() => {
    fetch("https://www.globalcyclingnetwork.com/api/videos")
      .then((response) => response.json())
      .then(({ videos }) => {
        setHomeData(videos);
      });
  }, []);

  return (
    <div>
      <img
        src={"https://www.gmbn.com/imgs/gmbnTextBlack.svg"}
        className="App-logo"
        id="App-Logo"
        alt="logo"
      />
      <Hero featured={homeData[0]} />
      <div style={{ display: "flex", flexDirection: "column", height: "1000px" }}>
        {rails && rails.map((rail) => <Rail title={rail} data={homeData} />)}
      </div>
    </div>
  );
};

export default Home;
