import React, { useState } from "react";
import greencanlogo from '../images/GreenCan logo-01.png'
import Navbar from "../components/NavBar";

function AccountsPage(){
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div className="container">
        <div className={`form-box ${isLogin ? "login" : "register"}`}>
        <form>
          <h1>{isLogin ? "Login" : "Registration"}</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <i className="bx bxs-user"></i>
          </div>

          {!isLogin && (
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <i className="bx bxs-envelope"></i>
            </div>
          )}

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <i className="bx bxs-lock-alt"></i>
          </div>

          {isLogin && (
            <div className="forgot-link">
              <a href="#">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="btn">
            {isLogin ? "Login" : "Register"}
          </button>

          <p>{isLogin ? "or login with social platforms" : "or register with social platforms"}</p>

          <div className="social-icons">
            <a href="#"><i className="bx bxl-google"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-github"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </form>
      </div>

      <div className="toggle-box">
        <div className="toggle-panel">
          <h1>{isLogin ? "Hello, Welcome to" : "Welcome Back to"}</h1>
          <img src={greencanlogo} alt="greencanlogo" className="main-logo" />
          <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
          <button className="btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>

      <a href="home.html">
        <button className="btn login-btn">Stay Logged Out</button>
      </a>
    </div>
    )
}

export default AccountsPage