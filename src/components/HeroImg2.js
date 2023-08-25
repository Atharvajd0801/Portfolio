import "./HeroImg2Styles.css"

import React, { Component } from 'react'

class HeroImg2 extends Component {
  render() {
    const { heading, text } = this.props;
    return (
      <div className="hero-img">
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default HeroImg2
