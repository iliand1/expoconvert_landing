import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from "./ui/card";
import { Briefcase, Zap, Users, Rocket, Tag} from 'lucide-react';

const Pricing: React.FC = () => { 
  return (
    <div className="py-8 sm:py-12 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-6 sm:mb-8">
          <Tag className="w-8 h-8 sm:w-10 sm:h-10 text-foreground mb-2" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">One-Time Investment, Lifetime Value</h2>
        </div>
        <p className="text-base sm:text-lg lg:text-xl text-primary-foreground text-center mb-6 sm:mb-8 lg:mb-12">All-inclusive package for your in-house LinkedIn machine</p>
        <div className="max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
          <Card className="card flex flex-col p-4 sm:p-6">
            <CardHeader>
              <CardDescription className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg flex flex-col items-center">
                
                <span className="text-[2.75rem] sm:text-5xl lg:text-6xl">$2,700</span>
              </CardDescription>
              <p className="text-[hsl(var(--highlight-text))] font-semibold mt-2 text-sm sm:text-base text-center">One-time payment only</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-none space-y-3 sm:space-y-4">
                {[
                  { text: "LinkedIn outreach infrastructure", icon: Briefcase },
                  { text: "Advanced automation tools", icon: Zap },
                  { text: "Personalized strategy creation", icon: Users },
                  { text: "First campaigns launch & optimization", icon: Rocket }
                ].map((feature, i) => (
                  <li key={i} className="card-content flex items-center text-sm sm:text-base">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground mr-3 flex-shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-center">
              <Button 
                className="text-sm sm:text-base lg:text-lg py-3 sm:py-4 px-3 sm:px-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold mb-4 w-full justify-center" 
                onClick={() => window.open('https://calendly.com/denis_burkatksiy/30min', '_blank')}
              >
                <span className="whitespace-normal text-center">Book Discovery Session</span>
                <Rocket className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              </Button>
              <p className="text-primary-foreground text-xs sm:text-sm text-center">
                One-time fee for setup, strategy, and 1st iteration. Minimal ongoing costs for infrastructure.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
