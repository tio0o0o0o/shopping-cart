import cardStyles from "../styles/Card.module.css";
import { useContext } from "react";
import { CartContext } from "./App";

function Card(props) {
  const { cart, setCart, addItem, getItemIndex, removeItem } =
    useContext(CartContext);

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.imageArea}>
        <img src={props.product.image} alt="" />
      </div>
      <div className={cardStyles.title}>{props.product.title}</div>
      <div className={cardStyles.bottomRow}>
        <div className={cardStyles.price}>${props.product.price}</div>
        <button
          onClick={() => {
            if (getItemIndex(props.product.id) === -1) {
              addItem(props.product);
            } else {
              removeItem(props.product);
            }
          }}
        >
          {getItemIndex(props.product.id) === -1
            ? "Add to cart"
            : "Remove from cart"}
        </button>
      </div>
    </div>
  );
}

export default Card;
