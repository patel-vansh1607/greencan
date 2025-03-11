import React from "react";
import circlegradient from './images/circle-gradient.png'
import greencanlogo from './images/GreenCan logo-01.png'
import './App.css'
import { Link } from "react-router-dom";


const Welcome = () => {
  return (
    <div>
      <div id="leaves">
        {[...Array(15)].map((_, index) => (
          <i key={index}></i>
        ))}
      </div>
      <div className="sec1">
      <img src={circlegradient} alt="circle-gradient" />
      <img src={circlegradient} alt="circle-gradient" className= "img2"/>
      </div>
      <div className="sec2">
      <h4>Welcome to</h4>
        <img src={greencanlogo} alt="greencanlogo" className="mainlogo" />
      </div>
      <div className="sec3">
        <div className="btn1">
          <Link to="/accounts">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
