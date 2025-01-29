'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 text-center">
        <div className="flex flex-col items-center space-y-6">
          <CheckCircle2 className="w-16 h-16 text-green-500 animate-bounce" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground">
            Thank you for booking a call with us!
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mt-4">
            We'll see you soon! Check your email for the calendar invite.
          </p>
        </div>
      </div>
    </div>
  );
} 