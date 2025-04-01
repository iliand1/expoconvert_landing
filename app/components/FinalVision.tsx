import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CheckCircle2 } from 'lucide-react';

const FinalVision: React.FC = () => {
  const benefits = [
    {
      title: "Meetings lined up before you land",
      description: "No more wandering the expo hoping to bump into the right people."
    },
    {
      title: "Leads captured, structured, and prioritized",
      description: "Every conversation turns into a real opportunity."
    },
    {
      title: "Your team focused on selling, not admin",
      description: "A system that runs in the background, keeping deals moving."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Card className="card">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center">What Your Next Expo Could Look Like</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <CheckCircle2 className="w-full h-full text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">{benefit.title}</span>
                    <span className="text-muted-foreground">{benefit.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

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

export default FinalVision; 