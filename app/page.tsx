'use client';

import React, { Suspense, lazy } from 'react';
import { Separator } from './components/ui/separator';

// Import critical above-the-fold components normally
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AuthorityBlock from './components/AuthorityBlock';

// Lazy load below-the-fold components
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const ProcessSteps = lazy(() => import('./components/ProcessSteps'));
const FinalVision = lazy(() => import('./components/FinalVision'));
const HesitantSection = lazy(() => import('./components/HesitantSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => <div className="min-h-[200px] flex items-center justify-center">Loading...</div>;

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <AuthorityBlock />
      <Separator className="my-8" />
      <div id="solution">
        <Suspense fallback={<LoadingFallback />}>
          <ProblemSolution />
        </Suspense>
      </div>
      <Separator className="my-8" />
      <div id="process">
        <Suspense fallback={<LoadingFallback />}>
          <ProcessSteps />
        </Suspense>
      </div>
      <Separator className="my-8" />
      <div id="vision">
        <Suspense fallback={<LoadingFallback />}>
          <FinalVision />
        </Suspense>
      </div>
      <Separator className="my-8" />
      <Suspense fallback={<LoadingFallback />}>
        <HesitantSection />
      </Suspense>
      <Separator className="my-8" />
      <div id="faq">
        <Suspense fallback={<LoadingFallback />}>
          <FAQ />
        </Suspense>
      </div>
      <Separator className="my-8" />
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}