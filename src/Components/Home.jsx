import AllProducts from "./AllProducts";
import Login from "./Login";
import { useParams } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar-item">Home</div>
      <div className="nav-bar-item">Login</div>
      <div className="nav-bar-item">Register</div>
      <div className="nav-bar-item">All Products</div>
      <div className="nav-bar-item">My Cart </div>
    </div>
  );
}
