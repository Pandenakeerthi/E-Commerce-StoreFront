import { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    card: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) return <h2>Order Placed Successfully!</h2>;

  return (
    <div className="Checkoutpage">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <input name="city" placeholder="City" onChange={handleChange} required />
        <input name="card" placeholder="Card Number" onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
