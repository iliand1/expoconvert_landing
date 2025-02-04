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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${isScrolled ? 'bg-[#0E0E13]/90 shadow-md' : 'bg-[#0E0E13]'} sticky top-0 z-40 transition-all duration-300`}>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center h-16">
          <Link href="/" className="flex items-center mr-8">
            <Image src="/expoiq_logo.jpg" alt="XPOIQ - Expo Lead Management and Sales Automation Platform" width={32} height={32} className="mr-2" />
            <span className="text-lg font-bold text-white">XPOIQ</span>
          </Link>
          <div className="hidden md:flex flex-grow items-center space-x-2 overflow-x-auto">
            <Link 
              href="/#solution" 
              onClick={(e) => scrollToSection(e, 'solution')}
              className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2"
            >
              Solution
            </Link>
            <Link 
              href="/#process" 
              onClick={(e) => scrollToSection(e, 'process')}
              className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2"
            >
              Process
            </Link>
            <Link 
              href="/#vision" 
              onClick={(e) => scrollToSection(e, 'vision')}
              className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2"
            >
              Vision
            </Link>
            <Link 
              href="/#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className="text-sm text-gray-300 hover:text-primary-foreground transition-colors px-3 py-2"
            >
              FAQ
            </Link>
          </div>
          <div className="flex-grow md:flex-grow-0"></div>
          <Button 
            className="text-sm ml-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold" 
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
          >
            Map Out Your Next Expo <Rocket className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
