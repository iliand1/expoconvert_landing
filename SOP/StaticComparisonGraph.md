# Standard Operating Procedure (SOP) for Static Comparison Graph

## Objective
Create a static visualization component that compares the ROI and cost per lead for two LinkedIn outreach approaches: Agency and In-House (Tech Noir Global solution) over a 12-month period.

## Graph Details

### 1. Type of Graph
- Line graph with two lines representing Agency and In-House approaches
- X-axis: Time (12 months)
- Y-axis: Two options (switchable):
  a. ROI (Return on Investment)
  b. Cost per Lead

### 2. Scenario Parameters
- Starting with 2 LinkedIn profiles, scaling up to 10 profiles over 12 months
- Use realistic conversion rates from the suitability calculator
- Include additional costs for In-House approach:
  - Sending tool license: $50 per profile per month
  - Server costs: $50 per month
  - Sales Navigator: $100 per month (flat fee, not per profile)
  - Profile rental (for scaling): $100 per profile per month

### 3. Cost Calculation
- Agency:
  - Use a base cost (e.g., $3000 per month) and increase proportionally with profiles
- In-House (Tech Noir Global):
  - One-time setup fee: $2999
  - Monthly: (Number of profiles * $50 sending tool) + $50 server + $100 Sales Navigator
  - Scaling: Add $100 rental for each new profile beyond owned profiles

### 4. Performance Metrics
- Leads generated per month
- Sales conversion rate
- Revenue generated (based on average deal size)

### 5. ROI Calculation
ROI = (Revenue - Costs) / Costs * 100

### 6. Cost per Lead Calculation
Cost per Lead = Total Costs / Number of Leads Generated

### 7. Effectiveness Factors
- Agency: Assume 20% higher effectiveness than baseline
- In-House: Assume 10% higher effectiveness than baseline

## Component Implementation

1. Create a new component file: `StaticComparisonGraph.tsx`
2. Use Recharts library for chart implementation
3. Implement state for switching between ROI and Cost per Lead views
4. Create a data generation function that calculates costs, leads, and metrics for each month and approach
5. Render the line graph with proper styling and responsiveness
6. Add a legend to distinguish between the two approaches
7. Implement tooltips to show detailed information when hovering over data points

## Integration

1. Import the `StaticComparisonGraph` component into the desired page or section of the website
2. Place the component in an appropriate container with proper sizing and responsiveness

## Additional Features

1. Add a brief explanation of the graph and its assumptions
2. Include a small table below the graph summarizing key metrics at the end of the 12-month period
3. Implement a toggle or tabs to switch between ROI and Cost per Lead views

## Testing and Refinement

1. Test the component with various screen sizes to ensure responsiveness
2. Verify the accuracy of calculations and data representation
3. Gather feedback from team members and potential users
4. Refine the design and functionality based on feedback

## Maintenance

1. Regularly review and update the assumptions and costs used in the calculations
2. Consider adding more customization options for users to input their own parameters

By following this SOP, we'll create a compelling visual comparison that highlights the benefits of the Tech Noir Global in-house solution compared to the traditional agency approach for LinkedIn outreach.