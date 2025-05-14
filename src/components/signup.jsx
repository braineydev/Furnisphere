import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons

const Signup = () => {
  // Initialize Hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setloading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigation = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setloading("Please wait as your data gets uploaded");

    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", phone);

      const response = await axios.post(
        "https://braineydev.pythonanywhere.com/api/signup",
        data
      );
      setloading("");
      setError("");
      setSuccess(response.data.message);

      // Clear hooks when signup is successful
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      setTimeout(() => navigation("/signin", 3000));
    } catch (error) {
      setloading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center mb-0 ">
      <div className="card shadow p-4 col-md-6 text-center sign">
        <h2>Sign up</h2>
        {/* On form submission, invoke submit function */}
        <form onSubmit={submit} className="mt-5 mb-5">
          <span className="text-info">{loading}</span>
          <span className="text-success">{success}</span>
          <span className="text-danger">{error}</span>

          {/* Username Input */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

          {/* Email Input */}
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          {/* Password Input with Toggle Eye Icon */}
          <div className="position-relative">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle visibility
              className="form-control"
              placeholder="Password "
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Eye Icon */}
            <span
              className="position-absolute"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
              {/* Toggle between Eye and EyeSlash */}
            </span>
          </div>
          <br />

          {/* Phone Number Input */}
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />

          {/* Sign Up Button */}
          <button type="submit" className="btnl btn-s text-center">
            Sign up
          </button>
        </form>

        {/* Link to Sign In */}
        <p>
          Already have an account? <Link to={"/signin"}>Signin</Link>
        </p>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Signup;
