import React, { useState, useEffect } from "react";
import '../styles/home.css'
import Navbar from "../components/NavBar";

const HomePage = () => {
  const [isCopyrightAccepted, setIsCopyrightAccepted] = useState(
    localStorage.getItem("copyrightAccepted") === "true"
  );
  const [isFinalConfirmation, setIsFinalConfirmation] = useState(
    localStorage.getItem("finalConfirmed") === "true"
  );

  useEffect(() => {
    localStorage.setItem("copyrightAccepted", isCopyrightAccepted);
  }, [isCopyrightAccepted]);

  useEffect(() => {
    localStorage.setItem("finalConfirmed", isFinalConfirmation);
  }, [isFinalConfirmation]);

  return (
    <div>
        <Navbar/>
      {!isCopyrightAccepted && (
        <div className="overlay" id="copyright-overlay">
          <div className="popup" id="copyright-popup">
            <h2>Copyright Warning</h2>
            <p>This website and all of its contents, including but not limited to text, design, code, graphics, logos, and images, are the exclusive property of GreenCan and are protected by international copyright laws. No part of this website may be copied, reproduced, distributed, or otherwise used for any commercial or non-commercial purposes without explicit, written permission from Vansh Patel [CEO & Founder of GreenCan]. <br></br> PLEASE NOTE: <br></br>Some vector images used on this website are licensed and are the property of their respective owners.</p>
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="agree-checkbox"
                onChange={(e) =>
                  e.target.checked && setIsCopyrightAccepted(true)
                }
              />
              <label htmlFor="agree-checkbox">
                I understand and agree to these terms
              </label>
            </div>
          </div>
        </div>
      )}

      {isCopyrightAccepted && !isFinalConfirmation && (
        <div className="overlay" id="confirmation-overlay">
          <div className="popup small-popup" id="confirmation-popup">
            <h3>Final Confirmation</h3>
            <p>
              Please remember that copying this project and design is strictly
              prohibited.
            </p>
            <button onClick={() => setIsFinalConfirmation(true)}>
              I Understand
            </button>
          </div>
        </div>
      )}

      {isFinalConfirmation && (
        <div className="main" id="main-content">
          <div className="hero">
            <div className="overlay1"></div>
            <div className="hero-content">
              <h1>Welcome to GreenCan</h1>
              <p>
              Whether you're an individual, business, or community, GreenCan helps <br></br>
              you turn waste into value through innovative recycling solutions,<br></br>
              eco-friendly initiatives, and our Green Credit Programme. Join us in<br></br>
              building a cleaner, greener tomorrow—one step at a time. <br></br>
              Start making an impact today!
              </p>
              <button className="primary-button">Contact Us</button>
            </div>
          </div>

          <section className="about">
            <h2>About GreenCan</h2>
            <div className="text1">
            <p>Whether you're an individual, business, or community, GreenCan helps you <br></br> turn waste into value through innovative recycling solutions, eco-friendly <br></br> initiatives, and our Green Credit Programme.<br></br> </p>
            <p>Founded in 2025, we aim to be at the forefront of the green revolution, helping<br></br> our clients minimize their environmental footprint while maximizing resource <br></br>efficiency.</p>
            </div>
            <div class="about-stats">
                <div class="stat-box">
                  <h3>160KG</h3>
                  <p>Waste Diverted from Landfills</p>
                </div>
                <div class="stat-box">
                  <h3>1M +</h3>
                  <p>Happy Customers</p>
                </div>
                <div class="stat-box">
                  <h3>34K +</h3>
                  <p>Communities Served</p>
                </div>
              </div>
          </section>

          <section className="services">
            <h2>Our Services</h2>
            <div className="services-grid">
            <div class="service-card">
                <div class="service-icon">♻️</div>
                <h3>Recycling Programs</h3>
                <p>Comprehensive recycling solutions tailored to your specific needs, whether residential or commercial.</p>
              </div>
              <div class="service-card">
                <div class="service-icon">🌱</div>
                <h3>Composting</h3>
                <p>Turn organic waste into valuable compost with our efficient composting services.</p>
              </div>
              <div class="service-card">
                <div class="service-icon">🏢</div>
                <h3>Commercial Solutions</h3>
                <p>Specialized waste management programs designed for businesses of all sizes.</p>
              </div>
              <div class="service-card">
                <div class="service-icon">📊</div>
                <h3>Waste Audits</h3>
                <p>Detailed analysis of your waste stream to identify opportunities for reduction and recycling.</p>
              </div>
            </div>
          </section>

          <section className="contact">
            <h2>Get in Touch</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="cta-button">Send Message</button>
            </form>
          </section>
        </div>
      )}
    </div>
  );
};

export default HomePage;
