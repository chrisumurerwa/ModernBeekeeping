"use client";

import Image from "next/image";
import Link from "next/link";

const StoriesSection = ({ title, subtitle, children }) => {
  return (
    <div>
      {/* Header Section with Orange Theme */}
      <header className="bg-amber-600 text-white text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-16 px-6 md:px-16 bg-[#F9F5F0] text-[#2F2F2F]">
        {children}
      </main>
    </div>
  );
};

export default function Store() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] font-serif relative">
      <StoriesSection
        title="Store"
        subtitle="Explore our range of pure wild honey"
      >
        {/* Image at the Top */}
        <div className="text-center mb-8">
          <Image
            src="/images/bees7.jpg" // Match the image from the card
            alt="Store Image"
            width={300}
            height={300}
            className="rounded-lg object-cover mx-auto border-4 border-amber-600"
          />
        </div>

        {/* Fun Fact */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl text-amber-600 italic">Fun Fact</h2>
          <p className="mt-2 text-base md:text-lg text-[#2F2F2F]">
            Raw honey contains natural antioxidants that can boost your immune system!
          </p>
        </div>

        {/* Detailed Information */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">Our Store</h2>
          <p className="text-base md:text-lg text-[#2F2F2F] leading-relaxed">
            Welcome to our store, where you can explore a delightful selection of pure wild honey. From raw, unfiltered honey straight from the hive to specialty blends infused with natural flavors, we offer the finest quality. Each jar is carefully harvested to preserve its natural goodness, delivering the authentic taste of nature to your table. Shop now to experience the richness of our wild honey, with options for single purchases or subscriptions for regular delivery.
          </p>
          <Link href="/shop">
            <button
              className="mt-8 flex items-center justify-center gap-2 px-6 py-2 rounded-full text-white transition duration-300 text-sm"
              style={{ backgroundColor: "#d97706", hover: { backgroundColor: "#c2410c" } }} // Using amber-600 with amber-700 hover
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Shop Now
            </button>
          </Link>
        </div>
      </StoriesSection>
    </div>
  );
}