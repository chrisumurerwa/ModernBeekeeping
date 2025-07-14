"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../Components/ui/button";
import { Card, CardContent } from "../../Components/ui/card";
import { Input } from "../../Components/ui/input";
import { Textarea } from "../../Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your honey products.";
    const phoneNumber = "250788123456";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r bg-amber-500">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 ">Contact Us</h1>
          <p className="text-xl">Get in touch with our team worldwide</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">
                      First Name
                    </label>
                    <Input
                      className="text-black"
                      type="text"
                      name="firstName"
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">
                      Last Name
                    </label>
                    <Input
                      className="text-black"
                      name="lastName"
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Email
                  </label>
                  <Input
                    className="text-black"
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Phone
                  </label>
                  <Input
                    className="text-black"
                    type="tel"
                    name="phone"
                    placeholder="+250 788 123 456"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Subject
                  </label>
                  <Select
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, subject: value }))
                    }
                  >
                    <SelectTrigger className="text-black">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="text-black">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="partnership">
                        Partnership Opportunity
                      </SelectItem >
                      <SelectItem className="text-black" value="wholesale">
                        Wholesale Orders
                      </SelectItem>
                      <SelectItem className="text-black" value="support">Customer Support</SelectItem>
                      <SelectItem className="text-black" value="media">Media & Press</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    className="min-h-32 text-black"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
              <div className="space-y-6">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-black
                        ">Headquarters</h3>
                        <p className="text-gray-600">
                          KG 15 Avenue, Kimisagara
                          <br />
                          Kigali, Rwanda
                          <br />
                          P.O. Box 1234
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-black">Phone</h3>
                        <p className="text-gray-600">
                          Main: +250 788 123 456
                          <br />
                          Sales: +250 788 123 457
                          <br />
                          Support: +250 788 123 458
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-black">Email</h3>
                        <p className="text-gray-600">
                          General: info@modernbeekeeping.com
                          <br />
                          Sales: sales@modernbeekeeping.com
                          <br />
                          Support: support@modernbeekeeping.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-black">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 6:00 PM (EAT)
                          <br />
                          Saturday: 9:00 AM - 2:00 PM (EAT)
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MessageSquare className="w-6 h-6 text-green-600 mr-4 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2 text-green-800">
                          WhatsApp Business
                        </h3>
                        <p className="text-green-700 mb-3">
                          For quick inquiries and orders
                        </p>
                        <Button
                          onClick={handleWhatsApp}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Visit Our Headquarters</h2>
            <p className="text-lg text-gray-600">
              Located in the heart of Kigali, Rwanda
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/thread.jpg?height=400&width=800"
              alt="Map showing our location in Kigali, Rwanda"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h3 className="font-bold mb-1 text-black">Modern Beekeeping Company</h3>
                <p className="text-sm text-gray-600">
                  KG 15 Avenue, Kigali, Rwanda
                </p>
                <Button
                  size="sm"
                  className="mt-3 bg-amber-600 hover:bg-amber-700"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">Regional Offices</h2>
            <p className="text-lg text-gray-600">
              Connect with our teams around the world
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Europe</h3>
                <p className="text-gray-600 mb-3">London, United Kingdom</p>
                <p className="text-sm text-gray-500 mb-4">+44 20 7123 4567</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-600 text-amber-600 bg-amber-50 hover:bg-amber-100"
                >
                  Contact Europe
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">North America</h3>
                <p className="text-gray-600 mb-3">New York, USA</p>
                <p className="text-sm text-gray-500 mb-4">+1 212 555 0123</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-600 text-amber-600 bg-amber-50 hover:bg-amber-100"
                >
                  Contact Americas
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">Asia Pacific</h3>
                <p className="text-gray-600 mb-3">Singapore</p>
                <p className="text-sm text-gray-500 mb-4">+65 6123 4567</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-600 text-amber-600 bg-amber-50 hover:bg-amber-100"
                >
                  Contact Asia
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
