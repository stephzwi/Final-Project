import "./index.css";
import Home from "./Components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import Login from "./Components/Account";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/cart" element={<Cart user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
