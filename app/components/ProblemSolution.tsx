import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Rocket, Check, X } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">What most companies get</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          <Card className="card hover:border-red-500 hover:shadow-red-500/10">
            <CardHeader>
              <CardTitle className="card-title">The Old Way</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Burn cash, not leads (but do it anyway)</span>
                    <span className="text-muted-foreground">Pour $15K-$75K into an expo only to play the world's most expensive business card collection game—poor ROI tracking, lengthy lead qualification, just blind hope.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">The post-event grind</span>
                    <span className="text-muted-foreground">Watch your sales team lose 50+ hours of their lives to mind-numbing data entry and endless research instead of selling to hot prospects.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Cold leads, colder follow-ups</span>
                    <span className="text-muted-foreground">Without a system, hot prospects cool down fast, and high-value conversations get buried in the chaos, never to be revisited.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card hover:border-green-500 hover:shadow-green-500/10">
            <CardHeader>
              <CardTitle className="card-title">With XPOIQ</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">ROI you can see (and celebrate)</span>
                    <span className="text-muted-foreground">Track every dollar spent and every lead gained to know exactly which conversations drive your biggest wins. No guesswork, just results you can measure.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Salespeople doing what they're paid for</span>
                    <span className="text-muted-foreground">No more drowning in business cards or researching accounts—your team focuses on selling, not admin work.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <Check className="w-full h-full text-green-500" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-semibold">Squeeze every drop of value</span>
                    <span className="text-muted-foreground">Our systems and automations ensure you extract maximum results—every lead, every conversation, and every opportunity accounted for.</span>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold"
            onClick={() => window.open('https://calendly.com/denis_burkatksiy/30min', '_blank')}
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

export default ProblemSolution; 