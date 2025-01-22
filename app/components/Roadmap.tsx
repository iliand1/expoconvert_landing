import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Coffee, FileSignature, Clock, Users, Lightbulb, UserCheck, Rocket, GraduationCap, Map } from 'lucide-react';
import Link from 'next/link';

const roadmapSteps = [
  { icon: Coffee, title: "Discovery Session", description: "Let's chat about your goals over a virtual coffee.", timing: "Day 1", link: "https://calendly.com/alxndalxnd/40min" },
  { icon: FileSignature, title: "Sign Contract", description: "Quick paperwork to kick things off.", timing: "Day 2-3" },
  { icon: Clock, title: "5 Days of Setup", description: "Prepare your outreach infrastructure.", timing: "Week 1" },
  { icon: Users, title: "LinkedIn Profile Boost", description: "Warm up your LinkedIn presence.", timing: "Week 1-2" },
  { icon: Lightbulb, title: "Creating Hypotheses", description: "Develop first iterations for outreach.", timing: "Week 2" },
  { icon: UserCheck, title: "Leads Collection & Scripting", description: "Gather initial leads and craft outreach scripts.", timing: "Week 2-3" },
  { icon: Rocket, title: "First Leads", description: "Expect results within 2 to 3 weeks.", timing: "Week 3-4" },
  { icon: GraduationCap, title: "Independence", description: "Run next hypotheses independently within 2 months.", timing: "Month 2" },
];

const Roadmap: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-12">
          <Map className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Roadmap to Your First Leads</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapSteps.map((step, index) => (
            <div key={index} className={`relative ${index === 0 ? 'animate-border-shine' : ''}`}>
              <Card className={`card relative flex flex-col h-full ${step.link ? 'cursor-pointer hover:shadow-lg transition-shadow duration-300' : ''}`}>
                {step.link ? (
                  <Link href={step.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Schedule ${step.title}`} />
                ) : null}
                <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center roadmap-number">
                  <span>{index + 1}</span>
                </div>
                <CardHeader>
                  <div className="flex justify-center mt-4">
                    <step.icon className={`card-icon ${index === 0 ? 'animate-shake' : ''}`} />
                  </div>
                  <CardTitle className="card-title">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <p className="card-content">{step.description}</p>
                  <p className="text-sm font-semibold text-foreground mt-4">{step.timing}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;