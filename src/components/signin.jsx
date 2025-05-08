import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navcomponent from "./Navcomponent";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons from React Icons

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Hang on as we sign you in");
    setError("");

    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://braineydev.pythonanywhere.com/api/signin",
        data
      );

      if (response.data.user) {
        // Store user and login status
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("isLoggedIn", "true");

        // Dispatch event to notify Navcomponent
        window.dispatchEvent(new Event("loginStatusChanged"));

        navigate("/");
      } else {
        setLoading("");
        setError(response.data.message);
      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div className="row justify-content-center">
      <Navcomponent />
      <div className="card shadow col-md-4 pt-4 text-center">
        <h2>Sign In</h2>
        <form onSubmit={submit} className="mt-5 mb-5">
          <span className="text-info fs-4">{loading}</span>
          <span className="text-danger fs-4">{error}</span>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div className="position-relative">
            <input
              type={passwordVisible ? "text" : "password"} // Toggle password visibility
              className="form-control"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Eye Icon for toggling password visibility */}
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
              {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
            </span>
          </div>
          <br />
          <button type="submit" className="btnl btn-s text-center w-100">
            Sign In
          </button>
          <br />
        </form>
        <p>
          Don't have an account? <Link to={"/signup"}>Sign Up</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
