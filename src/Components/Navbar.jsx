import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="your_logo_url_here" alt="Logo" />
      </div>
      <ul className="nav-bar-container">
        <li className="nav-bar-item">
          <a href="/" className="custom-link">
            Home
          </a>
        </li>
        <li className="nav-bar-item">
          <a href="/login" className="custom-link">
            Account
          </a>
        </li>
        <li className="nav-bar-item">
          <a href="/products" className="custom-link">
            All Products
          </a>
        </li>
        <li className="nav-bar-item">
          <a href="/cart" className="custom-link">
            My Cart
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
