import React from "react";

function Navbar({ currentPage }) {
  const navbarClass = `navbar ${currentPage}`;
  console.log("Anything");
  return (
    <nav className={navbarClass}>
      <ul className="nav-bar-container">
        <li className="nav-bar-item">
          <a href="/" className="custom-link">
            Home
          </a>
        </li>
        <li className="nav-bar-item">
          <a href="/login" className="custom-link">
            Login
          </a>
        </li>
        <li className="nav-bar-item">Register</li>
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
    </nav>
  );
}

export default Navbar;
