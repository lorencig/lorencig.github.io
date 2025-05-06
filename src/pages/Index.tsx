
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SocialIcons from '@/components/SocialIcons';
import PageLayout from '@/components/PageLayout';

const Index: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
              PhD Candidate in <span className="text-blue-600">Nanochemistry</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in">
              Integrating scientific research with data science and programming to advance nanomaterials for biomedical applications.
            </p>
            <div className="flex space-x-4 pt-4 animate-fade-in">
              <Button asChild>
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/publications">Publications</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center p-8 animate-fade-in">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-semibold mb-3">Doctoral Research</h2>
              <p className="text-muted-foreground">
                Exploring novel nanomaterial synthesis methods and their applications in targeted drug delivery systems using advanced computational models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              I am a PhD candidate specializing in Nanochemistry with a strong foundation in physical chemistry and expertise in data science. My research focuses on developing novel nanomaterials for biomedical applications, particularly in drug delivery systems and biomedical imaging.
            </p>
            
            <p className="text-lg mb-6">
              My cross-disciplinary approach combines traditional wet-lab research with cutting-edge computational methods. I develop algorithms and software tools that enable more efficient analysis of experimental data, prediction of nanomaterial properties, and optimization of synthesis parameters. This unique integration of scientific knowledge with programming skills allows me to tackle complex problems in nanomaterial research from multiple perspectives.
            </p>

            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
              <SocialIcons iconSize={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-semibold">Featured Projects</h2>
            <Button variant="outline" asChild>
              <Link to="/projects">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard 
              title="Nanomaterial Synthesis Optimizer"
              category="Scientific"
              image="/placeholder.svg"
              description="Algorithm for predicting optimal synthesis parameters for targeted nanomaterials."
            />
            <ProjectCard 
              title="Drug Delivery Simulation"
              category="Scientific" 
              image="/placeholder.svg"
              description="Computational model for simulating drug release from nanocarriers in different environments."
            />
            <ProjectCard 
              title="Data Visualization Dashboard"
              category="Community" 
              image="/placeholder.svg"
              description="Interactive platform for exploring nanomaterial characterization data."
            />
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-semibold">Recent Publications</h2>
            <Button variant="outline" asChild>
              <Link to="/publications">View All</Link>
            </Button>
          </div>
          
          <div className="space-y-6">
            <PublicationItem 
              title="Novel Synthesis Method for Gold Nanorods with Enhanced Stability for Biomedical Applications"
              authors="Your Name, Collaborator A, Collaborator B"
              journal="Journal of Nanomaterials"
              year={2023}
            />
            <PublicationItem 
              title="Machine Learning Approaches to Predict Nanoparticle Toxicity from Physicochemical Properties"
              authors="Your Name, Collaborator C"
              journal="ACS Nano"
              year={2022}
            />
            <PublicationItem 
              title="Data-Driven Optimization of Liposomal Drug Delivery Systems"
              authors="Collaborator D, Your Name, Collaborator E"
              journal="Advanced Drug Delivery Reviews"
              year={2021}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

interface ProjectCardProps {
  title: string;
  category: "Scientific" | "Community";
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, description }) => {
  return (
    <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="h-48 bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
          category === "Scientific" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
        }`}>
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface PublicationItemProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
}

const PublicationItem: React.FC<PublicationItemProps> = ({ title, authors, journal, year }) => {
  return (
    <div className="p-6 border rounded-lg bg-background">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-1">{authors}</p>
      <p className="text-sm">
        <span className="font-medium">{journal}</span>, {year}
      </p>
    </div>
  );
};

export default Index;
