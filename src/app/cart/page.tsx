
"use client";

import { useCart } from '@/hooks/use-cart';
import { CartItemDisplay } from '@/components/CartItemDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ShoppingBag, Trash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function CartPage() {
  const { cartItems, getCartTotal, clearCart, getItemCount } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    // This is a demo, actual checkout would involve payment processing etc.
    toast({
      title: "Checkout Initiated",
      description: "This is a demo. No payment will be processed.",
    });
    // Optionally clear cart after "checkout"
    // clearCart();
  };
  
  const itemCount = getItemCount();
  const cartTotal = getCartTotal();

  if (itemCount === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
        <h1 className="text-3xl font-semibold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven&apos;t added anything to your cart yet.</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">Your Shopping Cart</h1>
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle>Items ({itemCount})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {cartItems.map((item) => (
            <CartItemDisplay key={item.product.id} item={item} />
          ))}
        </CardContent>
        <CardFooter className="flex flex-col md:flex-row items-center justify-between p-6 space-y-4 md:space-y-0">
          <Button variant="outline" onClick={clearCart} className="w-full md:w-auto text-destructive border-destructive hover:bg-destructive/10">
            <Trash className="mr-2 h-4 w-4" /> Clear Cart
          </Button>
          <div className="flex flex-col items-end space-y-2 w-full md:w-auto">
            <p className="text-xl font-semibold">
              Total: <span className="text-primary">${cartTotal.toFixed(2)}</span>
            </p>
            <Button onClick={handleCheckout} size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Proceed to Checkout
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
