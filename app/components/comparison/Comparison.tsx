import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Repeat, Check, X } from 'lucide-react';
import { comparisonData } from './comparisonData';
import { ComparisonTable, MobileComparisonCards } from './ComparisonComponents';

export function Comparison() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <Repeat className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">The Old Way vs The TNG Way</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">See how our solution stacks up against traditional agencies</p>
        
        <ComparisonCards />
        
        <div className="mt-16 mb-16">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8 text-center">Why Choose Us?</h3>
          <div className="hidden md:block overflow-hidden">
            <ComparisonTable data={comparisonData} />
          </div>

          <div className="md:hidden space-y-8">
            <MobileComparisonCards data={comparisonData} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center mb-8">
      <ComparisonCard
        title="Traditional Agencies"
        items={[
          "High monthly fees",
          "Limited control over processes",
          "Dependency on external team"
        ]}
        colorClass="hover:border-red-500 hover:shadow-red-500/10"
      />
      <ComparisonCard
        title="The TNG Way"
        items={[
          "One-time investment",
          "Full control and ownership",
          "In-house expertise"
        ]}
        colorClass="hover:border-green-500 hover:shadow-green-500/10"
      />
    </div>
  );
}

function ComparisonCard({ title, items, colorClass }: { title: string; items: string[]; colorClass: string }) {
  return (
    <Card className={`card ${colorClass}`}>
      <CardHeader>
        <CardTitle className="card-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start card-content">
              <div className="flex-shrink-0 w-8 h-8 mt-0.5">
                {title === "Traditional Agencies" ? (
                  <X className="w-full h-full text-red-500" strokeWidth={3} />
                ) : (
                  <Check className="w-full h-full text-green-500" strokeWidth={3} />
                )}
              </div>
              <span className="ml-3 flex-grow">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export default Comparison;