import React from 'react';
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react';

const WhyRiskFree: React.FC = () => {
  const benefits = [
    {
      title: "Clear ROI upfront",
      description: "Our strategy session demonstrates exactly how your expo budget translates into measurable revenue growth."
    },
    {
      title: "No contracts, no commitments",
      description: "Just a high-value strategy session."
    },
    {
      title: "Battle-tested approach",
      description: "Used by top B2B companies to turn expos into revenue drivers."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-12">Why This Is Risk-Free for You</h2>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center">
          <Button 
            size="lg"
            variant="turquoise"
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://zcal.co/sebastianhidalgo/strategy-session', '_blank')}
          >
            👉 Book a Free Expo Strategy Call
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            So Your Next Event Pays for Itself
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyRiskFree; 