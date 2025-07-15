import Image from "next/image";
import { Button } from "../../Components/ui/button";
import { Card, CardContent } from "../../Components/ui/card";
import { Badge } from "../../Components/ui/badge";
import { Star, Quote } from "lucide-react";
import { type } from "os";

export default function PartnersPage() {
  const partners = {
    hotels: [
      {
        name: "Four Seasons",
        email: "fourseasons@gmail.com",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Restaurant",

      },
      {
        name: "Aman Resorts",
        email: "amanresorts@gmail.com",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Resort",
       
      },
      {
        name: "The Ritz-Carlton",
        email: "ritzcalton@gmail.com",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Hotel",
      },
    ],
  
  };

  const PartnerCard = ({ partner, category }) => (
    <Card className="hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative h-12 w-32">
            <Image
              className="object-cover w-full h-full rounded-lg"
              src="https://images.unsplash.com/photo-1542690969-5a2050285637?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
              alt="Generic Partner Logo"
              fill
               class="mask-radial-at-center mask-radial-from-100% bg-[url(/img/mountains.jpg)] ..."
            />
          </div>

          <Badge className="bg-amber-100 text-amber-800">{partner.type}</Badge>
        </div>
        <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
        <p className="text-gray-600 mb-4">{partner.email}</p>
        <div className="flex items-start"></div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1529391387768-ab39476d6a52?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
          alt="Partnership collaboration"
          fill
          className="object-cover"
        />
        <div className="relative z-20 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Partners</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Trusted by world-class restaurants, luxury hotels, and premium
            retailers globally
          </p>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <p className="text-lg">Restaurant Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75+</div>
              <p className="text-lg">Hotel Chains</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-lg">Retail Locations</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25</div>
              <p className="text-lg">Countries Served</p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Hotel Partners */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white ">
        <div className="container mx-auto px-4 text-black">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
               Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury hotels and resorts worldwide choose our premium honey for
              their breakfast services, spa treatments, and exclusive amenities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8  ">
            {partners.hotels.map((partner, index) => (
              <PartnerCard key={index} partner={partner} category="hotel" />
            ))}
          </div>
        </div>
      </section>

 

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Become a Partner</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of premium partners and offer your customers the
            finest honey and bee products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 px-8"
            >
              Request Partnership Info
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 bg-transparent"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
