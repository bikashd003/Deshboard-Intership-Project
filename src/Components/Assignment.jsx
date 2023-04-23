import React from "react";
import calender from "../Assets/Icons/calendar.svg";
import clock from "../Assets/Icons/clock-blue.svg";

function Assignment() {
  return (
    <div className="activeTopic">
      <h1>Assignment-1: Operator | Loops</h1>
      <h6>20 December, 2021</h6>
      <h1>Assignment Deatils</h1>
      <div className="quiz-area">
        <div className="left-side">
          <ul>
            <p>3<br />
            Problem</p>
            <p>100<br />
            Total Score</p>
          </ul>
        </div>
        <div className="vl"></div>
        <div className="right-side">
          <ul>
            <li>
              <p>Start:</p>
              <img src={calender} alt="calender" />
              20 December 2021 <br />
              <img src={clock} alt="clock" />
              07:30 PM
            </li>
            <li>
              <p>Due:</p>
              <img src={calender} alt="calender" />
              26 December 2021 <br />
              <img src={clock} alt="clock" />
              11:59 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Assignment;
