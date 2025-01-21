import React from 'react';
import { LucideIcon, Check, X } from 'lucide-react';

interface ComparisonData {
  icon: LucideIcon;
  feature: string;
  traditional: string;
  diy: string;
  tng: string;
  traditionalCheck?: boolean;
  diyCheck?: boolean;
  tngCheck: boolean;
}

export const ComparisonTable: React.FC<{ data: ComparisonData[] }> = ({ data }) => (
  <div className="overflow-hidden rounded-lg border border-border">
    <table className="min-w-full comparison-table table-fixed">
      <thead className="comparison-table-header bg-secondary">
        <tr>
          <th scope="col" className="comparison-table-cell w-1/4 border-r border-border dark:border-gray-700 text-secondary-foreground">Feature</th>
          <th scope="col" className="comparison-table-cell w-1/4 border-r border-border dark:border-gray-700 text-secondary-foreground">Done With Us</th>
          <th scope="col" className="comparison-table-cell w-1/4 border-r border-border dark:border-gray-700 text-secondary-foreground">Do It Yourself</th>
          <th scope="col" className="comparison-table-cell w-1/4 text-secondary-foreground">Outsource</th>
        </tr>
      </thead>
      <tbody className="comparison-table-body">
        {data.map((row, index) => (
          <tr key={index} className="comparison-table-row">
            <td className="comparison-table-data w-1/4 border-r border-border dark:border-gray-700">
              <div className="flex items-center">
                <row.icon className="w-5 h-5 mr-2 text-primary-foreground flex-shrink-0" />
                <span className="break-words">{row.feature}</span>
              </div>
            </td>
            <td className="comparison-table-data w-1/4 border-r border-border dark:border-gray-700 bg-primary/5">
              <div className="flex items-center justify-between">
                <span>{row.tng}</span>
                <div className="flex-shrink-0 w-6 h-6">
                  {row.tngCheck ? 
                    <Check className="w-full h-full text-green-500" strokeWidth={3} /> : 
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  }
                </div>
              </div>
            </td>
            <td className="comparison-table-data w-1/4 border-r border-border dark:border-gray-700">
              <div className="flex items-center justify-between">
                <span>{row.diy}</span>
                <div className="flex-shrink-0 w-6 h-6">
                  {row.diyCheck ? 
                    <Check className="w-full h-full text-green-500" strokeWidth={3} /> : 
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  }
                </div>
              </div>
            </td>
            <td className="comparison-table-data w-1/4">
              <div className="flex items-center justify-between">
                <span>{row.traditional}</span>
                <div className="flex-shrink-0 w-6 h-6">
                  {row.traditionalCheck ? 
                    <Check className="w-full h-full text-green-500" strokeWidth={3} /> : 
                    <X className="w-full h-full text-red-500" strokeWidth={3} />
                  }
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const MobileComparisonCards: React.FC<{ data: ComparisonData[] }> = ({ data }) => (
  <>
    {data.map((row, index) => (
      <div key={index} className="card overflow-hidden shadow-lg mb-4 rounded-lg">
        <div className="comparison-table-header p-4 flex items-center rounded-t-lg">
          <row.icon className="w-6 h-6 text-primary-foreground mr-3 flex-shrink-0" />
          <h3 className="text-lg font-semibold text-[hsl(var(--card-title))] line-clamp-2">{row.feature}</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2">
            {['Done With You', 'Do It Yourself', 'Outsource'].map((title, i) => (
              <div key={title} className={`flex flex-col ${i > 0 ? 'border-l border-border' : ''}`}>
                <h4 className="text-sm font-medium text-[hsl(var(--card-content))] mb-2 h-10 flex items-center justify-center text-center px-1">{title}</h4>
                <div className="flex flex-col items-center h-full">
                  <p className="text-sm text-center mb-2 flex-grow">{row[i === 0 ? 'tng' : i === 1 ? 'diy' : 'traditional']}</p>
                  <div className="flex-shrink-0 w-6 h-6">
                    {row[i === 0 ? 'tngCheck' : i === 1 ? 'diyCheck' : 'traditionalCheck'] ? 
                      <Check className="w-full h-full text-green-500" strokeWidth={3} /> : 
                      <X className="w-full h-full text-red-500" strokeWidth={3} />
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </>
);