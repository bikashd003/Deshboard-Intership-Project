import React from "react";
import "../Module.css";
import { Link } from "react-router-dom";
import document from "../Assets/Icons/document.svg";
import videocam from "../Assets/Icons/videocam.svg";
import information from "../Assets/Icons/information-circle 1.svg";
import play from "../Assets/Icons/play-circle.svg";

function ActiveTopic() {
  return (
    <div className="activeTopic">
      <h1>Python Loops</h1>
      <h6>15 December 2021, Wednesday, 07:30 PM</h6>
      <h3 style={{ color: "blue" }}>
        <Link to="#">DAILY FEEDBACK</Link>
      </h3>
      <ul className="activeItems">
      <Link to="#" > <li style={{ backgroundColor: "white", borderTop: "1px solid blue", borderRight: "1px solid blue", borderLeft: "1px solid blue" }}
>
          <img
            src={information}
            alt="information"
            className="active_img"
          />
          SESSION PLAN
        </li></Link> 
       <Link to="#"><li>
          <img src={play} alt="play" className="active_img" />
          PRE-WATCH VIDEOS
        </li></Link> 
        <Link to="#"> <li>
          <img src={videocam} alt="videocam" className="active_img" />
          SESSION RECORDING
        </li></Link> 
        <Link to="#"> <li>
          <img src={document} alt="reference" className="active_img" />
          REFERENCES
        </li></Link> 
      </ul>
      <div className="seesion-area">
        <h2>Session Plan</h2>
        <p style={{fontWeight:"100"}}>LIVE session is about to start. Please stay tuned</p>
        <button className="h-button" style={{cursor:"pointer"}}>JOIN LIVE SESSION</button>
        <p>Sub-Topics</p>
        <ol>
          <li>Sorting and Indesing Dataframe</li>
          <li>Filtering Dataframe</li>
          <li>Usage of loc and iloc function</li>
        </ol>
        <h4>Session Details</h4>
      </div>
    </div>
  );
}

export default ActiveTopic;
