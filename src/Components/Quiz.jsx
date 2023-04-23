import React from "react";
import calender from "../Assets/Icons/calendar.svg";
import clock from "../Assets/Icons/clock-blue.svg";

function Quiz() {
  return (
    <div className="activeTopic">
      <h1>Quiz-1: Data Types</h1>
      <h6>16 December, 2021, Thursday</h6>
      <h1>Quiz Deatils</h1>
      <div className="quiz-area">
        <div className="left-side">
          <ul>
            <p>10<br />
            Questions</p>
            <p>-<br />
            Duration</p>
            <p>125<br />
            Total Score</p>
          </ul>
        </div>
        <div className="vl"></div>
        <div className="right-side">
          <ul>
            <li>
              <p>Start:</p>
              <img src={calender} alt="calender" />
              16 Dec 2021 <br />
              <img src={clock} alt="clock" />
              07:30 PM
            </li>
            <li>
              <p>Due:</p>
              <img src={calender} alt="calender" />
              19 Dec 2021 <br />
              <img src={clock} alt="clock" />
              11:59 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
