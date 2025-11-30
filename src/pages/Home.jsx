import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";


export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter((p) => {
    return (
      p.title?.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
    );
  });

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        placeholder="Search the Products."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setCategory(e.target.value)} id="dropdown">
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Women Wear">Women Wear</option>
        <option value="Footwear">Footwear</option>
        <option value="Men's Wear">Men's Wear</option>
    
      </select>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
