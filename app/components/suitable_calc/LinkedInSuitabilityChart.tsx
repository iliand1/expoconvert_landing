import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDataItem } from './types';
import { formatNumber } from './calculatorUtils';

// ------------------------
// Props Interface
// ------------------------
interface LinkedInSuitabilityChartProps {
  data: ChartDataItem[]; // Array of data points for the chart
}

// ------------------------
// Main Component
// ------------------------
const LinkedInSuitabilityChart: React.FC<LinkedInSuitabilityChartProps> = ({ data }) => {
  // Transform input data into the format expected by the chart
  const formattedChartData = data.map(item => ({
    name: item.name,
    Revenue: item.totalRevenue,
    AgencyCost: item.agencyCost.value,
    InHouseCost: item.inHouseCost.value
  }));

  return (
    <div className="mt-8 h-[300px] w-full px-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedChartData}
          margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
        >
          {/* Dashed grid lines for better readability */}
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          
          {/* X-Axis: Displays time periods */}
          <XAxis 
            dataKey="name" 
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
            tickFormatter={(value) => value.toLowerCase()}
            padding={{ left: 0, right: 0 }}
            ticks={['1 Month', '3 Months', '6 Months', '9 Months', '12 Months']}
          />
          
          {/* Y-Axis: Displays monetary values in $k format */}
          <YAxis 
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} 
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
          />
          
          {/* Custom tooltip to display detailed information on hover */}
          <RechartsTooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-gray-800 border border-gray-700 p-2 rounded shadow-lg">
                    <p className="text-gray-300 text-xs">{`${label}`}</p>
                    {payload.map((entry, index) => (
                      <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
                        {`${entry.name}: ${typeof entry.value === 'number' ? formatNumber(entry.value) : entry.value}`}
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          
          {/* Legend for identifying different data series */}
          <Legend 
            iconType="circle"
            wrapperStyle={{
              paddingTop: '10px',
              fontSize: '11px',
            }}
          />
          
          {/* Data Lines */}
          {/* Revenue line: Blue */}
          <Line 
            type="monotone" 
            dataKey="Revenue" 
            stroke="#818cf8" 
            activeDot={{ r: 5 }} 
            strokeWidth={2}
            dot={{ r: 2 }}
          />
          {/* Agency Cost line: Red */}
          <Line 
            type="monotone" 
            dataKey="AgencyCost" 
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 2 }}
          />
          {/* In-House Cost line: Green */}
          <Line 
            type="monotone" 
            dataKey="InHouseCost" 
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinkedInSuitabilityChart;