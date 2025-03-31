export const commonStyles = {
  card: "bg-gray-800 border-gray-700",
  cardTitle: "text-white text-2xl",
  label: "text-sm font-medium text-card-foreground mb-2 block",
  input: "bg-gray-700 border-gray-600 text-white",
  slider: "w-full",
  sliderMarks: "absolute text-[12px] text-card-foreground -translate-x-1/2",
  icon: "w-5 h-5 mr-3 text-primary-foreground flex-shrink-0",
};

export const tooltipStyle = `
  padding: 8px;
  border-radius: 4px;
  background-color: hsl(var(--card-bg));
  color: hsl(var(--card-content));
  border: 1px solid hsl(var(--border));
`;