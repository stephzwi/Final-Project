import "./index.css";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import Navbar from "./Components/Navbar";
import Account from "./Components/Account";
import Cart from "./Components/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
