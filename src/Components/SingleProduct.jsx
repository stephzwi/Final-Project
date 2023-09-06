import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  let { id } = useParams();
  const Url = `https://fakestoreapi.com/products/${id}`;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(Url);
        const result = await response.json();
        console.log(result);
        setProduct(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>Page Loading</div>
      ) : (
        <ul>
          <li>{product.category}</li>
          <li>{product.description}</li>
          <img className="Product-Image" src={product.image} />
          <li>{product.price}</li>

          <li>{product.title}</li>
        </ul>
      )}
    </>
  );
}
