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

export default function Process() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] font-serif relative">
      <StoriesSection
        title="Process"
        subtitle="Learn about our natural honey harvesting methods"
      >
        {/* Image at the Top */}
        <div className="text-center mb-8">
          <Image
            src="/images/bees10.jpg" // Match the image from the card
            alt="Process Image"
            width={300}
            height={300}
            className="rounded-lg object-cover mx-auto border-4 border-amber-300"
          />
        </div>

        {/* Fun Fact */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl text-amber-300 italic">Fun Fact</h2>
          <p className="mt-2 text-base md:text-lg text-[#2F2F2F]">
            Honeybees can produce up to 100 pounds of honey in a single season!
          </p>
        </div>

        {/* Detailed Information */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-4">Our Process</h2>
          <p className="text-base md:text-lg text-[#2F2F2F] leading-relaxed">
            Our honey harvesting process is a careful and natural endeavor, centered on collecting honey from wild beehives in pristine forests. We avoid artificial additives and chemicals, allowing the bees to work in their natural environment. The process begins with locating healthy hives, followed by gentle extraction using traditional methods that minimize disruption. Each jar of honey is a result of the bees’ natural cycle, influenced by the seasons and the diverse flora of our landscapes. This dedication ensures the purity and quality that define our wild honey.
          </p>
          
        </div>
      </StoriesSection>
    </div>
  );
}