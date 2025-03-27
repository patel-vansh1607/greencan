
import Navbar from "../components/NavBar";
import "../styles/contact.css";


const ContactPage = () => {

  return (
    <div className="mainsec">
        
    <Navbar />
      <div className="hero">
        <div className="overlay1"></div>
        <div className="hero-content">
          <h1>Get in Touch with GreenCan</h1>
          <p>Have questions about our eco-friendly initiatives? Contact us today!</p>
          <div className="hero-buttons">
            <button className="primary-button">
              Contact Us
              <i data-lucide="mail"></i>
            </button>
          </div>
        </div>
      </div>
      <div id="app">
        <form className="eco-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
            <div className="leaf-icon"></div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="your.email@example.com" required />
            <div className="leaf-icon"></div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select id="subject" required>
              <option value="" disabled selected>
                Select a topic
              </option>
              <option value="general">General Inquiry</option>
              <option value="support">Product Support</option>
              <option value="partnership">Partnership Opportunities</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Tell us how we can help you..."
              rows="5"
              required
            ></textarea>
          </div>

          <div className="form-group checkbox-group">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter">Subscribe to our eco-newsletter</label>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="eco-info">
          <div className="eco-fact">
            <div className="eco-icon tree-icon"></div>
            <p>Every email you send helps us plant a tree</p>
          </div>
          <div className="eco-fact">
            <div className="eco-icon water-icon"></div>
            <p>We've saved 1.2M gallons of water this year</p>
          </div>
          <div className="eco-fact">
            <div className="eco-icon recycle-icon"></div>
            <p>100% recycled materials in our packaging</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
