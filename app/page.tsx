'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Separator } from './components/ui/separator';

// Import all components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Comparison from './components/comparison/Comparison';
import StaticComparisonGraph from './components/cost_per_lead_graph/StaticComparisonGraph';
import Roadmap from './components/Roadmap';
import WallOfLove from './components/WallOfLove';
import InvestOnce from './components/InvestOnce';
import AboutUs from './components/AboutUs';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ROICalculator from './components/ROICalculator';
import FeaturesPipeline from './components/FeaturesPipeline';
import AuthorityBlock from './components/AuthorityBlock';
import ProblemSolution from './components/ProblemSolution';
import ProcessSteps from './components/ProcessSteps';
import FinalVision from './components/FinalVision';
import HesitantSection from './components/HesitantSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <AuthorityBlock />
      <Separator className="my-8" />
      <ProblemSolution />
      <Separator className="my-8" />
      <ProcessSteps />
      <Separator className="my-8" />
      <FinalVision />
      <Separator className="my-8" />
      <HesitantSection />
      <Separator className="my-8" />
      <div id="faq">
        <FAQ />
      </div>
      <Separator className="my-8" />
      <Comparison />
      <Separator className="my-8" />
      <StaticComparisonGraph />
      <Separator className="my-8" />
      <ROICalculator />
      <div className="flex justify-center py-12">
        <ArrowDown className="text-primary w-12 h-12 animate-bounce" />
      </div>
      <Roadmap />      
      <Separator className="my-8" />
      <div id="testimonials">
        <WallOfLove />
      </div>
      <Separator className="my-8" />
      <div id="pricing">
        <Pricing />
      </div>
      <Separator className="my-8" />
      <div id="features">
        <FeaturesPipeline />
      </div>
      <Separator className="my-8" />
      <AboutUs />
      <Separator className="my-8" />
      <InvestOnce />
      <Separator className="my-8" />
      <Footer />
    </div>
  );
}