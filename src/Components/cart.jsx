"use client"

import { useCart } from "../context/CartContext"
import { Button } from "./ui/button"
import { ShoppingCart } from "@deemlol/next-icons"
import Image from "next/image"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const handleWhatsApp = () => {
    if (cart.length === 0) return

    let message = "Hello! I'm interested in the following honey products:\n\n"

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - Qty: ${item.quantity}\n`
    })

    message += `\nTotal: $${total.toFixed(2)}\n`
    message += "\nPlease let me know how to proceed with the order. Thank you!"

    const phoneNumber = "250726619119"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">My Cart List</h2>
        <ShoppingCart size={36} />
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    className="w-8 h-8 rounded bg-black text-white text-lg"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  >-</Button>
                  <span className="w-6 text-center">{item.quantity}</span>
                  <Button
                    className="w-8 h-8 rounded bg-black text-white text-lg"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >+</Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Button
              className="w-full bg-green-500 text-white py-3 rounded-xl text-lg"
              onClick={handleWhatsApp}
            >
              Proceed payment on Whatsapp
            </Button>

            <Button
              onClick={() => clearCart()}
              className="w-full bg-[#e17100] hover:bg-amber-700 text-white py-2 rounded-xl"
            >
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
