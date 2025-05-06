
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-20 py-10 border-t border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">About</h3>
            <p className="text-muted-foreground">
              PhD Candidate in Nanochemistry with expertise in data science,
              algorithm development, and software tools for biomedical applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link to="/publications" className="text-muted-foreground hover:text-foreground transition-colors">Publications</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact</h3>
            <p className="text-muted-foreground">
              Please reach out via the social links or email for collaborations,
              research discussions, or any queries.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} PhD Researcher. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Built with React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
