
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-4 md:px-6 mx-auto flex justify-between items-center h-16">
        <Link to="/" className="font-bold text-xl">
          PhD Researcher
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={cn(
              "relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left", 
              isActive("/") && "text-primary font-medium"
            )}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={cn(
              "relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left", 
              isActive("/projects") && "text-primary font-medium"
            )}
          >
            Projects
          </Link>
          <Link 
            to="/publications" 
            className={cn(
              "relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left", 
              isActive("/publications") && "text-primary font-medium"
            )}
          >
            Publications
          </Link>
          <Link 
            to="/blog" 
            className={cn(
              "relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left", 
              isActive("/blog") && "text-primary font-medium"
            )}
          >
            Blog
          </Link>
        </nav>
        
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
        <div className={`w-6 h-0.5 bg-foreground my-1.5 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-16 right-0 left-0 bg-background border-b border-border">
          <div className="py-4 px-4 flex flex-col space-y-4">
            <Link to="/" className="p-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/projects" className="p-2" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/publications" className="p-2" onClick={() => setIsOpen(false)}>Publications</Link>
            <Link to="/blog" className="p-2" onClick={() => setIsOpen(false)}>Blog</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
