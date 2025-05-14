// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Addproduct from "./components/Addproduct";
import Getproducts from "./components/getproduct";
import Pagenotfound from "./components/pagenotfound";
import Makepayment from "./components/makepayment";
import AboutUs from "./components/AboutUs";
import Chatbot from "./components/chatbot";

// import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <header></header>
        </div>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/" element={<Getproducts />} />
          <Route path="/makepayment" element={<Makepayment />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
