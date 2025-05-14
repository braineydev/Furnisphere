import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navcomponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false); // State for toggling navbar

  // Check login status on component mount and when event is dispatched
  useEffect(() => {
    const updateLoginStatus = () => {
      const status = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(status === "true");
    };

    updateLoginStatus(); // Initial check

    // Listen to loginStatusChanged event (custom) and storage (if across tabs)
    window.addEventListener("loginStatusChanged", updateLoginStatus);
    window.addEventListener("storage", updateLoginStatus);

    // Clean up
    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
      window.removeEventListener("storage", updateLoginStatus);
    };
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("loginStatusChanged"));
    navigate("/signin");
  };

  // Handle navbar toggle
  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div
      className="container-fluid mb-0 mt-2"
      style={{ objectFit: "contain", backgroundColor: "white" }}
    >
      <section className="row">
        <div className="col-md-12 bg">
          <nav
            className="navbar navbar-expand-md navbar-light nb"
            style={{ color: "black", background: "white" }}
          >
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center"
              style={{
                fontWeight: "bolder",
                marginLeft: "30px", // Increased margin start
                marginTop: "10px",
                fontSize: "1.8rem", // Larger font for FurniSphere name
              }}
            >
              <span className="text-dark">
                <b>FurniSphere</b>
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar} // Added toggle function
              aria-controls="navbarNav"
              aria-expanded={isNavExpanded ? "true" : "false"} // Dynamic aria-expanded
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className={`collapse navbar-collapse justify-content-end ${
                isNavExpanded ? "show" : ""
              }`} // Dynamically add "show" class
              id="navbarNav"
            >
              <div className="navbar-nav me-3">
                <Link
                  to="/"
                  className="nav-link active text-dark d-flex align-items-center"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2rem", // Larger font size for nav links
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/addproduct"
                  className="nav-link active text-dark d-flex align-items-center"
                  style={{
                    fontWeight: "bolder",
                    fontSize: "1.2rem", // Larger font size for nav links
                  }}
                >
                  Add Product
                </Link>

                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/signin"
                      className="nav-link text-dark d-flex align-items-center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.2rem", // Larger font size for nav links
                      }}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="nav-link text-dark d-flex align-items-center"
                      style={{
                        fontWeight: "bolder",
                        fontSize: "1.2rem", // Larger font size for nav links
                      }}
                    >
                      Sign Up
                    </Link>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="nav-link text-dark btn btn-link d-flex align-items-center"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bolder",
                      fontSize: "1.2rem", // Larger font size for nav links
                    }}
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </nav>
        </div>
      </section>
      <br />
    </div>
  );
};

export default Navcomponent;
