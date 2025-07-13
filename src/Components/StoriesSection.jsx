"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

import { Button } from "@/Components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
     
    slug: "how-bees-communicate",
      title: "The Secret Language of Bees: How They Communicate",
      excerpt:
        "Discover the fascinating ways bees share information about food sources, dangers, and hive activities through their intricate dance language.",
      image: "/images/bees10.jpg",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
    
      category: "Education",
      featured: true,
    },
    {
      id: 2,
      slug: "why-bees-matter",
      title: "Why Bees Matter: The Critical Role in Our Ecosystem",
      excerpt:
        "Understanding the vital importance of bees in pollination and how their decline affects global food security and biodiversity.",
      image: "/images/bees1.jpg",
      author: "Michael Chen",
      date: "March 10, 2024",
  
      category: "Environment",
    },
    {
      id: 3,
      slug: "sustainable-honey-journey",
      title: "From Hive to Table: Our Sustainable Honey Journey",
      excerpt:
        "Follow the complete process of how our honey travels from the hive to your table, maintaining quality and sustainability at every step.",
      image: "/images/bees6.jpg",
      author: "Dr. Amara Uwimana",
      date: "March 5, 2024",
     
      category: "Process",
    },
    {
      id: 4,
      slug: "ancient-art-of-beekeeping",
      title: "The Ancient Art of Beekeeping in Rwanda",
      excerpt:
        "Exploring traditional beekeeping methods passed down through generations and how we blend them with modern techniques.",
      image: "/images/bees5.jpg",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      
      category: "Culture",
    },
    {
      id: 5,
      slug: "supporting-biodiversity",
      title: "Supporting Biodiversity Through Beekeeping",
      excerpt:
        "How our beekeeping practices contribute to local ecosystem health and support diverse plant and animal communities.",
      image: "/images/bees3.jpg",
      author: "Dr. Amara Uwimana",
      date: "February 20, 2024",
     
      category: "Conservation",
    },
    {
      id: 6,
      slug: "health-benefits-of-raw-honey",
      title: "The Health Benefits of Raw Honey",
      excerpt:
        "Scientific insights into the nutritional and medicinal properties of raw honey and how processing affects these benefits.",
      image: "/images/bees4.jpg",
      author: "Dr. Sarah Johnson",
      date: "February 15, 2024",
    
      category: "Health",
    },
  ];

  const featuredStory = stories.find((story) => story.featured);
  const regularStories = stories.filter((story) => !story.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-amber-500">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">The Bees' World</h1>
          <p className="text-xl">Stories, insights, and education about the fascinating world of bees</p>
        </div>
      </section>

      {/* Featured Story */}
      {featuredStory && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="text-amber-800 text-2xl mb-2">Featured Story</Badge>
              <h2 className="text-3xl text-black font-bold">Latest Insights</h2>
            </div>
            <Card className="overflow-hidden max-w-4xl mx-auto hover:shadow-xl transition-shadow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredStory.image}
                    alt={featuredStory.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-green-100 text-green-800">{featuredStory.category}</Badge>
                  <h3 className="text-2xl text-black font-bold mb-4">{featuredStory.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredStory.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredStory.author}</span>
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{featuredStory.date}</span>
                  
                  </div>
                  <Link href={`/stories/${featuredStory.slug}`}>
                    <Button className="w-fit bg-amber-600 hover:bg-amber-700">Read Full Story</Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* All Stories */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-black font-bold mb-4">All Stories</h2>
            <p className="text-lg text-gray-600">
              Explore our collection of educational content about bees, sustainability, and beekeeping
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-800">{story.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl text-black font-bold mb-3 line-clamp-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-3">{story.author}</span>
                   
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{story.date}</span>
                    <Link href={`/stories/${story.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
                      >
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Impact Through Education</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-lg">People educated about bee conservation</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-lg">Local beekeepers trained</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-lg">Schools with bee education programs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
