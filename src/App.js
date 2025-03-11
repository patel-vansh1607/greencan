import React from "react";
import circlegradient from './images/circle-gradient.png'

const Welcome = () => {
  return (
    <div>
      <div id="leaves">
        {[...Array(15)].map((_, index) => (
          <i key={index}></i>
        ))}
      </div>
      <div className="sec1">
      <img src={circlegradient} alt="GreenCan Logo" />
        <img src={circlegradient} alt="GreenCan Logo" className= "img2"/>
      </div>
      <div className="sec2">
        <h4>Welcome to</h4>
        <img className="mainlogo" src="./Images/GreenCan logo-01.png" alt="main-logo" />
      </div>
      <div className="sec3">
        <div className="btn1">
          <a href="./accounts.html">
            <button>
              Login / Sign Up
              <div className="icon-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26.3 65.33"
                >
                  <path
                    className="fil0"
                    d="M13.98 52.87c0.37,-0.8 0.6,-1.74 0.67,-2.74 1.01,1.1 2.23,2.68 1.24,3.87 ..."
                  ></path>
                </svg>
              </div>
              <div className="icon-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 11.67 37.63"
                >
                  <path
                    className="fil0"
                    d="M7.63 35.26c-0.02,0.13 0.01,0.05 -0.06,0.14 -0,0 -0.08,0.07 -0.11,0.1 ..."
                  ></path>
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
