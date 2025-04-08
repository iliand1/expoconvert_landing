import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, X } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
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
                    <span className="font-semibold">Leads Don’t Enter a Sales Process</span>
                    <span className="text-muted-foreground">70% of expo contacts never make it into structured follow-up — they’re lost in notes, inboxes, or CRMs.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Conversations Go Cold Fast</span>
                    <span className="text-muted-foreground">Only 6% of exhibitors are confident in converting leads. Most forget what was even discussed.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">You Risk Losing 6–7 Figure Deals</span>
                    <span className="text-muted-foreground">One missed follow-up in B2B can cost $100k to $10M+ — and it happens more often than teams admit.</span>
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
                    <span className="font-semibold">Pre-Book Sales Meetings Before Day 1</span>
                    <span className="text-muted-foreground">We lock in qualified appointments ahead of the event, so you show up with pipeline — not just hope.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Capture + Sync Every Lead Automatically</span>
                    <span className="text-muted-foreground">Photos, voice notes, and CRM integrations replace messy notes and post-show admin.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Follow Up in Hours, Not Weeks</span>
                    <span className="text-muted-foreground">Launch personalized sequences within 24 hours and recover 32+ hours of post-event busywork.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
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

export default ProblemSolution; 
