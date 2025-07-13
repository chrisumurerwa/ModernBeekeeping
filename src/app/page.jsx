
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Page() {
  const images = [
    "/images/bees11.jpg", // Replace with actual paths
    "/images/bees9.jpg",
    "/images/beehive.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F5F0] text-black font-serif relative" style={{ background: "var(--color-background, #F9F5F0)" }}>
      {/* Hero Section with Rotating Image and Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center py-16 px-6 md:px-16">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-600 italic">
            Wild Honey:
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-amber-600 italic">
            The Tradition of Beekeeping
          </p>
          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-black">
            Crafted by Nature, Honored by Tradition. Our wild honey is more than just a product; it’s a heritage. Collected from untouched landscapes, our honey represents the authentic taste of nature, passed down through generations of beekeepers.
          </p>
          <Link href="/product">
            <button className="mt-8 bg-amber-600 text-white px-6 py-2 font-bold rounded-full hover:bg-amber-700 transition duration-300">
              Experience Wild Honey
            </button>
          </Link>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8">
          <Image
            src={images[currentImage]}
            alt="Wild Honey"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-auto border-4 border-amber-600"
          />
        </div>
      </div>

      {/* Feature Sections with Uniform Image Sizes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-16 py-16 bg-[#F9F5F0]">
        {[
          {
            title: "Philosophy",
            description: "Our philosophy centers on sustainable beekeeping, preserving natural habitats, and harvesting honey with minimal environmental impact. We believe in working in harmony with nature to produce the purest wild honey.",
            href: "/philosophy",
            image: "/images/jar.jpg",
          },
          {
            title: "History",
            description: "With roots tracing back centuries, our beekeeping tradition began with ancient methods passed down through generations. Discover the timeless techniques that give our honey its unique, rich flavor.",
            href: "/history",
            image: "/images/beehive.jpg",
          },
          {
            title: "Process",
            description: "Our process involves carefully collecting honey from wild beehives in pristine forests, ensuring no artificial additives. Each jar is a testament to the natural cycle of bees and the seasons.",
            href: "/process",
            image: "/images/bees10.jpg",
          },
          {
            title: "Store",
            description: "Explore our range of pure wild honey, from raw unfiltered varieties to specialty blends. Shop now for the finest honey, delivered fresh from the hive to your table.",
            href: "/store",
            image: "/images/bees7.jpg",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-amber-600 p-4 rounded-lg shadow-md flex flex-col items-center text-center h-full hover:bg-amber-700 transition duration-300"
            style={{ minHeight: "300px", width: "100%" }} // Fixed height for consistency
          >
            <Image
              src={section.image}
              alt={section.title}
              width={100}
              height={100}
              className="mt-[-20px] rounded-full object-cover border-2 border-amber-600"
            />
            <h3 className="text-white text-base font-bold mb-1">{section.title}</h3>
            <p className="text-white text-xs flex-grow">{section.description}</p>
            <Link href={section.href}>
              <button
                className="mt-4 w-full px-6 py-2 rounded-full text-white transition duration-300 text-sm"
                style={{ backgroundColor: "#f59e0b", hover: { backgroundColor: "#d97706" } }}
              >
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

