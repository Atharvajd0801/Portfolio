
import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return <div className="about">
  <div className="left">
    <h1>Who am I?</h1>
    <p>
        I'm a software engineer. I am studying at SKNCOE Pune in IT branch in the Final Year.
    </p>
    <Link to="/contact">
        <button className="btn">Contact</button>
    </Link>
  </div>
  </div>
};  

export default AboutContent
