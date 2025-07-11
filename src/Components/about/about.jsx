// import Image from "next/image"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// import { Leaf, Users, Globe, Award } from "lucide-react"

// export default function AboutPage() {
//   const teamMembers = [
//     {
//       name: "Sarah Johnson",
//       role: "Founder & Master Beekeeper",
//       image: "/placeholder.svg?height=300&width=300",
//       bio: "With 25 years of beekeeping experience, Sarah founded our company with a vision to create sustainable honey production.",
//     },
//     {
//       name: "Michael Chen",
//       role: "Head of Operations",
//       image: "/placeholder.svg?height=300&width=300",
//       bio: "Michael oversees our global operations and ensures quality standards across all our products.",
//     },
//     {
//       name: "Dr. Amara Uwimana",
//       role: "Sustainability Director",
//       image: "/placeholder.svg?height=300&width=300",
//       bio: "Dr. Uwimana leads our environmental initiatives and community development programs in Rwanda.",
//     },
//   ]

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-96 flex items-center justify-center">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
//         <Image src="/placeholder.svg?height=600&width=1200" alt="Beekeeping heritage" fill className="object-cover" />
//         <div className="relative z-20 text-center text-white">
//           <h1 className="text-5xl font-bold mb-4">Our Story</h1>
//           <p className="text-xl">Preserving tradition, embracing innovation</p>
//         </div>
//       </section>

//       {/* Company History */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-6">From Rwanda to the World</h2>
//               <div className="space-y-6 text-lg text-gray-700">
//                 <p>
//                   Our journey began in 1998 in the rolling hills of Rwanda, where our founder Sarah Johnson first
//                   learned the ancient art of beekeeping from local masters. What started as a passion for understanding
//                   these remarkable creatures has grown into a global mission.
//                 </p>
//                 <p>
//                   Over the past 25 years, we've built a network of sustainable apiaries that not only produce the finest
//                   honey but also support local communities and protect vital ecosystems. Our commitment to ethical
//                   practices has earned us recognition from environmental organizations worldwide.
//                 </p>
//                 <p>
//                   Today, we're proud to serve premium hotels, restaurants, and conscious consumers across six
//                   continents, all while maintaining our core values of sustainability, quality, and community support.
//                 </p>
//               </div>
//             </div>
//             <div className="relative h-96 rounded-lg overflow-hidden">
//               <Image
//                 src="/placeholder.svg?height=400&width=600"
//                 alt="Historical beekeeping"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Mission & Vision</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We believe in creating a world where bees thrive, communities prosper, and nature is preserved for future
//               generations.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 gap-12">
//             <Card className="border-none shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex items-center mb-6">
//                   <Globe className="w-8 h-8 text-blue-600 mr-3" />
//                   <h3 className="text-2xl font-bold">Our Mission</h3>
//                 </div>
//                 <p className="text-lg text-gray-700">
//                   To produce the world's finest honey and bee products while supporting sustainable beekeeping
//                   practices, protecting bee populations, and empowering local communities through fair trade
//                   partnerships.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card className="border-none shadow-lg">
//               <CardContent className="p-8">
//                 <div className="flex items-center mb-6">
//                   <Leaf className="w-8 h-8 text-green-600 mr-3" />
//                   <h3 className="text-2xl font-bold">Our Vision</h3>
//                 </div>
//                 <p className="text-lg text-gray-700">
//                   A future where every hive contributes to biodiversity, every jar of honey tells a story of
//                   sustainability, and every partnership creates lasting positive impact on both people and planet.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
//             <p className="text-xl text-gray-600">The passionate people behind our mission</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {teamMembers.map((member, index) => (
//               <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
//                 <CardContent className="p-8">
//                   <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
//                     <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                   <Badge className="mb-4 bg-amber-100 text-amber-800">{member.role}</Badge>
//                   <p className="text-gray-600">{member.bio}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Sustainability Practices */}
//       <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Sustainability & Environmental Practices</h2>
//             <p className="text-xl max-w-3xl mx-auto">
//               Our commitment to the environment goes beyond honey production. We're actively working to protect bee
//               populations and support biodiversity.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="text-center">
//               <Leaf className="w-12 h-12 mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Organic Practices</h3>
//               <p>100% organic methods with no harmful chemicals or pesticides</p>
//             </div>
//             <div className="text-center">
//               <Users className="w-12 h-12 mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Community Support</h3>
//               <p>Fair trade partnerships supporting 200+ local beekeepers</p>
//             </div>
//             <div className="text-center">
//               <Globe className="w-12 h-12 mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Carbon Neutral</h3>
//               <p>Offsetting our carbon footprint through reforestation projects</p>
//             </div>
//             <div className="text-center">
//               <Award className="w-12 h-12 mx-auto mb-4" />
//               <h3 className="text-xl font-bold mb-2">Certified</h3>
//               <p>Multiple certifications including Organic, Fair Trade, and B-Corp</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
