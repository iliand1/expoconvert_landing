import React from 'react';
import { Button } from "./ui/button";
import { Rocket, ExternalLink } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl leading-tight">
          Launch Your Scalable High-ROI LinkedIn B2B Channel in 5 Days
        </h1>
        <p className="mt-4 text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
          Agency-level results. In-house control. One-time investment.
        </p>
        <p className="mt-6 text-lg text-foreground max-w-3xl mx-auto">
          Get a complete LinkedIn outreach system and expertise for your team to autonomously generate quality B2B leads.
        </p>
        <div className="mt-10 flex flex-col items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold"
            onClick={() => window.open('https://calendly.com/denis_burkatksiy/30min', '_blank')}
          >
            Book Discovery Session <Rocket className="ml-2 h-4 w-4" />
          </Button>
          
        </div>
        <p className="mt-6 text-base text-muted-foreground">
          LinkedIn dominates B2B with <span className="font-bold text-primary-foreground">80% of social leads</span> outperforming all other platforms
          <a 
            href="https://business.linkedin.com/marketing-solutions/blog/linkedin-b2b-marketing/2017/10-surprising-stats-you-didnt-know-about-marketing-on-linkedin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-1 inline-flex items-center text-primary-foreground hover:text-primary-foreground/80"
          >
            <ExternalLink className="w-3 h-3 ml-1" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
