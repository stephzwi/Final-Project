import React, { useState } from "react";
import Navbar from "./Navbar";

function Cart({ currentPage }) {
  // Sample cart items (replace with your actual cart data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 10.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 19.99, quantity: 1 },
  ]);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Price: ${item.price}</span>
                <span>Quantity: {item.quantity}</span>
                <button>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
