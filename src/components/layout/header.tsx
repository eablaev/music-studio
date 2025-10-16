
'use client';

import { Button } from '@/components/ui/button';
import Logo from '@/components/logo';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-auto w-full items-center justify-between px-4 sm:px-6 lg:px-8 flex-col sm:flex-row gap-6 sm:gap-0 py-3 sm:py-0">
        
        {/* Responsive logo wrapper */}
        <div className="w-24 sm:w-36">
          <Logo />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Nav hidden on mobile */}
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            <Link href="/#about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link href="/#curriculum" className="transition-colors hover:text-foreground/80 text-foreground/60">Curriculum</Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
          
          {/* CTA stays visible */}
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
