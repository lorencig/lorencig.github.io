
import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

interface SocialIconsProps {
  className?: string;
  iconSize?: number;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ 
  className,
  iconSize = 20
}) => {
  return (
    <div className={`flex space-x-6 items-center ${className || ''}`}>
      <a 
        href="mailto:your-email@example.com" 
        className="text-foreground transition-transform duration-300 hover:translate-y-[-3px]" 
        aria-label="Email"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail size={iconSize} />
      </a>
      
      <a 
        href="https://github.com/yourusername" 
        className="text-foreground transition-transform duration-300 hover:translate-y-[-3px]" 
        aria-label="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={iconSize} />
      </a>
      
      <a 
        href="https://linkedin.com/in/yourusername" 
        className="text-foreground transition-transform duration-300 hover:translate-y-[-3px]" 
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={iconSize} />
      </a>
      
      {/* Google Scholar Icon */}
      <a 
        href="https://scholar.google.com/citations?user=yourid" 
        className="text-foreground transition-transform duration-300 hover:translate-y-[-3px]" 
        aria-label="Google Scholar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          width={iconSize} 
          height={iconSize} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 14l6.5-3.5c1.7 2.7 2.3 5.5 1.5 8.5h-16c-.8-3 -.2-5.8 1.5-8.5l6.5 3.5z" />
          <path d="M12 14l-6.5-3.5c.5-4 3-7 6.5-7s6 3 6.5 7l-6.5 3.5z" />
          <circle cx="12" cy="9" r="1" />
        </svg>
      </a>
      
      {/* ORCID Icon */}
      <a 
        href="https://orcid.org/0000-0000-0000-0000" 
        className="text-foreground transition-transform duration-300 hover:translate-y-[-3px]" 
        aria-label="ORCID"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg 
          width={iconSize} 
          height={iconSize} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
          <path d="M11 7h2v10h-2z" />
          <circle cx="12" cy="6" r="1" />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
