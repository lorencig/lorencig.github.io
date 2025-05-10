import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';
import { ProjectData } from '@/common/types';
import { allProjectsData } from '@/data/projects';

const Projects: React.FC = () => {
  // Control the Tabs value explicitly
  const [activeTab, setActiveTab] = useState<string>("all");
  const location = useLocation();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    // Reset to "all" tab on initial load
    setActiveTab("all");
  }, [location.pathname]); // Trigger on route change

  const scientificProjects = useMemo(() =>
    allProjectsData.filter(p => p.category === "Scientific"),
    []
  );

  const communityProjects = useMemo(() =>
    allProjectsData.filter(p => p.category === "Community"),
    []
  );

  return (
    <PageLayout>
      <section className="py-12 md:py-20 relative overflow-hidden">
        {/* Background elements */}
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

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="backdrop-blur-sm bg-background/30 p-1 rounded-xl">
                <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A10100] data-[state=active]:to-[#F33C04] data-[state=active]:text-white rounded-lg">All Projects</TabsTrigger>
                <TabsTrigger value="scientific" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A10100] data-[state=active]:to-[#F33C04] data-[state=active]:text-white rounded-lg">Scientific</TabsTrigger>
                <TabsTrigger value="community" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#A10100] data-[state=active]:to-[#F33C04] data-[state=active]:text-white rounded-lg">Community</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="mt-0">
              <h2 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Scientific Projects</h2>
              <ProjectGrid projects={scientificProjects} />
              
              <h2 className="text-2xl font-semibold mb-8 mt-16 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Community Projects</h2>
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

interface ProjectGridProps {
  projects: ProjectData[];
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
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="group">
      <div className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40 h-full transform group-hover:translate-y-[-5px] flex flex-col">
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <img 
              src={project.image} 
              alt={project.title} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                project.category === "Scientific" ? "bg-[#ADCDFF] text-[#3a86ff] dark:bg-[#ADCDFF] dark:text-[#3a86ff]" : "bg-[#DCC7FA] text-[#8338ec] dark:bg-[#DCC7FA] dark:text-[#8338ec]"
              }`}>
                {project.category}
              </span>
            </div>
          </AspectRatio>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F33C04]">{project.title}</h3>
          <p className="text-muted-foreground mb-4 text-sm flex-grow">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="bg-white/10 backdrop-blur-sm text-xs">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center text-sm font-medium text-[#F33C04] opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
            <span>View details</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;