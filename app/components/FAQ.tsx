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
              answer: "We provide a structured system to book meetings, capture leads, and automate follow-ups, so no opportunities slip through the cracks."
            },
            { 
              question: "Do my sales reps have to log data manually?", 
              answer: "No. Our system captures, organizes, and syncs leads in real-time, eliminating busywork."
            },
            { 
              question: "What happens before the event?", 
              answer: "We identify top prospects, warm them up, and schedule meetings before you arrive."
            },
            { 
              question: "How does this compare to using a CRM?", 
              answer: "A CRM stores data. Our system actively drives meetings, sales conversations, and follow-ups."
            },
            { 
              question: "Is this right for my industry or company size?", 
              answer: "If expos are part of your sales strategy, this approach works-whether you're a startup or an established business."
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
            onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
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
