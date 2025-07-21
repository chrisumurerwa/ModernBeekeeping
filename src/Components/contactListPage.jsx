"use client";
import { useEffect, useState } from "react";
import { Card, CardContent } from "../Components/ui/card";
import { Mail, Phone, User } from "lucide-react";

export default function ContactListPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:4000/contact/getAllContact", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch contacts");
        }

        setContacts(data.data); // assuming your response is { success, message, data: [...] }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-black text-center">
        Contact Messages
      </h1>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No contact messages found.</p>
      ) : (
        <div className="space-y-4 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <Card key={contact.id} className="shadow-md hover:shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div>
                    <p className="text-lg font-semibold text-black flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {contact.firstName} {contact.lastName}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 capitalize">
                      Subject: <strong>{contact.subject}</strong>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {contact.email}
                    </p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-2" />
                      {contact.phone}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700">
                    <strong>Message:</strong> {contact.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Sent on: {new Date(contact.createdAt).toLocaleString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
