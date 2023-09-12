import "./App.css";
import "./Home.css";
import Home from "./Components/Home";
import Layout from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Cart from "./Components/Cart";

//use react router create different path for each page
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
