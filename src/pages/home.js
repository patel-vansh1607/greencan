// import React, { useState, useEffect } from "react";
// const Home = () => {
//   const [isCopyrightAccepted, setIsCopyrightAccepted] = useState(false);
//   const [isFinalConfirmation, setIsFinalConfirmation] = useState(false);

//   return (
//     <div>
//       {/* Copyright Warning Popup */}
//       {!isCopyrightAccepted && (
//         <div className="overlay" id="copyright-overlay">
//           <div className="popup" id="copyright-popup">
//             <h2>Copyright Warning</h2>
//             <p>
//               This website and all of its contents, including but not limited to
//               text, design, code, graphics, logos, and images, are the exclusive
//               property of GreenCan and are protected by international copyright
//               laws. No part of this website may be copied, reproduced,
//               distributed, or otherwise used for any commercial or
//               non-commercial purposes without explicit, written permission from
//               Vansh Patel [CEO & Founder of GreenCan]. <br /> <br />
//               <strong>PLEASE NOTE:</strong> <br /> Some vector images used on this
//               website are licensed and are the property of their respective
//               owners.
//             </p>
//             <div className="checkbox-container">
//               <input
//                 type="checkbox"
//                 id="agree-checkbox"
//                 onChange={(e) =>
//                   e.target.checked && setIsCopyrightAccepted(true)
//                 }
//               />
//               <label htmlFor="agree-checkbox">
//                 I understand and agree to these terms
//               </label>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Final Confirmation Popup */}
//       {isCopyrightAccepted && !isFinalConfirmation && (
//         <div className="overlay" id="confirmation-overlay">
//           <div className="popup small-popup" id="confirmation-popup">
//             <h3>Final Confirmation</h3>
//             <p>
//               Please remember that copying this project and design is strictly
//               prohibited.
//             </p>
//             <button onClick={() => setIsFinalConfirmation(true)}>
//               I Understand
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       {isFinalConfirmation && (
//         <div className="main" id="main-content">
//           <div className="hero">
//             <div className="overlay1"></div>
//             <div className="hero-content">
//               <h1>Welcome to GreenCan</h1>
//               <p>
//                 Whether you're an individual, business, or community, GreenCan
//                 helps you turn waste into value through innovative recycling
//                 solutions, eco-friendly initiatives, and our Green Credit
//                 Programme. Join us in building a cleaner, greener
//                 tomorrow—one step at a time. <br /> Start making an impact
//                 today!
//               </p>
//               <button className="primary-button">Contact Us</button>
//             </div>
//           </div>

//           {/* About Section */}
//           <section className="about">
//             <h2>About GreenCan</h2>
//             <p>
//               GreenCan helps individuals and businesses turn waste into value
//               through recycling and eco-friendly initiatives. Founded in 2025,
//               we aim to be at the forefront of the green revolution.
//             </p>
//           </section>

//           {/* Services Section */}
//           <section className="services">
//             <h2>Our Services</h2>
//             <div className="services-grid">
//               <div className="service-card">
//                 <h3>♻️ Recycling Programs</h3>
//                 <p>Comprehensive recycling solutions for homes and businesses.</p>
//               </div>
//               <div className="service-card">
//                 <h3>🌱 Composting</h3>
//                 <p>Turn organic waste into valuable compost.</p>
//               </div>
//               <div className="service-card">
//                 <h3>📊 Waste Audits</h3>
//                 <p>Analyze waste streams to optimize recycling.</p>
//               </div>
//             </div>
//           </section>

//           {/* Contact Section */}
//           <section className="contact">
//             <h2>Get in Touch</h2>
//             <form>
//               <input type="text" placeholder="Your Name" required />
//               <input type="email" placeholder="Your Email" required />
//               <textarea placeholder="Your Message" rows="5" required></textarea>
//               <button type="submit" className="cta-button">Send Message</button>
//             </form>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
