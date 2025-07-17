import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../Components/ui/accordion";
import { Card, CardContent } from "../../Components/ui/card";
import { Button } from "../../Components/ui/button";
import { HelpCircle, Package, Leaf, Globe, Shield, Heart } from "lucide-react";

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Products & Quality",
      icon: Package,
      faqs: [
        {
          question: "What makes your honey different from store-bought honey?",
          answer:
            "Our honey is raw, unprocessed, and maintains all natural enzymes, vitamins, and minerals. Unlike commercial honey that's often heated and filtered, our honey retains its natural crystallization properties and full nutritional profile. We also ensure complete traceability from hive to jar.",
        },
        {
          question: "How do you ensure the quality of your honey?",
          answer:
            "We implement rigorous quality control at every stage: regular hive inspections, careful harvesting techniques, laboratory testing for purity and moisture content, and proper storage conditions. All our products are certified organic and undergo third-party quality verification.",
        },
        {
          question: "Why does honey sometimes crystallize?",
          answer:
            "Crystallization is a natural process that indicates pure, raw honey. The speed depends on the floral source and glucose content. Crystallized honey is perfectly safe and retains all its nutritional properties. You can gently warm it to return to liquid form if preferred.",
        },
        {
          question: "What's the shelf life of your products?",
          answer:
            "Pure honey has an indefinite shelf life when stored properly. Our honey products are best consumed within 2 years for optimal flavor, while other bee products like royal jelly and propolis have specific expiration dates printed on packaging.",
        },
      ],
    },
    {
      title: "Sustainability & Environment",
      icon: Leaf,
      faqs: [
        {
          question: "How do your practices support bee conservation?",
          answer:
            "We practice sustainable beekeeping by maintaining healthy hive populations, avoiding harmful chemicals, providing diverse foraging areas, and supporting natural bee behavior. We also contribute to bee research and habitat restoration projects.",
        },
        {
          question: "Are your products organic?",
          answer:
            "Yes, all our honey products are certified organic. Our bees forage in pesticide-free areas, and we follow strict organic beekeeping standards. We're certified by multiple international organic certification bodies.",
        },
        {
          question: "What's your environmental impact?",
          answer:
            "We're carbon-neutral through reforestation projects, use sustainable packaging materials, and support biodiversity through our beekeeping practices. Our operations actually have a positive environmental impact by supporting pollination services.",
        },
        {
          question: "How do you support local communities?",
          answer:
            "We work with over 200 local beekeepers through fair trade partnerships, provide training and equipment, support community development projects, and ensure fair compensation for all our partners.",
        },
      ],
    },
    {
      title: "Shipping & Orders",
      icon: Globe,
      faqs: [
        {
          question: "Which countries do you ship to?",
          answer:
            "We ship to over 25 countries across six continents. Our regional distribution centers ensure fast delivery times. Check our Markets page for specific countries and contact your regional office for availability.",
        },
        {
          question: "How is honey shipped to maintain quality?",
          answer:
            "We use temperature-controlled shipping for sensitive products and protective packaging to prevent damage. Most shipments arrive within 3-7 business days internationally, with tracking provided for all orders.",
        },
        {
          question: "What are your minimum order quantities?",
          answer:
            "For retail customers, there's no minimum order. For wholesale and business customers, minimum orders vary by product and region. Contact our sales team for specific wholesale requirements.",
        },
        {
          question: "Do you offer bulk or wholesale pricing?",
          answer:
            "Yes, we offer competitive wholesale pricing for restaurants, hotels, retailers, and other businesses. Volume discounts are available, and we provide dedicated account management for large customers.",
        },
      ],
    },
    {
      title: "Health & Safety",
      icon: Shield,
      faqs: [
        {
          question: "Is your honey safe for children?",
          answer:
            "Our honey is safe for children over 12 months old. We don't recommend honey for infants under 12 months due to the risk of botulism, as recommended by pediatric health organizations worldwide.",
        },
        {
          question: "Are your products tested for contaminants?",
          answer:
            "Yes, all products undergo comprehensive testing for pesticides, heavy metals, antibiotics, and other contaminants. We maintain certificates of analysis and comply with the strictest international food safety standards.",
        },
        {
          question: "Do you have allergen information?",
          answer:
            "Our honey products are naturally gluten-free and contain no artificial additives. However, people with severe pollen allergies should consult their healthcare provider. All allergen information is clearly labeled on our products.",
        },
        {
          question: "What certifications do you have?",
          answer:
            "We hold organic certifications, fair trade certification, HACCP compliance, ISO 22000 food safety certification, and B-Corp certification for social and environmental performance.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r from-amber-300 to-amber-700">
        <div className="text-center text-white">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-black">How Can We Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive FAQ sections or contact our support team
              for personalized assistance.
            </p>
          </div>

          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <category.icon className="w-8 h-8 text-amber-600 mr-4" />
                    <h3 className="text-2xl font-bold text-black">{category.title}</h3>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-amber-600 text-black">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base leading-relaxed pt-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Still Need Help?</h2>
            <p className="text-lg text-gray-600">
              Our customer support team is here to assist you
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-red-500">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with our support team in real-time
                </p>
                <Button className="bg-red-500 hover:bg-red-600">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-blue-500">Email Support</h3>
                <p className="text-gray-600 mb-4">
                  Get detailed help via email
                </p>
                <Button
                  variant="outline"
                  className="border-blue-600  hover:bg-blue-600 text-white bg-blue-500"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                              <h3 className="text-xl font-bold mb-3 text-green-500
                 ">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Quick support via WhatsApp</p>
                <Button className="bg-green-600 hover:bg-green-700">
                  Message Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Didn't Find Your Answer?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team is always ready to help with any questions about our
            products, sustainability practices, or partnership opportunities.
          </p>
          <Button
            size="lg"
            className="bg-white text-amber-600 hover:bg-gray-100 px-8"
          >
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  );
}
