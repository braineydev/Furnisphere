import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <div className=" justify-content-center mt-4 text-center">
      <h1>404</h1>
      <h3>Oops! Page Not Found</h3>
      <p>
        The page you are looking for might have been removed or is temporarily
        unavailable
      </p>
      <button type="submit">
        <Link className="btn btn-primary l" to={"/"}>
          Go Home
        </Link>
      </button>
    </div>
  );
};
export default Pagenotfound;
