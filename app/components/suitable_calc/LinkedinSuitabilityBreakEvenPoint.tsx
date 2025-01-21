import React, { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ChartDataItem } from './types';
import { useTheme } from 'next-themes';

interface BreakEvenPointProps {
  data: ChartDataItem[];
}

const LinkedinSuitabilityBreakEvenPoint: React.FC<BreakEvenPointProps> = ({ data }) => {
  const { theme } = useTheme();

  const formatYAxis = (value: number) => {
    return `$${(value / 1000).toFixed(0)}k`;
  };

  const calculateBreakEvenPoint = (revenueData: number[], costData: number[]): number | null => {
    for (let i = 0; i < revenueData.length; i++) {
      if (revenueData[i] >= costData[i]) {
        return i + 1; // Return the month number (1-indexed)
      }
    }
    return null;
  };

  const { breakEvenMessage } = useMemo(() => {
    const revenueData = data.map(item => item.revenue);
    const agencyCostData = data.map(item => item.agencyCostValue);
    const inHouseCostData = data.map(item => item.inHouseCostValue);

    const agencyBreakEven = calculateBreakEvenPoint(revenueData, agencyCostData);
    const inHouseBreakEven = calculateBreakEvenPoint(revenueData, inHouseCostData);

    const messages = [];

    if (agencyBreakEven) {
      messages.push(`Agency solution breaks even at <strong>${agencyBreakEven} month${agencyBreakEven !== 1 ? 's' : ''}</strong>`);
    } else {
      messages.push("Agency solution doesn't break even within <strong>12 months</strong>");
    }

    if (inHouseBreakEven) {
      messages.push(`In-house solution breaks even at <strong>${inHouseBreakEven} month${inHouseBreakEven !== 1 ? 's' : ''}</strong>`);
    } else {
      messages.push("In-house solution doesn't break even within <strong>12 months</strong>");
    }

    if (agencyBreakEven && inHouseBreakEven) {
      if (agencyBreakEven < inHouseBreakEven) {
        messages.push("Agency solution reaches break-even point faster");
      } else if (inHouseBreakEven < agencyBreakEven) {
        messages.push("In-house solution reaches break-even point faster");
      } else {
        messages.push("Both solutions reach break-even point at the same time");
      }
    }

    return { breakEvenMessage: messages, agencyBreakEven, inHouseBreakEven };
  }, [data]);

  const gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const yAxisDomain = useMemo(() => {
    const allValues = data.flatMap(item => [item.revenue, item.agencyCostValue, item.inHouseCostValue]);
    const maxValue = Math.max(...allValues);
    const roundedMax = Math.ceil(maxValue / 10000) * 10000;
    return [0, roundedMax];
  }, [data]);

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="month"
            label={{ value: 'Months', position: 'insideBottomRight', offset: -10 }}
          />
          <YAxis
            tickFormatter={formatYAxis}
            domain={yAxisDomain}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#4ade80"
            name="Revenue"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="agencyCostValue"
            stroke="#f43f5e"
            name="Agency Cost"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="inHouseCostValue"
            stroke="#3b82f6"
            name="In-House Cost"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-6 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">Break-Even Analysis</h3>
        <ul className="list-disc pl-5 space-y-2">
          {breakEvenMessage.map((message, index) => (
            <li key={index} className="text-lg text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: message }}></li>
          ))}
        </ul>
        <p className="text-sm text-white mt-4">Note: This analysis assumes no sales in the first month of operations.</p>
      </div>
    </div>
  );
};

export default LinkedinSuitabilityBreakEvenPoint;
