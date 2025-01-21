import React from 'react';
import { GitBranch, Database, MessageSquare, Zap, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function FeaturesPipeline() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <Package className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-bold text-foreground">What's included?</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">Along with infrastructure, you will get:</p>
        <div className="relative">
          {/* Pipeline - hidden on mobile */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary sm:left-1/2 sm:-ml-0.5 hidden sm:block"></div>
          
          {/* Stages */}
          <div className="space-y-8 sm:space-y-16">
            <PipelineStage
              icon={GitBranch}
              title="Hypothesis Generation"
              content="Hypotheses Brainstormed:"
              value="4"
              description="Tailored to your business needs"
              iconColor="text-green-500"
              valueColor="text-green-400"
              position="right"
              number={1}
            />

            {/* Lead Collection */}
            <PipelineStage
              icon={Database}
              title="Lead Collection"
              content="Total Leads Collected:"
              value="2,800"
              description="For 4 hypotheses testing"
              iconColor="text-blue-500"
              valueColor="text-blue-400"
              position="left"
              number={2}
            />

            {/* Message Crafting */}
            <PipelineStage
              icon={MessageSquare}
              title="Message Crafting"
              content="Messages per Sequence:"
              value="3"
              description="All sequences contain three messages"
              iconColor="text-purple-500"
              valueColor="text-purple-400"
              position="right"
              number={3}
            />

            {/* Automations Created */}
            <PipelineStage
              icon={Zap}
              title="Automations Created"
              content="Total Automations:"
              value="11"
              description="Streamlining your outreach process"
              iconColor="text-yellow-500"
              valueColor="text-yellow-400"
              position="left"
              number={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface PipelineStageProps {
  icon: React.ElementType;
  title: string;
  content: string;
  value: React.ReactNode;
  description: string;
  iconColor: string;
  valueColor: string;
  position: 'left' | 'right';
  number: number;
}

const PipelineStage: React.FC<PipelineStageProps> = ({
  icon: Icon,
  title,
  content,
  value,
  description,
  iconColor,
  valueColor,
  position,
  number
}) => {
  return (
    <div className={`relative sm:flex sm:items-center ${position === 'right' ? 'sm:justify-end' : ''}`}>
      <div className={`w-full sm:w-1/2 ${position === 'right' ? 'sm:pl-8' : 'sm:pr-8'}`}>
        <Card className="card">
          <CardHeader>
            <div className="flex items-center mb-4">
              <Icon className={`${iconColor} w-8 h-8 mr-3`} />
              <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-primary-foreground mb-2">{content}</p>
            <p className={`text-4xl font-bold ${valueColor}`}>{value}</p>
            <p className="text-muted-foreground mt-2">{description}</p>
          </CardContent>
        </Card>
      </div>
      {/* Desktop step indicator - hidden on mobile */}
      <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full items-center justify-center sm:left-1/2 sm:-ml-4 hidden sm:flex`}>
        <span className="text-primary-foreground font-bold">{number}</span>
      </div>
    </div>
  );
};