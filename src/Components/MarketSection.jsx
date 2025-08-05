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
     
      image: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      established: "1998",
    },
    {
      region: "Europe",
      countries: ["United Kingdom", "Germany", "France", "Netherlands", "Italy"],
      headquarters: "London, UK",
      description: "Serving premium European markets with sustainable, organic honey products.",
      
      image: "https://images.unsplash.com/photo-1579158949482-3e9e0ac69333?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D",
      established: "2008",
    },
    {
      region: "North America",
      countries: ["United States", "Canada"],
      headquarters: "New York, USA",
      description: "Bringing authentic African honey to North American consumers and businesses.",
      
      image: "https://images.unsplash.com/photo-1604549944235-3e5579b15cc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGglMjBhbWVyaWNhfGVufDB8fDB8fHww",
      established: "2012",
    },
    {
      region: "Asia Pacific",
      countries: ["Japan", "Australia", "Singapore", "South Korea"],
      headquarters: "Singapore",
      description: "Expanding into Asian markets with premium honey and wellness products.",
      
      image: "https://images.unsplash.com/photo-1557405939-2a4344e40875?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYSUyMHBhc2ZpY3F1ZXxlbnwwfHwwfHx8MA%3D%3D",
      established: "2018",
    },
    {
      region: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
      headquarters: "Dubai, UAE",
      description: "Serving the Middle Eastern market with premium honey for luxury hospitality.",
      
      image: "https://images.unsplash.com/photo-1691441799387-722f8cfaa1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291dGglMjBhbWVyaWNhfGVufDB8fDB8fHww",

      established: "2020",
    },
    {
      region: "South America",
      countries: ["Brazil", "Argentina", "Chile"],
      headquarters: "São Paulo, Brazil",
      description: "Our newest market, bringing sustainable honey to South American consumers.",
      
      image: "https://images.unsplash.com/photo-1691441799387-722f8cfaa1d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c291dGglMjBhbWVyaWNhfGVufDB8fDB8fHww",
      established: "2023",
    },
  ];
  
  
  

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-6xl text-amber-300 font-bold mb-4">Regional Markets</h2>
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
                    <Badge className="absolute top-4 left-4 bg-amber-300 text-white">Est. {market.established}</Badge>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl text-black font-bold mb-3">{market.region}</h3>
                      <p className="text-black mb-4">{market.description}</p>
                      <div className="mb-4">
                        <h4 className="text-black font-semibold mb-2">Countries Served:</h4>
                        <div className="flex flex-wrap gap-2">
                          {market.countries.map((country, idx) => (
                            <Badge key={idx} variant="outline" className="border-amber-300 text-amber-300">
                              {country}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}