// pages/about.js (or app/about/page.js)
import Image from "next/image";
import React from "react";

const team = [
  {
    name: "Alice Bee",
    role: "Founder & Lead Beekeeper",
    image: "/team/alice.jpg", // Place image in public/team
    bio: "Alice has 10+ years of experience in sustainable beekeeping and founded the company with a mission to save the bees."
  },
  {
    name: "John Honey",
    role: "Operations Manager",
    image: "/team/john.jpg",
    bio: "John ensures smooth operations and manages community outreach programs."
  }
];

export default function AboutPage() {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto space-y-16 text-gray-800">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-yellow-800">About Us</h1>

      {/* Company History */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-yellow-700">Our History</h2>
        <p className="text-lg leading-relaxed">
          Founded in 2015, Beekeeper's Haven started with just 5 hives and a passion for preserving bee populations. Today, we operate across multiple regions, helping local farmers and educating communities.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-yellow-50 p-6 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-700">Vision & Mission</h2>
        <p className="text-lg mb-2">
          <strong>Vision:</strong> A world where bees thrive and ecosystems flourish.
        </p>
        <p className="text-lg">
          <strong>Mission:</strong> To promote sustainable beekeeping practices and educate communities on the importance of pollinators.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-yellow-700">Our Team</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-yellow-700">{member.role}</p>
              <p className="text-sm mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-yellow-700">Sustainability & Environment</h2>
        <p className="text-lg leading-relaxed">
          We are committed to eco-friendly practices. Our hives use organic materials, and we avoid pesticides. We also plant wildflowers to boost biodiversity and train local farmers in sustainable methods.
        </p>
      </section>
    </div>
  );
}
