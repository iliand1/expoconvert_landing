import React from 'react';
import { Switch } from "@/app/components/ui/switch";
import { Slider } from "@/app/components/ui/slider";
import { InfoIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip";
import { formatNumber } from './calculatorUtils';
import { commonStyles } from './styles';
import { ChartDataItem } from './types';

// Render preset switches for conservative, realistic, and optimistic scenarios
export const renderPresetSwitches = (preset: string, handlePresetChange: (newPreset: 'conservative' | 'realistic' | 'optimistic') => void) => (
  <div className="flex flex-wrap justify-center gap-4">
    {['conservative', 'realistic', 'optimistic'].map((p) => (
      <div key={p} className="flex items-center space-x-2">
        <Switch
          checked={preset === p}
          onCheckedChange={() => handlePresetChange(p as 'conservative' | 'realistic' | 'optimistic')}
          className="custom-switch"
        />
        <span className={`text-xs sm:text-sm font-medium ${preset === p ? 'text-primary-foreground' : 'text-muted'}`}>
          {p.charAt(0).toUpperCase() + p.slice(1)}
        </span>
      </div>
    ))}
  </div>
);

// Render a parameter slider with label, value, and icon
export const renderParameterSlider = (label: string, value: number, setter: (value: number) => void, icon: React.ReactNode, setPreset: (value: 'custom') => void) => (
  <div>
    <label className={`${commonStyles.label} text-muted`}>
      {label}: {value}%
    </label>
    <div className="flex items-center">
      {React.cloneElement(icon as React.ReactElement, { className: commonStyles.icon })}
      <div className="w-full relative ml-3">
        <Slider
          value={[value]}
          onValueChange={(v) => {
            setter(v[0]);
            setPreset('custom');
          }}
          min={1}
          max={100}
          step={1}
          className={`${commonStyles.slider} custom-slider`}
        />
        <div className="absolute top-3 left-0 right-0">
          {[0, 25, 50, 75, 100].map((step) => (
            <span
              key={step}
              className={`${commonStyles.sliderMarks} text-card-foreground`}
              style={{ left: `${step}%` }}
            >
              {step}%
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Render a single result item with label and value
export const renderResultItem = (label: string, value: string | number | { value: number; color: string }) => (
  <div className="flex items-center justify-between">
    <span className="text-card-foreground">{label}:</span>
    {typeof value === 'object' && 'color' in value ? (
      <span className={`font-bold ${value.color}`}>{formatNumber(value.value)}</span>
    ) : (
      <span className="text-primary-foreground font-bold">{value}</span>
    )}
  </div>
);

// Update the type for results
type ResultsType = Omit<ChartDataItem, 'name'> & { 
  leadsGenerated: number; 
  salesMade: number;
  agencyCAC: { value: number; color: string };
  inHouseCAC: { value: number; color: string };
};

// Render the complete results content
export const renderResultsContent = (results: ResultsType) => (
  <div className="grid grid-cols-2 gap-4 mt-4">
    {/* Performance section */}
    <div className="space-y-2">
      <h4 className="text-primary-foreground font-semibold">Performance</h4>
      {renderResultItem("Leads", results.leadsGenerated)}
      {renderResultItem("Sales", results.salesMade)}
      {renderResultItem("Revenue", formatNumber(results.totalRevenue))}
    </div>
    
    {/* Costs section */}
    <div className="space-y-2">
      <h4 className="text-primary-foreground font-semibold">Costs</h4>
      {renderResultItem("Agency", results.agencyCost)}
      {renderResultItem("In-House", results.inHouseCost)}
    </div>
    
    {/* Customer Acquisition Cost (CAC) section */}
    <div className="col-span-2 space-y-2 mt-4">
      <h4 className="text-primary-foreground font-semibold flex items-center">
        Customer Acquisition Cost (CAC)
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon 
                className="w-4 h-4 ml-2 text-muted-foreground cursor-help"
              />
            </TooltipTrigger>
            <TooltipContent className="custom-tooltip" sideOffset={5}>
              CAC should be less than 1/3 of LTV for sustainable growth.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </h4>
      {renderResultItem("Agency CAC", results.agencyCAC)}
      {renderResultItem("In-House CAC", results.inHouseCAC)}
    </div>
  </div>
);