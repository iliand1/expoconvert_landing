import { CalculatorResults, ChartDataItem, LTVCategory} from './types';

// Utility function to format numbers as USD currency
export const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.ceil(num));
};

// Updated constants for cost calculations
export const AGENCY_BASE_COST = 3000;
export const AGENCY_ADDITIONAL_PROFILE_COST = 500;

export const IN_HOUSE_BASE_TOOL_COST_PER_PROFILE = 50;
export const IN_HOUSE_ADDITIONAL_PROFILE_COST = 100;
export const IN_HOUSE_SERVER_COST = 50;
export const IN_HOUSE_SALES_NAV_COST = 100;
export const IN_HOUSE_INCLUDED_PROFILES = 2;

// LTV thresholds for chart
export const LTV_STEPS = [1000, 2500, 5000, 10000, 25000, 50000];

// LTV categories for business size classification
export const LTV_CATEGORIES: LTVCategory[] = [
  { threshold: 500, label: "Micro SaaS/Startup" },
  { threshold: 2000, label: "Small B2B" },
  { threshold: 10000, label: "Mid-Market" },
  { threshold: 50000, label: "Enterprise" }
];

// Preset values for different calculation scenarios
export const PRESET_VALUES = {
  conservative: {
    connectionRate: 15,  // Changed from 20 to 15
    responseRate: 20,
    meetingRate: 15,     // Changed from 20 to 15
  },
  realistic: {
    connectionRate: 30,
    responseRate: 30,
    meetingRate: 30,
  },
  optimistic: {
    connectionRate: 40,
    responseRate: 40,
    meetingRate: 40,
  },
};

// Format LTV label for display
export const formatLTVLabel = (value: number) => {
  if (value < 1000) return `${value}`;
  if (value < 10000) return `${value / 1000}K`;
  return `${value / 1000}K`;
};

// Format LTV input for user entry
export const formatLTVInput = (value: number) => {
  return value.toLocaleString('en-US');
};

// Calculate logarithmic scale for LTV slider
export const logScale = (value: number) => {
  if (value <= 1000) return 0;
  if (value >= 50000) return 1;
  return Math.log(value / 1000) / Math.log(50);
};

// Calculate inverse logarithmic scale for LTV slider
export const inverseLogScale = (value: number) => {
  if (value <= 0) return 1000;
  if (value >= 1) return 50000;
  return Math.round(1000 * Math.exp(value * Math.log(50)));
};

// Add a new constant for the ramp-up period
export const RAMP_UP_MONTHS = 3;

// Updated core calculation function for LinkedIn outreach results
export const calculateResults = (
  months: number,
  linkedInProfiles: number,
  connectionRate: number,
  responseRate: number,
  meetingRate: number,
  saleConversionRate: number,
  ltv: number
): Omit<ChartDataItem, 'name'> & { 
  leadsGenerated: number; 
  salesMade: number;
  agencyCAC: { value: number; color: string };
  inHouseCAC: { value: number; color: string };
  month: number;
  revenue: number;
  agencyCostValue: number;
  inHouseCostValue: number;
} => {
  
  let totalLeads = 0;
  let totalSales = 0;

  for (let i = 1; i <= months; i++) {
    // Apply ramp-up factor
    const rampUpFactor = i <= RAMP_UP_MONTHS ? i / RAMP_UP_MONTHS : 1;

    const monthlyProspects = linkedInProfiles * INVITATIONS_PER_PROFILE;
    const monthlyLeads = Math.ceil(monthlyProspects * (connectionRate / 100) * (responseRate / 100) * (meetingRate / 100) * rampUpFactor);
    
    // Assume no sales in the first month
    const monthlySales = i === 1 ? 0 : Math.ceil(monthlyLeads * (saleConversionRate / 100));

    
    totalLeads += monthlyLeads;
    totalSales += monthlySales;
  }

  const revenue = totalSales * ltv;

  // Calculate costs (unchanged)
  const additionalProfiles = Math.max(0, linkedInProfiles - 2);
  const agencyCost = (AGENCY_BASE_COST + AGENCY_ADDITIONAL_PROFILE_COST * additionalProfiles) * months;

  const extraProfiles = Math.max(0, linkedInProfiles - IN_HOUSE_INCLUDED_PROFILES);
  const inHouseMonthlyCost = 
    linkedInProfiles * IN_HOUSE_BASE_TOOL_COST_PER_PROFILE +
    extraProfiles * IN_HOUSE_ADDITIONAL_PROFILE_COST +
    IN_HOUSE_SERVER_COST + 
    IN_HOUSE_SALES_NAV_COST;
  const inHouseCost = (inHouseMonthlyCost * months) + IN_HOUSE_ONE_TIME_FEE;

  const agencyCAC = totalSales > 0 ? agencyCost / totalSales : Infinity;
  const inHouseCAC = totalSales > 0 ? inHouseCost / totalSales : Infinity;

  const targetCAC = ltv / 3;

  return {
    leadsGenerated: totalLeads,
    salesMade: totalSales,
    totalRevenue: revenue,
    agencyCost: { value: agencyCost, color: agencyCost > revenue ? 'text-red-400' : 'text-green-400' },
    inHouseCost: { value: inHouseCost, color: inHouseCost > revenue ? 'text-red-400' : 'text-green-400' },
    agencyCAC: { value: agencyCAC, color: agencyCAC > targetCAC ? 'text-red-400' : 'text-green-400' },
    inHouseCAC: { value: inHouseCAC, color: inHouseCAC > targetCAC ? 'text-red-400' : 'text-green-400' },
    month: months,
    revenue: revenue,
    agencyCostValue: agencyCost,
    inHouseCostValue: inHouseCost,
  };
};

// Determine if LinkedIn outreach is suitable based on CAC and LTV
export const isLinkedInSuitable = (customerAcquisitionCost: number, ltv: number): boolean => {
  return customerAcquisitionCost < ltv * 0.3;
};

// Calculate monthly results for LinkedIn outreach
export const calculateMonthlyResults = (
  linkedInProfiles: number,
  connectionRate: number,
  responseRate: number,
  meetingRate: number,
  saleConversionRate: number,
  ltv: number
): CalculatorResults => {
  const monthlyProspects = linkedInProfiles * INVITATIONS_PER_PROFILE;
  const results = calculateResults(1, linkedInProfiles, connectionRate, responseRate, meetingRate, saleConversionRate, ltv);

  return {
    monthlyProspects,
    leadsGenerated: results.leadsGenerated,
    salesMade: results.salesMade,
    costPerLead: results.leadsGenerated > 0 ? results.agencyCost.value / results.leadsGenerated : 0, // Updated
    customerAcquisitionCost: results.salesMade > 0 ? results.agencyCost.value / results.salesMade : 0, // Updated
    monthlyRevenue: results.totalRevenue,
    agencyCAC: results.agencyCAC,
    inHouseCAC: results.inHouseCAC,
  };
};

// Generate chart data for different time periods
export const calculateChartData = (
  linkedInProfiles: number,
  connectionRate: number,
  responseRate: number,
  meetingRate: number,
  saleConversionRate: number,
  ltv: number
): ChartDataItem[] => {
  // Start from month 1 and go up to month 12
  return Array.from({ length: 12 }, (_, i) => i + 1).map(months => {
    const results = calculateResults(months, linkedInProfiles, connectionRate, responseRate, meetingRate, saleConversionRate, ltv);
    return {
      name: `${months} Month${months > 1 ? 's' : ''}`,
      totalRevenue: results.totalRevenue,
      agencyCost: results.agencyCost,
      inHouseCost: results.inHouseCost,
      month: results.month,
      revenue: results.revenue,
      agencyCostValue: results.agencyCostValue,
      inHouseCostValue: results.inHouseCostValue,
    };
  });
};

export const INVITATIONS_PER_PROFILE = 700;
export const IN_HOUSE_ONE_TIME_FEE = 2999;
