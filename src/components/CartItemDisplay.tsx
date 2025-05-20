
"use client";

import Image from 'next/image';
import type { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/hooks/use-cart';
import { Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

interface CartItemDisplayProps {
  item: CartItem;
}

export function CartItemDisplay({ item }: CartItemDisplayProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    const quantity = Math.max(1, newQuantity); // Ensure quantity is at least 1
    updateQuantity(item.product.id, quantity);
  };

  return (
    <div className="flex items-center space-x-4 p-4 border-b">
      <Link href={`/#product-${item.product.id}`} passHref> {/* Assuming product links to homepage anchor */}
        <Image
          src={item.product.image}
          alt={item.product.name}
          width={80}
          height={80}
          className="rounded-md object-cover aspect-square"
          data-ai-hint={item.product.dataAiHint}
        />
      </Link>
      <div className="flex-grow">
        <Link href={`/#product-${item.product.id}`} passHref>
         <h3 className="text-md font-medium hover:text-primary transition-colors">{item.product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">${item.product.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1} aria-label="Decrease quantity">
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          value={item.quantity}
          onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
          className="w-16 h-9 text-center"
          min="1"
          aria-label="Item quantity"
        />
        <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} aria-label="Increase quantity">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <p className="text-md font-semibold w-20 text-right">${(item.product.price * item.quantity).toFixed(2)}</p>
      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.product.id)} className="text-destructive hover:text-destructive/80" aria-label="Remove item">
        <Trash2 className="h-5 w-5" />
      </Button>
    </div>
  );
}
