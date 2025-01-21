import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Slider } from "@/app/components/ui/slider";
import { DollarSign, Calendar, TrendingUp, Building, Briefcase, PiggyBank, ArrowRight, Calculator, ChevronDown, ChevronUp } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [monthlyBudget, setMonthlyBudget] = useState(3000);
  const [months, setMonths] = useState(3);
  const [showAssumptions, setShowAssumptions] = useState(false);

  const agencyCost = monthlyBudget * months;
  
  // Calculate in-house cost based on 4 profiles
  const inHouseCost = 2999 + // One-time setup fee (always included)
                      (4 * 50 * months) + // Link Helper cost
                      (50 * months) + // Server cost
                      (100 * months) + // Sales Navigator cost
                      ((4 - 2) * 100 * months); // Profile rental cost for 2 additional profiles
  
  const savings = agencyCost - inHouseCost;

  const [animatedSavings, setAnimatedSavings] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1000; // Animation duration in milliseconds

    const animateSavings = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setAnimatedSavings(Math.floor(savings * progress));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateSavings);
      }
    };

    animationRef.current = requestAnimationFrame(animateSavings);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [savings]);

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Cost Efficiency Calculator</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">See how much you can save with Tech Noir Global</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card">
            <CardHeader>
              <CardTitle className="card-title text-2xl">Customize Your Scenario</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-[hsl(var(--card-content))] mb-2 block text-left">
                    Monthly Agency Fee: ${monthlyBudget}
                  </label>
                  <div className="flex items-center">
                    <DollarSign className="w-5 h-5 mr-3 text-primary-foreground flex-shrink-0" />
                    <Slider
                      value={[monthlyBudget]}
                      onValueChange={(value) => setMonthlyBudget(value[0])}
                      min={2000}
                      max={15000}
                      step={100}
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-[hsl(var(--card-content))] mb-2 block text-left">
                    Time Period: {months} months
                  </label>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-primary-foreground flex-shrink-0" />
                    <Slider
                      value={[months]}
                      onValueChange={(value) => setMonths(value[0])}
                      min={3}
                      max={12}
                      step={1}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader>
              <CardTitle className="card-title text-2xl">Your Potential Savings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--card-content))] flex items-center">
                    <Building className="w-4 h-4 mr-2 text-red-400" />
                    Traditional Agency Cost:
                  </span>
                  <span className="text-red-400 font-bold">${agencyCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--card-content))] flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-green-400" />
                    In-House Cost:
                  </span>
                  <span className="text-green-400 font-bold">${inHouseCost.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xl">
                  <span className="text-[hsl(var(--card-title))] flex items-center">
                    <PiggyBank className="w-5 h-5 mr-2 text-primary-foreground" />
                    Your Total Savings:
                  </span>
                  <span className="text-primary-foreground font-bold">${savings.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <button
            onClick={() => setShowAssumptions(!showAssumptions)}
            className="flex items-center text-sm text-primary-foreground hover:text-primary transition-colors"
          >
            {showAssumptions ? <ChevronUp className="w-4 h-4 mr-2" /> : <ChevronDown className="w-4 h-4 mr-2" />}
            {showAssumptions ? "Hide Assumptions" : "Show Assumptions"}
          </button>
        </div>

        {showAssumptions && (
          <Card className="mt-4 card">
            <CardContent className="pt-6"> {/* Added padding-top */}
              <ul className="space-y-2 text-sm text-[hsl(var(--card-content))]">
                <li>• In-house costs: $50/profile/month (tool), $50/month (server), $100/month (Sales Navigator)</li>
                <li>• Assumes ownership of 2 profiles; additional 2 profiles rented at $100/profile/month</li>
                <li>• In-house work is performed by the existing team; no additional hiring costs included</li>
                <li>• One-time setup fee of $2,999</li>
              </ul>
            </CardContent>
          </Card>
        )}

        <div className="mt-12 text-center">
          <p className="text-3xl font-bold text-foreground mb-8">
            Save up to <span className="text-primary-foreground inline-block min-w-[120px]">${animatedSavings.toLocaleString()}</span> in {months} months!
          </p>
          <div className="h-[88px]"> {/* Fixed height container */}
            <Link 
              href="/linkedin-suitability-calculator" 
              className="inline-flex items-center justify-center text-lg font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-all duration-200 rounded-lg px-6 py-3 border border-primary/20 hover:border-primary/30"
            >
              <Calculator className="w-6 h-6 mr-3" />
              <span>Use our Advanced Calculator</span>
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Find out if LinkedIn outreach is right for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;