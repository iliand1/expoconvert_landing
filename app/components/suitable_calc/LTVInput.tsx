import React from 'react';
import { Slider } from "@/app/components/ui/slider";
import { Input } from "@/app/components/ui/input";
import { DollarSign, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/app/components/ui/tooltip";
import { InfoIcon } from 'lucide-react';
import { LTV_STEPS, LTV_CATEGORIES, formatNumber, formatLTVLabel, formatLTVInput, logScale, inverseLogScale } from './calculatorUtils';
import { commonStyles } from './styles';

interface LTVInputProps {
  ltv: number;
  setLtv: (value: number) => void;
}

const LTVInput: React.FC<LTVInputProps> = ({ ltv, setLtv }) => {
  // Handle input change for LTV value
  const handleLTVChange = (value: string) => {
    const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(numValue)) {
      // Limit to 10 digits
      const limitedValue = numValue.toString().slice(0, 10);
      setLtv(parseInt(limitedValue, 10));
    } else {
      setLtv(0);
    }
  };

  // Render the LTV slider with marks and categories
  const renderLTVSlider = () => (
    <div className="relative mt-6 mb-12"> {/* Changed mt-2 to mt-6 */}
      {/* Slider component */}
      <Slider
        value={[logScale(Math.max(1000, Math.min(ltv, 50000)))]}
        onValueChange={(value) => setLtv(inverseLogScale(value[0]))}
        min={0}
        max={1}
        step={0.001}
        className={`${commonStyles.slider} custom-slider`}
      />
      {/* Slider marks */}
      <div className="absolute top-4 left-0 right-0">
        {LTV_STEPS.map((step) => (
          <span
            key={step}
            className={commonStyles.sliderMarks}
            style={{ left: `${logScale(step) * 100}%` }}
          >
            ${formatLTVLabel(step)}
          </span>
        ))}
      </div>
      {/* LTV categories */}
      <div className="absolute bottom-[-28px] left-0 right-0">
        {LTV_CATEGORIES.reduce((acc, { threshold, label }, index, array) => {
          if (ltv >= threshold && (index === array.length - 1 || ltv < array[index + 1].threshold)) {
            let leftPosition = `${logScale(Math.min(threshold, 50000)) * 100}%`;
            if (label === "Enterprise") {
              leftPosition = `calc(${leftPosition} - 2%)`;
            }
            acc.push(
              <span
                key={threshold}
                className="absolute text-[10px] text-primary-foreground -translate-x-1/2"
                style={{ left: leftPosition }}
              >
                {label}
              </span>
            );
          }
          return acc;
        }, [] as React.ReactNode[])}
      </div>
    </div>
  );

  return (
    <div>
      <label className={`${commonStyles.label} text-card-foreground flex items-center`}>
      {/* <label className={`text-foreground flex items-center`}> */}
        Customer Lifetime Value (LTV): {formatNumber(ltv)}
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <InfoIcon 
                className="w-4 h-4 ml-2 text-muted-foreground cursor-help"
              />
            </TooltipTrigger>
            <TooltipContent className="custom-tooltip" sideOffset={5}>
              The total revenue a customer generates over their entire relationship with your business.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </label>
      <div className="flex items-center">
        <DollarSign className="w-5 h-5 text-primary-foreground mr-2" />
        <div className="w-full relative">
          <div className="relative w-40">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-primary">$</span>
            <Input
              type="text"
              value={formatLTVInput(ltv)}
              onChange={(e) => handleLTVChange(e.target.value)}
              className="pl-6 pr-8 w-full bg-card text-foreground [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              maxLength={14}
            />
            {ltv > 0 && (
              <button
                onClick={() => setLtv(0)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground hover:text-muted-foreground"
              >
                <X size={16} />
              </button>
            )}
          </div>
          {renderLTVSlider()}
        </div>
      </div>
    </div>
  );
};

export default LTVInput;