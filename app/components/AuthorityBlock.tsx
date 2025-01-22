import React from 'react';

const AuthorityBlock: React.FC = () => {
  const partners = [
    { name: 'Tech Partner', emoji: '💻' },
    { name: 'Manufacturing', emoji: '🏭' },
    { name: 'Healthcare', emoji: '🏥' },
    { name: 'Finance', emoji: '🏦' },
    { name: 'Education', emoji: '🎓' },
  ];

  return (
    <div className="py-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-4xl">{partner.emoji}</span>
              <span className="text-sm text-muted-foreground">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorityBlock; 