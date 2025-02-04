import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Image from 'next/image';
import { 
  Rocket, Calendar, Tablet, Target,
  Search, Bot, Handshake,
  QrCode, Mic, Pencil,
  Lock, Zap, DollarSign
} from 'lucide-react';

interface ProcessStepProps {
  title: string;
  subtitle: string;
  bullets: { title: string; description: string; icon: React.ElementType }[];
  imageSrc: string;
  position: 'left' | 'right';
  number: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  subtitle,
  bullets,
  imageSrc,
  position,
  number
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
              className="text-lg px-8 py-4 flex items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-200 text-white font-semibold"
              onClick={() => window.open('https://calendly.com/alxndalxnd/40min', '_blank')}
            >
              Get my discovery call <Rocket className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-3 text-sm text-muted-foreground">
              (no sales involved, just a friendly chat)
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ImageSide = (
    <div className="hidden sm:block w-full sm:w-1/2">
      <div className="aspect-[3/4] bg-background rounded-lg flex items-center justify-center relative overflow-hidden p-8">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain scale-100"
          sizes="(max-width: 768px) 100vw, 50vw"
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
      {/* Step indicator */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-foreground rounded-full items-center justify-center sm:left-1/2 sm:-ml-4 hidden sm:flex">
        <span className="text-background font-bold">{number}</span>
      </div>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      title: "Start winning the expo before you even arrive",
      subtitle: "The real work starts 2-3 week before the event, this is when you pre-book meetings and start networking with key accounts.",
      bullets: [
        {
          title: "Unlock the hidden goldmine",
          description: "Discover high-value prospects with precision scraping techniques that surface the right leads, every time.",
          icon: Search
        },
        {
          title: "Qualify like a pro, automatically",
          description: "Stop guessing—know which leads are worth your time before the expo even begins.",
          icon: Bot
        },
        {
          title: "Pre-event buzz that opens doors",
          description: "Warm up key accounts with outreach strategies that get your name on their calendar, not just in their inbox.",
          icon: Handshake
        }
      ],
      imageSrc: "/screenshots/lead_scoring.png",
      icon: Calendar
    },
    {
      title: "Capture every conversation that counts, effortlessly",
      subtitle: "Collecting intel during the event is key yet tedious. Our web-app makes digitising business cards and inputting information into your CRM as easy as pie.",
      bullets: [
        {
          title: "Turn chaos into clarity",
          description: "Instantly digitize stacks of business cards and keep your CRM spotless, even in the heat of the expo.",
          icon: QrCode
        },
        {
          title: "Speak, and it's done",
          description: "Record quick voice memos and watch as key details are automatically parsed and perfectly organized in your CRM.",
          icon: Mic
        },
        {
          title: "Never miss a detail",
          description: "Jot down notes on the fly, and let our system seamlessly sync them to the right lead profile—no extra steps needed.",
          icon: Pencil
        }
      ],
      imageSrc: "/screenshots/iphone_app.png",
      icon: Tablet
    },
    {
      title: "After the expo",
      subtitle: "Turn leads into deals while competitors drop the ball.",
      bullets: [
        {
          title: "Seal every opportunity",
          description: "An airtight follow-up system ensures no lead slips through the cracks—ever.",
          icon: Lock
        },
        {
          title: "Your hands-free sales engine",
          description: "Let automated sequences do the heavy lifting, keeping leads warm while you focus on what matters, so that your sales team is busy closing deals",
          icon: Zap
        },
        {
          title: "Close deals, not busywork",
          description: "Free your sales team to do what they do best—turn hot leads into revenue, fast.",
          icon: DollarSign
        }
      ],
      imageSrc: "/screenshots/saas_unibox.png",
      icon: Target
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl font-extrabold text-foreground text-center mb-4">What we do to make it happen</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-primary sm:left-1/2 sm:-ml-[1px] hidden sm:block"></div>
          
          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                title={step.title}
                subtitle={step.subtitle}
                bullets={step.bullets}
                imageSrc={step.imageSrc}
                position={index % 2 === 0 ? 'left' : 'right'}
                number={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps; 