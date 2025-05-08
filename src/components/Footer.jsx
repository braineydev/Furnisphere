import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5 mb-0">
      <div className="container">
        <div className="row">
          {/* Brand Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h4 className="fw-bold">FurniSphere</h4>
            <p>Bringing comfort & style to your home with premium furniture.</p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Categories</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Dining
                </Link>
              </li>
              <li>
                <Link to="#" className="text-light text-decoration-none">
                  Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@furnisphere.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main Street, City, Country</p>
            <div className="d-flex gap-3">
              <Link to="#" className="text-light">
                <FaFacebookF />
              </Link>
              <Link to="#" className="text-light">
                <FaInstagram />
              </Link>
              <Link to="#" className="text-light">
                <FaTwitter />
              </Link>
              <Link to="#" className="text-light">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} FurniSphere By John Brainey. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
