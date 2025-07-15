"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import Image from "next/image"
import { useCartStore } from "../store/cartStore"

export default function CartSheet() {
  const items = useCartStore((state) => state.items)
  const total = useCartStore((state) => state.total)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  const handleIncrement = (id, quantity) => {
    updateQuantity(id, quantity + 1)
  }

  const handleDecrement = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex gap-2 items-center relative mx-1">
          <ShoppingCart className="h-5 w-5" />
          <span className="w-5 h-5 bg-yellow-500 text-white rounded-full absolute left-7 -top-2 text-xs flex items-center justify-center font-semibold ring-2 ring-white ring-offset-2 transform scale-110 hover:scale-125 transition-all duration-300 ease-in-out">
            {items.length}
          </span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[350px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="mt-6 text-center text-muted-foreground">
            Your cart is empty 🛒
          </div>
        ) : (
          <>
            <div className="mt-4 px-5 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.image || "/placeholder.jpg"}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                     <p className="font-medium">{item.id} gm</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleDecrement(item.id, item.quantity)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="px-2">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleIncrement(item.id, item.quantity)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-500 ml-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="font-semibold text-right whitespace-nowrap">
                    ৳ {item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="flex justify-between font-semibold text-lg px-5">
              <span>Subtotal:</span>
              <span>৳ {total().toFixed(2)}</span>
            </div>

            <Button className="w-full mt-4">Proceed to Checkout</Button>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
