import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const Makepayment = () => {
  const { product, img_url } = useLocation().state || {};
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Rating hook for the current product
  const [hoveredRating, setHoveredRating] = useState(null);
  const [rated, setRated] = useState(null);

  const totalAmount = product ? product.product_cost * quantity : 0;

  const submit = async (e) => {
    e.preventDefault();
    setLoading("Please Wait");

    const data = new FormData();
    data.append("phone", phone);
    data.append("amount", totalAmount);

    try {
      const response = await axios.post(
        "https://braineydev.pythonanywhere.com/api/mpesa_payment",
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
    <div className="row justify-content-center">
      <div className="card m-5 col-md-6 justify-content-center text-center">
        <h1 className="text-success">Lipa na Mpesa</h1>
        <img
          src="/static/images/mpesa.png"
          alt="Mpesa"
          style={{
            height: "200px",
            width: "200px",
            display: "block",
            margin: "0 auto",
            marginBottom: "3dp",
          }}
        />

        <span className="text-info">{loading}</span>
        <span className="text-success">{success}</span>
        <span className="text-danger">{error}</span>

        <div className="card-header">
          <img
            src={img_url + product.product_photo}
            alt="Product"
            className="product_img mt-2"
            style={{ height: "200px", width: "auto" }} // Adjust the image size
          />
        </div>
        <div className="card-body">
          <h5>{product.product_name}</h5>
          <p className="text-muted">{product.product_description}</p>
          <div className="mb-3">
            <label className="form-label">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="form-control"
              style={{ width: "100px", margin: "0 auto" }}
              required
            />
          </div>
          <strong>
            <b>Ksh {totalAmount}</b> <br />
          </strong>
        </div>

        {/* Rating section */}
        <div
          className="rating"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {[1, 2, 3, 4, 5].map((rating) => (
            <svg
              key={rating}
              onClick={() => setRated(rating)}
              onMouseEnter={() => setHoveredRating(rating)}
              onMouseLeave={() => setHoveredRating(null)}
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 24 24"
              fill={
                hoveredRating >= rating || rated >= rating ? "black" : "none"
              }
              stroke="black"
              strokeWidth="2"
              style={{
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        <div className="card-footer">
          <form onSubmit={submit}>
            <label htmlFor="" className="form-control fs-3">
              Phone Number to Pay
            </label>
            <input
              type="tel"
              className="form-control"
              placeholder="2547...."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-outline-success mb-2 mt-3"
              style={{ padding: "0.6rem 1.7rem", fontWeight: "bold" }}
            >
              Pay Now
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Makepayment;
