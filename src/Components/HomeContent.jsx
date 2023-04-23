import React from "react";
import Data_Analysis from "../Assets/Icons/Data-Analysis.png";
import Data_wrangling from "../Assets/Icons/Data Wrangling.png";
import "../Home.css";
const date = new Date();

function HomeContent() {
  return (
    <section className="h-content" id="content">
      <h1>Upcoming Certifications</h1>
      <ul className="upcoming-certificate">
        <li>
          <img src={Data_Analysis} className="h-png" alt="data-analysis" />
          <li>
            <h6>Certification | Attempt 1</h6>
            <h3>
              DATA ANALYSIS <br />
              CERTIFICATE
            </h3>
            <h5>COMPLETED | 21 MAR 2022</h5>
          </li>
          <li className="h-middle">
            <p>
              <strong>Exam Structure</strong>
            </p>
            <br />
            <p>
              Round 1 <span>MCQS</span> <span>CODING</span>
            </p>
            <br />
            Round 2 <span>PROJECT</span>
          </li>
          <li className="h-right">
            <button style={{color:"#009EFF"}}>VIEW EXAM DETAILS</button>
          </li>
        </li>

        <h1>Continue Learning</h1>
        <h4 style={{color:"#088395"}}>VIEW MODULE DETAILS</h4>
        <li className="continue-learn">
          <li>
            <h3>
          <img
            src={Data_wrangling}
            className="h-second-png"
            alt="data-analysis"
          />
            
              DATA ANALYSIS <br />
              CERTIFICATE
            </h3>
            <div className="progress">
              <span>
                Live Sessions 
                <progress max="100" value="100" />
  
              </span>
              <span>Assignments<progress max="100" value="100" /></span>
              <span>MCQ Quiz<progress max="100" value="100" /></span>
            </div>
          </li>

          <li className="h-seceond-right">
            <h3>Today's Plan</h3>
            <p>
              {date.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            <h3 style={{color:"#088395"}}>Data Transformation using Pandas - 3</h3>
            <p>Daily Feedback &nbsp; &nbsp; <span><i style={{color:"blue"}}>opens at 07:30 PM</i></span></p>
            <button className="h-button">JOIN LIVE SESSION</button>
            <p>BEGINS AT 07:30 PM</p>

          </li>
          
        </li>

      </ul>
    </section>
  );
}

export default HomeContent;
