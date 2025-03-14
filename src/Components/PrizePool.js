import React from "react";
import "./css/prizepool.css";

const PrizePool = () => {
  return (
    <div className="prize-pool-section">
      <div className="prize-pool-content">
        <h2>Prize Pool</h2>
        <div className="prize-amount">
          <span className="currency">₹</span>
          <span className="amount">3.0</span>
          <span className="lakhs">Lakhs</span>
        </div>
      </div>
    </div>
  );
};

export default PrizePool; 
