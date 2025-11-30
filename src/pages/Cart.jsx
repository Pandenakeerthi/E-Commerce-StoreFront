import { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useContext(StoreContext);
  const [coupon, setCoupon] = useState("");
  const total = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const discount = coupon === "DISCOUNT10" ? total * 0.1 : 0;

  return (
    <div className="Cartpage">
      <h1>Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> :
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      }
      <input
        placeholder="Enter coupon"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />
      <p>Total: ${total - discount}</p>
      <Link to="/checkout"><button>Checkout</button></Link>
    </div>
  );
}
