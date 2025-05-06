
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import SocialIcons from '@/components/SocialIcons';
import PageLayout from '@/components/PageLayout';
import { Beaker, Brain, Database, Code } from 'lucide-react';
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

const Index: React.FC = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-32 container px-4 md:px-6 mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
              PhD Candidate in <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Nanochemistry</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              Integrating scientific research with data science and programming to advance nanomaterials for biomedical applications.
            </p>
            <div className="flex space-x-4 pt-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-all">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="rounded-full border-2">
                <Link to="/publications">Publications</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-purple-500/10 flex items-center justify-center p-8 animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="bg-background/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Research Focus</h2>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-3">
                  <Beaker className="h-6 w-6 text-blue-500 mt-1" />
                  <p className="text-muted-foreground">
                    Novel nanomaterial synthesis for drug delivery
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="h-6 w-6 text-violet-500 mt-1" />
                  <p className="text-muted-foreground">
                    Advanced computational models for nanoscience
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="h-6 w-6 text-purple-500 mt-1" />
                  <p className="text-muted-foreground">
                    Data-driven optimization of material properties
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="h-6 w-6 text-blue-600 mt-1" />
                  <p className="text-muted-foreground">
                    Scientific software development for research workflows
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          
          <div className="max-w-3xl mx-auto bg-background/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-white/10">
            <p className="text-lg mb-6 leading-relaxed">
              I am a PhD candidate specializing in Nanochemistry with a strong foundation in physical chemistry and expertise in data science. My research focuses on developing novel nanomaterials for biomedical applications, particularly in drug delivery systems and biomedical imaging.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              My cross-disciplinary approach combines traditional wet-lab research with cutting-edge computational methods. I develop algorithms and software tools that enable more efficient analysis of experimental data, prediction of nanomaterial properties, and optimization of synthesis parameters. This unique integration of scientific knowledge with programming skills allows me to tackle complex problems in nanomaterial research from multiple perspectives.
            </p>

            <div className="mt-12 flex flex-col items-center">
              <h3 className="text-xl font-medium mb-4">Connect With Me</h3>
              <SocialIcons iconSize={28} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/projects">View All</Link>
            </Button>
          </div>
          
          <div className="mt-8">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent>
                {featuredProjects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <ProjectCard {...project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8">
                <CarouselPrevious className="static translate-y-0 ml-0" />
                <CarouselNext className="static translate-y-0 mr-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Recent Publications */}
      <section className="py-24 bg-gradient-to-t from-background to-secondary/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Recent Publications</h2>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/publications">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPublications.map((publication, index) => (
              <PublicationItem key={index} {...publication} />
            ))}
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
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-1 ${
          category === "Scientific" ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300" : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
        }`}>
          {category}
        </span>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
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
    <Card className="bg-card/50 backdrop-blur-sm border border-border/50 hover:shadow-md transition-all">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="font-medium">{authors}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between text-sm">
          <span className="font-medium text-blue-600 dark:text-blue-400">{journal}</span>
          <span className="text-muted-foreground">{year}</span>
        </div>
      </CardContent>
    </Card>
  );
};

// Sample data for featured projects
const featuredProjects = [
  {
    title: "Nanomaterial Synthesis Optimizer",
    category: "Scientific",
    image: "/placeholder.svg",
    description: "Algorithm for predicting optimal synthesis parameters for targeted nanomaterials."
  },
  {
    title: "Drug Delivery Simulation",
    category: "Scientific",
    image: "/placeholder.svg",
    description: "Computational model for simulating drug release from nanocarriers in different environments."
  },
  {
    title: "Data Visualization Dashboard",
    category: "Community",
    image: "/placeholder.svg",
    description: "Interactive platform for exploring nanomaterial characterization data."
  },
  {
    title: "ML-powered Property Prediction",
    category: "Scientific",
    image: "/placeholder.svg",
    description: "Machine learning models to predict physical properties of novel nanomaterials."
  }
];

// Sample data for recent publications
const recentPublications = [
  {
    title: "Novel Synthesis Method for Gold Nanorods with Enhanced Stability for Biomedical Applications",
    authors: "Your Name, Collaborator A, Collaborator B",
    journal: "Journal of Nanomaterials",
    year: 2023
  },
  {
    title: "Machine Learning Approaches to Predict Nanoparticle Toxicity from Physicochemical Properties",
    authors: "Your Name, Collaborator C",
    journal: "ACS Nano",
    year: 2022
  },
  {
    title: "Data-Driven Optimization of Liposomal Drug Delivery Systems",
    authors: "Collaborator D, Your Name, Collaborator E",
    journal: "Advanced Drug Delivery Reviews",
    year: 2021
  },
  {
    title: "Computational Framework for Designing Nanomaterials with Targeted Properties",
    authors: "Your Name, Collaborator F, Collaborator G",
    journal: "Nature Communications",
    year: 2023
  }
];

export default Index;
