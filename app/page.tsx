'use client';

import React from 'react';
import { Separator } from './components/ui/separator';

// Import only used components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AuthorityBlock from './components/AuthorityBlock';
import ProblemSolution from './components/ProblemSolution';
import ProcessSteps from './components/ProcessSteps';
import FinalVision from './components/FinalVision';
import HesitantSection from './components/HesitantSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}