import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Heart } from 'lucide-react';

const WallOfLove: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">Wall of Love</h2>
        </div>
        <p className="text-xl text-primary-foreground text-center mb-12">What our friends say about us</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Daniel Barenboym",
              role: "CEO & Founder at",
              video: true,
              testimonial: "Your browser does not support the video tag.",
              companyLink: "https://beakid.com/"
            },
            { name: "Whiskers", role: "Chief Nap Officer", testimonial: "Purr-fect outreach strategy! Now I have more time for important things, like sleeping on keyboards." },
            { name: "Nutkin", role: "Acorn Acquisition Specialist", testimonial: "This system is nuts! It's helped us gather more leads than acorns in autumn." },
          ].map((testimonial, index) => (
            <Card key={index} className="card">
              <CardHeader className="text-left">
                <div className="flex flex-col items-start space-y-2">
                  <CardTitle className="card-title text-left">{testimonial.name}</CardTitle>
                  <CardDescription className="card-content text-left">
                    {testimonial.role}
                    {testimonial.companyLink && (
                      <a href={testimonial.companyLink} target="_blank" rel="noopener noreferrer" className="ml-1 text-primary hover:underline">
                        BeAKid
                      </a>
                    )}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-left">
                {testimonial.video ? (
                  <div>
                    <video 
                      className="w-full rounded-lg" 
                      controls
                      preload="metadata"
                      poster="/images/daniel_snapshot.jpg"
                    >
                      <source src="/videos/daniel_bar.mp4" type="video/mp4" />
                      {testimonial.testimonial}
                    </video>
                  </div>
                ) : (
                  <p className="card-content italic text-left">&quot;{testimonial.testimonial}&quot;</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WallOfLove;
