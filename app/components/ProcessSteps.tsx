import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from 'next/image';
import { 
  Search, Bot, Handshake,
  QrCode, Mic, Pencil,
  Lock, Zap, DollarSign, Quote
} from 'lucide-react';

interface ProcessStepProps {
  title: string;
  subtitle: string;
  bullets: { title: string; description: string; icon: React.ElementType }[];
  imageSrc: string;
  position: 'left' | 'right';
  imageDescription: string;
  testimonial?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  subtitle,
  bullets,
  imageSrc,
  position,
  imageDescription,
}) => {
  const ContentSide = (
    <div className="w-full sm:w-1/2">
      <Card className="card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {bullets.map((bullet, index) => {
              const Icon = bullet.icon;
              return (
                <li key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <Icon className="w-full h-full text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold">{bullet.title}</span>
                    <span className="text-muted-foreground">{bullet.description}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 flex flex-col items-center">
            <Button 
              size="lg"
              variant="turquoise"
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
            >
              👉 Book a Free Expo Strategy Call
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              So Your Next Event Pays for Itself
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ImageSide = (
    <div className="hidden sm:block w-full sm:w-1/2">
      <div className="relative h-[600px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={`${title} - ${imageDescription}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={85}
        />
      </div>
    </div>
  );

  return (
    <div className={`relative sm:flex sm:items-center ${position === 'right' ? 'sm:justify-end' : ''} gap-8`}>
      {position === 'left' ? (
        <>
          {ContentSide}
          {ImageSide}
        </>
      ) : (
        <>
          {ImageSide}
          {ContentSide}
        </>
      )}
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      title: "Win Before the Expo Even Starts",
      subtitle: "Pre-event preparation is key to maximizing your ROI",
      bullets: [
        {
          title: "Identify your highest-value prospects",
          description: "We scrape attendee lists, LinkedIn, and industry databases to surface decision-makers.",
          icon: Search
        },
        {
          title: "Pre-qualify leads before the event",
          description: "Focus on buyers, not tire-kickers.",
          icon: Bot
        },
        {
          title: "Lock in meetings in advance",
          description: "Targeted outreach ensures you arrive with a packed calendar.",
          icon: Handshake
        }
      ],
      imageSrc: "/screenshots/lead_scoring.png",
      imageDescription: "ExpoConvert's intelligent lead scoring dashboard showing prospect qualification and prioritization for expo success",
      testimonial: "These guys craft personalized strategies that consistently convert leads into revenue."
    },
    {
      title: "Capture and Organize Leads Instantly",
      subtitle: "No more manual data entry or lost business cards",
      bullets: [
        {
          title: "Real-time CRM sync",
          description: "Leads captured at expos integrate seamlessly into your existing CRM and sales workflow - no disruptions.",
          icon: QrCode
        },
        {
          title: "Ditch the business card chaos",
          description: "Snap a photo, send it to Slack - your leads are instantly logged.",
          icon: Mic
        },
        {
          title: "Speak, don't type",
          description: "Voice notes are transcribed and structured automatically for follow-up.",
          icon: Pencil
        }
      ],
      imageSrc: "/screenshots/iphone_no_bg.png",
      imageDescription: "ExpoConvert's mobile app interface showcasing business card scanning and voice memo features for effortless lead capture at expos",
      testimonial: "In a market saturated with AI-generated copy-and-paste pitches, it's refreshing to work with a team that prioritizes genuine human connections and delivers measurable outcomes."
    },
    {
      title: "Follow-Up That Turns Leads Into Deals",
      subtitle: "Convert more leads with strategic follow-up",
      bullets: [
        {
          title: "No more \"just checking in\" emails",
          description: "Follow-ups are strategic, timely, and tailored.",
          icon: Lock
        },
        {
          title: "Seamless handoff to your sales team",
          description: "Qualified leads go straight to closers.",
          icon: Zap
        },
        {
          title: "Proven system for turning conversations into contracts",
          description: "No leads left behind.",
          icon: DollarSign
        }
      ],
      imageSrc: "/screenshots/saas_unibox.png",
      imageDescription: "ExpoConvert's unified inbox and automation dashboard for streamlined post-expo lead follow-up and deal closing",
      testimonial: "Finally - a solution that understands sales is driven by trust and authentic interactions, not automated spam. Highly recommended for sales leaders who care about genuine results."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-12">How It Works</h2>
        
        <div className="relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative">
                {/* Timeline line for each step */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-4 top-0 h-full w-[2px] bg-primary sm:left-1/2 sm:-ml-[1px] hidden sm:block" />
                )}
                
                <ProcessStep
                  title={step.title}
                  subtitle={step.subtitle}
                  bullets={step.bullets}
                  imageSrc={step.imageSrc}
                  position={index % 2 === 0 ? 'left' : 'right'}
                  imageDescription={step.imageDescription}
                />
              </div>
              
              {step.testimonial && (
                <div className="relative z-10 w-full my-16">
                  <div className="max-w-4xl mx-auto px-6">
                    <div className="relative p-8 rounded-lg border-2 border-[#2DBDAD] shadow-sm">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-primary" />
                      <p className="text-lg italic text-foreground leading-relaxed text-center pt-4">
                        {step.testimonial}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps; 