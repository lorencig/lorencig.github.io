// ProjectDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, Award, Star, ExternalLink } from 'lucide-react'; // Added ExternalLink
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectData } from '@/common/types';
import { allProjectsData as globalAllProjectsData, getProjectById } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  // ... (useState, useEffect, loading, error handling - no changes here) ...
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [otherProjects, setOtherProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id);
      setLoading(true);
      setError(null);
      const foundProject = getProjectById(projectId);

      if (foundProject) {
        setProject(foundProject);
        const related = globalAllProjectsData
          .filter(p => p.id !== projectId)
          .slice(0, 4);
        setOtherProjects(related);
        setLoading(false);
      } else {
        setError("Project not found or failed to load.");
        setLoading(false);
        setProject(null);
      }
    } else {
      setError("No project ID provided.");
      setLoading(false);
    }
  }, [id]);


  if (loading) {
    return <PageLayout><div>Loading project details...</div></PageLayout>;
  }

  if (error || !project) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">{error || "Project not found"}</h1>
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
        {/* ... (Background abstract shapes) ... */}
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

            <div className="flex flex-col md:flex-row md:items-start md:justify-between"> {/* Changed items-center to items-start */}
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  isScientific ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                }`}>
                  {project.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                <div className="flex items-center text-muted-foreground mb-4"> {/* Added mb-4 here */}
                  <span>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span className={`${
                    project.status === "Completed" ? "text-green-500" : project.status === "Ongoing" || project.status === "Active" ? "text-blue-500" : "text-yellow-500"
                  }`}>{project.status}</span>
                </div>

                {project.doi && (
                  <div className="mb-6">
                    <a
                      href={`https://doi.org/${project.doi}`} // Construct the full URL here
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors hover:opacity-90 break-all"
                      style={{ backgroundColor: '#B0E8E2', color: '#257E76' }}
                      title={`View publication at doi.org/${project.doi}`} // Updated tooltip
                    >
                      <span className="mr-1">DOI:</span>
                      {project.doi} {/* Display the stored DOI identifier directly */}
                      <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0" />
                    </a>
                  </div>
                )}
                 {/* --- END DISPLAY DOI LINK --- */}

              </div>
            </div>
          </div>

          {/* ... (Rest of the component: grid, image, tabs, sidebar, other projects) ... */}
          {/* Make sure this part is still structured correctly after adding the DOI section */}
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
                      {isScientific && project.methodology && <TabsTrigger value="methodology">Methodology</TabsTrigger>}
                      {isScientific && project.results && <TabsTrigger value="results">Results & Next Steps</TabsTrigger>}
                      {!isScientific && project.features && <TabsTrigger value="features">Features</TabsTrigger>}
                      {!isScientific && project.impact && <TabsTrigger value="impact">Impact & Future</TabsTrigger>}
                    </TabsList>

                    <TabsContent value="details" className="pt-6">
                      <div className="space-y-6"> {/* Increased spacing */}
                        

                        {project.collaborators && project.collaborators.length > 0 && (
                          <div>
                            <h3 className="font-semibold mb-2">Collaborators</h3>
                            <ul className="list-disc ml-5">
                              {project.collaborators.map((collaborator, index) => (
                                <li key={index} className="text-muted-foreground">{collaborator}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.repositoryUrl && (
                          <div>
                            <h3 className="font-semibold mb-2">Repository</h3>
                            <a
                              href={project.repositoryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline break-all"
                            >
                              {project.repositoryUrl}
                            </a>
                          </div>
                        )}

                        {project.keyTechnologies && project.keyTechnologies.length > 0 && (
                          <div>
                            <h3 className="font-semibold mb-2">Key Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.keyTechnologies.map(tech => (
                                <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-200">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.fundingSource && (
                            <div>
                                <h3 className="font-semibold mb-2">Funding</h3>
                                <p className="text-muted-foreground">{project.fundingSource}</p>
                            </div>
                        )}
                      </div>
                    </TabsContent>
                    
                    {isScientific && project.methodology && (
                      <TabsContent value="methodology" className="pt-6">
                        <p className="text-muted-foreground whitespace-pre-line">{project.methodology}</p>
                      </TabsContent>
                    )}
                    
                    {isScientific && project.results && (
                      <TabsContent value="results" className="pt-6">
                        <div className="space-y-4">
                          {project.results && <>
                            <h3 className="font-semibold">Results</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{project.results}</p>
                          </>}
                          {project.nextSteps && <>
                            <h3 className="font-semibold mt-4">Next Steps</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{project.nextSteps}</p>
                          </>}
                        </div>
                      </TabsContent>
                    )}
                    
                    {!isScientific && project.features && (
                      <TabsContent value="features" className="pt-6">
                         <p className="text-muted-foreground whitespace-pre-line">{project.features}</p>
                      </TabsContent>
                    )}
                    
                    {!isScientific && project.impact && (
                       <TabsContent value="impact" className="pt-6">
                        <div className="space-y-4">
                          {project.impact && <>
                            <h3 className="font-semibold">Impact</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{project.impact}</p>
                          </>}
                          {project.futureEnhancements && <>
                            <h3 className="font-semibold mt-4">Future Enhancements</h3>
                            <p className="text-muted-foreground whitespace-pre-line">{project.futureEnhancements}</p>
                          </>}
                        </div>
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
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
                      <h4 className="font-medium">Date Initiated</h4>
                      <p className="text-muted-foreground">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
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
          
          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProjects.map(relatedProject => (
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
          )}

        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectDetail;