import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";

const FAQ: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            { 
              question: "How does this help me get more ROI from expos?", 
              answer: "We turn one-off conversations into repeatable sales processes — built to convert, not collect."
            },
            { 
              question: "Do my sales reps have to log data manually?", 
              answer: "No. Our capture tools do the work automatically — synced straight to your CRM."
            },
            { 
              question: "What happens before the event?", 
              answer: "We help you identify decision-makers and lock in qualified meetings so your calendar is full before you even arrive."
            },
            { 
              question: "How does this compare to using a CRM?", 
              answer: "Your CRM is where deals are tracked. We’re the system that gets them there — with context, structure, and velocity."
            },
            { 
              question: "Is this right for my industry or company size?", 
              answer: "If you’re in B2B and your deals are $50k+, this is likely one of the highest-leverage systems you can install."
            }
          ].map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 flex flex-col items-center">
          <Button 
            size="lg"
            variant="turquoise"
            className="text-lg px-8 py-4"
            onClick={() => window.open('https://zcal.co/sebastianhidalgo/strategy-session', '_blank')}
          >
            👉 Book Your Free Expo Strategy Call
          </Button>
          <p className="mt-3 text-sm text-muted-foreground">
            So Your Next Event Pays for Itself
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
