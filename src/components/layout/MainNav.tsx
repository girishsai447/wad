
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingCart, User, Info, Mail, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/use-cart';
import { Badge } from '@/components/ui/badge';

const navLinks = [
  { href: '/', label: 'Catalogue', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/contact', label: 'Contact Us', icon: Mail },
  { href: '/login', label: 'Login', icon: User },
];

interface MainNavProps {
  isMobileMenu?: boolean;
  onLinkClick?: () => void;
}

export function MainNav({ isMobileMenu = false, onLinkClick }: MainNavProps) {
  const pathname = usePathname();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <nav className={cn(
      "flex",
      isMobileMenu ? "flex-col space-y-2 w-full" : "items-center space-x-4 lg:space-x-6"
    )}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onLinkClick}
          className={cn(
            "text-sm font-medium transition-colors flex items-center rounded-md",
            isMobileMenu ? "w-full p-3 text-base" : "p-1", // Mobile links larger text & padding
            pathname === link.href
              ? (isMobileMenu ? "bg-primary/10 text-primary" : "text-primary") 
              : (isMobileMenu ? "text-muted-foreground hover:bg-muted/50 hover:text-primary" : "text-muted-foreground hover:text-primary")
          )}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {isMobileMenu ? (
            <>
              <link.icon className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>{link.label}</span>
            </>
          ) : (
            <span>{link.label}</span> // Desktop: label only
          )}
        </Link>
      ))}
      <Link
        href="/cart"
        onClick={onLinkClick}
        className={cn(
          "text-sm font-medium transition-colors relative flex items-center rounded-md",
          isMobileMenu ? "w-full p-3 text-base" : "p-1",
          pathname === "/cart"
            ? (isMobileMenu ? "bg-primary/10 text-primary" : "text-primary")
            : (isMobileMenu ? "text-muted-foreground hover:bg-muted/50 hover:text-primary" : "text-muted-foreground hover:text-primary")
        )}
        aria-label={`Shopping cart with ${itemCount} items`}
        aria-current={pathname === "/cart" ? "page" : undefined}
      >
        <ShoppingCart className={cn("h-5 w-5 flex-shrink-0", isMobileMenu ? "mr-3" : "")} />
        {isMobileMenu && <span>Cart</span>}
        {itemCount > 0 && (
          <Badge 
            variant="destructive" 
            className={cn(
              "absolute text-xs rounded-full h-5 min-w-[1.25rem] p-0 flex items-center justify-center",
              isMobileMenu ? "right-3 top-1/2 -translate-y-1/2" : "-top-2 -right-2" 
          )}>
            {itemCount}
          </Badge>
        )}
      </Link>
    </nav>
  );
}
