"use client"
import Image from "next/image"
import { Button } from "components/ui/button"
import { Card, CardContent } from "components/ui/card"
import { Badge } from "components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "context/CartContext"
import { toast } from "sonner"

export default function ProductsPage() {
  const { addToCart } = useCart()
  const products = {
    honey: [
      {
        id: 1,
        name: "Raw Wildflower Honey",
        price: "$24.99",
        image: "/Honey1.jpg",
        description: "Pure, unprocessed honey with natural enzymes intact",
        badges: ["Organic", "Raw"],
        rating: 4.9,
      },
      {
        id: 2,
        name: "Acacia Honey",
        price: "$28.99",
        image: "/Honey2.jpg",
        description: "Light, delicate honey with floral notes",
        badges: ["Premium", "Limited"],
        rating: 4.8,
      },
      {
        id: 3,
        name: "Manuka Honey",
        price: "$89.99",
        image: "/Honey3.jpg",
        description: "Therapeutic honey with unique healing properties",
        badges: ["Medical Grade", "UMF 15+"],
        rating: 5.0,
      },
    ],
    wax: [
      {
        id: 4,
        name: "Pure Beeswax Blocks",
        price: "$15.99",
        image: "/Honey5.jpg",
        description: "100% pure beeswax for crafting and cosmetics",
        badges: ["Pure", "Filtered"],
        rating: 4.7,
      },
      {
        id: 5,
        name: "Beeswax Candles Set",
        price: "$32.99",
        image: "/Honey6.jpg",
        description: "Hand-dipped candles that burn clean and long",
        badges: ["Handmade", "Set of 6"],
        rating: 4.9,
      },
    ],
    supplements: [
      {
        id: 6,
        name: "Fresh Royal Jelly",
        price: "$89.99",
        image: "/Honey7.jpg",
        description: "Nature's superfood packed with nutrients",
        badges: ["Fresh", "Premium"],
        rating: 4.8,
      },
      {
        id: 7,
        name: "Bee Pollen Granules",
        price: "$34.99",
        image: "/Honey8.jpg",
        description: "Pure bee pollen rich in proteins and vitamins",
        badges: ["Organic", "Raw"],
        rating: 4.6,
      },
      {
        id: 8,
        name: "Propolis Tincture",
        price: "$42.99",
        image: "/Honey9.jpg",
        description: "Natural immune system support",
        badges: ["Concentrated", "Alcohol-Free"],
        rating: 4.7,
      },
    ],
  }

  const ProductCard = ({ product }) => (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {product.badges.map((badge, index) => (
            <Badge key={index} className="bg-amber-600 text-white">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-amber-600">{product.price}</span>
          <Button className="bg-amber-600 hover:bg-amber-700" 
          onClick={() => {addToCart(product)
            toast.success("Added to cart ✅")
          }
          }>
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl">Premium honey and bee products from nature's finest</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="honey" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="honey" className="text-lg">
                Honey Products
              </TabsTrigger>
              <TabsTrigger value="wax" className="text-lg">
                Beeswax Products
              </TabsTrigger>
              <TabsTrigger value="supplements" className="text-lg">
                Health Supplements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="honey">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Premium Honey Collection</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our honey is harvested with care, maintaining all natural enzymes and nutrients that make each variety
                  unique and beneficial.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.honey.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wax">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Pure Beeswax Products</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our beeswax is carefully filtered and processed to maintain its natural properties, perfect for
                  crafting, cosmetics, and home use.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.wax.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="supplements">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Natural Health Supplements</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Harness the power of the hive with our range of natural supplements, each packed with unique nutrients
                  and health benefits.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.supplements.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Quality You Can Trust</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Organic Certified</h3>
              <p className="text-gray-600">All products meet strict organic standards</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">★</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Rigorous testing ensures the highest quality</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">♻</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable</h3>
              <p className="text-gray-600">Environmentally responsible production</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">❤</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fair Trade</h3>
              <p className="text-gray-600">Supporting local beekeeping communities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
