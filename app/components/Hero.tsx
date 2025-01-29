import React from 'react';
import { Button } from "./ui/button";
import { Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-40 pb-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-5xl font-extrabold text-foreground sm:text-6xl lg:text-7xl leading-tight">
          Turn expos into your #1 sales channel
        </h1>
        <h2 className="mt-8 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-muted-foreground">
          Forget CRM chaos. Forget missed leads. Just results, on autopilot.
        </h2>
        <div className="mt-24 flex flex-col items-center">
          <Button 
            size="lg" 
            className="text-xl px-10 py-6 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold"
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
          >
            Let's map out your next expo <Rocket className="ml-3 h-5 w-5" />
          </Button>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            (no pressure, just insights)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
