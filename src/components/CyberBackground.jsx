import React from "react";
import "../styles/cyber.css";

const CyberBackground = () => {
  return (
    <div className="cyber-bg">
      <div className="cyber-gradient"></div>

      {/* Matrix Rain */}
      <div className="matrix-rain">
        <div className="matrix-column" style={{ left: "5%" }}>
          101010
        </div>
        <div className="matrix-column" style={{ left: "20%" }}>
          010101
        </div>
        <div className="matrix-column" style={{ left: "40%" }}>
          101010
        </div>
        <div className="matrix-column" style={{ left: "60%" }}>
          010101
        </div>
        <div className="matrix-column" style={{ left: "80%" }}>
          101010
        </div>
      </div>

      {/* Grid */}
      <div className="grid-overlay">
        <div className="grid-lines"></div>
        <div className="grid-glow"></div>
      </div>

      {/* Particles */}
      <div className="particles">
        <div
          className="particle"
          style={{ left: "10%", animationDelay: "1s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "30%", animationDelay: "3s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "50%", animationDelay: "5s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "70%", animationDelay: "7s" }}
        ></div>
        <div
          className="particle"
          style={{ left: "90%", animationDelay: "9s" }}
        ></div>
      </div>

      {/* Orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* Scanlines */}
      <div className="scanlines"></div>

      {/* Noise */}
      <div className="noise-overlay"></div>

      {/* Horizontal moving glow lines */}
      <div className="horizontal-lines"></div>

      {/* Moving Bars */}
      <div className="moving-bars">
        <div className="bar" style={{ top: "10%", animationDelay: "0s" }}></div>
        <div className="bar" style={{ top: "25%", animationDelay: "1s" }}></div>
        <div className="bar" style={{ top: "40%", animationDelay: "2s" }}></div>
        <div className="bar" style={{ top: "55%", animationDelay: "3s" }}></div>
        <div className="bar" style={{ top: "70%", animationDelay: "4s" }}></div>
        <div className="bar" style={{ top: "85%", animationDelay: "5s" }}></div>
      </div>
    </div>
  );
};

export default CyberBackground;
