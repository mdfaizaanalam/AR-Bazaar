import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaExternalLinkAlt } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    // Clear form fields after submission
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Let's Connect and Revolutionize E-commerce</h1>
        <p>We're excited to hear from you! Reach out for any queries or collaboration opportunities.</p>
      </div>
      <div className="contact-info">
        <h2>Contact the Project Admin:</h2>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/md-faizaan-alam-78b75714a/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a
            href="https://github.com/mdfaizaanalam"
            className="contact-link"
          >
            <FaGithub size={24} /> GitHub
          </a>
          <a
            href="https://www.instagram.com/mdfaizaanalam/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaInstagram size={24} /> Instagram
          </a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message:</h2>
        <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="dcca4d99-6061-4b3a-86ae-10f58aac6851" />
          <div className="form-group">
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
