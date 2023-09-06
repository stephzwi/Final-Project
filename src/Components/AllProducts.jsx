import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      }
    }
    fetchProducts();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Page Loading</div>
      ) : (
        products.map((product) => {
          return (
            <div
              onClick={() => navigate(`/products/${product.id}`)}
              key={product.id}
            >
              <ul>
                <li>{product.category}</li>
                <li>{product.description}</li>
                <img className="Product-Image" src={product.image} />
                <li>{product.price}</li>
                <li>
                  {product.rating.count}
                  {product.rating.rate}
                </li>
                <li>{product.title}</li>
              </ul>
            </div>
          );
        })
      )}
    </>
  );
}
