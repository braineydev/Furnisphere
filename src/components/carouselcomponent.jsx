import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username);
      setShowWelcome(true);

      // Hide after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section
      style={{
        minHeight: "48vh",
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
          fontSize: "8rem",
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
            fontSize: "2.4rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Modern Interior Design Studio
        </h1>
        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Welcome to Furnisphere, where modern design meets timeless comfort
        </p>

        <Link to="/chatbot">
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
            AI Chatbot
          </button>
        </Link>

        <Link to="/aboutus">
          <button
            className="btn btn-outline-dark mb-2"
            style={{ padding: "0.6rem 1.7rem", fontWeight: "bold" }}
          >
            About Us
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
        {/* Welcome Message */}
        {showWelcome && (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              left: "8%",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.3rem",
              backgroundColor: "#ffffffcc",
              padding: "0.7rem 1.2rem",
              borderRadius: "10px",
              boxShadow: "0px 0px 8px rgba(0,0,0,0.15)",
              zIndex: 5,
            }}
          >
            ...Welcome, {username} 🤗!
          </div>
        )}
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
          src="static/images/hero2.png"
          alt="Modern Furniture"
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

export default HeroSection;
