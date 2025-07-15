import Image from "next/image";
import { Button } from "../../Components/ui/button";
import { Card, CardContent } from "../../Components/ui/card";
import { Badge } from "../../Components/ui/badge";
import { Star, Quote, Component } from "lucide-react";
import MarketsPage from "../../Components/MarketSection"

export default function PartnersPage() {
  const partners = {
    restaurants: [
      {
        name: "Le Bernardin",
        location: "New York, USA",
        logo: "/placeholder.svg?height=50&width=100",
        type: "Fine Dining",
        testimonial:
          "The quality and consistency of their honey elevates our dessert menu to new heights.",
      },
      {
        name: "Noma",
        location: "Copenhagen, Denmark",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Michelin Star",
        testimonial:
          "Their sustainable practices align perfectly with our farm-to-table philosophy.",
      },
      {
        name: "Osteria Francescana",
        location: "Modena, Italy",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Fine Dining",
        testimonial:
          "Exceptional honey that brings authentic flavors to our traditional recipes.",
      },
    ],
    hotels: [
      {
        name: "Four Seasons",
        location: "Global Chain",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Luxury Hotel",
        testimonial:
          "Our guests appreciate the premium quality and sustainable sourcing story.",
      },
      {
        name: "Aman Resorts",
        location: "International",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Luxury Resort",
        testimonial:
          "Perfect for our wellness programs and organic breakfast offerings.",
      },
      {
        name: "The Ritz-Carlton",
        location: "Worldwide",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Luxury Hotel",
        testimonial:
          "The artisanal quality matches our commitment to excellence.",
      },
    ],
    retail: [
      {
        name: "Whole Foods Market",
        location: "North America",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Organic Retailer",
        testimonial:
          "Their organic certification and quality standards exceed our requirements.",
      },
      {
        name: "Harrods",
        location: "London, UK",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Luxury Department Store",
        testimonial:
          "A premium product that our discerning customers seek out specifically.",
      },
      {
        name: "Dean & DeLuca",
        location: "International",
        logo: "/placeholder.svg?height=100&width=200",
        type: "Gourmet Food",
        testimonial:
          "The perfect addition to our curated selection of artisanal foods.",
      },
    ],
  };
<MarketsPage/>
  const PartnerCard = ({ partner, category }) => (
    <Card className="hover:shadow-xl transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="relative h-12 w-32">
            <Image
              src="https://images.unsplash.com/photo-1542690969-5a2050285637?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
              alt="Generic Partner Logo"
              fill
              className="object-cover rounded-lg shadow-sm"
            />
          </div>
        
          <Badge className="bg-amber-100 text-amber-800">{partner.type}</Badge>
        </div>
        <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
        <p className="text-gray-600 mb-4">{partner.location}</p>
        <div className="flex items-start">
          <Quote className="w-5 h-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
          <p className="text-gray-700 italic">{partner.testimonial}</p>
        </div>
        <div className="flex items-center mt-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
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

      {/* Restaurant Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Restaurant Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-renowned restaurants trust our honey to enhance their
              culinary creations and provide their guests with exceptional
              dining experiences.
            </p>
          </div>
          <div
            className="grid md:grid-cols-3 gap-8 text-black
          "
          >
            {partners.restaurants.map((partner, index) => (
              <PartnerCard
                key={index}
                partner={partner}
                category="restaurant"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Partners */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Hotel & Resort Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Luxury hotels and resorts worldwide choose our premium honey for
              their breakfast services, spa treatments, and exclusive amenities.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-black">
            {partners.hotels.map((partner, index) => (
              <PartnerCard key={index} partner={partner} category="hotel" />
            ))}
          </div>
        </div>
      </section>

      {/* Retail Partners */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Retail Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium retailers and gourmet food stores feature our products,
              bringing artisanal honey to discerning consumers worldwide.
            </p>
          </div>
          <div
            className="grid md:grid-cols-3 gap-8 text-black
          "
          >
            {partners.retail.map((partner, index) => (
              <PartnerCard key={index} partner={partner} category="retail" />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us?</h2>
            <p className="text-xl max-w-3xl mx-auto">
              We offer more than just premium products - we provide a complete
              partnership experience
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p>Consistently high-quality products that exceed expectations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability Story</h3>
              <p>Authentic sustainability credentials your customers value</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Supply</h3>
              <p>Consistent availability and on-time delivery worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
              <p>Personal account management and marketing support</p>
            </div>
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
     
      <MarketsPage/>
    </div>
  );
}
