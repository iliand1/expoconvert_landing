import React from 'react';
import { Button } from "./ui/button";
import { Rocket } from 'lucide-react';

const HesitantSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <h1 className="text-4xl font-extrabold mb-4">
              Worried it won't work for you?
            </h1>
            <h2 className="text-xl text-muted-foreground mb-8">
              That's okay! Let's find out together—no pressure, just actionable insights.
            </h2>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold"
              onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
            >
              Let's map out your next expo <Rocket className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative aspect-video bg-muted rounded-lg flex items-center justify-center">
            {/* Placeholder for actual image */}
            <span className="text-4xl">🖼️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HesitantSection; 