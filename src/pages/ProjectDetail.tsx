
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, Award, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Combined data from both scientific and community projects
const projectsData = [
  {
    id: 1,
    title: "NanoDB - Research Activity Data Management System",
    description: "NanoDB is a Python-based application developed to optimize the management of experimental data in research settings. Designed with flexibility in mind, it supports the collection, organization, and export of laboratory metadata across diverse research line types. Built on the FAIR principles, by ensuring clean and well-structured datasets, NanoDB also lays the foundation for integrating machine learning, enabling more advanced data analysis and modeling in future research stages.",
    fullDescription: "This project explores the use of advanced machine learning techniques to optimize the synthesis parameters for creating nanomaterials with specific desired properties. By analyzing large datasets of synthesis conditions and resulting material characteristics, the algorithm can predict the optimal conditions for producing nanomaterials with tailored properties, significantly reducing the time and resources required for experimental optimization.",
    image: "/placeholder.svg",
    tags: ["ML", "Nanoparticles", "Material Design"],
    category: "Scientific",
    date: "2023-05-15",
    status: "Ongoing",
    collaborators: ["Research Lab A", "University B"],
    methodology: "The project employs gradient boosting algorithms and neural networks trained on historical synthesis data to predict optimal parameters. The model incorporates data from multiple characterization techniques including TEM, XRD, and DLS to establish structure-property relationships.",
    results: "Initial validation shows the model can predict synthesis parameters that yield materials with target properties with an accuracy of 85%, representing a significant improvement over traditional optimization approaches.",
    nextSteps: "Further refinement of the model through additional training data and integration with automated synthesis platforms for real-time optimization."
  },
  {
    id: 2,
    title: "Drug Delivery Simulation",
    description: "Computational model for simulating drug release kinetics from various nanocarriers in different physiological environments.",
    fullDescription: "This project develops a comprehensive computational framework for predicting drug release profiles from different types of nanocarriers under various physiological conditions. The simulation incorporates factors such as nanocarrier composition, drug properties, and environmental parameters to provide accurate predictions of release kinetics, helping to optimize drug delivery system design.",
    image: "/placeholder.svg",
    tags: ["Simulation", "Pharmacokinetics", "Modeling"],
    category: "Scientific",
    date: "2022-11-03",
    status: "Completed",
    collaborators: ["Pharma Institute C", "University D"],
    methodology: "The model uses a multi-scale approach combining molecular dynamics simulations at the nanoscale with compartmental pharmacokinetic modeling at the tissue and organ level. Differential equations govern the release kinetics and are solved numerically.",
    results: "The simulation accurately predicted release profiles for five different drug-nanocarrier combinations, with an average deviation of less than 10% from experimental results across various pH and temperature conditions.",
    nextSteps: "Extension of the model to include biodegradable matrices and integration with physiologically-based pharmacokinetic (PBPK) models for whole-body simulations."
  },
  {
    id: 3,
    title: "Nanoparticle Characterization Toolkit",
    description: "Software package for automated analysis of TEM, DLS, and zeta potential data for nanoparticle characterization.",
    fullDescription: "This toolkit provides a unified platform for processing and analyzing data from multiple nanoparticle characterization techniques. It automates the analysis workflow from raw data processing to result interpretation, ensuring consistent methodology and reducing analysis time while enhancing reproducibility in nanoparticle characterization.",
    image: "/placeholder.svg",
    tags: ["Data Analysis", "Imaging", "Automation"],
    category: "Scientific",
    date: "2023-01-20",
    status: "Ongoing",
    collaborators: ["Nanotechnology Center E", "Industry Partner F"],
    methodology: "The software implements computer vision algorithms for TEM image analysis, including particle detection and size measurement. For DLS data, it applies cumulant analysis and CONTIN algorithms, while zeta potential analysis includes PALS methodology implementation.",
    results: "Testing on standardized samples showed a 70% reduction in analysis time compared to manual methods, with equivalent or improved accuracy in particle size and distribution measurements.",
    nextSteps: "Integration of machine learning approaches for improved particle detection in complex matrices and expansion to include additional characterization techniques."
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    description: "Interactive platform for exploring and visualizing complex nanomaterial characterization datasets.",
    fullDescription: "This interactive dashboard enables researchers to explore, visualize, and gain insights from complex nanomaterial characterization data. The platform supports multiple visualization modes, statistical analysis tools, and collaborative features to facilitate data sharing and interpretation across research groups.",
    image: "/placeholder.svg",
    tags: ["Visualization", "Dashboard", "Interactive"],
    category: "Community",
    date: "2022-09-10",
    status: "Active",
    collaborators: ["Open Science Initiative", "Data Visualization Group"],
    features: "Interactive scatter plots, histograms, and 3D visualizations; Statistical analysis tools; Data filtering and selection; Collaborative annotation; Export capabilities for publication-ready figures.",
    impact: "Used by over 20 research groups globally, facilitating the analysis and interpretation of nanomaterial characterization data across disciplines.",
    futureEnhancements: "Integration with public nanomaterial databases; Implementation of additional visualization techniques specific to nanomaterial morphology; Enhanced collaboration tools with version control."
  },
  {
    id: 5,
    title: "Nano-Education Platform",
    description: "Educational website explaining nanomaterial concepts through interactive visualizations and simplified models.",
    fullDescription: "This educational platform aims to make nanoscience and nanotechnology concepts accessible to students, educators, and the general public. Through interactive visualizations, simplified models, and engaging content, the platform bridges the gap between complex scientific concepts and public understanding.",
    image: "/placeholder.svg",
    tags: ["Education", "Outreach", "Web Development"],
    category: "Community",
    date: "2023-03-25",
    status: "Active",
    collaborators: ["Educational Institute G", "Science Communication Network"],
    features: "Interactive 3D models of nanomaterials; Virtual laboratory simulations; Adaptive learning paths for different educational levels; Teacher resources and lesson plans; Community forum for discussions.",
    impact: "Over 5,000 monthly active users including students, educators, and science enthusiasts across 30 countries.",
    futureEnhancements: "Development of a mobile application; Integration of gamification elements; Creation of virtual reality experiences for immersive learning."
  },
  {
    id: 6,
    title: "Literature Mining Tool",
    description: "Tool for extracting synthesis parameters and characterization data from scientific publications on nanomaterials.",
    fullDescription: "This project develops an automated tool for mining scientific literature to extract structured information about nanomaterial synthesis methods and characterization results. By converting unstructured text data from publications into structured, searchable databases, the tool accelerates research by enabling rapid access to published methodologies and results.",
    image: "/placeholder.svg",
    tags: ["NLP", "Data Mining", "Research Tool"],
    category: "Community",
    date: "2022-07-18",
    status: "Active",
    collaborators: ["NLP Research Lab H", "Open Knowledge Foundation"],
    features: "Automated extraction of synthesis protocols, parameters, and results; Named entity recognition for nanomaterial concepts; Relationship extraction between materials, methods, and properties; Structured database creation; API access for programmatic queries.",
    impact: "Database currently contains information extracted from over 10,000 publications, saving researchers hundreds of hours in literature review time.",
    futureEnhancements: "Expansion of the extraction capabilities to include reaction mechanisms and theoretical models; Integration with laboratory notebook systems for seamless information flow."
  }
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "0");
  
  const project = projectsData.find((p) => p.id === projectId);
  
  if (!project) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Project not found</h1>
          <Button asChild className="mt-4">
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }
  
  const isScientific = project.category === "Scientific";
  
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        {/* Background abstract shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4 group">
              <Link to="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  isScientific ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                }`}>
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center text-muted-foreground">
                  <span>{project.date}</span>
                  <span className="mx-2">•</span>
                  <span className={`${
                    project.status === "Completed" ? "text-green-500" : "text-blue-500"
                  }`}>{project.status}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="aspect-video w-full">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg mb-6">{project.fullDescription}</p>
                  
                  <Tabs defaultValue="details">
                    <TabsList className="backdrop-blur-sm bg-background/30 p-1 rounded-lg">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      {isScientific && <TabsTrigger value="methodology">Methodology</TabsTrigger>}
                      {isScientific && <TabsTrigger value="results">Results</TabsTrigger>}
                      {!isScientific && <TabsTrigger value="features">Features</TabsTrigger>}
                      {!isScientific && <TabsTrigger value="impact">Impact</TabsTrigger>}
                    </TabsList>
                    
                    <TabsContent value="details" className="pt-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">Tags</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <Badge key={tag} className="bg-white/10 backdrop-blur-sm">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Collaborators</h3>
                          <ul className="list-disc ml-5">
                            {project.collaborators?.map((collaborator, index) => (
                              <li key={index} className="text-muted-foreground">{collaborator}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                    
                    {isScientific && (
                      <TabsContent value="methodology" className="pt-6">
                        <p className="text-muted-foreground">{project.methodology}</p>
                      </TabsContent>
                    )}
                    
                    {isScientific && (
                      <TabsContent value="results" className="pt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold">Results</h3>
                          <p className="text-muted-foreground">{project.results}</p>
                          
                          <h3 className="font-semibold">Next Steps</h3>
                          <p className="text-muted-foreground">{project.nextSteps}</p>
                        </div>
                      </TabsContent>
                    )}
                    
                    {!isScientific && (
                      <TabsContent value="features" className="pt-6">
                        <p className="text-muted-foreground">{project.features}</p>
                      </TabsContent>
                    )}
                    
                    {!isScientific && (
                      <TabsContent value="impact" className="pt-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold">Impact</h3>
                          <p className="text-muted-foreground">{project.impact}</p>
                          
                          <h3 className="font-semibold">Future Enhancements</h3>
                          <p className="text-muted-foreground">{project.futureEnhancements}</p>
                        </div>
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-card/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 sticky top-6">
                <h3 className="text-xl font-semibold mb-6">Project Highlights</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500/10 p-2 rounded-lg">
                      <Rocket className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Status</h4>
                      <p className="text-muted-foreground">{project.status}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500/10 p-2 rounded-lg">
                      <Award className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Category</h4>
                      <p className="text-muted-foreground">{project.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-500/10 p-2 rounded-lg">
                      <Star className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Date</h4>
                      <p className="text-muted-foreground">{project.date}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-medium mb-4">Related Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-white/5">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projectsData
                .filter(p => p.id !== projectId)
                .slice(0, 4)
                .map(relatedProject => (
                  <Link 
                    key={relatedProject.id} 
                    to={`/projects/${relatedProject.id}`} 
                    className="group bg-card/30 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-blue-500/30 transition-all"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedProject.image} 
                        alt={relatedProject.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
                        relatedProject.category === "Scientific" 
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" 
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                      }`}>
                        {relatedProject.category}
                      </span>
                      <h3 className="font-semibold group-hover:text-blue-500 transition-colors">{relatedProject.title}</h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectDetail;
