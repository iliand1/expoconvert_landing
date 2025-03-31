import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Rocket, Check, X } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">Why Most Companies Struggle to Turn Expos Into Sales</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          <Card className="card hover:border-red-500 hover:shadow-red-500/10">
            <CardHeader>
              <CardTitle className="card-title">What happens</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Big investment, unclear returns</span>
                    <span className="text-muted-foreground">Without a system, expos feel like a gamble.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Sales teams drowning in admin</span>
                    <span className="text-muted-foreground">Manually tracking contacts and leads wastes time and energy.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Follow-ups that fizzle out</span>
                    <span className="text-muted-foreground">Hot leads go cold fast without a structured post-event process.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card hover:border-green-500 hover:shadow-green-500/10">
            <CardHeader>
              <CardTitle className="card-title">How We Fix That</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Book meetings with key prospects before the event</span>
                    <span className="text-muted-foreground">So you start strong with real opportunities.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Instantly capture and qualify leads</span>
                    <span className="text-muted-foreground">So every conversation turns into a real sales opportunity.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Automated follow-ups that keep deals moving</span>
                    <span className="text-muted-foreground">So leads don't slip through the cracks.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <Button 
            className="btn-primary mt-8" 
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
          >
            👉 Book a Free Expo Strategy Call <Rocket className="ml-2 h-4 w-4" />
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            So Your Next Event Pays for Itself
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution; 