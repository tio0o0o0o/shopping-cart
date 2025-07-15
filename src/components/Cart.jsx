import cartStyles from "../styles/Cart.module.css";
import { useContext } from "react";
import { CartContext } from "./App";
import CartItem from "./CartItem";

function Cart() {
  const {
    cart,
    setCart,
    addItem,
    getItemIndex,
    shipping,
    getSubtotal,
    getTotal,
  } = useContext(CartContext);

  return cart.length === 0 ? (
    <h1>Empty</h1>
  ) : (
    <div className={cartStyles.cart}>
      <div className={cartStyles.items}>
        {cart.map((product) => {
          return <CartItem product={product} key={product.product.id} />;
        })}
      </div>
      <div className={cartStyles.order}>
        <h1>Order Summary</h1>
        <div className={cartStyles.subtotalWrapper}>
          <div className={cartStyles.subtotal}>Subtotal</div>
          <div className={cartStyles.subtotalAmount}>
            ${getSubtotal().toFixed(2)}
          </div>
        </div>
        <div className={cartStyles.shippingWrapper}>
          <div className={cartStyles.shipping}>Shipping</div>
          <div className={cartStyles.shippingAmount}>
            ${shipping.toFixed(2)}
          </div>
        </div>
        <div className={cartStyles.totalWrapper}>
          <div className={cartStyles.total}>Total</div>
          <div className={cartStyles.totalAmount}>${getTotal().toFixed(2)}</div>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
