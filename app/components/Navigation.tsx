import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "./ui/button";
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Increased offset to account for sticky header and some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleMobileMenuLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    scrollToSection(e, sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuButtonClick = () => {
    setIsMobileMenuOpen(false);
    window.open('https://calendly.com/alxndalxnd/40min', '_blank');
  };

  return (
    <nav className={`${isScrolled ? 'bg-[hsl(var(--background))]/90 shadow-md' : 'bg-[hsl(var(--background))]'} sticky top-0 z-40 transition-all duration-300`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center mr-4">
            <Image src="/Logo BW.jpg" alt="ExpoConvert - Expo Lead Management and Sales Automation Platform" width={32} height={32} className="mr-2" />
            <span className="text-lg font-bold text-[hsl(var(--foreground))]">ExpoConvert</span>
          </Link>
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/#why-us"
              onClick={(e) => scrollToSection(e, 'why-us')}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors px-3 py-2"
            >
              Why Us
            </Link>
            <Link
              href="/#how-it-works"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors px-3 py-2"
            >
              How It Works
            </Link>
            <Link
              href="/#secondary-content"
              onClick={(e) => scrollToSection(e, 'secondary-content')}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors px-3 py-2"
            >
              Vision
            </Link>
            <Link
              href="/#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors px-3 py-2"
            >
              FAQ
            </Link>
          </div>
          <div className="hidden md:block ml-4">
            <Button
              variant="turquoise"
              size="sm"
              className="text-base px-6 py-2"
              onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
            >
              Map Out Your Next Expo
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[hsl(var(--primary))] transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-[hsl(var(--background))] shadow-lg z-50" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/#why-us"
              onClick={(e) => handleMobileMenuLinkClick(e, 'why-us')}
              className="block text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/#how-it-works"
              onClick={(e) => handleMobileMenuLinkClick(e, 'how-it-works')}
              className="block text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/#secondary-content"
              onClick={(e) => handleMobileMenuLinkClick(e, 'secondary-content')}
              className="block text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Vision
            </Link>
            <Link
              href="/#faq"
              onClick={(e) => handleMobileMenuLinkClick(e, 'faq')}
              className="block text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              FAQ
            </Link>
          </div>
          <div className="px-5 py-3">
            <Button
              variant="turquoise"
              className="w-full text-lg py-3"
              onClick={handleMobileMenuButtonClick}
            >
              Map Out Your Next Expo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
