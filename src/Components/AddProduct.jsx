"use client"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import jwt_decode from "jwt-decode";
export default function AddProduct() {
  const router=useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    imageUrl: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imageUrl") {
      setForm({ ...form, imageUrl: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const token = localStorage.getItem("token"); 
       const decoded = jwt_decode(token);
       console.log(decoded);

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
        setMessage("Product added successfully!");
        setForm({
          name: "",
          description: "",
          category: "",
          price: "",
          imageUrl: null,
        });
        router.push("/product");
      } else {
        setMessage("Failed to add product");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error");
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

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded text-black"
        />

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
          className="w-full bg-[#7B3F00] hover:bg-[#5f2f00] text-white p-2 rounded transition"
        >
          Add Product
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-[#7B3F00] font-medium">{message}</p>
      )}
    </div>
  );
}
