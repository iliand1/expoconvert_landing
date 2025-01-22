import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from "./ui/button";
import { Rocket } from 'lucide-react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${isScrolled ? 'bg-[#0E0E13]/90 shadow-md' : 'bg-[#0E0E13]'} sticky top-0 z-40 transition-all duration-300`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-16">
          <Link href="/" className="flex items-center mr-8">
            <Image src="/expoiq_logo.jpg" alt="XPOIQ Logo" width={32} height={32} className="mr-2" />
            <span className="text-lg font-bold text-white">XPOIQ</span>
          </Link>
          <div className="hidden md:flex flex-grow items-center space-x-2 overflow-x-auto">
            <Link href="/#pricing" className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2">
              Pricing
            </Link>
            <Link href="/#testimonials" className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2">
              Wall of Love
            </Link>
            <Link href="/#features" className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2">
              Features
            </Link>
            <Link href="/#faq" className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2">
              FAQ
            </Link>
            <Link href="/linkedin-suitability-calculator" className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2">
              Calc
            </Link>
            {/* <Link href="/#challenges" className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2">
              Challenges
            </Link> */}
          </div>
          <div className="flex-grow md:flex-grow-0"></div>
          <Button 
            className="text-sm ml-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold" 
            onClick={() => window.open('https://calendly.com/denis_burkatksiy/30min', '_blank')}
          >
            Map Out Your Next Expo <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
