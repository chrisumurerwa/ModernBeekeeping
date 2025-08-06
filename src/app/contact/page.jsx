"use client";
import { useState } from "react";
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
import ContactMap from "../../Components/Map/ContactMap";

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
    // Add your form submission logic here
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your honey products.";
    const phoneNumber = "+250794469581";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r bg-amber-300">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team worldwide</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">First Name</label>
                    <Input
                      name="firstName"
                      placeholder="Your first name"
                      className="text-gray-500 border border-gray-300"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">Last Name</label>
                    <Input
                      name="lastName"
                      placeholder="Your last name"
                      className="text-gray-500 border border-gray-300"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="text-gray-500 border border-gray-300"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Phone</label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+250 788 123 456"
                    className="text-gray-500 border border-gray-300"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* ✅ Working Subject Dropdown */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Subject</label>
                  <Select
  value={formData.subject}
  onValueChange={(value) =>
    setFormData((prev) => ({ ...prev, subject: value }))
  }
>
  <SelectTrigger className="w-full" >
    <SelectValue placeholder="Select a subject" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="general">General Inquiry</SelectItem>
    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
    <SelectItem value="wholesale">Wholesale Orders</SelectItem>
    <SelectItem value="support">Customer Support</SelectItem>
    <SelectItem value="media">Media & Press</SelectItem>
  </SelectContent>
</Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-black">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us how we can help you..."
                    className="min-h-32 text-gray-500 border border-gray-300"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-amber-300 hover:bg-amber-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 text-black">Get in Touch</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <MapPin className="w-6 h-6 text-amber-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-black">Headquarters</h3>
                    <p className="text-gray-600">KG 15 Avenue, Kimisagara, Kigali, Rwanda</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <Phone className="w-6 h-6 text-amber-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-black">Phone</h3>
                    <p className="text-gray-600">Main: +250 788 123 456</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <Mail className="w-6 h-6 text-amber-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-black">Email</h3>
                    <p className="text-gray-600">info@modernbeekeeping.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 flex items-start">
                  <Clock className="w-6 h-6 text-amber-300 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-black">Business Hours</h3>
                    <p className="text-gray-600">Mon–Fri: 8:00–18:00, Sat: 9:00–14:00, Sun: Closed</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg bg-green-50">
                <CardContent className="p-6 flex items-start">
                  <MessageSquare className="w-6 h-6 text-green-600 mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2 text-green-800">WhatsApp Business</h3>
                    <p className="text-green-700 mb-3">For quick inquiries and orders</p>
                    <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-black">Visit Our Headquarters</h2>
            <p className="text-lg text-gray-600">Located in the heart of Kigali, Rwanda</p>
          </div>
          <ContactMap />
        </div>
      </section>
    </div>
  );
}
