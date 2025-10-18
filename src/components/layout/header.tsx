
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-auto w-full items-center justify-between px-4 sm:px-6 lg:px-8  sm:flex-row gap-6 sm:gap-0 py-0 sm:py-0">
        
        {/* Responsive logo wrapper */}
        <div className="w-24 sm:w-36">
          <Logo />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Nav hidden on mobile */}
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
            <Link 
                href="/#about" 
                className="relative text-foreground/70 hover:text-foreground transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
                About
            </Link>

            <Link 
                href="/#curriculum" 
                className="relative text-foreground/70 hover:text-foreground transition-colors duration-200 px-4 border-l border-r border-foreground/20 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
                Curriculum
            </Link>

            <Link 
                href="/#contact" 
                className="relative text-foreground/70 hover:text-foreground transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
                Contact
            </Link>
        </nav>

          
          {/* CTA stays visible */}
         <Button asChild className="px-4 py-2 text-sm   border-2 border-primary/40 font-medium  uppercase tracking-wide bg-transparent text-primary transition-all duration-200 hover:text-white/80 hover:scale-105">
  <Link href="#contact">Get in Touch</Link>
</Button>

        </div>
      </div>
    </header>
  );
}
