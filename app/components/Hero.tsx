import React from 'react';
import { Button } from "./ui/button";
import { Rocket } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h1 className="text-4xl font-extrabold text-foreground sm:text-5xl leading-tight">
          Turn expos into your #1 sales channel
        </h1>
        <h2 className="mt-4 text-2xl font-extrabold text-foreground">
          Forget CRM chaos. Forget missed leads. Just results, on autopilot.
        </h2>
        <div className="mt-10 flex flex-col items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold"
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
          >
            Let's map out your next expo <Rocket className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            (no pressure, just insights)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
