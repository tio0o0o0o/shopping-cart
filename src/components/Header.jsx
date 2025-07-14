import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </nav>
      <Link to="/cart">Cart</Link>
    </header>
  );
}

export default Header;
