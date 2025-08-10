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
                <span>Fellow Researcher - Italian Institute of Technology</span>
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
                  Developing advanced nanomaterials and scalable production methods for a targeted cancer therapy known as Magnetic Hyperthermia.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Pi className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Designing and building continuous flow systems that make complex chemical processes more efficient and reproducible.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Creating custom software that integrates and automates the entire scientific workflow, from data management to analysis.                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <DraftingCompass className="h-5 w-5 md:h-6 md:w-6 text-[#F33C04] mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base text-muted-foreground">
                  Leading complex technical and organizational projects from the initial idea through to successful, real-world completion.                  </p>
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
            Hello! 👋 I'm Lorenci Gjurgjaj. As a PhD researcher at the Istituto Italiano di Tecnologia and The Open University, my work centers on a core challenge in nanotechnology:  how to produce advanced materials for a targeted cancer therapy known as Magnetic Hyperthermia, while solving the key issues of consistency, scale, and sustainability.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            My approach combines a foundation in chemistry with a practical passion for building my own tools. To solve these challenges of scale and reproducibility, I develop automated continuous-flow systems, write custom software for data management, and build digitally-controlled workflows from the ground up.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            This drive to build and manage complex systems has shaped my entire career. Prior to my doctoral studies, I had the opportunity to lead several large-scale initiatives. I steered the complete digital transformation of an academic institution and managed the successful launch of a new Master's program, handling its full scope from initial planning and logistics to securing collaborations with key industry partners.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-center md:text-justify">
            Ultimately, I'm motivated by the process of finding a solution, whether it's rooted in a chemical reaction, a piece of code, or a collaborative team project.
            </p>
            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-xl font-medium mb-4">Connect</h3>
              <SocialIcons iconSize={28} />
            </div>
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