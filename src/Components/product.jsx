"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../Components/ui/button";
import { Card, CardContent } from "../Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/ui/tabs";
import { ShoppingCart, Delete } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Notify } from "notiflix";

export default function ProductsPage() {
  const { addToCart, cart } = useCart();
  const [user, setUser] = useState(null);
  const [productsByCategory, setProductsByCategory] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingProductId, setLoadingProductId] = useState(null);
  const [addedProductId, setAddedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:4000/product/getAllProduct");
        const data = await res.json();
        if (data.success) {
          // Group products by normalized category (lowercase)
          const grouped = {};
          data.data.forEach((product) => {
            const category = product.category?.toLowerCase() || "other";
            if (!grouped[category]) {
              grouped[category] = [];
            }
            grouped[category].push(product);
          });
          setProductsByCategory(grouped);

          // Select first category by default
          const firstCategory = Object.keys(grouped)[0];
          setSelectedCategory(firstCategory || "");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:4000/product/deleteProduct/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.success) {
        setProductsByCategory((prev) => {
          const updated = { ...prev };
          for (const cat in updated) {
            updated[cat] = updated[cat].filter((p) => p.id !== productId);
          }
          return updated;
        });
        Notify.success("Product deleted successfully!");
      } else {
        Notify.failure("Failed to delete product");
      }
    } catch (error) {
      console.error("Delete error:", error);
      Notify.failure("Something went wrong while deleting");
    }
  };

  const ProductCard = ({ product }) => {
    const alreadyInCart = cart.some((item) => item.id === product.id);

    const handleAddToCart = () => {
      if (alreadyInCart) return;
      setLoadingProductId(product.id);
      setTimeout(() => {
        addToCart(product);
        setLoadingProductId(null);
        setAddedProductId(product.id);
        Notify.success("Product added to cart");
      }, 1000);
    };

    return (
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-amber-600">${product.price}</span>

            {user ? (
              <Button
                className="bg-amber-600 text-white hover:bg-amber-700"
                onClick={() => handleDelete(product.id)}
              >
                <Delete className="w-4 h-4 mr-2" /> Delete
              </Button>
            ) : (
              <Button
                disabled={alreadyInCart || loadingProductId === product.id}
                onClick={handleAddToCart}
                className={`flex items-center gap-2 ${
                  alreadyInCart ? "bg-amber-600 cursor-not-allowed" : "bg-amber-600 hover:bg-amber-700"
                } text-white px-4 py-2 rounded-md transition-all duration-300`}
              >
                {loadingProductId === product.id ? (
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : alreadyInCart ? (
                  "In Cart"
                ) : addedProductId === product.id ? (
                  "Added ✓"
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  const categories = Object.keys(productsByCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className={`${
          user ? "bg-amber-700" : "bg-gradient-to-r from-amber-600 to-amber-700"
        } text-white relative h-40 flex items-center justify-center gap-10`}
      >
        <div className="text-center p-10">

          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Premium honey and bee products from nature's finest</p>
        </div>
        {user && (
          <Link href="/addProduct">
            <Button className="bg-white text-amber-700 hover:bg-gray-50">Add Product</Button>
          </Link>
        )}
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {categories.length === 0 ? (
            <p className="text-center text-xl text-gray-500">No products available yet.</p>
          ) : (
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 text-black">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="capitalize text-lg">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-black capitalize">
                      {category} Products
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Browse our selection of premium {category} products.
                    </p>
                  </div>
                  {productsByCategory[category].length === 0 ? (
                    <p className="text-center text-gray-500">No products found.</p>
                  ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {productsByCategory[category].map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </section>
    </div>
  );
}
