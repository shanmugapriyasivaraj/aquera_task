import React from "react";
import Video from "../../assets/vid.mp4";
// import Card from "../Card/Card";
import "./Main.css";
import Planet from "../Planet/Planet";
// import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <div className="main_container" id="main">
      <div className="video_bcg">
        <video
          className="vid"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        ></video>
      </div>
      <div className="video_bcg">
        <div className="bg"></div>
      </div>
      <div className="content_container">
        <Planet />
      </div>
    </div>
  );
};

export default Main;
