"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function AddProductsPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    short_description: "",
    long_description: "",
    category: "",
    rate: "",
    count: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, message: "" });

  const categories = ["Men's Clothing", "Jewelry", "Electronics", "Women's Clothing"];
  const ratings = [1, 2, 3, 4, 5];

  const validate = () => {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";
    if (!form.short_description.trim()) e.short_description = "Short description is required";
    if (!form.long_description.trim()) e.long_description = "Long description is required";
    if (!form.category) e.category = "Category is required";

    const priceNum = Number(form.price);
    if (form.price === "" || isNaN(priceNum)) e.price = "Price is required";
    else if (priceNum < 1) e.price = "Price must be at least 1";

    const countNum = Number(form.count);
    if (form.count === "" || isNaN(countNum)) e.count = "Count is required";
    else if (countNum < 1) e.count = "Count must be at least 1";

    const rateNum = Number(form.rate);
    if (!form.rate) e.rate = "Rating is required";
    else if (isNaN(rateNum) || rateNum < 1 || rateNum > 5) e.rate = "Rating must be 1–5";

    return e;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;

    setStatus({ loading: true, message: "" });
    try {
      const payload = {
        name: form.name.trim(),
        price: Number(form.price),
        short_description: form.short_description.trim(),
        long_description: form.long_description.trim(),
        category: form.category,
        rating: {
          rate: Number(form.rate),
          count: Number(form.count),
        },
      };

      await axios.post("https://swift-shop-server-ruddy.vercel.app/products", payload);
      setStatus({ loading: false, message: "Product added successfully!" });
      setForm({
        name: "",
        price: "",
        short_description: "",
        long_description: "",
        category: "",
        rate: "",
        count: "",
      });
      toast.success("Data added Successfully!")
    } catch (err) {
      setStatus({ loading: false, message: "Failed to add product. Please try again." });
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-center font-bold text-4xl md:text-6xl text-indigo-600">
        Add Products
      </h1>

      <form
        onSubmit={onSubmit}
        className="mt-8 bg-white rounded-2xl shadow p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label className="block text-lg font-bold mb-1 text-indigo-600">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="block text-lg font-bold mb-1 text-indigo-600">Price</label>
            <input
              type="number"
              min="1"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
            />
            {errors.price && <p className="text-red-600 text-sm mt-1">{errors.price}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="block text-lg font-bold text-indigo-600 mb-1">Category</label>
            <select
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              required
            >
              <option value="">Select a category</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category}</p>}
          </div>

          {/* Rating (rate) */}
          <div>
            <label className="block text-lg font-bold text-indigo-600 mb-1">Rating (1–5)</label>
            <select
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={form.rate}
              onChange={(e) => setForm({ ...form, rate: e.target.value })}
              required
            >
              <option value="">Select rating</option>
              {ratings.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            {errors.rate && <p className="text-red-600 text-sm mt-1">{errors.rate}</p>}
          </div>
        </div>

        {/* Short Description */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-1">Short Description</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={form.short_description}
            onChange={(e) =>
              setForm({ ...form, short_description: e.target.value })
            }
            required
          />
          {errors.short_description && (
            <p className="text-red-600 text-sm mt-1">{errors.short_description}</p>
          )}
        </div>

        {/* Long Description */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-1">Long Description</label>
          <textarea
            rows={5}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={form.long_description}
            onChange={(e) =>
              setForm({ ...form, long_description: e.target.value })
            }
            required
          />
          {errors.long_description && (
            <p className="text-red-600 text-sm mt-1">{errors.long_description}</p>
          )}
        </div>

        {/* Rating Count */}
        <div>
          <label className="block text-lg font-bold text-indigo-600 mb-1">Amount</label>
          <input
            type="number"
            min="1"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={form.count}
            onChange={(e) => setForm({ ...form, count: e.target.value })}
            required
          />
          {errors.count && <p className="text-red-600 text-sm mt-1">{errors.count}</p>}
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full md:w-auto cursor-pointer px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:opacity-60"
        >
          {status.loading ? "Adding..." : "Add Product"}
        </button>

        {status.message && (
          <p className="mt-3 text-sm" aria-live="polite">
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}
