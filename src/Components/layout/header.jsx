"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, ShoppingCart } from "lucide-react";
import { useUser } from "../../context/userContext";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout } = useUser();
  const { cart } = useCart();
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const HandleLogout = () => {
    logout();
    router.push("/");
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/product" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-amber-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐝</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Modern Beekeeping</span>
              <div className="text-xs text-amber-600">Premium Honey & Bee Products</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 relative">
            {user ? (
              <div className="relative">
                <div
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md"
                  onClick={toggleDropdown}
                >
                  <img
                    src="/no-profilebg.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-sm font-medium text-gray-800">{user.name}</div>
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <ul className="py-2">
                      <li
                        onClick={HandleLogout}
                        className="px-4 py-2 hover:bg-amber-100 cursor-pointer text-amber-700"
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/cart" className="relative">
                  <Button variant="ghost" size="sm" className="relative">
                    <ShoppingCart className="w-6 h-6 text-black" />

                    {cart.length > 0 && (
                      <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                        {cart.length}
                      </span>
                    )}
                  </Button>
                </Link>

                <Button className="hidden md:flex bg-amber-600 hover:bg-amber-700 text-white">
                  Shop Now
                </Button>
              </>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-amber-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Shop Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
