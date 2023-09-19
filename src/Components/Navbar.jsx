import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="your_logo_url_here" alt="Logo" />
      </div>
      <ul className="nav-bar-container">
        <li className="nav-bar-item">
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/cart" className="custom-link">
            My Cart
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/login" className="custom-link">
            Account
          </Link>
        </li>

        <li className="nav-bar-item">
          <Link to="/products" className="custom-link">
            All Products
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
