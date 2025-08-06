"use client";

import Image from "next/image";
import Link from "next/link";

const StoriesSection = ({ title, subtitle, children }) => {
  return (
    <div>
      
      <header className="bg-amber-300 text-white text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-lg md:text-xl">{subtitle}</p>
      </header>

      
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
            src="/bees7.jpg" // Match the image from the card
            alt="Store Image"
            width={300}
            height={300}
            className="rounded-lg object-cover mx-auto border-4 border-amber-300"
          />
        </div>

        {/* Fun Fact */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl text-amber-300 italic">Fun Fact</h2>
          <p className="mt-2 text-base md:text-lg text-[#2F2F2F]">
            Raw honey contains natural antioxidants that can boost your immune system!
          </p>
        </div>

        {/* Detailed Information */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">Our Store</h2>
          <p className="text-base md:text-lg text-[#2F2F2F] leading-relaxed">
            Welcome to our store, where you can explore a delightful selection of pure wild honey. From raw, unfiltered honey straight from the hive to specialty blends infused with natural flavors, we offer the finest quality. Each jar is carefully harvested to preserve its natural goodness, delivering the authentic taste of nature to your table. Shop now to experience the richness of our wild honey, with options for single purchases or subscriptions for regular delivery.
          </p>
         
        </div>
      </StoriesSection>
    </div>
  );
}