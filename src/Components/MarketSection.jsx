import Image from "next/image"
import { Card, CardContent } from "../Components/ui/card"
import { Badge } from "../Components/ui/badge"
import { Button } from "../Components/ui/button"
import { MapPin, Phone, Mail, Globe } from "lucide-react"

export default function MarketsPage() {
  const markets = [
    {
      region: "East Africa",
      countries: ["Rwanda", "Kenya", "Tanzania", "Uganda"],
      headquarters: "Kigali, Rwanda",
      description: "Our home base where it all began. Serving local and regional markets with fresh, premium honey.",
      contact: {
        phone: "+250 788 123 456",
        email: "eastafrica@modernbeekeeping.com",
        address: "KG 15 Ave, Kigali, Rwanda",
      },
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      established: "1998",
    },
    {
      region: "Europe",
      countries: ["United Kingdom", "Germany", "France", "Netherlands", "Italy"],
      headquarters: "London, UK",
      description: "Serving premium European markets with sustainable, organic honey products.",
      contact: {
        phone: "+44 20 7123 4567",
        email: "europe@modernbeekeeping.com",
        address: "123 Honey Lane, London, UK",
      },
      image: "https://images.unsplash.com/photo-1579158949482-3e9e0ac69333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D",
      established: "2008",
    },
    {
      region: "North America",
      countries: ["United States", "Canada"],
      headquarters: "New York, USA",
      description: "Bringing authentic African honey to North American consumers and businesses.",
      contact: {
        phone: "+1 212 555 0123",
        email: "northamerica@modernbeekeeping.com",
        address: "456 Park Avenue, New York, NY",
      },
      image: "https://images.unsplash.com/photo-1604549944235-3e5579b15cc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGglMjBhbWVyaWNhfGVufDB8fDB8fHww",
      established: "2012",
    },
    {
      region: "Asia Pacific",
      countries: ["Japan", "Australia", "Singapore", "South Korea"],
      headquarters: "Singapore",
      description: "Expanding into Asian markets with premium honey and wellness products.",
      contact: {
        phone: "+65 6123 4567",
        email: "asiapacific@modernbeekeeping.com",
        address: "Marina Bay, Singapore",
      },
      image: "https://images.unsplash.com/photo-1557405939-2a4344e40875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYSUyMHBhc2ZpY3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      established: "2018",
    },
    {
      region: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      headquarters: "Dubai, UAE",
      description: "Serving the Middle Eastern market with premium honey for luxury hospitality.",
      contact: {
        phone: "+971 4 123 4567",
        email: "middleeast@modernbeekeeping.com",
        address: "Dubai International Financial Centre",
      },
      image: "https://images.unsplash.com/photo-1691441799387-722f8cfaa1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291dGglMjBhbWVyaWNhfGVufDB8fDB8fHww",

      established: "2020",
    },
    {
      region: "South America",
      countries: ["Brazil", "Argentina", "Chile"],
      headquarters: "São Paulo, Brazil",
      description: "Our newest market, bringing sustainable honey to South American consumers.",
      contact: {
        phone: "+55 11 1234 5678",
        email: "southamerica@modernbeekeeping.com",
        address: "Avenida Paulista, São Paulo",
      },
      image: "https://images.unsplash.com/photo-1691441799387-722f8cfaa1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291dGglMjBhbWVyaWNhfGVufDB8fDB8fHww",
      established: "2023",
    },
  ];
  
  
  

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl text-amber-800 font-bold mb-4">Regional Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each region has its own dedicated team and distribution network to ensure the best service and freshest
              products for our customers.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {markets.map((market, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={market.image }
                      alt={`${market.region} market`}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-600 text-white">Est. {market.established}</Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl text-black font-bold mb-3">{market.region}</h3>
                      <p className="text-black mb-4">{market.description}</p>
                      <div className="mb-4">
                        <h4 className="text-black font-semibold mb-2">Countries Served:</h4>
                        <div className="flex flex-wrap gap-2">
                          {market.countries.map((country, idx) => (
                            <Badge key={idx} variant="outline" className="border-amber-600 text-amber-600">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-black">{market.contact.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-black">{market.contact.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-amber-600" />
                        <span className="text-black">{market.contact.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-amber-800 font-bold mb-4">Distribution Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sophisticated logistics network ensures fresh, high-quality products reach customers quickly and
              efficiently worldwide.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl text-black font-bold mb-2">Air Freight</h3>
                <p className="text-gray-600">Fast delivery to international markets within 48-72 hours</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl text-black font-bold mb-2">Regional Hubs</h3>
                <p className="text-gray-600">Strategic distribution centers for efficient local delivery</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl text-black font-bold mb-2">Local Support</h3>
                <p className="text-gray-600">Dedicated customer service teams in each region</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    
    </div>
  )
}
