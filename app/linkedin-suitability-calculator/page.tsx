'use client';

import React from 'react';
import LinkedInSuitabilityCalculator from '@/app/components/suitable_calc/LinkedInSuitabilityCalculator';
import Navigation from '@/app/components/Navigation';

const LinkedInSuitabilityCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-8 pb-20"> {/* Changed from py-20 to pt-8 pb-20 */}
        <LinkedInSuitabilityCalculator />
      </div>
    </div>
  );
};

export default LinkedInSuitabilityCalculatorPage;