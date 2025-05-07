
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 py-10 border-t border-border">    
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} Lorenci Gjurgjaj. All rights reserved.
        </p>
     </footer>
  );
};

export default Footer;
