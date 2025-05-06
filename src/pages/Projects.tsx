
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const scientificProjects = [
    {
      id: 1,
      title: "Nanomaterial Synthesis Optimizer",
      description: "Machine learning algorithm for predicting optimal synthesis parameters for targeted nanomaterials with specific properties.",
      image: "/placeholder.svg",
      tags: ["ML", "Nanoparticles", "Material Design"]
    },
    {
      id: 2,
      title: "Drug Delivery Simulation",
      description: "Computational model for simulating drug release kinetics from various nanocarriers in different physiological environments.",
      image: "/placeholder.svg",
      tags: ["Simulation", "Pharmacokinetics", "Modeling"]
    },
    {
      id: 3,
      title: "Nanoparticle Characterization Toolkit",
      description: "Software package for automated analysis of TEM, DLS, and zeta potential data for nanoparticle characterization.",
      image: "/placeholder.svg",
      tags: ["Data Analysis", "Imaging", "Automation"]
    }
  ];

  const communityProjects = [
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive platform for exploring and visualizing complex nanomaterial characterization datasets.",
      image: "/placeholder.svg",
      tags: ["Visualization", "Dashboard", "Interactive"]
    },
    {
      id: 5,
      title: "Nano-Education Platform",
      description: "Educational website explaining nanomaterial concepts through interactive visualizations and simplified models.",
      image: "/placeholder.svg",
      tags: ["Education", "Outreach", "Web Development"]
    },
    {
      id: 6,
      title: "Literature Mining Tool",
      description: "Tool for extracting synthesis parameters and characterization data from scientific publications on nanomaterials.",
      image: "/placeholder.svg",
      tags: ["NLP", "Data Mining", "Research Tool"]
    }
  ];

  return (
    <PageLayout>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-muted-foreground">
              A collection of scientific research and community-focused projects that showcase the intersection of nanochemistry and data science.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>All Projects</TabsTrigger>
                <TabsTrigger value="scientific" onClick={() => setActiveCategory("scientific")}>Scientific</TabsTrigger>
                <TabsTrigger value="community" onClick={() => setActiveCategory("community")}>Community</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <h2 className="text-2xl font-semibold mb-8">Scientific Projects</h2>
              <ProjectGrid projects={scientificProjects} />
              
              <h2 className="text-2xl font-semibold mb-8 mt-16">Community Projects</h2>
              <ProjectGrid projects={communityProjects} />
            </TabsContent>
            
            <TabsContent value="scientific" className="mt-0">
              <ProjectGrid projects={scientificProjects} />
            </TabsContent>
            
            <TabsContent value="community" className="mt-0">
              <ProjectGrid projects={communityProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="relative">
        <AspectRatio ratio={16/9}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="object-cover w-full h-full"
          />
        </AspectRatio>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
