"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-green-800 text-white font-serif relative">
      {/* Hero Section with Image on Side */}
      <div className="relative overflow-hidden flex items-center">
        <div className="w-1/2 relative">
          <Image
            src="/images/bees2.jpg"
            alt="Wild Honey"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-40"
          />
        </div>
        <div className="w-1/2 max-w-3xl mx-auto text-center py-16 px-6 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-200 italic leading-tight">
            Wild Honey:
          </h1>
          <p className="mt-4 text-2xl md:text-3xl text-amber-100 italic">
            The Tradition of Beekeeping
          </p>
          <p className="mt-6 text-white max-w-xl text-base md:text-lg">
            Crafted by Nature, Honored by Tradition. Our wild honey is more than just a product; it’s a heritage. Collected from untouched landscapes, our honey represents the authentic taste of nature, passed down through generations of beekeepers.
          </p>
          <Link href="/product">
            <button className="mt-8 bg-amber-500 text-green-800 px-6 py-2 font-bold rounded-full hover:bg-amber-600 transition duration-300">
              Experience Wild Honey
            </button>
          </Link>
        </div>
      </div>

      {/* Feature Sections with Equal Heights and Specified Images */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-16 py-16 bg-green-800">
        {[
          {
            title: "Philosophy",
            description: "Crafted by Nature, Rooted in Tradition. Pure, wild honey, carefully crafted with respect for nature and ancient traditions.",
            href: "/philosophy",
            image: "/images/jar.jpg",
          },
          {
            title: "History",
            description: "Ancient Beekeeping, Timeless Taste. Honey hand-harvested using traditional methods for centuries.",
            href: "/history",
            image: "/images/beehive.jpg",
          },
          {
            title: "Process",
            description: "Wild Harvest, Pure Honey. Hand-gathered and minimally processed to keep nature’s essence intact.",
            href: "/process",
            image: "/images/honeycomb.jpg",
          },
          {
            title: "Store",
            description: "Pure, Wild, and Delicious. Explore our range of wild honey, packaged in eco-friendly jars crafted with care and tradition.",
            href: "/store",
            image: "/images/bees13.jpg",
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-green-700 p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full"
          >
            <Image
              src={section.image}
              alt={section.title}
              width={100}
              height={100}
              className="mb-4 rounded-full object-cover"
            />
            <h3 className="text-amber-300 text-lg font-bold mb-2">{section.title}</h3>
            <p className="text-amber-100 text-xs mb-4 flex-grow">{section.description}</p>
            <Link href={section.href}>
              <button className="w-full bg-amber-500 text-green-800 py-2 rounded-full hover:bg-amber-600 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}