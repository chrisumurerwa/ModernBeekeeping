"use client";

import Image from "next/image";
import {  Mail } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Master Beekeeper",
      image: "/Mentor1.png",
      bio: "With 25 years of beekeeping experience, Sarah founded our company with a vision to create sustainable honey production.",
      email: "sarah.johnson@mukazi.com",
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/m2-DzCtgX_A.jpg",
      bio: "Michael oversees our global operations and ensures quality standards across all our products.",
      email: "michael.chen@mukazi.com",
    },
    {
      name: "David Kim",
      role: "Sustainability Director",
      image: "/m3-CX86aT31.jpg",
      bio: "Dr. Uwimana leads our environmental initiatives and community development programs in Rwanda.",
      email: "david.kim@mukazi.com",
    },
    {
      name: "William Anderson",
      role: "Community Outreach Lead",
      image: "/m1-DQMq1g7Y.jpg",
      bio: "William Anderson connects our mission with local communities and drives our educational programs.",
      email: "william.anderson@mukazi.com",
    },
    {
      name: "Dr. Amara Uwimana",
      role: "Quality Assurance Manager",
      image: "/m2-DzCtgX_A.jpg",
      bio: "David ensures every jar of honey meets our high standards for purity and taste.",
      email: "amara.uwimana@mukazi.com",
    },
  ];

  return (
    <div className="min-h-[150vh]"> 

      <section className="relative h-90 flex items-center justify-center overflow-hidden">
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
          <p className="text-xl">Respecting Traditional Beekeeping, Using New Ideas to Improve It</p>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-amber-300">
                History of Our Company
              </h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700">
                <p>
                  250 Ventures started in the hills of Rwanda, where people have practiced traditional beekeeping (ubworozi bw'inzuki) for many years.
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
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-amber-300">
              <svg className="w-12 h-12 mb-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
              <h3 className="text-2xl font-bold mb-3 text-amber-300">Vision</h3>
              <p className="text-gray-700 text-base text-center">
                Our vision is to create a world where sustainable beekeeping becomes a powerful tool for change—empowering communities with new opportunities, preserving traditional knowledge, and protecting the planet's biodiversity. We dream of a future where every drop of honey represents not just purity and quality, but also a commitment to nature, culture, and human well-being. From rural villages to urban markets, we believe beekeeping can inspire a more connected, sustainable, and healthy world.
              </p>
            </div>
            {/* Mission Card */}
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-amber-300">
              <svg className="w-12 h-12 mb-4 text-amber-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5V4.5m0 0L7.5 9m4.5-4.5L16.5 9" /></svg>
              <h3 className="text-2xl font-bold mb-3 text-amber-300">Mission</h3>
              <p className="text-gray-700 text-base text-center">
                We are committed to beekeeping in a fair and careful way. We want to produce good honey and help local farmers live better lives. By teaching people, working with communities, and using new ideas, we want to support rural areas, protect nature, and take care of the environment. Our goal is to grow a strong beekeeping culture that helps people, bees, and the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Mentors (Team) Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#064e3b' }}>Meet Our Team</h2>
    <div className="flex justify-center">
      <p className="text-lg text-gray-800 max-w-xl mt-4 leading-relaxed ml-4 text-center">
        Our team combine traditional skills with modern beekeeping knowledge. They guide new beekeepers with experience, local wisdom, and fresh ideas to help build a better future for beekeeping.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-100"
        >
          <div className="w-24 h-24 mb-3 relative rounded-full overflow-hidden border-3 border-amber-300 shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-lg font-bold mb-1 text-center" style={{ color: '#064e3b' }}>{member.name}</h3>
          <p className="text-amber-300 font-semibold mb-2 text-center text-sm">{member.role}</p>
          <p className="text-gray-700 text-center mb-3 text-xs leading-relaxed">{member.bio}</p>
          
          {/* Contact Section with Copy Email on Click */}
          <div
            className="flex items-center justify-center w-full cursor-pointer group"
            onClick={() => {
              navigator.clipboard.writeText(member.email);
              alert(`Copied ${member.email} to clipboard!`);
            }}
          >
            <Mail className="w-4 h-4 mr-2 text-amber-300 group-hover:text-amber-800 transition-colors" />
            <span className="text-amber-300 group-hover:text-amber-800 text-xs font-medium transition-colors">
              {member.email}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

 
      
    </div>
  );
}