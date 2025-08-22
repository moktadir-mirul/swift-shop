"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        setProducts(res.data);
        console.log(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="w-full py-10">
      <section className="w-11/12 mx-auto">
        <h1 className="text-center text-4xl md:text-6xl font-bold text-indigo-600">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-8">
          {products.slice(4 , 12).map((item) => (
            <div key={item._id} className="card bg-indigo-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-indigo-600 font-bold text-xl">{item.name}</h2>
                <p>
                  {item.short_description}
                </p>
                <div className="card-actions justify-between items-center pt-5">
                    <h1 className="font-bold text-md">Price : ${item.price}</h1>
                  <button className="btn bg-indigo-600 text-gray-50 font-bold hover:bg-indigo-800 rounded-sm">Show details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href={"/allProducts"}>
        <div className="flex items-center justify-center pt-5">
            <button className="btn px-8 bg-indigo-600 text-gray-50 font-bold hover:bg-indigo-800 rounded-sm">Show All Products</button>
        </div>
        </Link>
      </section>
    </div>
  );
};

export default Products;
