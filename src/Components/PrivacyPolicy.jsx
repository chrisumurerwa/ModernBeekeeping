"use client";
export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        We value your privacy and are committed to protecting your personal information.
        This Privacy Policy outlines how we collect, use, and safeguard your data.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Email address when you subscribe to our newsletter</li>
        <li>Contact details from our contact forms</li>
        <li>Website usage data via cookies</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To respond to your inquiries</li>
        <li>To improve our services and content</li>
        <li>To send newsletters and promotional emails (if subscribed)</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information. We may share your
        information with service providers who assist us in delivering our services.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">
        You have the right to request access, correction, or deletion of your personal data at
        any time. Please contact us at info@modernbeekeeping.com.
      </p>
      <p className="text-sm text-gray-500">Last updated: July 15, 2025</p>
    </div>
  );
}