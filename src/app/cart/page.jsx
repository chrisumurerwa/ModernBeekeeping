"use client"

import { useCart } from "../../context/CartContext"
import { Button } from "../../Components/ui/button"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")), 0)

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li key={item.id} className="border p-4 rounded flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p>{item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 mt-2 border px-2 py-1 rounded"
                  />
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <Button className="mt-4" onClick={() => clearCart()}>
            Clear Cart
          </Button>
        </>
      )}
    </div>
  )
}
