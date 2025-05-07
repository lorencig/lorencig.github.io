
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import ThemeToggle from './ThemeToggle';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-padding max-w-7xl mx-auto flex justify-between items-center h-16">
      <Link to="/" className="text-xl hover-link">
        <span className="font-bold">Lorenci</span> Gjurgjaj
         </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn("hover-link", isActive("/") && "text-primary font-medium")}
          >
            dashboard
          </Link>
          <Link 
            to="/projects" 
            className={cn("hover-link", isActive("/projects") && "text-primary font-medium")}
          >
            projects
          </Link>
          <Link 
            to="/publications" 
            className={cn("hover-link", isActive("/publications") && "text-primary font-medium")}
          >
            publications
          </Link>
          <Link 
            to="/blog" 
            className={cn("hover-link", isActive("/blog") && "text-primary font-medium")}
          >
            thoughts
          </Link>
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
