import "./HeroImgStyles.css"; 
import { Link } from "react-router-dom";
import React from 'react';
import IntroImg from "../assets/project3.jpg";

const  HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" /></div>
            <div className="content">
                <p>Hi, I'm a software Engineer</p>
                <h1>My PortFolio</h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
        </div>
    </div>
  );
};

export default HeroImg;
