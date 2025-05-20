
"use client";

import Image from 'next/image';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/hooks/use-cart';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
      variant: "default", // Use default, or a custom 'success' if defined
    });
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="p-0 relative aspect-video">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="object-cover w-full h-full"
          data-ai-hint={product.dataAiHint}
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg font-semibold mb-1">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-2 line-clamp-3">
          {product.description}
        </CardDescription>
        <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 border-t">
        <Button onClick={handleAddToCart} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusCircle className="mr-2 h-5 w-5" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
