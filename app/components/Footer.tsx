import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[hsl(var(--background))] border-t border-[hsl(var(--border))] text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto py-8 px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            <p>Tech Noir Global Inc.</p>
            <p>4713 Greenleaf Court, Suite B, Modesto, CA 95356, USA</p>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Tech Noir Global Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
