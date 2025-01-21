import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartDataItem } from './types';

interface LinkedInSuitabilityBarChartProps {
  data: ChartDataItem[];
}

const LinkedInSuitabilityBarChart: React.FC<LinkedInSuitabilityBarChartProps> = ({ data }) => {
  const formattedChartData = data.map(item => ({
    name: item.name,
    AgencyROI: Number(((item.totalRevenue - item.agencyCost.value) / item.agencyCost.value * 100).toFixed(2)),
    InHouseROI: Number(((item.totalRevenue - item.inHouseCost.value) / item.inHouseCost.value * 100).toFixed(2))
  }));

  return (
    <div className="mt-8 h-[300px] w-full px-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedChartData}
          margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis 
            dataKey="name" 
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
            tickFormatter={(value) => value.toLowerCase()}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis 
            tickFormatter={(value) => `${value}%`} 
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF', fontSize: 11 }}
          />
          <RechartsTooltip
            cursor={{ fill: 'transparent' }}
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-gray-800 border border-gray-700 p-2 rounded shadow-lg">
                    <p className="text-gray-300 text-xs">{`${label}`}</p>
                    {payload.map((entry, index) => (
                      <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
                        {`${entry.name}: ${Math.round(Number(entry.value))}%`}
                      </p>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            iconType="circle"
            wrapperStyle={{
              paddingTop: '10px',
              fontSize: '11px',
            }}
          />
          <Bar 
            dataKey="AgencyROI" 
            fill="#ef4444" 
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
          <Bar 
            dataKey="InHouseROI" 
            fill="#10b981" 
            radius={[4, 4, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinkedInSuitabilityBarChart;