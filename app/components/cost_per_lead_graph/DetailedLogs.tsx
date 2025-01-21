import React from 'react';
import { CalculationDetail, formatLargeNumber } from './StaticComparisonGraph';

interface DetailedLogsProps {
  detailedLogs: CalculationDetail[];
}

const DetailedLogs: React.FC<DetailedLogsProps> = ({ detailedLogs }) => {
  const [showLogs] = React.useState(false);

  return (
    <>
      {/* <button
        onClick={() => setShowLogs(!showLogs)}
        className="mt-4 text-sm text-primary-foreground underline cursor-pointer block"
      >
        {showLogs ? "Hide Calculation Details" : "Show Calculation Details"}
      </button> */}
      
      {showLogs && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Calculation Details for Selected Months (to be deleted)</h3>
          {detailedLogs.map((log) => (
            <div key={log.month} className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <h4 className="text-md font-medium">Month {log.month}</h4>
              <div className="mt-2 text-muted-foreground">
                <strong>Profiles:</strong> {log.profiles}
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Invites Sent:</strong> {formatLargeNumber(log.invitesSent)}
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Connections:</strong> {formatLargeNumber(log.connections)} (30% of invites)
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Responses:</strong> {formatLargeNumber(log.responses)} (20% of connections)
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Meetings (Leads):</strong> {formatLargeNumber(log.meetings)} (30% of responses)
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Conversion Rate:</strong> {log.conversionRate.toFixed(2)}%
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Outsource Cost (This Month):</strong> ${formatLargeNumber(log.outsourceCost)}
                <div className="ml-4 text-sm">
                  {log.outsourceCostBreakdown}
                </div>
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>In-House Cost (This Month):</strong> ${formatLargeNumber(log.inHouseCost)}
                <div className="ml-4 text-sm">
                  {log.inHouseCostBreakdown}
                </div>
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>Outsource Cost per Lead:</strong> ${formatLargeNumber(log.outsourceCPL)}
                <div className="ml-4 text-sm">
                  ${formatLargeNumber(log.outsourceCost)} / {formatLargeNumber(log.meetings)} leads = ${formatLargeNumber(log.outsourceCPL)} per lead
                </div>
              </div>
              <div className="mt-2 text-muted-foreground">
                <strong>In-House Cost per Lead:</strong> ${formatLargeNumber(log.inHouseCPL)}
                <div className="ml-4 text-sm">
                  ${formatLargeNumber(log.inHouseCost)} / {formatLargeNumber(log.meetings)} leads = ${formatLargeNumber(log.inHouseCPL)} per lead
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DetailedLogs;