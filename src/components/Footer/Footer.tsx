import React from "react";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className=".about-us">About Us</h3>
            <p>
              Welcome to our programming learning books website! We are
              dedicated to providing high-quality resources for programmers of
              all levels, from beginners to advanced professionals.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contactus@thebookstore.com</p>
            <p>Phone: +9198099988</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p>Stay connected with us on social media:</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="_blank">
                Facebook
              </a>
              <a href="https://twitter.com/?lang=en" target="_blank">
                Twitter
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
