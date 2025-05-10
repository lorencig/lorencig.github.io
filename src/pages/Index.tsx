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
            <div className="flex space-x-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-[#A10100] to-[#F33C04] hover:opacity-90 transition-all">
                <Link to="/projects" onClick={scrollToTop}>View Projects</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="rounded-full border-2">
                <Link to="/publications" onClick={scrollToTop}>Publications</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-blue-500/10 to-[#F33C04]/20 flex items-center justify-center p-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="bg-background/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Research Focus</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-3">
                  <Atom className="h-6 w-6 text-[#F33C04] mt-1" />
                  <p className="text-muted-foreground">
                  Scalable Synthesis of Magnetic and Inorganic Nanoparticles
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Pi className="h-6 w-6 text-[#F33C04] mt-1" />
                  <p className="text-muted-foreground">
                  Design, Modeling, and Assembly of Fluidic Systems for Chemical Processes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="h-6 w-6 text-[#F33C04] mt-1" />
                  <p className="text-muted-foreground">
                  Automation and Software Solutions for Chemical Research Workflows
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <DraftingCompass className="h-6 w-6 text-[#F33C04] mt-1" />
                  <p className="text-muted-foreground">
                  Machine Learning for Optimization and Predictive Modeling
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
          <p className="text-lg mb-6 leading-relaxed  text-justify">
            Greetings! 👋 I’m Lorenci Gjurgjaj. Currently, I’m pursuing my PhD at The Open University
  <img
    src="/flags/gb.svg"
    alt="Great Britain Flag"
    className="inline-block h-5 w-auto mx-1 align-middle"
  /> within the IIT Open University Affiliated Research Centre. My primary focus is on advancing research at the intersection of nanomaterials and biomedical applications. Specifically, I’m based at the <a href="https://nanobio.iit.it/" className="underline" target="_blank" rel="noopener noreferrer">Istituto Italiano di Tecnologia</a>
  <img
    src="/flags/it.svg"
    alt="Italian Flag"
    className="inline-block h-5 w-auto mx-1 align-middle"
  /> where I’m involved in the Nanomaterials for Biomedical Applications department. Here, my work centers around the development of scalable methods for producing magnetic-inorganic nanomaterials tailored for applications in cancer theragnostics and other biomedical areas.            </p>
            <p className="text-lg mb-8 leading-relaxed text-justify">
            My academic journey began with a Master of Science degree in Chemistry, which I obtained from the Uni of Tirana
  <img
    src="/flags/al.svg"
    alt="Albanian Flag"
    className="inline-block h-5 w-auto mx-1 align-middle"
  /> and the Uni of Maribor
  <img
    src="/flags/si.svg"
    alt="Slovenian Flag"
    className="inline-block h-5 w-auto mx-1 align-middle"
  />. Additionally, I had the opportunity to visit through a Short-Term-Scientific Mobility, The Institute of Bioorganic Chemistry at the Uni of Saarland
  <img
    src="/flags/de.svg"
    alt="German Flag"
    className="inline-block h-5 w-auto mx-1 align-middle"
  />, where I focused on the bioactivity of different medicinal plant extractions.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-justify">
            Prior to embarking on my doctoral studies, I accumulated experience working in various research and industry settings. For five years, I was part of the Research Department at Ivodent Academy <img
    src="/flags/al.svg"
    alt="Albanian Flag"
    className="inline-block h-5 w-auto mx-1 align-middle"
  />. where I engaged in diverse projects spanning high-pressure applications, medical and aromatic plant extraction studies, and thermal characterization of inorganic materials. Furthermore, I gained practical experience as a product technologist for the distributor of leading scientific equipment brands such as Netzch, Sartorius, Bruker, Memmert, and Thermo Fischer in Albania.
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