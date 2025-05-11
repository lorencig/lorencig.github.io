import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket, Award, Star, ExternalLink, Link2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectData } from '@/common/types';
import { allProjectsData as globalAllProjectsData, getProjectById } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [otherProjects, setOtherProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const projectId = parseInt(id);
      setLoading(true);
      setError(null);
      const foundProject = getProjectById(projectId);

      if (foundProject) {
        setProject(foundProject);
        const related = globalAllProjectsData
          .filter(p => p.id !== projectId)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setOtherProjects(related);
        setLoading(false);
      } else {
        setError(`Project with ID "${id}" not found.`);
        setLoading(false);
        setProject(null);
      }
    } else {
      setError("No project ID provided.");
      setLoading(false);
    }
  }, [id]);


  if (loading) {
    return <PageLayout><div className="container mx-auto px-4 py-16 text-center">Loading project details...</div></PageLayout>;
  }

  if (error || !project) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-red-500">{error || "Project not found"}</h1>
          <Button asChild className="mt-6">
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const isScientific = project.category === "Scientific";
  const isCommunity = project.category === "Community";

  // Function to ensure URL has a scheme (https:// by default)
  const ensureUrlScheme = (url: string): string => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  return (
    <PageLayout>
      <div className="relative overflow-hidden bg-background text-foreground">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30 rounded-full blur-3xl animate-pulse-slow pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 -right-1/4 w-full h-full bg-gradient-to-tl from-accent/5 via-transparent to-primary/5 opacity-30 rounded-full blur-3xl animate-pulse-slower pointer-events-none -z-10"></div>

        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6 group text-sm text-muted-foreground hover:text-primary">
              <Link to="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <Badge
                  variant="outline"
                  className={`text-xs font-medium mb-4 ${
                    isScientific ? "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400" :
                    isCommunity ? "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400" :
                    "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-400"
                  }`}
                >
                  {project.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">{project.title}</h1>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  {project.date && (
                    <>
                      <span>{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                    </>
                  )}
                  <span className={`font-medium ${
                    project.status === "Completed" ? "text-green-600 dark:text-green-400" :
                    project.status === "Ongoing" || project.status === "Active" || project.status === "In Progress" ? "text-blue-600 dark:text-blue-400" :
                    "text-yellow-600 dark:text-yellow-400"
                  }`}>{project.status}</span>
                </div>

                {isScientific && project.doi && (
                  <div className="mb-6">
                    <a
                      href={`https://doi.org/${project.doi}`} // DOI link is correctly formed
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors break-all bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                      title={`View publication at doi.org/${project.doi}`}
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
                      DOI: {project.doi}
                    </a>
                  </div>
                )}

                {isScientific && project.externalLink && (
                  <div className="mb-6">
                    <a
                      href={project.externalLink} // ← Corrected here
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors break-all bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      <ExternalLink className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
                      Link: {project.externalLink}
                    </a>
                  </div>
                )}

                {isCommunity && project.externalLink && (
                  <div className="mb-6">
                    <a
                      // Use the ensureUrlScheme function to prepend https:// if missing
                      href={ensureUrlScheme(project.externalLink)}
                      target="_blank" // THIS ENSURES IT OPENS IN A NEW TAB
                      rel="noopener noreferrer" // Important for security with target="_blank"
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors break-all bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-400 dark:hover:bg-emerald-800/70"
                      title={`Visit project website`}
                    >
                      <Link2 className="mr-1.5 h-3.5 w-3.5 flex-shrink-0" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Rest of the component (Tabs, Sidebar, Other Projects) remains the same */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-card/50 dark:bg-card/70 backdrop-blur-lg border border-border/30 dark:border-border/20 rounded-xl overflow-hidden shadow-sm">
                {project.image && (
                    <div className="aspect-video w-full border-b border-border/30 dark:border-border/20">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    </div>
                )}
                <div className="p-6 md:p-8">
                  {project.fullDescription && (
                    <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed prose dark:prose-invert max-w-none">
                        {project.fullDescription}
                    </p>
                  )}

<Tabs defaultValue="details" className="w-full">
  <TabsList className="flex flex-wrap w-full md:inline-flex gap-2 p-1 backdrop-blur-sm bg-muted/50 rounded-lg mb-6 h-fit"> {/* Added h-fit */}
    <TabsTrigger value="details">Details</TabsTrigger>
    {isScientific && project.methodology && <TabsTrigger value="methodology">Methodology</TabsTrigger>}
    {isScientific && (project.results || project.nextSteps) && <TabsTrigger value="results">Results & Next</TabsTrigger>}
    {!isScientific && project.features && <TabsTrigger value="features">Features</TabsTrigger>}
    {!isScientific && (project.impact || project.futureEnhancements) && <TabsTrigger value="impact">Impact & Future</TabsTrigger>}
  </TabsList>

                    <TabsContent value="details" className="pt-2">
                      <div className="space-y-6">
                        {project.collaborators && project.collaborators.length > 0 && (
                          <div>
                            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Collaborators</h3>
                            <ul className="list-disc list-inside space-y-1">
                              {project.collaborators.map((collaborator, index) => (
                                <li key={index} className="text-foreground/90">{collaborator}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {project.repositoryUrl && (
                          <div>
                            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Repository</h3>
                            <a
                              href={ensureUrlScheme(project.repositoryUrl)} // Ensure scheme for repo URL too
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline break-all flex items-center gap-1"
                            >
                              <ExternalLink size={16}/> {project.repositoryUrl.replace(/^https?:\/\//, '')}
                            </a>
                          </div>
                        )}

                        {project.keyTechnologies && project.keyTechnologies.length > 0 && (
                          <div>
                            <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Key Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                              {project.keyTechnologies.map(tech => (
                                <Badge key={tech} variant="secondary">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.fundingSource && (
                            <div>
                                <h3 className="text-sm font-semibold uppercase text-muted-foreground mb-2">Funding</h3>
                                <p className="text-foreground/90">{project.fundingSource}</p>
                            </div>
                        )}
                      </div>
                    </TabsContent>

                    {isScientific && project.methodology && (
                      <TabsContent value="methodology" className="pt-2 prose dark:prose-invert max-w-none text-muted-foreground">
                        <p className="whitespace-pre-line">{project.methodology}</p>
                      </TabsContent>
                    )}

                    {isScientific && (project.results || project.nextSteps) && (
                      <TabsContent value="results" className="pt-2 prose dark:prose-invert max-w-none text-muted-foreground">
                        <div className="space-y-4">
                          {project.results && <>
                            <h4 className="font-semibold text-foreground">Results</h4>
                            <p className="whitespace-pre-line">{project.results}</p>
                          </>}
                          {project.nextSteps && <>
                            <h4 className="font-semibold mt-4 text-foreground">Next Steps</h4>
                            <p className="whitespace-pre-line">{project.nextSteps}</p>
                          </>}
                        </div>
                      </TabsContent>
                    )}

                    {!isScientific && project.features && (
                      <TabsContent value="features" className="pt-2 prose dark:prose-invert max-w-none text-muted-foreground">
                         <p className="whitespace-pre-line">{project.features}</p>
                      </TabsContent>
                    )}

                    {!isScientific && (project.impact || project.futureEnhancements) && (
                       <TabsContent value="impact" className="pt-2 prose dark:prose-invert max-w-none text-muted-foreground">
                        <div className="space-y-4">
                          {project.impact && <>
                            <h4 className="font-semibold text-foreground">Impact</h4>
                            <p className="whitespace-pre-line">{project.impact}</p>
                          </>}
                          {project.futureEnhancements && <>
                            <h4 className="font-semibold mt-4 text-foreground">Future Enhancements</h4>
                            <p className="whitespace-pre-line">{project.futureEnhancements}</p>
                          </>}
                        </div>
                      </TabsContent>
                    )}
                  </Tabs>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 self-start">
              <div className="bg-card/50 dark:bg-card/70 backdrop-blur-lg border border-border/30 dark:border-border/20 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-6 text-foreground">Project Highlights</h3>

                <div className="space-y-5">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500/10 p-2.5 rounded-lg">
                      <Rocket className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground">Status</h4>
                      <p className="text-foreground/90">{project.status}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-purple-500/10 p-2.5 rounded-lg">
                      <Award className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground">Category</h4>
                      <p className="text-foreground/90">{project.category}</p>
                    </div>
                  </div>

                  {project.date && (
                    <div className="flex items-start space-x-3">
                        <div className="bg-orange-500/10 p-2.5 rounded-lg">
                        <Star className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                        <h4 className="text-sm font-semibold text-muted-foreground">Date Initiated</h4>
                        <p className="text-foreground/90">{new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                        </div>
                    </div>
                  )}
                </div>

                {project.tags && project.tags.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-border/30 dark:border-border/20">
                    <h4 className="text-sm font-semibold uppercase text-muted-foreground mb-3">Related Tags</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                        </Badge>
                        ))}
                    </div>
                    </div>
                )}
              </div>
            </div>
          </div>

          {/* Other Projects Section */}
          {otherProjects.length > 0 && (
            <div className="mt-16 md:mt-24 pt-12 border-t border-border/30 dark:border-border/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">Explore Other Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {otherProjects.map(relatedProject => (
                    <Link
                      key={relatedProject.id}
                      to={`/projects/${relatedProject.id}`}
                      className="group block bg-card/50 dark:bg-card/70 backdrop-blur-lg border border-border/30 dark:border-border/20 rounded-lg overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
                      onClick={() => window.scrollTo(0,0)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <Badge
                            variant="outline"
                            className={`text-xs mb-2 ${
                            relatedProject.category === "Scientific" ? "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-400" :
                            relatedProject.category === "Community" ? "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400" :
                            "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-400"
                            }`}
                        >
                            {relatedProject.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground/90 group-hover:text-primary transition-colors line-clamp-2">{relatedProject.title}</h3>
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