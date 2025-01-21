import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-foreground mr-3" />
          <h2 className="text-3xl font-extrabold text-foreground text-center">About Us</h2>
        </div>
        <p className="text-xl sm:text-2xl text-primary-foreground text-center mb-12">The Dynamic Duo Behind Tech Noir Global</p>
        
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 lg:space-x-16 mb-12">
          <div className="text-center mb-12 md:mb-0 w-full md:w-1/2">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/denis.jpg" alt="Denis" />
              <AvatarFallback>DN</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold text-foreground">Denis</h3>
            <p className="text-lg text-primary-foreground mb-4">Code Whisperer & Accidental Dancer</p>
            <div className="text-foreground space-y-4">
              <p>
                Denis' superpower? Turning coffee into code that actually works (with a little help from our AI friends).
              </p>
              <p>
                In this age of AI-assisted coding, he's mastered the art of asking the right questions. It's like having a team of robot interns at his fingertips.
              </p>
              <p>
                When he's not increasing company revenues by 17x, he's teaching AI models the finer points of interpretive dance (and hoping they don't outperform him).
              </p>
            </div>
          </div>
          <div className="text-center w-full md:w-1/2">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src="/alex.jpg" alt="Alex" />
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <h3 className="text-2xl font-semibold text-foreground">Alex</h3>
            <p className="text-lg text-primary-foreground mb-4">Networking Ninja & Chief People Connector</p>
            <div className="text-foreground space-y-4">
              <p>
                Alex's superpower? Turning strangers into clients faster than you can say "LinkedIn connection" (with a dash of AI-powered charm).
              </p>
              <p>
                He's so good at networking, he once ended up with job offers from companies that weren't even hiring. Talk about creating opportunities!
              </p>
              <p>
                When he's not crafting the perfect outreach, he's teaching AI the art of making cold messages feel warm and fuzzy (without being creepy).
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="italic text-primary-foreground mb-6">
            "We're like the Avengers of lead generation, minus the capes. Denis codes faster than he dances, and Alex networks so well, he once befriended his spam folder." — The TNG Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
