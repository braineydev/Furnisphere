import axios from "axios";
import React, { useState } from "react";
import Footer from "./Footer";
import Navcomponent from "./Navcomponent";

const Addproduct = () => {
  const [product_name, setProductname] = useState("");
  const [product_description, setProductdescription] = useState("");
  const [product_cost, setProductcost] = useState("");
  const [product_photo, setProductphoto] = useState("");

  // hook for user information
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // function to handle submit
  const submit = async (e) => {
    // prevent reload
    e.preventDefault();
    setLoading("Please Wait...");

    // prepare object formdata
    const data = new FormData();
    // append updated hooks
    data.append("product_name", product_name);
    data.append("product_description", product_description);
    data.append("product_cost", product_cost);
    data.append("product_photo", product_photo);

    try {
      // send data to api
      const response = await axios.post(
        "https://braineydev.pythonanywhere.com/api/addproduct",
        data
      );

      setLoading("");
      setError("");
      setSuccess(response.data.message);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };
  return (
    <div className="row justify-content-center ">
      <Navcomponent></Navcomponent>
      <div className="card shadow col-md-6 p-4 text center">
        <h2>Add Product</h2>
        <form onSubmit={submit} className="mt-5 mb-5">
          <span className="text-info">{loading}</span>
          <span className="text-success">{success}</span>
          <span className="text-danger">{error}</span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Product Name"
            value={product_name}
            onChange={(e) => setProductname(e.target.value)}
          />{" "}
          <br />
          <textarea
            className="form-control"
            placeholder="Product Description"
            value={product_description}
            onChange={(e) => setProductdescription(e.target.value)}
          ></textarea>
          <br />
          <input
            type="number"
            className="form-control"
            placeholder="Enter Product Cost"
            value={product_cost}
            onChange={(e) => setProductcost(e.target.value)}
          />{" "}
          <br />
          <br />
          <label htmlFor="">browse/ Upload product photo</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setProductphoto(e.target.files[0])}
          />{" "}
          <br />
          <button type="submit" className="btnl btn-s text-center">
            Upload Product
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Addproduct;
