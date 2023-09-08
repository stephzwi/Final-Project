import "./App.css";
import "./Home.css";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

//use react router create different path for each page
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
