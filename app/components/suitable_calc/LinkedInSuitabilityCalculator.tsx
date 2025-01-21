'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Slider } from "@/app/components/ui/slider";
import { Input } from "@/app/components/ui/input";
import { Users, MessageCircle, ChevronUp, ChevronDown, UserPlus, MessageSquare, CalendarCheck, TrendingUp, ArrowRightIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
// import LinkedInSuitabilityChart from './LinkedInSuitabilityChart';
import LinkedInSuitabilityBarChart from './LinkedInSuitabilityBarChart';
import LTVInput from './LTVInput';
import { 
  calculateResults, 
  // isLinkedInSuitable,  
  PRESET_VALUES,
  calculateMonthlyResults,
  calculateChartData
} from './calculatorUtils';
import { renderPresetSwitches, renderParameterSlider, renderResultsContent } from './renderHelpers';
import { PresetType, TimePeriod, CalculatorResults } from './types';
import { cn } from "@/lib/utils";
import { useTheme } from 'next-themes';
import LinkedInSuitabilityBreakEvenPoint from './LinkedinSuitabilityBreakEvenPoint';

// Main Calculator Component
const LinkedInSuitabilityCalculator: React.FC = () => {
  // State Management
  const [ltv, setLtv] = useState(2000);
  const [connectionRate, setConnectionRate] = useState(PRESET_VALUES.conservative.connectionRate);
  const [responseRate, setResponseRate] = useState(PRESET_VALUES.conservative.responseRate);
  const [meetingRate, setMeetingRate] = useState(PRESET_VALUES.conservative.meetingRate);
  const [saleConversionRate, setSaleConversionRate] = useState(20);
  const [linkedInProfiles, setLinkedInProfiles] = useState(1);
  const [preset, setPreset] = useState<PresetType>('conservative');
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('3');
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [results, setResults] = useState<CalculatorResults>({
    costPerLead: 0,
    customerAcquisitionCost: 0,
    monthlyRevenue: 0,
    leadsGenerated: 0,
    salesMade: 0,
    monthlyProspects: 0,
    agencyCAC: { value: 0, color: 'text-gray-400' },
    inHouseCAC: { value: 0, color: 'text-gray-400' }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Recalculate results when inputs change
  useEffect(() => {
    const newResults = calculateMonthlyResults(
      linkedInProfiles,
      connectionRate,
      responseRate,
      meetingRate,
      saleConversionRate,
      ltv
    );
    setResults(newResults);
  }, [ltv, connectionRate, responseRate, meetingRate, saleConversionRate, linkedInProfiles]);

  // Event Handlers
  const handlePresetChange = (newPreset: PresetType) => {
    setPreset(newPreset);
    if (newPreset !== 'custom') {
      setConnectionRate(PRESET_VALUES[newPreset].connectionRate);
      setResponseRate(PRESET_VALUES[newPreset].responseRate);
      setMeetingRate(PRESET_VALUES[newPreset].meetingRate);
    }
  };

  const incrementProfiles = () => setLinkedInProfiles(prev => prev + 1);
  const decrementProfiles = () => setLinkedInProfiles(prev => Math.max(1, prev - 1));

  // Data Preparation
  const chartData = calculateChartData(linkedInProfiles, connectionRate, responseRate, meetingRate, saleConversionRate, ltv);
  // const calculatedResults = calculateResults(parseInt(timePeriod), linkedInProfiles, connectionRate, responseRate, meetingRate, saleConversionRate, ltv);

  // const isAgencySuitable = isLinkedInSuitable(calculatedResults.agencyCAC.value, ltv);
  // const isInHouseSuitable = isLinkedInSuitable(calculatedResults.inHouseCAC.value, ltv);

  // Updated recommendation logic
  // const getRecommendation = () => {
  //   const isShortTerm = parseInt(timePeriod) <= 2;
  //   const shortTermAdvice = isShortTerm
  //     ? "LinkedIn is a mid- to long-term instrument. Consider evaluating over at least 3 months for more accurate results. "
  //     : "";

  //   if (isShortTerm) {
  //     return shortTermAdvice;
  //   }

  //   if (isAgencySuitable && isInHouseSuitable) {
  //     return `${shortTermAdvice}LinkedIn outreach is suitable over a ${timePeriod}-month period. Consider our in-house solution for long-term cost-effectiveness.`;
  //   } else if (isAgencySuitable) {
  //     return `${shortTermAdvice}LinkedIn outreach via agency is viable for a ${timePeriod}-month campaign. In-house solution may be more cost-effective long-term.`;
  //   } else if (isInHouseSuitable) {
  //     return `${shortTermAdvice}LinkedIn outreach is suitable with our in-house solution over a ${timePeriod}-month period.`;
  //   } else {
  //     return `${shortTermAdvice}LinkedIn outreach may not be cost-effective for ${timePeriod} months.`;
  //   }
  // };

  // Only render the content when mounted
  if (!mounted) {
    return null; // or a loading placeholder
  }

  // Render Component
  return (
    <div className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">LinkedIn Suitability Calculator</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">Determine if LinkedIn outreach is right for your business</p>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Parameters Card */}
          <Card className="card">
            <CardHeader>
              <CardTitle className="card-title">Parameters</CardTitle>
            </CardHeader>
            <CardContent className="card-content space-y-6">
              {/* LTV Input */}
              <LTVInput ltv={ltv} setLtv={setLtv} />
              
              {/* Sale Conversion Rate Slider */}
              <div>
                <label className="text-sm font-medium text-card-foreground">
                  Sale Conversion Rate: {saleConversionRate}%
                </label>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground mr-2" />
                  <div className="w-full relative">
                    <Slider
                      value={[saleConversionRate]}
                      onValueChange={(value) => setSaleConversionRate(value[0])}
                      min={1}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    {/* Slider Marks */}
                    <div className="absolute top-6 left-0 right-0 flex justify-between text-xs text-card-foreground">
                      {[0, 25, 50, 75, 100].map((step) => (
                        <span
                          key={step}
                          className="relative"
                          style={{ left: step === 0 ? '-4px' : step === 100 ? '4px' : '0' }}
                        >
                          {step}%
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Add a smaller spacer div */}
              <div className="h-4"></div>

              {/* LinkedIn Profiles and Monthly Prospects */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end space-y-4 sm:space-y-0 sm:space-x-8">
                {/* LinkedIn Profiles Input */}
                <div className="w-full sm:w-auto">
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    LinkedIn Profiles
                  </label>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-foreground mr-2" />
                    <div className="w-24 relative">
                      <Input
                        type="number"
                        value={linkedInProfiles || ''}
                        onChange={(e) => {
                          const value = e.target.value;
                          setLinkedInProfiles(value === '' ? 0 : Math.max(1, parseInt(value, 10)));
                        }}
                        className="pl-2 pr-8 w-full text-center bg-card text-foreground [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        min="1"
                        max="99"
                      />
                      {/* Increment/Decrement Buttons */}
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col">
                        <button
                          onClick={incrementProfiles}
                          className="text-primary hover:text-primary-foreground focus:outline-none"
                        >
                          <ChevronUp size={16} />
                        </button>
                        <button
                          onClick={decrementProfiles}
                          className="text-primary hover:text-primary-foreground focus:outline-none"
                        >
                          <ChevronDown size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow Indicator - Hidden on mobile */}
                <div className="hidden sm:flex flex-grow items-center justify-center relative sm:-top-4">
                  <div className="w-16 h-0.5 bg-primary-foreground relative">
                    <ArrowRightIcon className="w-5 h-5 text-primary-foreground absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Monthly Prospects Display */}
                <div className="w-full sm:w-auto">
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Monthly Prospects
                  </label>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-primary-foreground mr-2" />
                    <div className="w-full sm:w-24 relative">
                      <Input
                        type="text"
                        value={results.monthlyProspects}
                        readOnly
                        className="w-full cursor-default bg-card text-foreground"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="border-t border-border my-4"></div>

              {/* Preset Switches */}
              <div className="w-full py-2">
                {renderPresetSwitches(preset, handlePresetChange)}
              </div>

              {/* Parameter Sliders */}
              {renderParameterSlider("Connection Rate", connectionRate, setConnectionRate, <UserPlus className="w-5 h-5 text-primary mr-2" />, setPreset)}
              {renderParameterSlider("Response Rate", responseRate, setResponseRate, <MessageSquare className="w-5 h-5 text-primary mr-2" />, setPreset)}
              {renderParameterSlider("Meeting Rate", meetingRate, setMeetingRate, <CalendarCheck className="w-5 h-5 text-primary mr-2" />, setPreset)}
              
              {/* Add padding after the last slider */}
              <div className="pt-6">
                {/* Disclaimer */}
                <p className="text-sm text-muted-foreground">
                  These conversion rates assume outreach to your Ideal Customer Profile (ICP) with a product or service that meets their needs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="card">
            <CardHeader>
              <CardTitle className="card-title">Results</CardTitle>
            </CardHeader>
            <CardContent className="card-content">
              {/* Time Period Tabs */}
              <Tabs defaultValue="3" onValueChange={(value: string) => setTimePeriod(value as TimePeriod)}>
                <TabsList className={cn(
                  "grid w-full grid-cols-4 p-1 rounded-md",
                  currentTheme === 'light' ? "bg-gray-100" : "bg-gray-700 text-gray-200"
                )}>
                  {[
                    { value: '3', label: '3 Months' },
                    { value: '6', label: '6 Months' },
                    { value: '9', label: '9 Months' },
                    { value: '12', label: '12 Months' }
                  ].map(({ value, label }) => (
                    <TabsTrigger
                      key={value}
                      value={value}
                      className={cn(
                        "px-1 py-1 text-xs sm:text-sm sm:px-3 sm:py-1.5 font-medium rounded-md transition-colors",
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                        "data-[state=inactive]:bg-transparent data-[state=inactive]:text-muted-foreground",
                        "shadow-none",
                        currentTheme === 'light'
                          ? [
                              "data-[state=active]:bg-background",
                              "data-[state=active]:text-foreground",
                              "hover:bg-gray-200",
                              "data-[state=active]:hover:bg-background"
                            ]
                          : [
                              "data-[state=active]:bg-indigo-600",
                              "data-[state=active]:text-white",
                              "hover:bg-gray-600",
                            ]
                      )}
                    >
                      {label.replace(' ', '\n')}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {/* Results Content */}
                <TabsContent value={timePeriod}>
                  {renderResultsContent(
                    calculateResults(parseInt(timePeriod), linkedInProfiles, connectionRate, responseRate, meetingRate, saleConversionRate, ltv)
                  )}
                </TabsContent>
              </Tabs>
              
              {/* Chart Tabs */}
              <Tabs defaultValue="break-even" className="mt-8">
                <TabsList className={cn(
                  "grid w-full grid-cols-2 p-1 rounded-md",
                  currentTheme === 'light' ? "bg-gray-100" : "bg-gray-700"
                )}>
                  {["break-even", "roi"].map((value) => (
                    <TabsTrigger 
                      key={value}
                      value={value} 
                      className={cn(
                        "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                        "focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
                        "data-[state=active]:shadow-none",
                        currentTheme === 'light'
                          ? [
                              "text-foreground",
                              "hover:bg-gray-200",
                              "data-[state=active]:bg-background",
                              "data-[state=active]:hover:bg-background",
                            ]
                          : [
                              "text-gray-200",
                              "hover:bg-gray-600",
                              "data-[state=active]:bg-indigo-600",
                              "data-[state=active]:text-white",
                            ],
                        "data-[state=inactive]:bg-transparent",
                        "data-[state=inactive]:text-muted-foreground"
                      )}
                    >
                      {value === "break-even" ? "Break Even Point" : "ROI Comparison"}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="break-even">
                  <LinkedInSuitabilityBreakEvenPoint data={chartData} />
                </TabsContent>
                <TabsContent value="roi">
                  <LinkedInSuitabilityBarChart data={chartData} />
                </TabsContent>
              </Tabs>

              {/* Recommendation Section */}
              {/* <div className="mt-8">
                <p className={isAgencySuitable || isInHouseSuitable ? "text-green-500" : "text-red-500"}>
                  {getRecommendation()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Note: Recommendation based on CAC being less than 30% of LTV for sustainable growth over the selected time period.
                </p>
              </div> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LinkedInSuitabilityCalculator;