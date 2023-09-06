import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";

//use react router create different path for each page
function App() {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
