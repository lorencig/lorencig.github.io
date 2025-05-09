
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

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
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background elements for futuristic effect */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Projects Portfolio</h1>
            <p className="text-lg text-muted-foreground backdrop-blur-sm bg-background/30 p-3 rounded-lg inline-block">
              Exploring the intersection of nanochemistry and data science through research and innovation.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="backdrop-blur-sm bg-background/30 p-1 rounded-xl">
                <TabsTrigger value="all" onClick={() => setActiveCategory("all")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A10100] data-[state=active]:to-[#F33C04] data-[state=active]:text-white rounded-lg">All Projects</TabsTrigger>
                <TabsTrigger value="scientific" onClick={() => setActiveCategory("scientific")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A10100] data-[state=active]:to-[#F33C04] data-[state=active]:text-white rounded-lg">Scientific</TabsTrigger>
                <TabsTrigger value="community" onClick={() => setActiveCategory("community")} className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A10100] data-[state=active]:to-[#F33C04] data-[state=active]:text-white rounded-lg">Community</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Scientific Projects</h2>
              <ProjectGrid projects={scientificProjects} category="Scientific" />
              
              <h2 className="text-2xl font-semibold mb-8 mt-16 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Community Projects</h2>
              <ProjectGrid projects={communityProjects} category="Community" />
            </TabsContent>
            
            <TabsContent value="scientific" className="mt-0">
              <ProjectGrid projects={scientificProjects} category="Scientific" />
            </TabsContent>
            
            <TabsContent value="community" className="mt-0">
              <ProjectGrid projects={communityProjects} category="Community" />
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
  category: "Scientific" | "Community";
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, category }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} category={category} />
      ))}
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  category: "Scientific" | "Community";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, category }) => {
  return (
    <Link to={`/projects/${project.id}`} className="group">
      <div className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40 h-full transform group-hover:translate-y-[-5px]">
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                category === "Scientific" ? "bg-[#ADCDFF] text-[#3a86ff] dark:bg-[#ADCDFF] dark:text-[#3a86ff]" : "bg-[#DCC7FA] text-[#8338ec] dark:bg-[#DCC7FA] dark:text-[#8338ec]"
              }`}>
                {category}
              </span>
            </div>
          </AspectRatio>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F33C04]">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="bg-white/10 backdrop-blur-sm text-xs">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-[#F33C04] opacity-0 group-hover:opacity-100 transition-opacity">
            <span>View details</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
