"use client";

import { useState } from "react";
import Image from "next/image";

const mentors = [
  {
    name: "Sarah Johnson",
    role: "Founder & Master of Modern Beekeeping",
    image: "/Mentor1.png",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "/m3-CX86aT31.jpg",
  },
  {
    name: "David Kim",
    role: "Sustainability Director",
    image: "/Mentor2.png",
  },
  {
    name: "William Anderson",
    role: "Community Outreach Lead",
    image: "/m1-DQMq1g7Y.jpg",
  },
  {
    name: "Dr. Amara Uwimana",
    role: "Quality Assurance Manager",
    image: "/m2-DzCtgX_A.jpg",
  },
];

export default function MeetMentorPage() {
  const [selectedMentor, setSelectedMentor] = useState(mentors[0]);

  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-amber-800 mb-6">
          Meet with a Mentor
        </h2>

        {/* Mentor Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {mentors.map((mentor, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMentor(mentor)}
              className={`p-2 rounded-lg border hover:shadow ${
                selectedMentor.name === mentor.name
                  ? "border-amber-600 bg-yellow-100"
                  : "border-gray-200"
              }`}
            >
              <Image
                src={mentor.image}
                alt={mentor.name}
                width={80}
                height={80}
                className="rounded-full object-cover mx-auto"
              />
              <p className="text-center mt-2 text-sm font-semibold text-gray-800">
                {mentor.name}
              </p>
            </button>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="flex items-center space-x-4">
            <Image
              src={selectedMentor.image}
              alt={selectedMentor.name}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold text-amber-700">
                {selectedMentor.name}
              </h3>
              <p className="text-sm text-gray-600">{selectedMentor.role}</p>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-amber-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-amber-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Preferred Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-amber-300"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message or Purpose</label>
            <textarea
              rows={4}
              placeholder="Why do you want to meet this mentor?"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-amber-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md transition"
          >
            Request Meeting
          </button>
        </form>
      </div>
    </div>
  );
}
