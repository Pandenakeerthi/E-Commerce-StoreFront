import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";


export default function ProductDetails() {
const { id } = useParams();
const product = products.find((p) => p.id == id);
const { addToCart, addToWishlist } = useContext(StoreContext);

if (!product) return <p>Product not found</p>;

  return (
    <div className="Detailpage">
      <img  className="product-img" src={product.images[0]} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
}


