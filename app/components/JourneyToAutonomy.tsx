import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Timer, DollarSign, Sliders, Compass } from 'lucide-react';

const JourneyToAutonomy: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <Compass className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Your Journey to Outreach Autonomy</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">Break free from agency dependency and take control</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Timer />,
              title: "Rapid Deployment",
              description: "Set up your outreach system in under 48 hours."
            },
            {
              icon: <DollarSign />,
              title: "Cost Efficiency",
              description: "One-time investment with lifetime benefits—no more monthly fees."
            },
            {
              icon: <Sliders />,
              title: "Full Control & Scalability",
              description: "Customize your messaging and scale your campaigns effortlessly."
            }
          ].map((item, index) => (
            <Card key={index} className="card">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="card-icon">{item.icon}</div>
                </div>
                <CardTitle className="card-title">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="card-content">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JourneyToAutonomy;
