import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Navbar() {
  const { cart, wishlist } = useContext(StoreContext);
  return (
    <nav className="nav">
      <Link to="/"><img src="/icons/home.svg" alt="cart" width="20" /> 
      Home</Link>
      <Link to="/cart">
        <img src="/icons/cartt.svg" alt="cart" width="20" />
        Cart ({cart.length})
      </Link>
      <Link to="/wishlist">
        <img src="/icons/heart.svg" alt="cart" width="20" />
        Wishlist ({wishlist.length})</Link>
      <Link to="/checkout">
        <img src="/icons/checkout.svg" alt="cart" width="20" /> Checkout</Link>
    </nav>
  );
}
