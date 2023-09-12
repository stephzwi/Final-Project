import React from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";

function Cart() {
  return (
    <div>
      <Layout currentPage={Cart} />
      <h1>This is the Cart </h1>
    </div>
  );
}
export default Cart;
