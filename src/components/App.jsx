import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../styles/normalize.css";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import About from "./About.jsx";
import Cart from "./Cart.jsx";
import Header from "./Header.jsx";
import { useState, createContext } from "react";
import ErrorPage from "./ErrorPage.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(5);

  function addItem(product, amount = 1) {
    const index = getItemIndex(product.id);
    const newCart = [...cart];
    if (index === -1) {
      newCart.push({ product: product, amount: amount });
    } else {
      newCart[index] = {
        product: newCart[index].product,
        amount: newCart[index] + amount,
      };
    }
    setCart(newCart);
  }

  function removeItem(product) {
    const newCart = cart.filter((item) => {
      return item.product.id !== product.id;
    });
    setCart(newCart);
  }

  function getSubtotal() {
    let subtotalAmount = 0;
    cart.forEach((item) => {
      subtotalAmount += item.product.price * item.amount;
    });
    return subtotalAmount;
  }

  function getTotal() {
    return getSubtotal() + shipping;
  }

  // Gets index of item. -1 if not found
  function getItemIndex(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === id) return i;
    }
    return -1;
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addItem,
          getItemIndex,
          removeItem,
          getSubtotal,
          getTotal,
          shipping,
        }}
      >
        <RouterProvider router={router} />
      </CartContext.Provider>
    </>
  );
}

export default App;
