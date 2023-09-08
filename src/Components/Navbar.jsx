import React from "react";

function Navbar() {
  return (
    <nav>
      <ul className="nav-bar-container">
        <li className="nav-bar-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-bar-item">
          <a href="/login">Login</a>
        </li>
        <li className="nav-bar-item">Register</li>
        <li className="nav-bar-item">
          <a href="/products">All Products</a>
        </li>
        <li className="nav-bar-item">
          <a href="/cart">My Cart</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
