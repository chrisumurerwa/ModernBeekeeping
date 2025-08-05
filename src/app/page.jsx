"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Card } from "../Components/ui/card";
import { CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion";
import {Package} from "lucide-react";
import { useCart } from "../context/CartContext";
import {Notify} from "notiflix";
import { Delete,PencilIcon} from "lucide-react";
export default function Page() {
  const { addToCart,cart } = useCart();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
     const images = [
    "/images/bees11.jpg",
    "/images/bees9.jpg",
    "/images/jar.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
const [productsByCategory, setProductsByCategory] = useState({});
  const [loadingProductId, setLoadingProductId] = useState(null);
  const [addedProductId, setAddedProductId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
    useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);
  
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
              const firstThree = data.data.slice(0, 3); // Fata 3 za mbere
                setProducts(firstThree);
               }
               else {
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
 



       const faqCategories = [
    {
      title: "Products & Quality",
      icon: Package,
      faqs: [
        {
          question: "What makes your honey different from store-bought honey?",
          answer:
            "Our honey is raw, unprocessed, and maintains all natural enzymes, vitamins, and minerals. Unlike commercial honey that's often heated and filtered, our honey retains its natural crystallization properties and full nutritional profile. We also ensure complete traceability from hive to jar.",
        },
        {
          question: "How do you ensure the quality of your honey?",
          answer:
            "We implement rigorous quality control at every stage: regular hive inspections, careful harvesting techniques, laboratory testing for purity and moisture content, and proper storage conditions. All our products are certified organic and undergo third-party quality verification.",
        },
        {
          question: "Why does honey sometimes crystallize?",
          answer:
            "Crystallization is a natural process that indicates pure, raw honey. The speed depends on the floral source and glucose content. Crystallized honey is perfectly safe and retains all its nutritional properties. You can gently warm it to return to liquid form if preferred.",
        },
        {
          question: "What's the shelf life of your products?",
          answer:
            "Pure honey has an indefinite shelf life when stored properly. Our honey products are best consumed within 2 years for optimal flavor, while other bee products like royal jelly and propolis have specific expiration dates printed on packaging.",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-[#F9F5F0] text-black font-serif relative">
      {/* Hero Section with Rotating Background Images */}
      <div
        className="relative min-h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-40 z-10" />

        {/* Text Content */}
        <div className="relative z-20 max-w-2xl text-white font-serif">
          <h1 className="text-5xl md:text-6xl font-bold italic text-amber-300">
            Wild Honey:
          </h1>
          <p className="mt-4 text-2xl md:text-3xl italic text-amber-200">
            The Tradition of Beekeeping
          </p>
          <p className="mt-6 text-base md:text-lg">
            Crafted by Nature, Honored by Tradition. Our wild honey is more than just a product; it’s a heritage. Collected from untouched landscapes, our honey represents the authentic taste of nature, passed down through generations of beekeepers.
          </p>
          <Link href="/product">
            <button className="mt-8 bg-amber-600 text-white px-6 py-2 font-bold rounded-full hover:bg-amber-700 transition duration-300">
              Experience Wild Honey
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Sections with Uniform Image Sizes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-16 py-16 bg-[#F9F5F0]">
        {[
          {
            title: "Philosophy",
            description:
              "Our philosophy centers on sustainable beekeeping, preserving natural habitats, and harvesting honey with minimal environmental impact. We believe in working in harmony with nature to produce the purest wild honey.",
            href: "/philosophy",
            image: "/images/jar.jpg",
          },
          {
            title: "History",
            description:
              "With roots tracing back centuries, our beekeeping tradition began with ancient methods passed down through generations. Discover the timeless techniques that give our honey its unique, rich flavor.",
            href: "/history",
            image: "/images/beehive.jpg",
          },
          {
            title: "Process",
            description:
              "Our process involves carefully collecting honey from wild beehives in pristine forests, ensuring no artificial additives. Each jar is a testament to the natural cycle of bees and the seasons.",
            href: "/process",
            image: "/images/bees10.jpg",
          },
          {
            title: "Store",
            description:
              "Explore our range of pure wild honey, from raw unfiltered varieties to specialty blends. Shop now for the finest honey, delivered fresh from the hive to your table.",
            href: "/store",
            image: "/images/bees7.jpg",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center h-full hover:bg-gray-50 transition duration-300"
            style={{ minHeight: "300px", width: "100%" }}
          >
            <Image
              src={section.image}
              alt={section.title}
              width={100}
              height={100}
              className="mt-[20px] rounded-full w-24 h-24"
            />
            <h3 className="text-gray-900 text-base font-bold mb-1">{section.title}</h3>
            <p className="text-gray-500 text-xs flex-grow">{section.description}</p>
            <Link href={section.href}>
              <button
                className="mt-4 w-full px-6 py-2 bg-[#E17100] rounded-full text-white transition duration-300 text-sm"
              >
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-black">Wild Honey</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Crafted by Nature, Honored by Tradition. Our wild honey is more than just a product; it’s a heritage.
                </p>
              </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              </div>

              <div className="min-h-screen">

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">

          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-amber-600 mr-4" />
                    <h3 className="text-2xl font-bold text-black">{category.title}</h3>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-amber-600 text-black">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base leading-relaxed pt-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
}
