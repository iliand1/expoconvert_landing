export interface CalculatorResults {
  costPerLead: number;
  customerAcquisitionCost: number;
  monthlyRevenue: number;
  leadsGenerated: number;
  salesMade: number;
  monthlyProspects: number;
  agencyCAC: { value: number; color: string };
  inHouseCAC: { value: number; color: string };
}

export interface ChartDataItem {
  name: string;
  totalRevenue: number;
  agencyCost: { value: number; color: string };
  inHouseCost: { value: number; color: string };
  month: number;
  revenue: number;
  agencyCostValue: number;
  inHouseCostValue: number;
}

export type PresetType = 'conservative' | 'realistic' | 'optimistic' | 'custom';

export type TimePeriod = '3' | '6' | '9' | '12';

export interface LTVCategory {
  threshold: number;
  label: string;
}

export interface PresetValues {
  connectionRate: number;
  responseRate: number;
  meetingRate: number;
}
