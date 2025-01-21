import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Zap } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-center mb-4">
          <Zap className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Doubt Destroyer Deluxe</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            { 
              objection: "This sounds too good to be true. What's the catch?", 
              response: "The catch is you'll have to find a new excuse for not hitting your sales targets. We're eliminating the 'it's too expensive' and 'I don't know how' barriers. The rest is on you, champ."
            },
            { 
              objection: "I've been burned by agencies before. Why are you different?", 
              response: "We're not an agency, we're your personal Yoda. We teach you the ways of the Force (aka LinkedIn outreach), set up your lightsaber (tools), and then let you become the Jedi master. No ongoing fees, no dependency."
            },
            { 
              objection: "What if it doesn't work for my industry?", 
              response: "Unless you're selling air to trees, we've got you covered. Our system is adaptable to virtually any B2B scenario. If it doesn't work, we'll eat our keyboards. (Terms and conditions apply, keyboards may be gummy.)"
            },
            { 
              objection: "I'm not tech-savvy. Will I be able to handle this?", 
              response: "If you can operate a toaster, you can handle our system. We've made it so user-friendly, even your technophobe uncle could do it. (You know, the one who still uses a flip phone.)"
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
