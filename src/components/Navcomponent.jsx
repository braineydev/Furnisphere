import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navcomponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const updateLoginStatus = () => {
      const status = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(status);

      if (status) {
        const user = JSON.parse(localStorage.getItem("user"));
        setUsername(user?.username || "User");
      } else {
        setUsername("");
      }
    };

    updateLoginStatus();

    window.addEventListener("loginStatusChanged", updateLoginStatus);
    window.addEventListener("storage", updateLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", updateLoginStatus);
      window.removeEventListener("storage", updateLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("loginStatusChanged"));
    navigate("/signin");
  };

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">
          FurniSphere
        </Link>

        {/* Center: Greeting */}
        {isLoggedIn && (
          <div className="d-none d-md-block text-center flex-grow-1">
            <span className="fw-bold text-dark fs-5">Hello, {username}</span>
          </div>
        )}

        {/* Right: Nav links */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav text-center">
            <Link
              className={`nav-link fw-bold text-dark fs-5 ${isActive("/")}`}
              to="/"
            >
              Home
            </Link>

            {isLoggedIn && (
              <Link
                className={`nav-link fw-bold text-dark fs-5 ${isActive(
                  "/addproduct"
                )}`}
                to="/addproduct"
              >
                Add Product
              </Link>
            )}

            {!isLoggedIn ? (
              <>
                <Link
                  className={`nav-link fw-bold text-dark fs-5 ${isActive(
                    "/signin"
                  )}`}
                  to="/signin"
                >
                  Sign In
                </Link>
                <Link
                  className={`nav-link fw-bold text-dark fs-5 ${isActive(
                    "/signup"
                  )}`}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="nav-link btn btn-link fw-bold text-dark fs-5"
                style={{ textDecoration: "none" }}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navcomponent;
