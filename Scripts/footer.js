import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

document.querySelector('#eco-footer').innerHTML = `
  <div class="footer-container">
    <div class="footer-logo-section">
      <h2 class="footer-logo">GreenCan</h2>
      <p class="footer-tagline">Sustainable solutions for a greener tomorrow</p>
    </div>
    
    <div class="footer-links">
      <div class="footer-column">
        <h3>Products</h3>
        <ul>
          <li><a href="#">Eco Containers</a></li>
          <li><a href="#">Biodegradable Packaging</a></li>
          <li><a href="#">Compost Solutions</a></li>
          <li><a href="#">Recycling Systems</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h3>Company</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Our Mission</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h3>Resources</h3>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Eco Tips</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
      
      <div class="footer-column">
        <h3>Contact</h3>
        <ul>
          <li><a href="mailto:info@greencan.com">info@greencan.com</a></li>
          <li><a href="tel:+11234567890">+1 (123) 456-7890</a></li>
          <li>123 Green Street, Eco City</li>
        </ul>
        <div class="social-icons">
          <a href="#" class="social-icon">FB</a>
          <a href="#" class="social-icon">TW</a>
          <a href="#" class="social-icon">IG</a>
          <a href="#" class="social-icon">LI</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; 2025 GreenCan. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
      <p class="eco-certification">Certified B Corporation | Carbon Neutral</p>
    </div>
  </div>
`