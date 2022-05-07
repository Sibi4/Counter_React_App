import React from "react";
import { useState } from "react";
import "./App.css";

function TimerController() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isStartBtnDisabled, setIsStartBtnDisabled] = useState(false);
  const [isStopBtnDisabled, setIsStopBtnDisabled] = useState(true);
  const [isResetBtnDisabled, setIsResetBtnDisabled] = useState(true);

  const startTimer = () => {
    //the counter will be increased by 1 every 0.5 sec
    setTimer(
      setInterval(() => {
        setCounter((c) => c + 1);
      }, 500)
    );

    //Disable "Start", enable "Stop" and "Reset" buttons
    setIsStartBtnDisabled(true);
    setIsStopBtnDisabled(false);
    setIsResetBtnDisabled(false);
  };

  const stopTimer = () => {
    //clear the timer
    clearInterval(timer);

    //Disable "Stop", enable "Start" and "Reset" buttons
    setIsStartBtnDisabled(false);
    setIsStopBtnDisabled(true);
    setIsResetBtnDisabled(false);
  };

  const resetTimer = () => {
    clearInterval(timer);
    //set Counter to 0
    setCounter(0);

    //Disable "Reset" and "Stop", enable "Start" button
    setIsStartBtnDisabled(false);
    setIsStopBtnDisabled(true);
    setIsResetBtnDisabled(true);
  };

  return (
    <div className="TimerController">
      <button
        className={`timer-controller-btn ${
          isStartBtnDisabled ? "disabled" : ""
        }`}
        onClick={startTimer}
        disabled={isStartBtnDisabled}
      >
        Start
      </button>
      <button
        className={`timer-controller-btn ${
          isStopBtnDisabled ? "disabled" : ""
        }`}
        onClick={stopTimer}
        disabled={isStopBtnDisabled}
      >
        Stop
      </button>
      <button
        className={`timer-controller-btn ${
          isResetBtnDisabled ? "disabled" : ""
        }`}
        onClick={resetTimer}
        disabled={isResetBtnDisabled}
      >
        Reset
      </button>

      <p id="counter">{counter}</p>
    </div>
  );
}

export default TimerController;
