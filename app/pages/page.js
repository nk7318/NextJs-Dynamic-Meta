"use client";
import { useEffect, useState } from "react";
import Card from "../components";

export default function Contact() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
