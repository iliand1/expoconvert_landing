import React from 'react';
import { Button } from "./ui/button";

const Hero: React.FC = () => { 
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-foreground sm:text-5xl leading-tight">
          Turn Every Expo into Your #1 Sales Channel With a Proven System Built for Sales Leaders
        </h2>
        <p className="mt-8 text-xl text-muted-foreground">
          Most companies spend <strong className="text-foreground">$15k - $75k per expo</strong> repeatedly and leave with nothing but a pile of business cards. We build you a repeatable, reliable system to ensure consistent ROI and lasting sales impact - helping your team close more deals with way less effort.
        </p>
        <div className="mt-24 flex flex-col items-center">
          <Button 
            size="lg"
            variant="turquoise"
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
          >
            👉 Book a Free Expo Strategy Call
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            So Your Next Event Pays for Itself
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
