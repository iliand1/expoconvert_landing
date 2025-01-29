import React from 'react';
import Image from 'next/image';

const AuthorityBlock: React.FC = () => {
  const partners = [
    { name: '22', logo: '/client_logo/22.png' },
    { name: '1001', logo: '/client_logo/1001.png' },
    { name: 'BeAKid', logo: '/client_logo/beakid.png' },
    { name: 'Labelants', logo: '/client_logo/label_ants_black_text.png' },
    { name: 'Metric', logo: '/client_logo/metric.png' },
    { name: 'Robotmia', logo: '/client_logo/robotmialogo-black text.png' },
    { name: 'You are a legend', logo: '/client_logo/you_are_a_legend.png' },
  ];

  return (
    <div className="pt-16 pb-24 bg-background/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="relative w-32 h-16 flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorityBlock; 