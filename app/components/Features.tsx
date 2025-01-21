import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Briefcase, Zap, Users, BarChart, Sparkles, Package } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <Package className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Your B2B Lead Generation Arsenal</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">Powerful tools to supercharge your outreach</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              title: "Comprehensive Setup Guide",
              icon: <Briefcase className="w-8 h-8 text-primary-foreground mb-4" />,
              features: [
                "Step-by-Step Instructions: Detailed guide to set up your outreach architecture.",
                "Profile Optimization Strategies: Enhance your LinkedIn profile for maximum impact.",
              ],
              benefit: <p className="text-primary-foreground font-semibold mt-4 flex items-center"><Sparkles className="w-5 h-5 mr-2" /> Attract quality leads instantly</p>,
            },
            {
              title: "Customized Automation Tools",
              icon: <Zap className="w-8 h-8 text-primary-foreground mb-4" />,
              features: [
                "LinkedIn Automation Integration: Tools like Linked Helper pre-configured for safe use.",
                "CRM Integration: Seamless export of leads to your preferred CRM.",
              ],
              benefit: <p className="text-primary-foreground font-semibold mt-4 flex items-center"><Sparkles className="w-5 h-5 mr-2" /> Streamline lead management</p>,
            },
            {
              title: "Expert Training & Support",
              icon: <Users className="w-8 h-8 text-primary-foreground mb-4" />,
              features: [
                "Live Workshops: Interactive sessions to train your team.",
                "6 Months Priority Support: Ongoing assistance when you need it.",
              ],
              benefit: <p className="text-primary-foreground font-semibold mt-4 flex items-center"><Sparkles className="w-5 h-5 mr-2" /> Ensure team success</p>,
            },
            {
              title: "Exclusive Resources & Templates",
              icon: <BarChart className="w-8 h-8 text-primary-foreground mb-4" />,
              features: [
                "Messaging Sequences: Proven scripts for connection requests and follow-ups.",
                "Analytics Dashboard: Track your KPIs in real-time.",
              ],
              benefit: <p className="text-primary-foreground font-semibold mt-4 flex items-center"><Sparkles className="w-5 h-5 mr-2" /> Optimize with data insights</p>,
            }
          ].map((feature, index) => (
            <Card key={index} className="card">
              <CardHeader>
                <div className="flex justify-center">{feature.icon}</div>
                <CardTitle className="card-title text-2xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="card-content">{item}</li>
                  ))}
                </ul>
                {feature.benefit}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;