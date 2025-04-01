'use client';

import React, { Suspense, lazy } from 'react';
import { Separator } from './components/ui/separator';

// Import critical above-the-fold components normally
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AuthorityBlock from './components/AuthorityBlock';

// Group related components for better code splitting
const MainContent = lazy(() => Promise.all([
  import('./components/ProblemSolution'),
  import('./components/ProcessSteps')
]).then(([problemSolution, processSteps]) => {
  const CombinedComponent = () => (
    <>
      <problemSolution.default />
      <Separator className="my-8" />
      <processSteps.default />
    </>
  );
  return { default: CombinedComponent };
}));

const SecondaryContent = lazy(() => Promise.all([
  import('./components/FinalVision'),
  import('./components/HesitantSection')
]).then(([finalVision, hesitantSection]) => {
  const CombinedComponent = () => (
    <>
      <finalVision.default />
      <Separator className="my-8" />
      <hesitantSection.default />
    </>
  );
  return { default: CombinedComponent };
}));

const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

// Skeleton loaders that match component dimensions
const MainContentLoader = () => (
  <div className="space-y-8 animate-pulse">
    <div className="h-[400px] bg-[hsl(var(--card-bg))] rounded-lg" />
    <div className="h-[600px] bg-[hsl(var(--card-bg))] rounded-lg" />
  </div>
);

const SecondaryContentLoader = () => (
  <div className="space-y-8 animate-pulse">
    <div className="h-[300px] bg-[hsl(var(--card-bg))] rounded-lg" />
    <div className="h-[400px] bg-[hsl(var(--card-bg))] rounded-lg" />
  </div>
);

const FAQLoader = () => (
  <div className="h-[400px] bg-[hsl(var(--card-bg))] rounded-lg animate-pulse" />
);

const FooterLoader = () => (
  <div className="h-[200px] bg-[hsl(var(--card-bg))] rounded-lg animate-pulse" />
);

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <div id="authority">
        <AuthorityBlock />
      </div>
      <Separator className="my-8" />
      
      <div id="main-content">
        <Suspense fallback={<MainContentLoader />}>
          <MainContent />
        </Suspense>
      </div>
      
      <div id="secondary-content">
        <Suspense fallback={<SecondaryContentLoader />}>
          <SecondaryContent />
        </Suspense>
      </div>
      
      <Separator className="my-8" />
      <div id="faq">
        <Suspense fallback={<FAQLoader />}>
          <FAQ />
        </Suspense>
      </div>
      
      <Suspense fallback={<FooterLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
}