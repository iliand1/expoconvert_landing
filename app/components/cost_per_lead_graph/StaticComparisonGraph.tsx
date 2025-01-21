import React, { useState, useEffect, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useTheme } from 'next-themes';
import DetailedLogs from "./DetailedLogs";

interface MonthData {
  month: number;
  OutsourceCPL: number;
  InHouseCPL: number;
  OutsourceCost: number;
  InHouseCost: number;
  Profiles: number;
}

// Export CalculationDetail interface
export interface CalculationDetail {
  month: number;
  outsourceCost: number;
  inHouseCost: number;
  outsourceCPL: number;
  inHouseCPL: number;
  outsourceCostBreakdown: string;
  inHouseCostBreakdown: string;
  totalLeads: number;
  invitesSent: number;
  connections: number;
  responses: number;
  meetings: number;
  conversionRate: number;
  profiles: number;
}

// Export formatLargeNumber function
export const formatLargeNumber = (num: number): string => {
  return num.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const generateComparisonData = (): { data: MonthData[]; detailedLogs: CalculationDetail[] } => {
  const data: MonthData[] = [];
  const detailedLogs: CalculationDetail[] = [];
  const profiles = [2, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10];
  const invitesPerProfile = 700;
  const connectionRate = 0.30; // 30% connection rate
  const responseRate = 0.20; // 20% response rate
  const meetingRate = 0.30; // 30% meeting rate
  const conversionRate = 0.02; // 2% conversion rate

  for (let month = 1; month <= 12; month++) {
    const currentProfiles = profiles[month - 1];
    
    // Calculate costs
    const outsourceCost = 3000 + ((currentProfiles - 2) * 500);
    const inHouseCost = (month === 1 ? 2999 : 0) + (currentProfiles * 50) + 50 + 100 + ((currentProfiles - 2) * 100);
    
    // Calculate leads and revenue
    const invitesSent = currentProfiles * invitesPerProfile;
    const connections = Math.round(invitesSent * connectionRate);
    const responses = Math.round(connections * responseRate);
    const meetings = Math.round(responses * meetingRate);
    
    
    
    // Calculate Cost per Lead (considering meetings as leads)
    const outsourceCPL = outsourceCost / meetings;
    const inHouseCPL = inHouseCost / meetings;
    
    // Collect Detailed Logs for Months 3, 6, and 12
    if ([3, 6, 12].includes(month)) {
      detailedLogs.push({
        month,
        outsourceCost,
        inHouseCost,
        outsourceCPL: parseFloat(outsourceCPL.toFixed(2)),
        inHouseCPL: parseFloat(inHouseCPL.toFixed(2)),
        outsourceCostBreakdown: `Base: $3000 + (${currentProfiles} - 2) * $500 = $${outsourceCost.toFixed(2)}`,
        inHouseCostBreakdown: `${month === 1 ? 'Setup Fee: $2999 + ' : ''}${currentProfiles} * $50 (Link Helper) + $50 (Server) + $100 (Sales Navigator) + (${currentProfiles} - 2) * $100 (Profile Rental) = $${inHouseCost.toFixed(2)}`,
        totalLeads: meetings,
        invitesSent,
        connections,
        responses,
        meetings,
        conversionRate: conversionRate * 100,
        profiles: currentProfiles
      });
    }

    data.push({
      month,
      OutsourceCPL: parseFloat(outsourceCPL.toFixed(2)),
      InHouseCPL: parseFloat(inHouseCPL.toFixed(2)),
      OutsourceCost: parseFloat(outsourceCost.toFixed(2)),
      InHouseCost: parseFloat(inHouseCost.toFixed(2)),
      Profiles: currentProfiles
    });
  }
  
  return { data, detailedLogs };
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    color: string;
  }>;
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p>{`Month ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: $${formatLargeNumber(entry.value)}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const renderLineChart = (data: MonthData[], dataKey1: string, dataKey2: string) => (
  <ResponsiveContainer width="100%" height={300} minWidth={300}>
    <LineChart data={data} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis 
        dataKey="month" 
        tick={{ fill: 'hsl(var(--foreground))', fontSize: 10 }}
      />
      <YAxis 
        tickFormatter={(value) => `$${formatLargeNumber(value)}`}
        width={60}
        tickMargin={3}
        tick={{ fill: 'hsl(var(--foreground))', fontSize: 10 }}
      />
      <Tooltip 
        content={<CustomTooltip />}
      />
      <Legend 
        wrapperStyle={{ fontSize: '14px', fontWeight: 'bold' }} 
        iconSize={14}
        iconType="circle"
      />
      <Line type="monotone" dataKey={dataKey1} stroke="#FF6666" name="Outsource" strokeWidth={3} /> {/* Changed to a more saturated red */}
      <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" name="In-House" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
);

const renderSummaryTable = (data: MonthData[], currentTheme: string | undefined) => {
  // Calculate sums for CPL and total cost
  const totalOutsourceCPL = data.reduce((sum, month) => sum + month.OutsourceCPL, 0);
  const totalInHouseCPL = data.reduce((sum, month) => sum + month.InHouseCPL, 0);
  const totalOutsourceCost = data.reduce((sum, month) => sum + month.OutsourceCost, 0);
  const totalInHouseCost = data.reduce((sum, month) => sum + month.InHouseCost, 0);

  // Calculate averages
  const avgOutsourceCPL = totalOutsourceCPL / data.length;
  const avgInHouseCPL = totalInHouseCPL / data.length;
  const avgOutsourceCost = totalOutsourceCost / data.length;
  const avgInHouseCost = totalInHouseCost / data.length;

  // Calculate ratios
  const avgCplRatio = avgOutsourceCPL / avgInHouseCPL;
  const avgCostRatio = avgOutsourceCost / avgInHouseCost;

  return (
    <div className="mt-8 text-center">
      <p className="text-lg mb-2">
        On average, the in-house approach is{' '}
        <strong className={cn(
          "text-primary",
          currentTheme === 'dark' && "text-indigo-400"
        )}>
          {avgCplRatio.toFixed(1)}x cheaper
        </strong>{' '}
        in Cost per Lead and{' '}
        <strong className={cn(
          "text-primary",
          currentTheme === 'dark' && "text-indigo-400"
        )}>
          {avgCostRatio.toFixed(1)}x cheaper
        </strong>{' '}
        in Total Monthly Spend.
      </p>
    </div>
  );
};

const StaticComparisonGraph: React.FC = () => {
  const { data, detailedLogs } = useMemo(() => generateComparisonData(), []);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use useEffect to set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // If the component hasn't mounted yet, return null or a loading placeholder
  if (!mounted) {
    return null; // or return a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="card w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Outsource vs. In-House (Over 12 Months)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="total-cost" className="w-full">
            <TabsList className={cn(
              "grid w-full grid-cols-2 p-1 rounded-md",
              currentTheme === 'light' ? "bg-gray-100" : "bg-gray-700 text-gray-200"
            )}>
              {[
                { value: "total-cost", label: "Total Costs" },
                { value: "cpl", label: "Cost per Lead" }
              ].map(({ value, label }) => (
                <TabsTrigger
                  key={value}
                  value={value ?? ''}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
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
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value="total-cost" className="w-full">
              {renderLineChart(data, "OutsourceCost", "InHouseCost")}
            </TabsContent>
            <TabsContent value="cpl" className="w-full">
              {renderLineChart(data, "OutsourceCPL", "InHouseCPL")}
            </TabsContent>
          </Tabs>
          {renderSummaryTable(data, currentTheme)}

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Assumptions:</h4>
            <ul className="text-sm text-muted-foreground list-disc list-inside">
              <li>Scaling from 2 to 10 LinkedIn profiles</li>
              <li>700 invites sent per profile per month</li>
              <li>30% connection rate, 20% response rate, 30% meeting rate</li>
              <li>Outsource base cost: $3000/month + $500 per additional profile</li>
              <li>In-house costs: $50/profile/month (tool), $50/month (server), $100/month (Sales Navigator)</li>
              <li>Assumes ownership of 2 profiles; additional profiles rented at $100/profile/month</li>
              <li>In-house work is performed by the existing team; no additional hiring costs included</li>
            </ul>
          </div>

          <DetailedLogs detailedLogs={detailedLogs} />
        </CardContent>
      </Card>
    </div>
  );
};

export default StaticComparisonGraph;