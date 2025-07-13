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

export default function History() {
  return (
    <div className="min-h-screen bg-[#F9F5F0] font-serif relative">
      <StoriesSection
        title="History"
        subtitle="Discover the ancient roots of our beekeeping tradition"
      >
        {/* Image at the Top */}
        <div className="text-center mb-8">
          <Image
            src="/images/beehive.jpg" // Match the image from the card
            alt="History Image"
            width={300}
            height={300}
            className="rounded-lg object-cover mx-auto border-4 border-amber-600"
          />
        </div>

        {/* Fun Fact */}
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl text-amber-600 italic">Fun Fact</h2>
          <p className="mt-2 text-base md:text-lg text-[#2F2F2F]">
            Beekeeping dates back over 4,500 years, with evidence found in ancient Egypt!
          </p>
        </div>

        {/* Detailed Information */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">Our History</h2>
          <p className="text-base md:text-lg text-[#2F2F2F] leading-relaxed">
            Our beekeeping tradition traces its roots back centuries, originating with ancient methods passed down through generations. In the early days, beekeepers relied on natural cues and handmade tools to harvest honey from wild hives, a practice that laid the foundation for our modern techniques. Over time, we’ve preserved these timeless methods while adapting to ensure sustainability. This rich history is reflected in the unique, rich flavor of our wild honey, a testament to the dedication of beekeepers past and present. Explore the legacy that continues to thrive today.
          </p>
          {/* <Link href="/history-details">
            <button
              className="mt-8 flex items-center justify-center gap-2 px-6 py-2 rounded-full text-white transition duration-300 text-sm"
              style={{ backgroundColor: "#F4A261", hover: { backgroundColor: "#E07A44" } }}
            >
              Learn More
            </button>
          </Link> */}
        </div>
      </StoriesSection>
    </div>
  );
}