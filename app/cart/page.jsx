// components/CartSheet.tsx
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
import { ShoppingCart } from "lucide-react"
import Image from "next/image"

const cartItems = [
  {
    id: 1,
    name: "Organic Ghee",
    price: 1200,
    quantity: 2,
    image: "/images/ghee.jpg",
  },
  {
    id: 2,
    name: "Natural Honey",
    price: 800,
    quantity: 1,
    image: "/images/honey.jpg",
  },
]

export default function CartSheet() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex gap-2 items-center">
          
          ({cartItems.length})
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[350px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  Quantity: {item.quantity}
                </p>
              </div>
              <p className="font-semibold text-right">৳ {item.price * item.quantity}</p>
            </div>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="flex justify-between font-semibold text-lg">
          <span>Subtotal:</span>
          <span>৳ {subtotal}</span>
        </div>

        <Button className="w-full mt-4">Proceed to Checkout</Button>
      </SheetContent>
    </Sheet>
  )
}
