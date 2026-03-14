import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SocialIcons from '@/components/SocialIcons';
import PageLayout from '@/components/PageLayout';
import { Atom, Code, DraftingCompass, Pi } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectData, PublicationData } from '@/common/types'; // Import common types
import { allProjectsData } from '@/data/projects';
import { allPublicationsData } from '@/data/publications'; // Import all publications data
import { Badge } from '@/components/ui/badge';
import { Calendar, GraduationCap, MapPin, Target } from 'lucide-react';

const Index: React.FC = () => {
  const featuredProjects = React.useMemo(() =>
    allProjectsData.filter(p => p.isFeatured).sort((a,b) => a.id - b.id),
    [] // allProjectsData is static
  );

  const featuredPublications = React.useMemo(() =>
    allPublicationsData
      .filter(p => p.isFeatured)
      .sort((a, b) => b.year - a.year || a.id - b.id) // Sort by year (newest first), then by ID
      .slice(0, 2), // Take the top 2 featured publications
    [] // allPublicationsData is static
  );

  // Calculate PhD research progress automatically
  const calculateResearchProgress = () => {
    const startDate = new Date('2024-04-01');
    const endDate = new Date('2028-03-31');
    const currentDate = new Date();
    
    // Ensure current date is within the project timeline
    if (currentDate < startDate) return 0;
    if (currentDate > endDate) return 100;
    
    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = currentDate.getTime() - startDate.getTime();
    
    const progressPercentage = Math.round((elapsedDuration / totalDuration) * 100);
    return Math.min(Math.max(progressPercentage, 0), 100); // Ensure between 0-100
  };

  const researchProgress = calculateResearchProgress();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 container px-4 md:px-6 mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
            <span className="bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">
              Lorenci
            </span>
            {' '}
            Gjurgjaj
          </h1>
          <div className="mt-4">
            <ul className="space-y-3">
              <li
                className="text-xl text-muted-foreground flex items-center animate-fade-in opacity-0"
                style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
              >
                <span>Researcher - Italian Institute of Technology</span>
                <img
                  src="/flags/it.svg"
                  alt="Italian Flag"
                  className="ml-2 h-5 w-auto"
                />
              </li>
              <li
                className="text-xl text-muted-foreground flex items-center animate-fade-in opacity-0"
                style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
              >
                <span>PhD Candidate - The Open University</span>
                <img
                  src="/flags/gb.svg"
                  alt="UK Flag"
                  className="ml-2 h-5 w-auto"
                />
              </li>
              <li
                className="text-xl text-muted-foreground flex items-center animate-fade-in opacity-0"
                style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
              >
                <span>Researcher, Technology PM - Ivodent Academy</span>
                <img
                  src="/flags/al.svg"
                  alt="Albanian Flag"
                  className="ml-2 h-5 w-auto"
                />
              </li>
              <li
                className="animate-fade-in opacity-0"
                style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
              >
                <div className="h-px bg-border/60 my-2"></div>
              </li>
              <li
                className="text-xl text-muted-foreground flex items-center animate-fade-in opacity-0"
                style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
              >
                <span>
                  Founder & Chairman -{" "}
                  <span className="text-2xl font-normal leading-none">
                    π⁹
                  </span>
                </span>
                <img
                  src="/flags/eu.png"
                  alt="European Flag"
                  className="ml-2 h-5 w-auto"
                />
              </li>
              <li
                className="text-xl text-muted-foreground flex items-center animate-fade-in opacity-0"
                style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
              >
                <span>co-Founder & CTO - BiOXI</span>
                <img
                  src="/flags/it.svg"
                  alt="Italian Flag"
                  className="ml-2 h-5 w-auto"
                />
              </li>
            </ul>
          </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#A10100] to-[#F33C04] hover:opacity-90 transition-all">
                <Link to="/projects" onClick={scrollToTop}>View Projects</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="rounded-full border-2">
                <Link to="/publications" onClick={scrollToTop}>Publications</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-auto min-h-[24rem] rounded-2xl bg-gradient-to-br from-blue-500/10 to-[#F33C04]/20 flex items-center justify-center p-4 md:p-8 animate-fade-in opacity-0 mt-8" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="bg-background/80 backdrop-blur-lg rounded-xl p-4 md:p-6 shadow-lg border border-white/10 w-full max-w-md">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Core Focus</h2>
              <div className="flex flex-col space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3">
                  <Atom className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Developing advanced nanomaterials for Magnetic Hyperthermia cancer therapy.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Designing continuous flow systems for reproducible nanomaterial synthesis at scale.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Building automatation and digital processes that integrates full scientific workflows.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <DraftingCompass className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Leading complex R&D projects from initial idea to real-world completion.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Pi className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Translating scientific research into scalable deep-tech ventures.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold italic mb-12 text-center bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Qui Sum</h2>
          <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/10">
          <p className="text-lg mb-6 leading-relaxed text-center md:text-justify">
            Hello! 👋 I'm Lorenci Gjurgjaj. As a researcher at the Istituto Italiano di Tecnologia and PhD candidate at The Open University, my work centres on a core challenge in nanotechnology: how to produce advanced materials for a targeted cancer therapy known as Magnetic Hyperthermia, while solving the key issues of consistency, scale, and sustainability.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            My approach combines a foundation in physics and chemistry with a practical passion for building my own tools. To solve these challenges of scale and reproducibility, I develop automated continuous flow systems, write custom softwares, and build digitally-controlled workflows from the ground up.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            This research has grown beyond the laboratory. I co-founded BiOXI, a deep-tech biotech spin-off of IIT, where as CTO I lead the technology roadmap, from nanoparticle engineering and device development to automated manufacturing and clinical translation. In parallel, I founded π⁹, a science-driven startup coordinating international projects across research, health, education, and industrial applications.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            This drive to build and manage complex systems has shaped my entire career. Prior to my doctoral studies, I had the opportunity to lead several large-scale initiatives: I steered the complete digital transformation of an academic institution and managed the successful launch of a new Master's programme, handling its full scope from initial planning and logistics to securing collaborations with key industry partners.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            Ultimately, I'm motivated by the process of finding a solution, whether it's rooted in a chemical reaction, a piece of code, a new company, or a collaborative team project.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-xl font-medium mb-4">Connect</h3>
              <SocialIcons iconSize={28} />
            </div>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">
              Ventures
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="relative overflow-hidden bg-card/60 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all h-full rounded-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A10100] to-[#F33C04]" />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="h-28 w-28 rounded-xl bg-background/80 border border-white/10 p-2 flex items-center justify-center">
                    <img src="/flags/BiOXI 4K.svg" alt="BiOXI logo" className="h-full w-full object-contain" />
                  </div>
                  <Badge className="bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 border-0 text-xs">
                    co-Founder & CTO
                  </Badge>
                </div>
                <CardTitle className="text-3xl mt-4">BiOXI</CardTitle>
                <CardDescription className="text-base">
                  Genoa, Italy · Spin-off
                </CardDescription>
                <p className="text-sm text-muted-foreground">Sep 2025 — Present</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-lg text-foreground/85 leading-relaxed">
                  Deep-tech biotech developing a nanoparticle-based platform for precise cancer detection and surgical guidance. Leading full technology roadmap from nanoparticle engineering, device automation, and quality control.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Cancer Theranostics</Badge>
                  <Badge variant="outline">Nanomedicine</Badge>
                  <Badge variant="outline">Medical Devices</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden bg-card/60 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all h-full rounded-2xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C63FF] to-[#8F88FF]" />
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="h-28 w-28 rounded-xl bg-background/80 border border-white/10 p-1 flex items-center justify-center overflow-hidden">
                    <img src="/flags/π9 color.png" alt="π⁹ logo" className="h-full w-full object-contain" />
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200 border-0 text-xs">
                    Founder & Chairman
                  </Badge>
                </div>
                <CardTitle className="text-3xl mt-4">π⁹</CardTitle>
                <CardDescription className="text-base">
                  Tirana & Stockholm · Science & Technology
                </CardDescription>
                <p className="text-sm text-muted-foreground">2024 — Present</p>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-lg text-foreground/85 leading-relaxed">
                  Science-driven venture builder turning frontier research into startups and scalable technologies. Our growing portfolio supports research institutions, healthcare startups, universities, and industry, with operations across Albania, Sweden, and Italy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">AI Integration</Badge>
                  <Badge variant="outline">Automation</Badge>
                  <Badge variant="outline">Data Science</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PhD Project Preview */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Doctoral Project</h2>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/phd-project" onClick={scrollToTop}>View Full Project</Link>
            </Button>
          </div>
          <div className="max-w-6xl mx-auto">
            <Card className="border-2 border-border/50 shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left side - Project info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                      In Progress
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">
                    Scalable Synthesis Of Magnetic-inorganic Nanomaterials For Biomedical Applications
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                    Smart Nanoparticles for Sustainable & Personalized Cancer Theranostics


                    </p>
                  </div>
                  
                  {/* Key details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>2024 - 2028</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>The Open University, UK</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Italian Institute of Technology, Italy</span>
                    </div>
                  </div>

                  {/* Progress indicators */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Research Progress</span>
                      <span className="font-medium">{researchProgress}% Complete</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-to-r from-[#A10100] to-[#F33C04] h-2 rounded-full" style={{ width: `${researchProgress}%` }}></div>
                    </div>
                  </div>
                </div>

                {/* Right side - Visual representation */}
                <div className="bg-gradient-to-br from-blue-500/10 to-[#F33C04]/20 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[#A10100] to-[#F33C04] rounded-full flex items-center justify-center">
                      <Target className="h-12 w-12 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-4">Research Focus</h4>
                    <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                    Cancer remains one of the most complex health challenges, demanding solutions that go beyond conventional treatments. This research explores nano magnetic materials with the unique ability to both detect and treat cancer within a single platform, opening possibilities for approaches that are at once more precise and more adaptable. The focus is on designing ways to produce these materials reliably and sustainably, while investigating how their properties can be harnessed in combination with cutting-edge imaging and therapeutic strategies. By pushing the boundaries of what these materials can do, the project aims to bring medicine closer to treatments tailored not only to the disease, but to the individual.
                    </p>
                    <Button asChild size="sm" className="bg-gradient-to-r from-[#A10100] to-[#F33C04] hover:opacity-90">
                      <Link to="/phd-project" onClick={scrollToTop}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Featured Projects</h2>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/projects" onClick={scrollToTop}>View All</Link>
            </Button>
          </div>
          <div className="mt-8">
            <Carousel
              opts={{
                align: "start",
                loop: featuredProjects.length > 2, // Loop if more items than typically visible
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredProjects.map((project) => (
                  <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                    <HomePageProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {featuredProjects.length > 1 && ( // Show controls only if multiple items
                <div className="flex justify-end gap-2 mt-8">
                  <CarouselPrevious className="static translate-y-0 ml-0" />
                  <CarouselNext className="static translate-y-0 mr-0" />
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-24 bg-gradient-to-t from-background to-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">Recent Publications</h2>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/publications" onClick={scrollToTop}>View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPublications.map((publication) => (
              <PublicationItem key={publication.id} publication={publication} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

interface HomePageProjectCardProps {
  project: ProjectData;
}

const HomePageProjectCard: React.FC<HomePageProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col">
      <div className="h-48 overflow-hidden">
        <Link to={`/projects/${project.id}`} onClick={() => window.scrollTo(0,0)}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
      <CardHeader className="pb-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${
          project.category === "Scientific" ? "bg-[#ADCDFF] text-[#3a86ff] dark:bg-[#ADCDFF] dark:text-[#3a86ff]" : "bg-[#DCC7FA] text-[#8338ec] dark:bg-[#DCC7FA] dark:text-[#8338ec]"
        }`}>
          {project.category}
        </span>
        <CardTitle className="text-xl">
          <Link to={`/projects/${project.id}`} className="hover:text-blue-500 transition-colors" onClick={() => window.scrollTo(0,0)}>
            {project.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardContent>
    </Card>
  );
};

interface PublicationItemProps {
  publication: PublicationData; // Use the common PublicationData type
}

const PublicationItem: React.FC<PublicationItemProps> = ({ publication }) => {
  const { title, authors, journal, year, doi, link } = publication;
  return (
    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md transition-all h-full flex flex-col">
      <CardHeader className="pb-2">
        {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                 <CardTitle className="text-lg">{title}</CardTitle>
            </a>
        ) : (
            <CardTitle className="text-lg">{title}</CardTitle>
        )}
        <CardDescription className="font-medium">{authors}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-[#A10100] dark:text-[#F33C04]">{journal}</span>
          <span className="text-muted-foreground">{year}</span>
        </div>
        <p className="text-xs mt-2">
          <span className="text-muted-foreground">DOI: </span>
          <a
            href={`https://doi.org/${doi}`}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {doi}
          </a>
        </p>
      </CardContent>
    </Card>
  );
};

export default Index;