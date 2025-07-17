"use client";

import Image from "next/image";
import { Card, CardContent } from "../../Components/ui/card";
import { Badge } from "../../Components/ui/badge";
import MarketsPage from "../../Components/MarketSection";

export default function PartnersPage() {
  const partners = {
    hotels: [
      {
        name: "Four Seasons",
      
        logo: "honey-logo-design.jpg", 
       
      },
      {
        name: "Aman Resorts",
        
        logo: "honey-logo.jpg", 
       
      },
      {
        name: "The Ritz-Carlton",
        
        logo: "retro-bee-logo.jpg", 
       
      },
    ],
  };

  const PartnerCard = ({ partner }) => (
    <div className="relative w-40 h-40 overflow-hidden rounded-full border border-gray-200 shadow hover:shadow-md transition-shadow">
      <Image
        src={`/${partner.logo}`}
        alt={`${partner.name} Logo`}
        fill
        className="object-cover"
      />
    </div>
  );
  
  
  return (
    <div className="min-h-screen">
   
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1529391387768-ab39476d6a52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          alt="Partnership collaboration"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Partners & Market we serve</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Trusted by world-class restaurants, luxury hotels, and premium
            retailers globally
          </p>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 text-black">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-amber-300">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury hotels and resorts worldwide choose our premium honey for
              their breakfast services, spa treatments, and exclusive amenities.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-20">
      {partners.hotels.map((partner, index) => (
        <PartnerCard key={index} partner={partner} />
      ))}
    </div>
        </div>
      </section>

      
      <MarketsPage />
    </div>
  );
}
