"use client";

import Image from "next/image";
import Link from "next/link";

const StoriesSection = ({ title, subtitle, children }) => {
  return (
    <div>
      {/* Header Section with Orange Theme */}
      <header className="bg-amber-300 text-white text-center py-12 px-6">
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

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] font-serif relative">
      <StoriesSection
        title="Philosophy"
        subtitle="Insights into our sustainable beekeeping practices"
      >
        {/* Image at the Top */}
        <div className="text-center mb-8">
          <Image
            src="/jar.jpg" // Match the image from the card
            alt="Philosophy Image"
            width={300}
            height={300}
            className="rounded-lg object-cover mx-auto border-4 border-amber-300"
          />
        </div>

        {/* Fun Fact */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl text-amber-300 italic">Fun Fact</h2>
          <p className="mt-2 text-base md:text-lg text-[#2F2F2F]">
            Did you know that sustainable beekeeping can increase local biodiversity by up to 50% by supporting pollinator populations?
          </p>
        </div>

        {/* Detailed Information */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">Our Philosophy</h2>
          <p className="text-base md:text-lg text-[#2F2F2F] leading-relaxed">
            At the heart of our wild honey production is a deep commitment to sustainable beekeeping. We prioritize preserving natural habitats, ensuring that our practices support the health of bee colonies and the ecosystems they thrive in. Our harvesting methods are designed to minimize environmental impact, using traditional techniques that have been refined over generations. We avoid artificial additives and chemicals, allowing the bees to produce honey in their natural state. This philosophy not only yields the purest honey but also contributes to the long-term sustainability of our planet's biodiversity. Join us in celebrating nature's gift through every jar of our wild honey.
          </p>
          
        </div>
      </StoriesSection>
    </div>
  );
}