import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const fecha = new Date();
  const year = fecha.getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="privacy">
        <h3>{year} @ Copyrigth all rigths reserved</h3>
        </div>
        <div className="social-link">
          <FaGithub className="s-link"/>
          <FaLinkedin className="s-link"/>
          <FaTwitter className="s-link"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
