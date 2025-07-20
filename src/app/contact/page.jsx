"use client";

import { useState,useEffect} from "react";
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
import { Notify } from "notiflix";
import ContactListPage from "../../Components/contactListPage"
export default function ContactPage() {
const [user,setUser]=useState(null)
 useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
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

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:4000/contact/postContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      Notify.success(data.message);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      Notify.failure(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Failed to send contact:", error);
    alert("Error submitting the form. Please try again.");
  }
};

 

  return (
    <div className="min-h-screen">
      {user?(<ContactListPage/>):(
        <div>
      <section className="relative h-64 flex items-center justify-center bg-gradient-to-r bg-amber-600">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4 ">Contact Us</h1>
          <p className="text-xl">Get in touch with our team worldwide</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className=" py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="border-none block text-sm font-medium mb-2 text-black">
                      First Name
                    </label>
                    <Input
                      className="text-gray-500 border border-gray-300"
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
                      className="text-gray-500 border border-gray-300"
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
                    className="text-gray-500 border border-gray-300"
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
                    className="text-gray-500 border border-gray-300"
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
                    <SelectTrigger className="text-gray-500 border border-gray-300">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="text-black bg-amber-50">
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
                    className="min-h-32 text-gray-500 border border-gray-300"
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
               
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      )}
     
    </div>
  );
}
