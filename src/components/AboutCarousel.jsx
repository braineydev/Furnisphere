import React from "react";
import { Link } from "react-router-dom";

const AboutCarousel = () => {
  return (
    <section
      style={{
        minHeight: "40vh",
        position: "relative",
        background: "#f2f3f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: "0",
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "8%",
          transform: "translateY(-50%)",
          fontSize: "10rem",
          color: "#6c63ff",
          opacity: 0.6,
          zIndex: 1,
          fontWeight: "bold",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        furnisphere
      </div>

      {/* Left Text */}
      <div
        style={{
          color: "#000000",
          zIndex: 2,
          position: "absolute",
          top: "50%",
          left: "8%",
          transform: "translateY(-50%)",
          maxWidth: "38%",
        }}
      >
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Why Choose Us?
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Discover our passion for exceptional interiors, timeless furniture,
          and sustainable living. See what makes us different.
        </p>
        <Link to="/products">
          <button
            style={{
              padding: "0.6rem 1.7rem",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
              marginRight: "1rem",
            }}
          >
            Browse Collection
          </button>
        </Link>
        <Link to="/contact">
          <button
            style={{
              padding: "0.6rem 1.7rem",
              backgroundColor: "transparent",
              color: "#000000",
              fontWeight: "bold",
              border: "2px solid #000000",
              borderRadius: "5px",
            }}
          >
            Talk to Us
          </button>
        </Link>
      </div>

      {/* Trapezium */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          width: "58%",
          clipPath: "polygon(0% 0, 88% 0, 100% 100%, 12% 100%)",
          background: "#e3e8f0",
          zIndex: 0,
          borderTop: "6px solid #222222",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "6px",
            height: "100%",
            backgroundColor: "#c8d9e6",
            zIndex: -1,
          }}
        />
      </div>

      {/* Image */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "4%",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      >
        <img
          src="static/images/wcu.png"
          alt="Why Choose Furnisphere"
          style={{
            width: "640px",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </section>
  );
};

export default AboutCarousel;
