import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Zap } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center mb-4">
          <Zap className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">FAQ</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            { 
              objection: "How does XPOIQ help me maximize ROI from expos?", 
              response: "XPOIQ ensures every dollar you invest drives measurable results. From pre-event lead qualification and meeting scheduling to real-time data collection and post-event follow-ups, our system tracks every lead and conversation. You'll know exactly which prospects deliver the biggest wins—no guesswork, just actionable insights."
            },
            { 
              objection: "Will my team still need to manually input business cards and lead data?", 
              response: "Not at all. Our web app digitizes business cards instantly and syncs the information directly into your CRM. You can also add voice memos or quick notes, which are automatically parsed and organized, saving your team hours of tedious admin work."
            },
            { 
              objection: "How does XPOIQ ensure no leads fall through the cracks?", 
              response: "Our airtight follow-up system keeps leads warm with automated sequences and reminders. Every prospect is accounted for and nurtured, so your sales team can focus on closing deals instead of chasing cold leads."
            },
            { 
              objection: "What happens before the expo?", 
              response: "We start 2-3 weeks in advance, helping you identify and qualify high-value prospects using advanced scraping techniques. We also assist in scheduling pre-event meetings and warming up key accounts, so you walk into the expo with a plan and a pipeline."
            },
            { 
              objection: "Is this suitable for my industry or company size?", 
              response: "Absolutely. XPOIQ is designed to work for any B2B company that invests in expos as part of their lead generation strategy. Whether you're a startup or an established enterprise, our systems adapt to your needs and scale with your goals."
            },
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-primary-foreground hover:text-primary-foreground/80">
                {item.objection}
              </AccordionTrigger>
              <AccordionContent className="text-foreground">
                {item.response}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
