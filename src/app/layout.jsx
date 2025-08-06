"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { UserProvider } from "../context/userContext";
import Header from "../Components/layout/header";
import Footer from "../Components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <UserProvider>
          <CartProvider>
            <Header />
            {/* Add paddingTop to avoid overlap with sticky header */}
            <main style={{ paddingTop: "64px", minHeight: "calc(100vh - 64px)" }}>
              {children}
            </main>
            <Footer />
          </CartProvider>
        </UserProvider>
      </body>
    </html>
  );
}
