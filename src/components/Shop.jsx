import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import "../styles/Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    const url = "https://fakestoreapi.com/products";
    const data = await fetch(url);
    const response = await data.json();
    return response;
  }

  useEffect(() => {
    getData().then((response) => {
      setLoading(false);
      setProducts(response);
    });
  }, []);

  return (
    <div className="shop">
      <div className="cards">
        {products.map((product) => {
          return (
            <Card
              title={product.title}
              image={product.image}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
