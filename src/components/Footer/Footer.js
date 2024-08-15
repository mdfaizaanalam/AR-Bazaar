import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="contact" id="contact">
      <div className="main-content">
        <div class="contact-content">
          <Link to="/"> Home </Link>
          <Link
            to="/about"
          >
            About
          </Link>
          <Link to="/"> Services </Link>
        </div>

        <div className="contact-content">
          <Link to="/"> Shipping & Returns </Link>
          <Link to="/"> Store Policy </Link>
          <Link to="/"> Payment Method </Link>
        </div>

        <div className="contact-content">
          <Link to="/"> Feedback & Suggestions</Link>
          <Link to="mailto:faizanalam327@gmail.com" target="_blank">
            Contact
          </Link>
          <Link to="/"> Tel: 123-456-7890 </Link>
        </div>

        <div className="contact-content">
          <Link
            to="https://github.com/mdfaizaanalam"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/md-faizaan-alam-78b75714a/"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link to="https://x.com/mdfaizaanalam_" target="_blank">
            Twitter
          </Link>
        </div>
      </div>

      <div class="action">
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <input type="submit" name="submit" value="Submit" required></input>
        
        </form>
      </div>
      <div class="last">
        <p>@ 2024 AR-Bazaar | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
