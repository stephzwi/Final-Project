import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Layout from "./Layout";

export default function AllProducts() {
  const Url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(Url);
        const result = await response.json();
        console.log(result);
        setProducts(result);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <Layout currentPage={AllProducts} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {products.map((product) => (
              <div
                onClick={() => navigate(`/products/${product.id}`)}
                key={product.id}
              >
                <div>
                  <ul>
                    <h5>Title: {product.title}</h5>
                    <h4>Description: {product.description}</h4>
                    <h4>Category: {product.category}</h4>
                    <img
                      className="Product-Image"
                      src={product.image}
                      alt={product.title}
                    />
                    <h6>{product.rating.rate} Stars</h6>
                    <h6>{product.rating.count} Ratings</h6>{" "}
                    <h5>Price: {product.price}</h5>
                    <button>Buy</button>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
