import React from 'react';
import { Button } from "./ui/button";
import { DollarSign, Users, TrendingUp } from 'lucide-react';

const InvestOnce: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
          Invest Once, <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text">Benefit Forever</span>
        </h2>
        <ul className="text-foreground text-base mb-8 space-y-4 inline-block text-left mx-auto">
          <li className="flex items-center">
            <DollarSign className="mr-3 h-6 w-6 text-primary-foreground flex-shrink-0" />
            <span>Save $33,000+ in the first year alone</span>
          </li>
          <li className="flex items-center">
            <Users className="mr-3 h-6 w-6 text-primary-foreground flex-shrink-0" />
            <span>Empower your team with in-house expertise</span>
          </li>
          <li className="flex items-center">
            <TrendingUp className="mr-3 h-6 w-6 text-primary-foreground flex-shrink-0" />
            <span>Achieve consistent and scalable results</span>
          </li>
        </ul>
        <div className="flex justify-center">
          <Button 
            size="lg"
            variant="turquoise"
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
          >
            Book Discovery Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestOnce;
