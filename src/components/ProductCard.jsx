import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useContext(StoreContext);

  return (
    <div className="product-card">
      <img className="product-img" src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}><img src="/icons/cartt.svg" alt="cart" width="20" />
        CART</button>
      <button onClick={() => addToWishlist(product)}><img src="/icons/heart 2.svg" alt="cart" width="20" />
        Wishlist</button>
      <Link to={`/product/${product.id}`} className="details">View Details</Link>
    </div>
  );
}
