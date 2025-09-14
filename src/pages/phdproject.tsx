import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, BookOpen, ExternalLink, GraduationCap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const PhDProject = () => {
  const projectDetails = {
    title: "Scalable Synthesis Of Magnetic-inorganic Nanomaterials For Biomedical Applications",
    subtitle: "Smart Nanoparticles for Sustainable & Personalized Cancer Theranostics",
    duration: "2024 - 2028",
    university: "The Open University, UK",
    location: "Italian Institute of Technology, Italy",
    supervisors: [
      "Prof. Teresa Pellegrino",
      "Prof. Ali Abou-Hassan", 
      "Prof. Nicola Tirelli"
    ],
    status: "In Progress"
  };

  const objectives = [
    "Build fluidic systems for large-scale, green, and reproducible synthesis of magnetic nanoparticles.",
    "Stabilize and functionalize nanoparticles for biocompatibility, targeted delivery, and enhanced stability.",
    "Develop hybrid nanoparticle systems that integrate multiple therapeutic modalities.",
    "Combine hyperthermia with other conventional therapies and diagnostics."
  ];

  /*
   * Available methodology statuses:
   * - Completed: Work fully achieved, proof of concept demonstrated
   * - Validated: Results reproduced and protocols stabilized  
   * - In Progress: Actively being developed/optimized
   * - Ongoing: Continuous refinement or long-term experiments
   * - Initiated: First steps/trials started, not yet optimized
   * - Planning: Designed but not yet started
   */
  const methodology = [
    {
      phase: "Fluidic Synthesis",
      description: "Continuous flow systems for scalable nanoparticle production, optimizing control of size, shape, yield, and sustainability.",
      status: "Validated"
    },
    {
      phase: "Surface Modification",
      description: "Chemical coatings and responsive polymers for stability, drug attachment, and cell targeting.",
      status: "In Progress"
    },
    {
      phase: "Nanoparticle Assembly",
      description: "Creation of stable hybrid clusters embedding dyes, molecules, or crystals for multifunctional therapy and imaging.",
      status: "Validated"
    },
    {
      phase: "Magnetic Evaluation",
      description: "Testing nanoparticle magnetic responsiveness to achieve effective hyperthermia at minimal doses.",
      status: "Ongoing"
    },
    {
      phase: "Biomedical Evaluation",
      description: "Assessing biocompatibility and performance from in vitro studies to in vivo applications.",
      status: "Initiated"
    },
    {
      phase: "AI/ML-Driven Optimization",
      description: "Use artificial intelligence and machine learning to design reactions, predict nanoparticle properties, and optimize synthesis conditions for targeted results.",
      status: "Initiated"
    }
  ];

  const keyFindings = [
    "Scalable & Reproducible Production – Proof of concept achieved using fluidic systems. Current focus on improving size/shape control and yield.",
    "Smart Assemblies – Proof of concept achieved with dye + magnetic nanoparticle assemblies, combining magnetic hyperthermia and photothermal therapy. Next steps: scale-up and exploration of new therapeutic molecule combinations.",
    "Theranostic Potential – Active work on Magnetic Particle Imaging (MPI), a next-generation imaging technology, establishing protocols and methodology for nanoparticle visualization.",
    "Digital Innovation & Data Automation – Developed software platforms for automated data collection and management of synthesis conditions, characterizations, and metadata. These tools ensure systematic reproducibility of reactions and support open science (publicly available on GitHub)."
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              {projectDetails.status}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent">
                {projectDetails.title}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {projectDetails.subtitle}
            </p>
            
            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span>{projectDetails.duration}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <GraduationCap className="h-5 w-5" />
                <span>{projectDetails.university}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{projectDetails.location}</span>
              </div>
            </div>

            {/* Supervisors Row */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                {projectDetails.supervisors.map((supervisor, index) => (
                  <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span className="text-sm md:text-base">{supervisor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {/* Project Description */}
            <Card className="border-2 border-border/50 shadow-lg hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>Project Description</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                Cancer remains one of the greatest health challenges of our time. Despite remarkable advances, many treatments still struggle with precision, often bringing difficult side effects and offering results that vary from patient to patient. If we want to make real progress, medicine needs tools that are not only more effective, but also more personal.
                <br />
                <br />
                My research takes on this challenge by working with nano magnetic materials, structures so small that comparing one particle to a human hair is like comparing a 2 euro coin to an entire football stadium (field + seats!). These materials hold the unique ability to both treat and/or diagnose cancer at the same time, an approach known as theranostics. The promise is enormous, but so are the challenges: producing these materials consistently, sustainably, and in ways that can be tailored to different patients remains a scientific frontier.
                <br />
                <br />
                Within the Nanobio Department at IIT, I am part of an exceptional team of scientists working to modestly push these boundaries. My focus is to develop new methods for producing these nanomaterials more efficiently, while also exploring how they can be combined with advanced imaging and therapeutic strategies. At the same time, I integrate in the power of artificial intelligence and machine learning, tools that allow us to predict properties, optimize performance, and design particles with the precision modern medicine demands.
                <br />
                <br />
                The broader vision driving this work is personalized medicine: treatments designed not just for a disease, but for the individual who faces it. While my contribution may be modest in the scale of this global fight, it is guided by the belief that small steps in science can help open new potentials for patients and for society.
                </p>
              </CardContent>
            </Card>
            
            {/* Research Objectives */}
            <Card className="border-2 border-border/50 shadow-lg hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Research Objectives</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {objectives.map((objective, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{objective}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Methodology */}
            <Card className="border-2 border-border/50 shadow-lg hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span>Research Methodology</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {methodology.map((phase, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-4 h-4 rounded-full ${
                            phase.status === 'Completed' ? 'bg-green-600' :
                            phase.status === 'Validated' ? 'bg-blue-600' :
                            phase.status === 'In Progress' ? 'bg-orange-600' :
                            phase.status === 'Ongoing' ? 'bg-purple-600' :
                            phase.status === 'Initiated' ? 'bg-yellow-600' :
                            'bg-gray-500'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{phase.phase}</h4>
                            <Badge className={`${
                              phase.status === 'Completed' ? 'bg-green-100 text-green-800 border-green-200' :
                              phase.status === 'Validated' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                              phase.status === 'In Progress' ? 'bg-orange-100 text-orange-800 border-orange-200' :
                              phase.status === 'Ongoing' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                              phase.status === 'Initiated' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                              'bg-gray-100 text-gray-800 border-gray-200'
                            }`}>
                              {phase.status}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                      {index < methodology.length - 1 && (
                        <div className="absolute left-2 top-6 w-px h-12 bg-border" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Findings */}
            <Card className="border-2 border-border/50 shadow-lg hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ExternalLink className="h-6 w-6 text-primary" />
                  <span>Key Findings & Results</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {keyFindings.map((finding, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border/50">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                        </div>
                        <p className="text-foreground font-medium">{finding}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Interested in Learning More?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always happy to discuss my research findings and collaborate on related projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline">
                  <Link to="/publications" onClick={scrollToTop}>
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Publications
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-gradient-to-r from-[#A10100] to-[#F33C04] hover:opacity-90">
                  <a href="mailto:lorencigjurgjaj@gmail.com?subject=Invitation for Collaboration">
                    Contact for Collaboration
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PhDProject;