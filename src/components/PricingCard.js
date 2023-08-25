import "./PricingCardStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h2>- Basic -</h2>
                <span className="bar"></span>
                <p className="btc">₹ 100</p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-Featured-</p>
                <p>-Resposive Design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h2>- Premium -</h2>
                <span className="bar"></span>
                <p className="btc">₹ 200</p>
                <p>-2 Days-</p>
                <p>-5 Pages-</p>
                <p>-Featured-</p>
                <p>-Resposive Design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h2>- Business -</h2>
                <span className="bar"></span>
                <p className="btc">₹ 300</p>
                <p>-4 Days-</p>
                <p>-6 Pages-</p>
                <p>-Featured-</p>
                <p>-Resposive Design-</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
            </div>      
    </div>
  )
}

export default PricingCard
