import React from "react";
import "../assets/Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Navigation Links */}
        <ul className="footer-nav">
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Center - Logo / Title */}
        <div className="footer-logo">K2I</div>

        {/* Right - Social Media Icons */}
        <div className="footer-socials">
          <a href="#" title="Instagram"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" title="Pinterest"><i className="fa-brands fa-pinterest"></i></a>
          <a href="#" title="Twitter"><i className="fa-brands fa-twitter"></i></a>
          <a href="#" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#" title="Google"><i className="fa-brands fa-google"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 K2I | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
