"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";

export default function AddProduct() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: null,
  });

  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState([]);
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [loading, setLoading] = useState(false); // ← loading state

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/product/getAllProduct");
        if (res.data.success) {
          const uniqueCategories = [
            ...new Set(res.data.data.map((p) => p.category.toLowerCase())),
          ];
          setCategories(uniqueCategories);
        }
      } catch (err) {
        console.error("Error fetching categories", err);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "imageUrl") {
      setForm({ ...form, imageUrl: files[0] });
    } else if (name === "categorySelect") {
      if (value === "custom") {
        setIsCustomCategory(true);
        setForm({ ...form, category: "" });
      } else {
        setIsCustomCategory(false);
        setForm({ ...form, category: value });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    setMessage("");

    try {
      const token = localStorage.getItem("token");
      const decoded = jwt_decode(token);

      const data = new FormData();
      data.append("name", form.name);
      data.append("description", form.description);
      data.append("category", form.category);
      data.append("price", form.price);
      data.append("imageUrl", form.imageUrl);

      const res = await axios.post("http://localhost:4000/product/addProduct", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.data.success) {
        setMessage("✅ Product added successfully!");
        setForm({
          name: "",
          description: "",
          category: "",
          price: "",
          imageUrl: null,
        });
        setIsCustomCategory(false);
        router.push("/product");
      } else {
        setMessage("❌ Failed to add product");
      }
    } catch (err) {
      console.error(err);
      setMessage("🚫 Server error");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="max-w-md mb-10 mx-auto bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-black">Add Product</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded text-black"
        />

        <textarea
          name="description"
          placeholder="Product Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded text-black"
        />

        {/* Category Select or Custom */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="categorySelect"
            value={isCustomCategory ? "custom" : form.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mb-2 text-black"
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
            <option value="custom">Other (write your own)</option>
          </select>

          {isCustomCategory && (
            <input
              type="text"
              name="category"
              placeholder="Enter custom category"
              value={form.category}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded text-black"
              required
            />
          )}
        </div>

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded text-black"
        />

        <input
          type="file"
          name="imageUrl"
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded bg-white text-black"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white p-2 rounded transition ${
            loading ? "bg-amber-400 cursor-not-allowed" : "bg-[#E17100] hover:bg-[#f87400bf]"
          }`}
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-[#7B3F00] font-medium">{message}</p>
      )}
    </div>
  );
}
