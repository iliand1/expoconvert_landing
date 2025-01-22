import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Rocket, CheckCircle2 } from 'lucide-react';

const FinalVision: React.FC = () => {
  const benefits = [
    {
      title: "Walk in with purpose",
      description: "Key meetings prebooked with high-value prospects, ensuring you hit the ground running."
    },
    {
      title: "Maximize every opportunity",
      description: "A system that captures and organizes total lead volume, leaving no potential deal behind."
    },
    {
      title: "Smiles all around",
      description: "A seamless experience that keeps your team productive, your prospects impressed, and everyone happy."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <Card className="card">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold text-center">Your next expo with us</CardTitle>
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
    </section>
  );
};

export default FinalVision; 