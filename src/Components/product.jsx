"use client";

import Image from "next/image";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import Link from "next/link";
import {Notify} from "notiflix";
import { Delete,PencilIcon} from "lucide-react";

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState({
    honey: [],
    wax: [],
    supplements: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:4000/product/getAllProduct"); // replace with your real API endpoint
        const data = await res.json();

        if (data.success) {
          // separate products by category
          const honey = data.data.filter((p) => p.category === "honey");
          const wax = data.data.filter((p) => p.category === "wax");
          const supplements = data.data.filter((p) => p.category === "supplements");

          setProducts({ honey, wax, supplements });
        } else {
          console.error("Failed to fetch products:", data.message);
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
      // Remove from UI
      setProducts((prev) => {
        const newState = { ...prev };
        for (const key in newState) {
          newState[key] = newState[key].filter((p) => p.id !== productId);
        }
        return newState;
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

 
  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  const ProductCard = ({ product }) => (
    <>
    {user?(  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0">
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
          <Button
            className="bg-amber-600 text-white hover:bg-amber-700"
           onClick={() => handleDelete(product.id)}
          >
            <Delete className="w-4 h-4 mr-2" />
            Delete
          </Button>
          {/* <Button
            className="bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => {
             Notify.success("Product deleted successfully")
            }}
          >
            <PencilIcon className="w-4 h-4 mr-2" />
            Update
          </Button> */}
        </div>
      </CardContent>
    </Card>
    ):(
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
          <Button
            className="bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => {
              addToCart(product);
             Notify.success("Product Added  to Cart")
            }}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
    )}
    </>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {user ? (
        <section className="bg-amber-700 text-white relative h-40 flex items-center justify-center cols gap-30">
          <div className="text-center p-10">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl">Premium honey and bee products from nature's finest</p>
          </div>
          <Link href="/addProduct">
            <Button className="bg-white text-amber-700 hover:bg-gray-50">Add Product</Button>
          </Link>
        </section>
      ) : (
        <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl">Premium honey and bee products from nature's finest</p>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="honey" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 text-black">
              <TabsTrigger value="honey" className="text-lg">
                Honey Products
              </TabsTrigger>
              <TabsTrigger value="wax" className="text-lg">
                Beeswax Products
              </TabsTrigger>
              <TabsTrigger value="supplements" className="text-lg">
                Health Supplements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="honey">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-black">Premium Honey Collection</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our honey is harvested with care, maintaining all natural enzymes and nutrients that make each variety unique and beneficial.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.honey.length === 0 ? (
                  <p className="text-center col-span-full">No honey products found.</p>
                ) : (
                  products.honey.map((product) => <ProductCard key={product.id} product={product} />)
                )}
              </div>
            </TabsContent>

            <TabsContent value="wax">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-black">Pure Beeswax Products</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our beeswax is carefully filtered and processed to maintain its natural properties, perfect for crafting, cosmetics, and home use.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.wax.length === 0 ? (
                  <p className="text-center col-span-full">No beeswax products found.</p>
                ) : (
                  products.wax.map((product) => <ProductCard key={product.id} product={product} />)
                )}
              </div>
            </TabsContent>

            <TabsContent value="supplements">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-black">Natural Health Supplements</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Harness the power of the hive with our range of natural supplements, each packed with unique nutrients and health benefits.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.supplements.length === 0 ? (
                  <p className="text-center col-span-full">No supplements found.</p>
                ) : (
                  products.supplements.map((product) => <ProductCard key={product.id} product={product} />)
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-black">Quality You Can Trust</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "✓", title: "Organic Certified", desc: "All products meet strict organic standards" },
              { icon: "★", title: "Premium Quality", desc: "Rigorous testing ensures the highest quality" },
              { icon: "♻", title: "Sustainable", desc: "Environmentally responsible production" },
              { icon: "❤", title: "Fair Trade", desc: "Supporting local beekeeping communities" },
            ].map(({ icon, title, desc }) => (
              <div key={title}>
                <div className="w-16 h-16 bg-[#BB4D00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
