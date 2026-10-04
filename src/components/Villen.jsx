import React from "react";
import villenData from "../../villen.json";
import "./Villen.css";

const Villen = () => {
  return (
    <div className="villen-page">
      <h1 className="villen-title">Marvel VILLENs</h1>

      <div className="villen-container">
        {villenData.map((villain) => {
          return (
            <div key={villain.id} className="villen-card">
              <div className="villen-image-box">
                <img
                  className="villen-image"
                  src={villain.image}
                  alt={villain.name}
                />
              </div>

              <h1 className="villen-name">{villain.name}</h1>

              <p className="villen-power">
                Power: {villain.power}
              </p>

              <p className="villen-weakness">
                Weakness: {villain.weakness}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Villen;