import { Clock, DollarSign, Sliders, Expand, Database, TrendingUp, Eye, PiggyBank, Fingerprint } from 'lucide-react';

export const comparisonData = [
  { feature: "Cost Structure", traditional: "Monthly retainer", diy: "Variable costs", tng: "One-time fee", icon: DollarSign, tngCheck: true },
  { feature: "Setup Time", traditional: "2-4 weeks", diy: "1-2 months", tng: "5 days", icon: Clock, tngCheck: true },
  { feature: "Scalability", traditional: "Limited by agency capacity", diy: "Limited by personal capacity", tng: "Unlimited scalability", icon: Expand, tngCheck: true },
  { feature: "Control", traditional: "Limited control", diy: "Full control, high effort", tng: "Full in-house control with expert support", icon: Sliders, diyCheck: true, tngCheck: true },
  { feature: "Data Ownership", traditional: "Often retained by agency", diy: "100% owned", tng: "100% owned by you", icon: Database, diyCheck: true, tngCheck: true },
  { feature: "ROI Potential", traditional: "Variable, often capped", diy: "High potential, high risk", tng: "High ROI with continuous optimization", icon: TrendingUp, diyCheck: true, tngCheck: true },
  { feature: "Transparency", traditional: "Often a black box", diy: "Full visibility, potentially overwhelming", tng: "Full visibility into processes", icon: Eye, diyCheck: true, tngCheck: true },
  { feature: "Long-term Cost", traditional: "Increases with success", diy: "Decreases but requires constant effort", tng: "Decreases over time with a one-time investment", icon: PiggyBank, diyCheck: true, tngCheck: true },
  { feature: "Customization", traditional: "One-size-fits-all approach", diy: "Fully customizable, but time-consuming", tng: "Tailored to your specific needs", icon: Fingerprint, diyCheck: true, tngCheck: true },
];

// Remove challengesData