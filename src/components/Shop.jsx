import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import shopStyles from "../styles/Shop.module.css";

//WARNING: Data is fetched every time the shop page is loaded. Move the data fetching to the App component
function useGetProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((response) => {
        if (response.status === 400) {
          throw new Error("Server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}

function Shop() {
  const { products, loading, error } = useGetProducts();

  return (
    <div className={shopStyles.shop}>
      <div className={shopStyles.cards}>
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
