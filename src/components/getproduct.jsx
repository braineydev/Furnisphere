import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CarouselComponent from "./carouselcomponent";
import Footer from "./Footer";

const Getproducts = () => {
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const img_url = "https://braineydev.pythonanywhere.com/static/images/";

  const getproducts = async () => {
    setLoading("Please wait....");
    try {
      const response = await axios.get(
        "https://braineydev.pythonanywhere.com/api/get_product_details"
      );
      setLoading("");
      setError("");
      setProduct(response.data);
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  const filtered_products = product.filter(
    (item) =>
      item.product_name.toLowerCase().includes(search.toLowerCase()) ||
      item.product_description.toLowerCase().includes(search.toLowerCase())
  );

  // Rating hover handler
  const [hoveredRating, setHoveredRating] = useState(null);
  const [rated, setRated] = useState(null);

  const handleHover = (rating) => {
    setHoveredRating(rating);
  };

  const handleClick = (rating) => {
    setRated(rating);
  };

  return (
    <div className="row justify-content-center">
      <CarouselComponent />
      <hr
        style={{ height: "5px", backgroundColor: "#000000", border: "none" }}
      />

      <span className="text-info">{loading}</span>
      <span className="text-danger">{error}</span>

      <section className="container-fluid px-0">
        <div
          className="card px-4 pb-5"
          style={{
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            border: "none",
            backgroundColor: "transparent",
          }}
        >
          <h3
            className="text-center pt-5"
            style={{ fontSize: "2rem", fontWeight: "bold", color: "#000" }}
          >
            Featured Products
          </h3>
          <h6
            className="text-center mb-4"
            style={{ fontSize: "1.2rem", fontWeight: "600", color: "#000" }}
          >
            Crafted with excellent material.
          </h6>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 my-3">
              <div className="card shadow text-center h-100">
                <img
                  src="/static/images/a2.jpg"
                  alt="Nordic Chair"
                  className="card-img-top"
                  style={{
                    height: "300px", // Fixed height
                    width: "100%", // Full width
                    objectFit: "cover", // Ensure the image fits within the card
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 my-3">
              <div className="card shadow text-center h-100">
                <img
                  src="/static/images/a1.jpg"
                  alt="Kruzo Aero Chair"
                  className="card-img-top"
                  style={{
                    height: "300px", // Fixed height
                    width: "100%", // Full width
                    objectFit: "cover", // Ensure the image fits within the card
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 my-3">
              <div className="card shadow text-center h-100">
                <img
                  src="/static/images/a3.jpg"
                  alt="Ergonomic Chair"
                  className="card-img-top"
                  style={{
                    height: "300px", // Fixed height
                    width: "100%", // Full width
                    objectFit: "cover", // Ensure the image fits within the card
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-dark mb-2"
              style={{ padding: "0.6rem 1.7rem", fontWeight: "bold" }}
            >
              Explore
            </button>
          </div>
        </div>
      </section>

      <div className="row justify-content-center">
        <h3 className="text-center mt-3" style={{ color: "#ff7a00" }}>
          Available Products
        </h3>
        <div className="col-md-6 my-5">
          <input
            type="search"
            className="form-control w-60"
            placeholder="Search Products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {filtered_products.map((product) => (
        <div
          className="col-md-3 justify-content-center md-4 mt-2 card-container"
          key={product.id}
        >
          <div className="card hover shadow text-center h-100">
            <img
              src={img_url + product.product_photo}
              alt=""
              className="product_img mt"
              style={{
                width: "100%", // Full width
                height: "300px", // Fixed height
                objectFit: "contain", // Ensure image fits without distortion
                borderTopLeftRadius: "0.5rem",
                borderTopRightRadius: "0.5rem",
              }}
            />
            <div className="card-body mt-2">
              <h5 className="mt-2">{product.product_name}</h5>
              <p className="text-muted">{product.product_description}</p>
              <strong>
                <b className="text-dark">Ksh. {product.product_cost}</b>
              </strong>
              <br />
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
                    onClick={() => handleClick(rating)}
                    onMouseEnter={() => handleHover(rating)}
                    onMouseLeave={() => handleHover(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    width="20"
                    viewBox="0 0 24 24"
                    fill={
                      hoveredRating >= rating || rated >= rating
                        ? "black"
                        : "none"
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

              <button
                onClick={() => {
                  const user = JSON.parse(localStorage.getItem("user"));
                  if (!user) {
                    alert("You must be logged in to add items to the cart.");
                    navigate("/signin");
                    return;
                  }
                  navigate("/makepayment", { state: { product, img_url } });
                }}
                className="btn btn-outline-dark mb-2"
                style={{ padding: "0.6rem 1.7rem", fontWeight: "bold" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Why Choose Us Section */}
      <section className="container my-5">
        <h3 className="text-center fw-bold mb-4" style={{ color: "#ff7a00" }}>
          Why Choose Us
        </h3>
        <div className="row text-center justify-content-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <img
                src="/static/images/free2.png"
                alt="Fast Shipping"
                className="mb-3 mx-auto"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">Fast & Free Shipping</h5>
              <p className="text-muted">On all orders above Ksh 10,000.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <img
                src="/static/images/return.png"
                alt="Easy Returns"
                className="mb-3 mx-auto"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">Easy Returns</h5>
              <p className="text-muted">30-day hassle-free return policy.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <img
                src="/static/images/secure.png"
                alt="Secure Payment"
                className="mb-3 mx-auto"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">Secure Payment</h5>
              <p className="text-muted">Your payment info is 100% safe.</p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-sm p-4 border-0 h-100">
              <img
                src="/static/images/247.png"
                alt="24/7 Support"
                className="mb-3 mx-auto"
                style={{ height: "60px" }}
              />
              <h5 className="fw-bold">24/7 Support</h5>
              <p className="text-muted">Contact us anytime, any day.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Getproducts;
