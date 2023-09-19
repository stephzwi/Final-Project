import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export default function AllProducts() {
  const Url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Add state for user rating
  const [userRatings, setUserRatings] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(Url);
        const result = await response.json();

        // Initialize user ratings to match the initial product ratings
        const initialUserRatings = {};
        result.forEach((product) => {
          initialUserRatings[product.id] = product.rating.rate;
        });

        setProducts(result);
        setUserRatings(initialUserRatings);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Function to handle user rating changes
  function handleRatingChange(productId, newRating) {
    // Update the user's rating state
    setUserRatings((prevUserRatings) => ({
      ...prevUserRatings,
      [productId]: newRating,
    }));

    // You can also send an API request to update the rating on the server here
    // Example API request to update the rating on the server:
    // updateRatingOnServer(productId, newRating);
  }

  // Function to capitalize the first letter of every word
  function capitalizeFirstLetter(str) {
    return str
      .split(" ")
      .map((word) => {
        if (word.includes("-")) {
          // Handle hyphens, split by hyphen and capitalize each part
          return word
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("-");
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  // Function to render stars based on rating value
  function renderStars(productId, ratingValue) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= ratingValue ? "star-filled" : "star-empty"}
          onClick={() => handleRatingChange(productId, i)}
        >
          {i <= ratingValue ? "★" : "☆"}{" "}
          {/* Use ★ for filled star and ☆ for empty star */}
        </span>
      );
    }
    return stars;
  }

  return (
    <>
      <div>
        {/* <Layout currentPage={AllProducts} /> */}
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
                    <h4> {capitalizeFirstLetter(product.category)}</h4>
                    <h5> {capitalizeFirstLetter(product.title)}</h5>
                    <h4> {capitalizeFirstLetter(product.description)}</h4>
                    <img
                      className="Product-Image"
                      src={product.image}
                      alt={product.title}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                    />
                    {/* Render stars based on user rating */}
                    <div className="star-rating">
                      {renderStars(product.id, userRatings[product.id])}
                    </div>
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
