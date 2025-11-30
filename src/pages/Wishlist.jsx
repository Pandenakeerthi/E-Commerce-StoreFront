import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(StoreContext);

  return (
    <div className="Wishlistpage">
      <h1>Wishlist</h1>
      {wishlist.length === 0 ? <p>Wishlist is empty</p> :
        wishlist.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
          </div>
        ))
      }
    </div>
  );
}
