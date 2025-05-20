
"use client"; // Required for useState

import Link from 'next/link';
import { ShopWaveLogo } from '@/components/ShopWaveLogo';
import { MainNav } from './MainNav';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2" aria-label="ShopWave Home" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
          <ShopWaveLogo className="h-8 w-auto" />
        </Link>
        
        <div className="hidden md:flex flex-grow justify-end">
          <MainNav /> {/* Desktop: isMobileMenu will be false (default) */}
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" onClick={toggleMobileMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6 pt-10"> {/* Added pt-10 for more space from top */}
              <div className="flex flex-col space-y-4">
                <Link href="/" onClick={closeMobileMenu} className="flex items-center space-x-2 mb-4" aria-label="ShopWave Home">
                  <ShopWaveLogo className="h-8 w-auto" />
                </Link>
                <MainNav isMobileMenu={true} onLinkClick={closeMobileMenu} /> {/* Pass props */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
