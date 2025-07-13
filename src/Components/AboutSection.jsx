"use client";

import Image from "next/image";
import { Leaf, Users, Globe, Award } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Master Beekeeper",
      image: "/Mentor1.png",
      bio: "With 25 years of beekeeping experience, Sarah founded our company with a vision to create sustainable honey production.",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/Mentor2.png", // fallback to a local image
      bio: "Michael oversees our global operations and ensures quality standards across all our products.",
    },
    {
      name: " David Kim",
     
      role: "Sustainability Director",
      image: "/m3-CX86aT31.jpg", // fallback to a local image
      bio: "Dr. Uwimana leads our environmental initiatives and community development programs in Rwanda.",
    },
    {
      name: "William Anderson",
      role: "Community Outreach Lead",
      image: "/m1-DQMq1g7Y.jpg",
      bio: "William Anderson connects our mission with local communities and drives our educational programs.",
    },
    {
      name: "Dr. Amara Uwimana",
      role: "Quality Assurance Manager",
      image: "/m2-DzCtgX_A.jpg",
      bio: "David ensures every jar of honey meets our high standards for purity and taste.",
    },
  ];

  return (
   <div className="min-h-[150vh]">  {/* 150% of the viewport height */}

      {/* Hero Section with Video Background */}
      <section className="relative h-150 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/Video1.mp4" type="video/mp4" />
          
        </video>
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About us</h1>
          <p className="text-xl">Respecting Traditional Beekeeping, Using New Ideas to Improve It

</p>
        </div>
      </section>

      {/* Company History */}
     {/* Company History */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
       <h2 className="text-4xl font-bold mb-6" style={{ color: "#064e3b" }}>
  History of Our Company
</h2>
                  <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700">
                <p>
                  250 Ventures started in the hills of Rwanda, where people have practiced traditional beekeeping (ubworozi bw’inzuki) for many years.
                  What began as a small local project has grown into a strong movement that mixes old beekeeping skills with new technology.
                </p>
                <p>
                  Our goal was simple: help beekeepers improve their work, protect nature, and support farmers in rural areas. 
                  As more people joined, we grew into a digital platform where beekeepers can learn, connect, and grow together.
                </p>
                <p>
                  Today, 250 Ventures gives beekeepers smart tools, training, and modern support. We aim to mix tradition with new ideas, 
                  make high-quality honey, and create a strong eco-friendly beekeeping community.
                  From Rwanda to the world, 250 Ventures is building a better future for bees, farmers, and the planet.
                </p>
              </div>
      </div>
     <div className="relative h-120 rounded-lg overflow-hidden">
  <video
    src="/video2.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
    <p className="text-white text-2xl md:text-3xl font-semibold text-center leading-relaxed drop-shadow-lg max-w-xl">
      "Our honey is not just a product; it's a promise to our planet and its people. We believe in the power of bees to transform lives and landscapes."
    </p>
  </div>
</div>

    </div>
  </div>
</section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#064e3b' }}>Our Vision & Mission</h2>
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
            {/* Vision Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-amber-400">
              <svg className="w-12 h-12 mb-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              <h3 className="text-2xl font-bold mb-3 text-amber-700">Vision</h3>
              <p className="text-gray-700 text-base text-center">Our vision is to create a world where sustainable beekeeping becomes a powerful tool for change—empowering communities with new opportunities, preserving traditional knowledge, and protecting the planet’s biodiversity. We dream of a future where every drop of honey represents not just purity and quality, but also a commitment to nature, culture, and human well-being. From rural villages to urban markets, we believe beekeeping can inspire a more connected, sustainable, and healthy world.</p>
            </div>
            {/* Mission Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-amber-400">
              <svg className="w-12 h-12 mb-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5V4.5m0 0L7.5 9m4.5-4.5L16.5 9" /></svg>
              <h3 className="text-2xl font-bold mb-3 text-amber-700">Mission</h3>
              <p className="text-gray-700 text-base text-center">We are committed to beekeeping in a fair and careful way. We want to produce good honey and help local farmers live better lives. By teaching people, working with communities, and using new ideas, we want to support rural areas, protect nature, and take care of the environment. Our goal is to grow a strong beekeeping culture that helps people, bees, and the earth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors (Team) Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#064e3b' }}>Meet Our Mentors</h2>
   <div className="flex justify-center">
  <p className="text-lg text-gray-800 max-w-xl mt-4 leading-relaxed ml-4 text-center">
    Our mentors combine traditional skills with modern beekeeping knowledge. They guide new beekeepers with experience, local wisdom, and fresh ideas to help build a better future for beekeeping.
  </p>
</div>


          <div className="flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-64 transition-transform hover:scale-105 border border-amber-100"
              >
                <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-amber-400 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2 mb-1 text-center" style={{ color: '#064e3b' }}>{member.name}</h3>
                <p className="text-amber-700 font-semibold mb-1 text-center">{member.role}</p>
                <p className="text-gray-700 text-center mb-4">{member.bio}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6 md:mt-8">
            <Link href="/meetMentors">
              <button
                className="bg-[#e6864a] text-white font-bold uppercase px-8 md:px-10 py-2 md:py-3 rounded-lg border border-pink-300 hover:bg-[#d96c2c] transition-all text-base md:text-lg shadow"
                style={{ borderColor: '#e686a0' }}
              >
                Meet Our Mentors
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
   <section className="py-20 bg-gradient-to-r bg-amber-800 text-white">

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sustainability & Environmental Practices</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Our commitment to the environment goes beyond honey production. We're actively working to protect bee
              populations and support biodiversity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Leaf className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Organic Practices</h3>
              <p>100% organic methods with no harmful chemicals or pesticides</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p>Fair trade partnerships supporting 200+ local beekeepers</p>
            </div>
            <div className="text-center">
              <Globe className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Carbon Neutral</h3>
              <p>Offsetting our carbon footprint through reforestation projects</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certified</h3>
              <p>Multiple certifications including Organic, Fair Trade, and B-Corp</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}