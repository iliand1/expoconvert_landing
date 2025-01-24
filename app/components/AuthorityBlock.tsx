import React from 'react';
import Image from 'next/image';

const AuthorityBlock: React.FC = () => {
  const partners = [
    { name: '22', logo: '/client_logo/22.png' },
    { name: '1001', logo: '/client_logo/1001.png' },
    { name: 'Converted Image', logo: '/client_logo/converted_image.png' },
    { name: 'Group 138', logo: '/client_logo/Group_138 (1).png' },
    { name: 'Metric', logo: '/client_logo/metric.png' },
    { name: 'Robotmia', logo: '/client_logo/robotmialogo-ffffff-p-500.png' },
  ];

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
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