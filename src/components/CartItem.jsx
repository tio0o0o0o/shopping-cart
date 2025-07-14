import cartItemStyles from "../styles/CartItem.module.css";
import { useContext } from "react";
import { CartContext } from "./App";

function CartItem(props) {
  const { removeItem } = useContext(CartContext);

  return (
    <div className={cartItemStyles.cartItem}>
      <div className={cartItemStyles.imageArea}>
        <img src={props.product.product.image} alt="" />
      </div>
      <div className={cartItemStyles.right}>
        <div className={cartItemStyles.title}>
          {props.product.product.title}
        </div>
        <div className={cartItemStyles.bottomRow}>
          <div className={cartItemStyles.left}>
            <div className={cartItemStyles.amount}>
              Qty: {props.product.amount}
            </div>
            <div className={cartItemStyles.price}>
              ${props.product.product.price}
            </div>
          </div>
          <button
            onClick={() => {
              removeItem(props.product.product);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
