import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={27} style={{color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>205 Akshay Prime Pune.</p>
              <p>India</p>
            </div>
          </div>
          
          <div className="contact-info">
            <div className="phone">
              <h4><FaPhone size={20} style={{color: "#fff", marginRight: "1rem" }} />
                9403580416</h4>
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "1rem" }} />
                atharvadharasurkar2002@gmail.com </h4>
            </div>
          </div>
        </div>
        <div className="right">
            <h4>About the College</h4>
            <p>Smt.Kashibai Navale College Of Engineering Vadgaon, Pune.</p>
            <div className="social">
              <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem" }} />
              <FaInstagram size={30} style={{color: "#fff", marginRight: "1rem" }} />
              <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem" }} />
              <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem" }} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;
