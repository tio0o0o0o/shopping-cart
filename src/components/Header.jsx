import headerStyles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={headerStyles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </nav>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Header;
