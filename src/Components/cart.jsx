"use client"
import { useCart } from "../context/CartContext"
import { Button } from "./ui/button"
import { ShoppingCart } from "@deemlol/next-icons";
export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0)

  const handleWhatsApp = () => {
  if (cart.length === 0) return;

  let message = "Hello! I'm interested in the following honey products:\n\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - Qty: ${item.quantity}\n`;
  });

  message += `\nTotal: $${total.toFixed(2)}\n`;
  message += "\nPlease let me know how to proceed with the order. Thank you!";

  const phoneNumber = "250726619119";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
    <div className="flex cols gap-4 "><ShoppingCart size={36}/> <h3 className="text-4xl font-bold mb-8"> Your Cart</h3></div> 
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6 rounded-lg shadow-md border-0 bg-white">
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
                <Button variant="destructive" onClick={() => removeFromCart(item.id)} className="bg-[#E17100] text-white">
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <div className="flex cols gap-10 mt-4">
         
                      
                        <Button
                          onClick={handleWhatsApp}
                          className="bg-[#25D366] hover:bg-green-600 text-white"
                        >
                          Proceed Payment on WhatsApp
                        </Button>

            <Button className="bg-amber-700 text-white" onClick={() => clearCart()}>
            Clear Cart
          </Button>
                </div>
        </>
      )}
    </div>
  )
}
