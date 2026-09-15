import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Target, BookOpen, ExternalLink, GraduationCap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';
import { PERSON } from '@/lib/site';

const PhDProject = () => {
  const projectDetails = {
    title: "Continuous-Flow Synthesis & Automation of Magnetic Nanoparticles",
    subtitle: "Reproducible, scalable, and data-driven nanomaterials synthesis for biomedical applications",
    duration: "2024 - 2028",
    university: "The Open University, UK",
    location: "Italian Institute of Technology, Italy",
    supervisors: [
      "Dr. Teresa Pellegrino",
      "Dr. Ing. Niccolò Silvestri",
      "Prof. Ali Abou-Hassan", 
      "Prof. Nicola Tirelli"
    ],
    status: "In Progress"
  };

  const objectives = [
    "Develop continuous-flow systems for reproducible and scalable synthesis of magnetic nanoparticles.",
    "Understand how synthesis conditions affect nanoparticle size, shape, yield, composition, and magnetic properties.",
    "Automate reaction control and experimental data collection to improve reproducibility.",
    "Develop surface coatings and hybrid nanoparticle systems for biomedical applications.",
    "Connect synthesis conditions, characterization results, and experimental metadata in a structured dataset.",
    "Use experimental data to map the design space and guide future experiments.",
    "Evaluate nanoparticles for magnetic hyperthermia and Magnetic Particle Imaging.",
  ];

  /*
   * Available methodology statuses:
   * - Completed: Work fully achieved, proof of concept demonstrated
   * - Validated: Results reproduced and protocols stabilized
   * - Validated / Under Optimization: Validated platform still being refined
   * - Established / Under Optimization: Platform in place, still being refined
   * - In Progress: Actively being developed/optimized
   * - In Development: Early build-out of systems/workflows
   * - Ongoing: Continuous refinement or long-term experiments
   * - Initiated: First steps/trials started, not yet optimized
   * - Planning: Designed but not yet started
   */
  const methodology = [
    {
      phase: "Continuous-Flow Synthesis",
      status: "Established / Under Optimization",
      description: [
        "I develop continuous-flow thermal-decomposition systems and study how temperature, residence time, precursor composition, and flow conditions affect nanoparticle formation.",
        "Current work focuses on improving reproducibility, shape control, and yield.",
      ],
    },
    {
      phase: "Process Automation",
      status: "In Development",
      description: [
        "I develop systems to control fluid handling, reaction conditions, experimental logging, and data collection.",
        "The goal is to reduce manual work and make experiments more reproducible and easier to compare.",
      ],
    },
    {
      phase: "Surface Modification",
      status: "In Progress",
      description: [
        "I transfer magnetic nanoparticles into water using different surface coatings and evaluate their colloidal stability and suitability for biomedical applications.",
      ],
    },
    {
      phase: "Nanoparticle Assembly",
      status: "Validated",
      description: [
        "I develop hybrid systems that combine magnetic nanoparticles with other functional components for multimodal imaging and therapy.",
      ],
    },
    {
      phase: "Magnetic Characterization",
      status: "Ongoing",
      description: [
        "I study the magnetic and heating performance of the nanoparticles and relate these properties to their size, shape, and structure.",
      ],
    },
    {
      phase: "Magnetic Particle Imaging",
      status: "Ongoing",
      description: [
        "I develop MPI workflows to characterize and quantify magnetic nanoparticles.",
        "This includes MPI relaxometry, image analysis, tracer comparison, post-processing, and quantitative imaging.",
      ],
    },
    {
      phase: "Biomedical Evaluation",
      status: "Ongoing",
      description: [
        "I evaluate nanoparticle stability and functional performance for biomedical applications, together with collaborators working on biological and therapeutic validation.",
      ],
    },
    {
      phase: "Experimental Data Management",
      status: "In Development",
      description: [
        "I organize synthesis conditions, characterization results, protocols, and sample history in a structured database.",
        "This makes experiments easier to reproduce, compare, and analyze computationally.",
      ],
    },
    {
      phase: "Data-Driven Optimization",
      status: "In Development",
      description: [
        "I use the experimental dataset to understand which synthesis parameters control nanoparticle properties.",
        "The workflow is moving from design-space analysis toward Gaussian-process modelling and Bayesian sequential experimental design.",
      ],
    },
  ];

  const keyFindings = [
    {
      title: "Continuous-Flow Nanoparticle Synthesis",
      description: [
        "Built and established a continuous-flow platform for magnetic nanoparticle synthesis.",
        "Current work focuses on reproducibility, shape control, yield, and understanding how reactor conditions affect the final nanoparticles.",
      ],
    },
    {
      title: "Controlled Nanoparticle Morphology",
      description: [
        "Systematically studied how reaction conditions affect nanoparticle size and shape, including precursor chemistry, temperature, residence time, and flow configuration.",
      ],
    },
    {
      title: "Hybrid Nanomaterial Systems",
      description: [
        "Demonstrated the formation of hybrid assemblies combining magnetic nanoparticles with additional functional components, including systems investigated for combined magnetic hyperthermia and photothermal applications.",
      ],
    },
    {
      title: "Magnetic Particle Imaging",
      description: [
        "Developed workflows for MPI relaxometry and quantitative image analysis, including tracer comparison, image post-processing, and nanoparticle quantification.",
      ],
    },
    {
      title: "Experimental Data & Automation",
      description: [
        "Developed software tools to organize synthesis conditions, characterization results, protocols, metadata, and sample history.",
        "The goal is to make experiments easier to reproduce and create datasets that can be used for computational analysis.",
      ],
    },
    {
      title: "Toward Data-Driven Experimentation",
      description: [
        "Building a workflow in which experimental data help guide the next experiments.",
        "Current work focuses on design-space analysis, with Gaussian-process modelling and Bayesian sequential experimental design as the next steps.",
        "Experiment → Data → Model → Next Experiment",
      ],
    },
  ];

  const methodologyStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return { dot: "bg-green-600", badge: "bg-green-100 text-green-800 border-green-200" };
      case "Validated":
        return { dot: "bg-blue-600", badge: "bg-blue-100 text-blue-800 border-blue-200" };
      case "Validated / Under Optimization":
      case "Established / Under Optimization":
        return { dot: "bg-sky-600", badge: "bg-sky-100 text-sky-800 border-sky-200" };
      case "In Progress":
        return { dot: "bg-orange-600", badge: "bg-orange-100 text-orange-800 border-orange-200" };
      case "In Development":
        return { dot: "bg-teal-600", badge: "bg-teal-100 text-teal-800 border-teal-200" };
      case "Ongoing":
        return { dot: "bg-purple-600", badge: "bg-purple-100 text-purple-800 border-purple-200" };
      case "Initiated":
        return { dot: "bg-yellow-600", badge: "bg-yellow-100 text-yellow-800 border-yellow-200" };
      default:
        return { dot: "bg-gray-500", badge: "bg-gray-100 text-gray-800 border-gray-200" };
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <PageLayout>
      <SEO
        title="Automated Flow Synthesis of Magnetic Nanoparticles"
        description="PhD research on continuous-flow synthesis of magnetic nanoparticles and iron oxide nanoparticles, laboratory automation, data-driven experimentation, Bayesian experimental design, Magnetic Particle Imaging, and magnetic hyperthermia."
        path="/phd-project"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: projectDetails.title,
          description:
            "PhD research on continuous-flow synthesis and automation of magnetic nanoparticles for biomedical applications, including laboratory automation, data-driven experimentation, Magnetic Particle Imaging, and magnetic hyperthermia.",
          author: {
            "@type": "Person",
            name: PERSON.name,
            url: PERSON.sameAs[0],
          },
          about: [
            "continuous-flow synthesis of magnetic nanoparticles",
            "iron oxide nanoparticles",
            "laboratory automation",
            "data-driven experimentation",
            "Magnetic Particle Imaging",
            "magnetic hyperthermia",
          ],
        }}
      />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
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
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Magnetic nanoparticles can be used for applications such as magnetic hyperthermia, Magnetic Particle Imaging, drug delivery, and multimodal therapy.
                  </p>
                  <p>
                    Their performance strongly depends on how they are produced. Changes in temperature, reaction time, precursor composition, flow rate, or surface chemistry can affect nanoparticle size, shape, magnetic properties, and biomedical performance.
                  </p>
                  <p>
                    My PhD focuses on developing continuous-flow methods for the synthesis of iron oxide and related magnetic nanoparticles.
                  </p>
                  <p>
                    Flow reactors give better control over reaction conditions and can improve reproducibility, automation, and scale-up compared with conventional batch synthesis.
                  </p>
                  <p>
                    My work goes beyond nanoparticle synthesis. I also develop the experimental and digital systems around the reaction.
                  </p>
                  <p>
                    I use fluidic systems to control the synthesis, software to record experimental conditions and characterization results, and structured datasets to connect synthesis parameters with nanoparticle properties.
                  </p>
                  <p>
                    The next step is to use these data to understand the experimental design space, build predictive models, and select better experiments.
                  </p>
                  <p>
                    The long-term goal is to move from manually optimized synthesis toward automated and data-driven experimentation.
                  </p>
                </div>
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
                  {methodology.map((phase, index) => {
                    const statusClass = methodologyStatusClass(phase.status);
                    return (
                    <div key={index} className="relative">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-4 h-4 rounded-full ${statusClass.dot}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{phase.phase}</h4>
                            <Badge className={`${statusClass.badge} w-fit`}>
                              {phase.status}
                            </Badge>
                          </div>
                          <div className="space-y-3 text-muted-foreground">
                            {phase.description.map((paragraph, paragraphIndex) => (
                              <p key={paragraphIndex}>{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                      {index < methodology.length - 1 && (
                        <div className="absolute left-2 top-6 w-px h-12 bg-border" />
                      )}
                    </div>
                    );
                  })}
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
                        <div className="space-y-2">
                          <h4 className="text-foreground font-semibold">{finding.title}</h4>
                          {finding.description.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex} className="text-muted-foreground text-sm leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
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