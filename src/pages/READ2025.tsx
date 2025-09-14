import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageLayout from "@/components/PageLayout";
import { 
  Scroll, 
  BookOpen, 
  Image, 
  Target, 
  RefreshCw, 
  ExternalLink, 
  Download, 
  Menu,
  X,
  ArrowUp,
  Calendar,
  Clock,
  Globe,
  ChevronRight,
  Quote,
  Award,
  TrendingUp,
  Zap
} from "lucide-react";

const READ2025 = () => {
  const [activeSection, setActiveSection] = useState("abstract");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);
  const [imageScale, setImageScale] = useState(1);

  const sections = [
    { id: "abstract", icon: BookOpen, label: "Abstract" },
    { id: "introduction", icon: Target, label: "Introduction" },
    { id: "methodology", icon: RefreshCw, label: "Methodology" },
    { id: "discussion", icon: Scroll, label: "Discussion" },
    { id: "results", icon: Image, label: "Results" },
    { id: "conclusion", icon: Scroll, label: "Conclusion" },
    { id: "references", icon: ExternalLink, label: "References" }
  ];

  const authors = [
    { 
      name: "Lorenci Gjurgjaj", 
      role: "Principal author and study lead"
    },
    { 
      name: "Jeta Lica", 
      role: "Co‑developer and co‑author"
    },
    { 
      name: "Fatjon Hallkaj", 
      role: "AI methodology advisor"
    },
    { 
      name: "Antonina Mema", 
      role: "Dental technician specialist"
    },
    { 
      name: "Prof. Altin Mele", 
      role: "Research director and project facilitator"
    }
  ];

  const keyStats = [
    { label: "of students reported frequent AI use for academic purposes", value: "58.5%", icon: TrendingUp },
    { label: "increase in trust in the accuracy of AI information", value: "+23%", icon: Zap },
    { label: "positive for perceived value and benefits", value: "83.3%", icon: Award },
    { label: "reduction in concerns that AI could diminish critical thinking", value: "-18%", icon: Target }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => document.getElementById(section.id));
      const currentSection = sectionElements.find(el => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openImageModal = (src: string, alt: string, caption: string) => {
    setSelectedImage({ src, alt, caption });
    setImageScale(1);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setImageScale(1);
  };

  const zoomIn = () => {
    setImageScale(prev => Math.min(prev + 0.5, 3));
  };

  const zoomOut = () => {
    setImageScale(prev => Math.max(prev - 0.5, 0.5));
  };

  const resetZoom = () => {
    setImageScale(1);
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A10100] mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading paper...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
    <div className="min-h-screen bg-background">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-[#A10100] to-[#F33C04]">
          <div 
            className="h-full bg-gradient-to-r from-[#A10100] to-[#F33C04] transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20">
          {/* Background elements (same as other pages) */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-20 left-20 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute top-1/2 left-1/4 w-1/5 h-1/5 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              {/* Badge */}
              <Badge className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#A10100] to-[#F33C04] text-white border-0 shadow-lg animate-fade-in-up">
                <Award className="w-4 h-4 mr-2" />
                Conference Paper
              </Badge>
              
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent leading-tight animate-fade-in-up">
                Retrieval-Augmented Generation (RAG) AI for Enhanced Learning in Specialized Higher Education
          </h1>
          
              {/* Subtitle */}
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
              A curated RAG teaching assistant that boosts trust, engagement, and learning outcomes in Albanian-language for dental technicians education.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up">
                <Button 
                  size="lg" 
                  className="bg-gray-400 text-gray-600 cursor-not-allowed shadow-lg transition-all duration-300"
                  disabled
                  aria-label="Download PDF (currently unavailable)"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-[#A10100] text-[#A10100] hover:bg-[#A10100]/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open('https://github.com/lorencig/READ2025/archive/refs/heads/main.zip', '_blank')}
                  aria-label="Download supplementary materials"
                >
              <ExternalLink className="mr-2 h-5 w-5" />
                  Supplementary Material
            </Button>
              </div>


              {/* Key Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-fade-in-up">
                {keyStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="p-4 bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center mb-2">
                        <Icon className="w-6 h-6 text-[#A10100]" />
                      </div>
                      <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
                    </Card>
                  );
                })}
          </div>


              {/* Author Contributions */}
              <div className="max-w-6xl mx-auto">
                <h3 className="text-lg font-semibold text-card-foreground text-center mb-6">Author Contributions</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {authors.slice(0, 3).map((author, index) => (
                    <Card key={index} className="p-6 bg-card/90 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="text-center">
                        <h4 className="font-semibold text-card-foreground text-lg mb-2">{author.name}</h4>
                        <p className="text-sm text-[#A10100] font-medium">{author.role}</p>
                      </div>
                    </Card>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 lg:flex lg:justify-center gap-6 mt-6">
                  {authors.slice(3, 5).map((author, index) => (
                    <Card key={index + 3} className="p-6 bg-card/90 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up w-full lg:max-w-sm" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                      <div className="text-center">
                        <h4 className="font-semibold text-card-foreground text-lg mb-2">{author.name}</h4>
                        <p className="text-sm text-[#A10100] font-medium">{author.role}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </section>

        {/* Section Navigation */}
        <nav className="sticky top-16 z-40 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-[#A10100] to-[#F33C04] text-white shadow-lg'
                          : 'text-muted-foreground hover:text-[#A10100] hover:bg-accent'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{section.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-muted-foreground hover:bg-accent transition-all duration-300"
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="lg:hidden py-4 border-t border-border">
                <h3 className="text-sm font-semibold text-card-foreground mb-3 px-2">Navigate to Section</h3>
                <div className="grid grid-cols-1 gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 w-full text-left ${
                    activeSection === section.id
                            ? 'bg-gradient-to-r from-[#A10100] to-[#F33C04] text-white'
                            : 'text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="h-4 w-4 flex-shrink-0" />
                        <span className="text-sm font-medium">{section.label}</span>
                </button>
              );
            })}
          </div>
              </div>
            )}
        </div>
      </nav>

      {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Abstract */}
            <section id="abstract" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                    <BookOpen className="h-6 w-6 text-[#A10100]" />
            Abstract
                </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                <div className="prose prose-lg max-w-none">
                    <p className="text-foreground leading-relaxed text-justify text-justify">
                    Artificial intelligence (AI) is transforming the way students engage with their studies, influencing both learning behaviors and access to academic content. Large language models (LLMs) have become common tools in students&apos; study routines. However, generic LLMs often underperform in highly specialized fields, particularly when it comes to delivering contextually accurate information and domain-specific terminology in underrepresented languages such as Albanian. Consequently, this draws attention to the role of educational institutions to ensure that AI tools used in academic settings provide accurate, context-aware, and accessible information.
                    </p>
                    <p className="text-foreground leading-relaxed text-justify text-justify">
                    Hence, to address these limitations, we introduce Prof. Ivo, an innovative Retrieval-Augmented Generation (RAG) AI developed using the curated literature database of Ivodent Academy, a higher education institute focused on dental techniques. Prof. Ivo was built to address both students' strong preference for academic content in Albanian (77.36%) and their study habits, as 58.5% reported frequent use of LLMs for academic purposes. Fifty-three student volunteers evaluated their learning experience with Prof. Ivo compared to traditional literature and a widely used general LLM (ChatGPT), across key educational criteria: understanding, focus, engagement, and text completion. In addition, the study assessed changes in students' perceptions of AI before and after interacting with Prof. Ivo. Results showed a 23-point increase in trust in the accuracy of AI information and an 18-point reduction in concerns about AI potentially diminishing critical thinking. High scores in ease of use (87.95%) and perceived value (83.33%) further demonstrated its successful integration. In conclusion, this work highlights RAG&apos;s effectiveness in enhancing student learning and offers a compelling model for domain-specific, linguistically inclusive AI in higher education.
                    </p>

                    {/* Optional highlighted block (keep or remove) */}
                    <div className="mt-8 bg-gradient-to-r from-[#A10100]/10 to-[#F33C04]/10 p-6 rounded-lg border-l-4 border-[#A10100]">
                    <Quote className="h-6 w-6 text-[#A10100] mb-2" />
                    <p className="text-foreground font-medium italic text-justify">
                        Prof. Ivo, a curated RAG system grounded in Ivodent Academy's literature, improved student trust in AI by 23 points and reduced concerns about AI diminishing critical thinking by 18 points, while achieving high marks in ease of use (87.95%) and perceived value (83.33%).
            </p>
          </div>
                </div>
                </CardContent>
            </Card>
        </section>


        {/* Introduction */}
            <section id="introduction" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                    <Target className="h-6 w-6 text-[#A10100]" />
            Introduction
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">1.1. The Digital Revolution in Dental Technology</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    The field of dental technology is in the midst of a profound and rapid transformation. For decades, it was a discipline rooted in manual artistry, relying on analog techniques for the creation of dental prosthetics. Within the last decades, however, the industry has undergone a sweeping digital revolution. Workflows that were once entirely manual are now dominated by technologies such as CAD/CAM (Computer-Aided Design/Computer-Aided Manufacturing), 3D printing, and intraoral scanning. This accelerated shift presents a significant challenge for vocational and higher education institutions, which must adapt their curricula to prepare students for a technology-driven workplace that is fundamentally different from that of a decade ago [4]. This educational gap creates an urgent need for innovative tools that can help students master complex, rapidly evolving digital concepts.
                    </p>

                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">1.2. The Double-Edged Sword of AI in Education</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-4">
                    Contemporaneous with this industry shift, the landscape of education has been reshaped by the rise of Artificial Intelligence, particularly Large Language Models (LLMs). Tools like ChatGPT have become commonplace, integrating themselves into students&apos; study routines. Our own preliminary survey confirms this trend, revealing that 58.5% of dental technician students frequently use AI tools for academic purposes. However, the reliance on these generalist models presents a double-edged sword. While useful for broad tasks, they suffer from significant limitations in specialized domains, creating two critical gaps:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                    <li>
                        <span className="font-semibold">The Content Gap:</span> Generic LLMs, trained on vast digital internet data, often lack the precise, domain-specific accuracy required for technical and medical fields. They are prone to “hallucinations” or providing plausible but incorrect information, a risk that is unacceptable when dealing with clinical and technical subject matter [5, 6].
                    </li>
                    <li>
                        <span className="font-semibold">The Language Gap:</span> Educational innovation must be inclusive. In many regions, students learn most effectively in their native language [7]. Yet, high-quality technical content in underrepresented languages such as Albanian is scarce in the training data of major LLMs. Our survey underscores this need, with 88.68% of students expressing a strong preference for academic content in Albanian.
                    </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">1.3. A Proposed Solution: “Prof. Ivo,” a Curated RAG System</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    To address these limitations, we turned to a more robust and tailored AI architecture: Retrieval-Augmented Generation (RAG). At a high level, a RAG system functions like an expert with an open, trusted textbook, first retrieving relevant, factual information before generating an answer. This architecture is uniquely suited to overcome the accuracy and specificity challenges in specialized education [6].
                    </p>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    <span className="font-semibold">Indexing:</span> The institution&apos;s curated literature database was segmented into smaller, manageable chunks. OpenAI&apos;s “text-embedding-3-large” model was used to convert each chunk into a numerical vector representation. These vectors were then stored and indexed in Pinecone vector database (DB), creating a highly efficient, searchable knowledge base.
                    </p>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    <span className="font-semibold">Retrieval and Generation:</span> When a student submits a query, it is also vectorized using the same dimensions. The system performs a similarity search in Pinecone DB to retrieve the most relevant chunks of text. These retrieved chunks, along with the original query, are then passed to a Large Language Model (LLM). For the period during which this study was conducted, the system utilized Google&apos;s “Gemini-2.0-flash” model. At the time of this paper&apos;s publication (October 2025), the system has been upgraded to use the “Gemini-2.5-flash” model. The LLM&apos;s task is to synthesize a precise and contextually grounded answer based only on the expert-validated information provided.
                    </p>

                    {/* Figure 1 */}
                    <div className="my-8">
                        <img 
                            src="/images/read2025/figure1.png" 
                            alt="Figure 1: RAG System Architecture and Student Learning Flow" 
                            className="w-full rounded-lg shadow-lg border border-border"
                        />
                        <div className="mt-2 space-y-1">
                            <p className="text-sm text-muted-foreground text-center italic">
                                Figure 1: Indexing (left) The initial, one-time setup involves creating a searchable knowledge base. The institution's curated literature is ingested and segmented into smaller, semantically coherent chunks. An embedding model then converts each chunk into a numerical vector, which is stored and indexed in a specialized vector database. 
                            </p>
                            <p className="text-sm text-muted-foreground text-center italic">
                                Figure 2: Retrieval & Generation (right) When a student asks a question, the query is converted into a vector. The system performs a similarity search in the vector database to retrieve the most relevant chunks of text from the original literature. These retrieved chunks (the context) and the original query are then passed to a Large Language Model, which synthesizes a final, grounded answer based solely on the expert-validated information it was provided.
                            </p>
                        </div>
                    </div>

                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    This paper introduces “Prof. Ivo,” an innovative RAG-based learning assistant developed at Ivodent Academy. By building upon this technical foundation and the institution&apos;s own literature, the system ensures that all information provided to students is accurate, context-aware, and aligned with their curriculum, delivered entirely in the Albanian language.
                    </p>

                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">1.4. Research Objectives</h3>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Present the development and implementation of “Prof. Ivo”, a curated RAG-based AI assistant designed for a specialized, multilingual educational context.
                    </li>
                    <li>
                        Empirically benchmark its content quality in a blind comparative analysis against traditional literature and a generic LLM (ChatGPT, model “GPT 4o”), specifically testing its performance and robustness across varying levels of topic complexity.
                    </li>
                    <li>
                        Holistically assess its impact on the student experience, measuring shifts in trust and perceptions of AI&apos;s role in education, alongside a direct evaluation of the application&apos;s usability and perceived value.
                    </li>
            </ul>
          </div>
                </CardContent>
            </Card>
        </section>


        {/* Methodology */}
            <section id="methodology" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                    <RefreshCw className="h-6 w-6 text-[#A10100]" />
            Methodology
                </CardTitle>
                </CardHeader>
                <CardContent>
          <div className="space-y-8">

                    {/* 2. Methodology lead-in */}
                    <div>
                    <p className="text-foreground leading-relaxed text-justify">
                        This section details the research design, participant demographics, data collection instruments, and the analytical procedures used to evaluate the “Prof. Ivo” application.
                    </p>
                    </div>

                    {/* 2.1 Participant Characteristics and Data Validation */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">2.1. Participant Characteristics and Data Validation</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        The study was conducted with students enrolled at Ivodent Academy, a higher education institute focused on dental techniques. An open invitation to participate resulted in an initial cohort of 71 student volunteers. After a data validation process to screen for inconsistent responses, a final, reliable dataset of 53 valid responses was established (Supplemental Information, Appendix C: Results).
                    </p>

                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Demographic Profile</h4>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        The validated cohort of 53 students had a mean age of 23.24 years (Standard Deviation = 5.07). The group comprised 64.15% females and 35.85% males. Most participants (71.7%) were enrolled in the 3‑year “Teknikë e Lartë Dentare” program, while 28.3% were in the 2‑year “Teknikë Dentare” program. Distribution by academic year: 32.08% first‑year, 50.94% second‑year, and 16.98% third‑year. On the Albanian 4–10 GPA scale, 69.44% reported 7–8.9 and 22.22% reported 9–10.
                    </p>

                    <h4 className="text-lg font-semibold text-card-foreground mb-2">Baseline Academic Habits and Perceptions</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>
                        <span className="font-semibold">Language Preference:</span> 64.15% rated the availability of academic information in Albanian as highly important (4–5 on a 5‑point scale).
                        </li>
                        <li>
                        <span className="font-semibold">Digital and AI Literacy:</span> 67.92% rated themselves highly capable with computers and the internet; 58.49% reported high knowledge/experience with general AI tools.
                        </li>
                        <li>
                        <span className="font-semibold">Information Source Preferences:</span> AI tools were the most frequently used resource, with 58.5% reporting high‑frequency use, surpassing Google (54.7%) and traditional books/printed materials (35.8%). See Figure 3 for visualization and grouping criteria (“High Frequency” = 4–5; “Low Frequency” = 1–2).
                        </li>
                    </ul>

                    {/* Figure 3 placeholder (optional) */}
                    <figure className="my-6">
                        <img
                        src="/images/read2025/figure3.png"
                        alt="Figure 3: Frequency of use for academic information sources"
                        className="rounded-lg border border-border shadow-md w-full"
                        />
                        <figcaption className="text-sm text-muted-foreground mt-2">
                        Figure 3: Frequency of use for academic information sources. High Frequency = Often (4) + Very Often (5); Low Frequency = Never (1) + Rarely (2).
                        </figcaption>
                    </figure>
                    </div>

                    {/* 2.2 Study Design and Instruments */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">2.2. Study Design and Instruments</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        A direct questioning approach was employed using a comprehensive questionnaire (“Supplemental Information, Appendix B: PYETËSOR PËR STUDENTËT”) to capture quantitative and qualitative insights. Sources, prompts, and generation parameters for the nine text samples are documented in Appendix A: Sources and Prompts for Blind Comparative Analysis. The study comprised three parts:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6 bg-gradient-to-br from-[#A10100]/10 to-[#F33C04]/10 border border-border">
                        <h4 className="text-lg font-semibold text-[#A10100] mb-2">Part 1: Baseline</h4>
                        <p className="text-foreground text-sm">
                            Pre‑interaction survey capturing demographics, digital literacy, technology usage, and initial AI perceptions on a 5‑point Likert scale.
                        </p>
                        </Card>
                        <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-border">
                        <h4 className="text-lg font-semibold text-purple-600 mb-2">Part 2: Blind Test</h4>
                        <p className="text-foreground text-sm">
                            Comparative evaluation of nine unlabeled text samples from Literature, ChatGPT, and Prof. Ivo across three topics (Easy “Dhëmbët prerës”, Medium “Linja AH”, Advanced “Kurba Spee”). Ratings on Comprehensibility, Focus, Engagement, and Text Completion (5‑point Likert).
                        </p>
                        </Card>
                        <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-border">
                        <h4 className="text-lg font-semibold text-green-600 mb-2">Part 3: Post‑Use</h4>
                        <p className="text-foreground text-sm">
                            Post‑interaction survey reassessing AI attitudes and directly evaluating Prof. Ivo using SUS‑inspired items and metrics of perceived value, quality, and trustworthiness.
                        </p>
                        </Card>
                    </div>
                    </div>

                    {/* 2.3 Data Analysis and Availability */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">2.3. Data Analysis and Availability</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-4">
                        Likert‑scale responses were recoded into three categories for primary analysis: Favorable (4–5: “Pajtohem” / “Shpesh” and “Pajtohem plotësisht” / “Shumë shpesh”), Neutral (3: “Ndonjëherë”), and Unfavorable (1–2: “Nuk pajtohem aspak” / “Asnjëherë” and “Nuk pajtohem” / “Rrallë”). These categorical percentages enabled clear comparison across sources and conditions.
                    </p>
                    <p className="text-foreground leading-relaxed text-justify mb-4">
                        Subgroup analyses by self‑reported gender and digital literacy confirmed that trends were consistent across groups, supporting result robustness. Visualizations are provided in Supplementary Information, Appendix D: Subgroup Analysis.
                    </p>
                    <p className="text-foreground leading-relaxed text-justify">
                        In line with best practices for transparency and reproducibility, the complete, anonymized raw dataset will be made available in an online repository, adhering to the FAIR (Findable, Accessible, Interoperable, Reusable) principles.
              </p>
            </div>

          </div>
                </CardContent>
            </Card>
        </section>


        {/* Discussion */}
        <section id="discussion" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                        <Scroll className="h-6 w-6 text-[#A10100]" />
                        Discussion
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        The results of this study provide strong evidence that a well-designed, domain-specific Retrieval-Augmented Generation (RAG) system can serve as a highly effective educational tool in a specialized field like dental technology. The findings not only demonstrate the superior performance of our application, "Prof. Ivo," but also shed light on its profound impact on student perceptions of AI. This section interprets these findings and discusses their broader implications for AI in higher education.
                    </p>

                    <div className="space-y-8">
                        {/* 4.1 From Skepticism to Partnership */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#A10100] mb-4">4.1. From Skepticism to Partnership</h3>
                            <p className="text-foreground leading-relaxed text-justify mb-4">
                                One of the most significant findings of this study is the dramatic, twofold increase in students' trust in the accuracy of AI, coupled with a direct 80.2% positive rating for Prof. Ivo's own trustworthiness. We argue that this is a direct consequence of the RAG architecture. Unlike generalist LLMs, which can "hallucinate" and draw from the unvetted expanse of the internet, Prof. Ivo's knowledge is transparently grounded in the institution's own curated and expert-validated literature.
                            </p>
                            <p className="text-foreground leading-relaxed text-justify mb-4">
                                Students, who initially approached AI with warranted skepticism (only 20.8% trusted its accuracy), experienced a tool that was consistently reliable and factually correct. This reliable performance, proven in the blind comparative analysis, transformed their perception of AI from an unreliable source into a trustworthy academic partner. This suggests that for educational institutions to successfully integrate AI, building trust is paramount, and a curated RAG approach is a highly effective method for achieving it.
                            </p>
                        </div>

                        {/* 4.2 Augmenting Critical Thinking */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#A10100] mb-4">4.2. Augmenting Critical Thinking</h3>
                            <p className="text-foreground leading-relaxed text-justify mb-4">
                                A pervasive fear in education is that AI tools will inhibit the development of critical thinking skills. Our findings present a strong counter-narrative. The percentage of students concerned about this issue dropped from 45.3% to 27.1% after using Prof. Ivo. We posit that this is because the tool functioned not as a "thinking replacement" but as a "cognitive load reducer."
                            </p>
                            <p className="text-foreground leading-relaxed text-justify mb-4">
                                The blind tests revealed that students found Prof. Ivo's content to be significantly more focused and comprehensible than both dense academic literature and the often verbose outputs of ChatGPT. By delivering precise, relevant, and easy-to-digest information, the tool automated the lower-order cognitive tasks of searching, sifting, and deciphering information. This did not make students lazy; rather, it freed up their mental bandwidth to engage in higher-order cognitive processes such as analysis, synthesis, and application, the very essence of critical thinking.
                            </p>
                        </div>

                        {/* 4.3 A Blueprint for Inclusive and Effective Educational AI */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#A10100] mb-4">4.3. A Blueprint for Inclusive and Effective Educational AI</h3>
                            <p className="text-foreground leading-relaxed text-justify mb-4">
                                The success of "Prof. Ivo", a tool built for a specific domain and in a specific language (Albanian), offers a replicable blueprint for the future of AI in education. This study makes a strong case that the most impactful educational AI will not be monolithic, one-size-fits-all models, but rather tailored systems co-designed with educational institutions. By combining the reasoning power of LLMs with the curated, expert knowledge of educators, it is possible to create tools that are not only accurate but also linguistically inclusive and pedagogically sound. The consistent performance of Prof. Ivo across different genders and levels of digital literacy further underscores that this approach can lead to equitable and broadly beneficial educational technologies.
                            </p>
                        </div>

                        {/* 4.4 Limitations */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#A10100] mb-4">4.4. Limitations</h3>
                            <p className="text-foreground leading-relaxed text-justify mb-4">
                                While the results are highly encouraging, we acknowledge the limitations of this study. The study was conducted with a cohort from a single institution, which may limit generalizability. The intervention period, while impactful, does not allow for conclusions about long-term usage patterns or effects. Finally, the "novelty effect", where users are initially more engaged with a new technology, may have influenced some of the positive perception ratings. Future work should aim to conduct a longitudinal study with a larger, more diverse population and include a direct control group to further validate these findings.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        {/* Results */}
        <section id="results" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                    <Image className="h-6 w-6 text-[#A10100]" />
            Results & Analysis
                </CardTitle>
                </CardHeader>
                <CardContent>
          <div className="space-y-8">

                    {/* 3. Results intro */}
            <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-6">Overview of Findings</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        Quantitative results are based on 53 validated student responses and are presented in three parts: shifts in AI perceptions, direct user evaluation of “Prof. Ivo,” and an objective comparative analysis against traditional literature and a generic LLM.
                    </p>
                    </div>

                    {/* 3.1 Perception shift */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-6">3.1. Shift in AI Perceptions</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        After using “Prof. Ivo,” trust in the accuracy of AI information more than doubled (from 20.8% to 43.8%). Concerns that AI might diminish critical thinking decreased markedly (from 45.3% to 27.1%). Comfort using AI rose by 6 points to 83.3%, and excitement about AI’s potential increased by 7 points to 78.7%.
                    </p>

                    {/* Figure 4 */}
                    <div className="my-6">
                        <img
                        src="/images/read2025/figure4.png"
                        alt="Bar chart showing pre/post changes in student AI perceptions: trust increased from 20.8% to 43.8%, concerns about critical thinking decreased from 45.3% to 27.1%, comfort rose to 83.3%, and excitement increased to 78.7%"
                        className="rounded-lg border border-border shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
                        onClick={() => openImageModal(
                            "/images/read2025/figure4.png",
                            "Bar chart showing pre/post changes in student AI perceptions",
                            "Figure 4: Pre/post changes in trust, concerns about critical thinking, comfort, and excitement following interaction with 'Prof. Ivo.'"
                        )}
                        />
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
                        Figure 4: Pre/post changes in trust, concerns about critical thinking, comfort, and excitement following interaction with "Prof. Ivo."
                        </p>
                    </div>

                    {/* KPI cards */}
                    <div className="grid md:grid-cols-4 gap-6 mb-2">
                        <Card className="p-6 text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-border">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">+23 pts</div>
                        <div className="text-sm text-muted-foreground">Trust in AI accuracy</div>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-border">
                        <div className="text-3xl font-bold text-rose-600 mb-2">−18 pts</div>
                        <div className="text-sm text-muted-foreground">Concern about critical thinking</div>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-sky-500/10 to-indigo-500/10 border border-border">
                        <div className="text-3xl font-bold text-sky-600 mb-2">83.3%</div>
                        <div className="text-sm text-muted-foreground">Comfort using AI</div>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-border">
                        <div className="text-3xl font-bold text-amber-600 mb-2">78.7%</div>
                        <div className="text-sm text-muted-foreground">Excitement about AI</div>
                        </Card>
                    </div>
                    </div>

                    {/* 3.2 User experience evaluation */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-6">3.2. Direct Evaluation of “Prof. Ivo”</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        Students rated the application highly across key metrics: Ease of Use & User Experience 88.0%, Perceived Value & Benefits 83.3%, Quality/Accuracy/Trustworthiness 80.2%, and Purpose of Use & Recommendation 85.9%. Negative feedback was minimal, indicating successful adoption and alignment with student needs.
                    </p>

                     {/* Figure 5 */}
                     <div className="my-6">
                         <img
                         src="/images/read2025/figure5.png"
                         alt="Figure 5: User evaluation of Prof. Ivo"
                         className="rounded-lg border border-border shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
                         onClick={() => openImageModal(
                             "/images/read2025/figure5.png",
                             "Figure 5: User evaluation of Prof. Ivo",
                             "Figure 5: Ratings for usability, value, trustworthiness, and recommendation."
                         )}
                         />
                         <p className="text-sm text-muted-foreground mt-2 text-center italic">
                         Figure 5: Ratings for usability, value, trustworthiness, and recommendation.
                         </p>
                     </div>

                    {/* KPI cards */}
                    <div className="grid md:grid-cols-4 gap-6">
                        <Card className="p-6 text-center bg-gradient-to-br from-[#A10100]/10 to-[#F33C04]/10 border border-border">
                        <div className="text-3xl font-bold text-[#A10100] mb-2">88.0%</div>
                        <div className="text-sm text-muted-foreground">Ease of use & UX</div>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-border">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">83.3%</div>
                        <div className="text-sm text-muted-foreground">Perceived value</div>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-border">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">80.2%</div>
                        <div className="text-sm text-muted-foreground">Quality & trust</div>
                        </Card>
                        <Card className="p-6 text-center bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-border">
                        <div className="text-3xl font-bold text-teal-600 mb-2">85.9%</div>
                        <div className="text-sm text-muted-foreground">Recommend to others</div>
                        </Card>
                    </div>
                    </div>

                    {/* 3.3 Comparative content quality */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-6">3.3. Comparative Content Quality</h3>
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                        In a blind test versus traditional Literature and ChatGPT, “Prof. Ivo” achieved the highest average scores across all criteria: Comprehensibility 78.4%, Focus 81.7%, Engagement 76.7%, and Text Completion 86.6%. Literature scored lowest on Focus (69.3%), while ChatGPT’s lowest metric was Comprehensibility (71.5%).
                    </p>

                     {/* Figure 6 */}
                     <div className="my-6">
                         <img
                         src="/images/read2025/figure6.png"
                         alt="Figure 6: Average performance across all difficulty levels"
                         className="rounded-lg border border-border shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
                         onClick={() => openImageModal(
                             "/images/read2025/figure6.png",
                             "Figure 6: Average performance across all difficulty levels",
                             "Figure 6: Average performance across Comprehensibility, Focus, Engagement, and Text Completion for Literature, ChatGPT, and 'Prof. Ivo.'"
                         )}
                         />
                         <p className="text-sm text-muted-foreground mt-2 text-center italic">
                         Figure 6: Average performance across Comprehensibility, Focus, Engagement, and Text Completion for Literature, ChatGPT, and "Prof. Ivo."
                         </p>
                     </div>
                    </div>

                    {/* 3.4 Breakdown by metric and difficulty */}
                    <div>
                    <h3 className="text-xl font-semibold text-[#A10100] mb-6">3.4. Metric-Level Performance by Difficulty</h3>
                    <div className="space-y-6">
                        <div>
                        <h4 className="text-lg font-semibold text-card-foreground">Comprehensibility</h4>
                        <p className="text-foreground leading-relaxed text-justify">
                            “Prof. Ivo” led or performed highly across topics; notably, it scored 70.8% on the Medium concept “Linja AH,” outperforming ChatGPT’s lowest score of 56.3% on the same topic due to domain-appropriate, literature-grounded context.
                        </p>
                        </div>
                        <div>
                        <h4 className="text-lg font-semibold text-card-foreground">Focus</h4>
                        <p className="text-foreground leading-relaxed text-justify">
                            The strongest and most consistent advantage: “Prof. Ivo” outperformed both comparators across all levels, peaking at 85.1% on the Medium concept with concise, curiosity‑driven responses that maintained attention.
                        </p>
                        </div>
                        <div>
                        <h4 className="text-lg font-semibold text-card-foreground">Engagement</h4>
                        <p className="text-foreground leading-relaxed text-justify">
                            Engagement remained high for “Prof. Ivo,” while Literature dropped on Medium and Advanced topics (64.6% and 64.4%). On the Advanced concept, “Prof. Ivo” reached 73.3%, tying with ChatGPT for top engagement.
                        </p>
                        </div>
                        <div>
                        <h4 className="text-lg font-semibold text-card-foreground">Text Completion</h4>
                        <p className="text-foreground leading-relaxed text-justify">
                            “Prof. Ivo” excelled in completeness, achieving the study’s single highest score of 92.0% on the Easy concept and maintaining strong performance across all levels, surpassing both Literature and ChatGPT.
                        </p>
                        </div>
                    </div>

                     {/* Figure 7 */}
                     <div className="my-6">
                         <img
                         src="/images/read2025/figure7.png"
                         alt="Figure 7: Detailed performance by metric and difficulty"
                         className="rounded-lg border border-border shadow-md w-full cursor-pointer hover:opacity-90 transition-opacity duration-200"
                         onClick={() => openImageModal(
                             "/images/read2025/figure7.png",
                             "Figure 7: Detailed performance by metric and difficulty",
                             "Figure 7: Detailed breakdown across Easy (CE), Medium (CM), and Advanced (CA) topics for all four evaluation metrics."
                         )}
                         />
                         <p className="text-sm text-muted-foreground mt-2 text-center italic">
                         Figure 7: Detailed breakdown across Easy (CE), Medium (CM), and Advanced (CA) topics for all four evaluation metrics.
              </p>
            </div>
          </div>

                </div>
                </CardContent>
            </Card>
        </section>


        {/* Conclusion */}
            <section id="conclusion" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                    <Scroll className="h-6 w-6 text-[#A10100]" />
            Conclusion
                </CardTitle>
                </CardHeader>
                <CardContent>
                <div className="prose prose-lg max-w-none">
                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    The rapid digitalization of specialized fields like dental technology presents both a challenge and an opportunity for higher education. While generalist AI models are widespread, this study shows clear limitations when rigorous, context‑aware, and linguistically specific information is required for technical training.
                    </p>

                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    To address this gap, we developed and evaluated “Prof. Ivo,” a Retrieval‑Augmented Generation (RAG) system grounded in a curated, expert‑validated knowledge base. Findings indicate that the application is highly usable and valuable, and objectively delivers more comprehensible, focused, and complete content than traditional literature and a generic LLM, particularly for advanced topics.
                    </p>

                    <div className="bg-gradient-to-r from-[#A10100]/10 to-[#F33C04]/10 p-6 rounded-lg border-l-4 border-[#A10100] mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Impact Statement</h4>
                    <p className="text-foreground text-sm">
                        Implementing a curated, institution‑aligned RAG assistant shifted student attitudes meaningfully—more than doubling trust in AI accuracy and notably reducing concerns about diminished critical thinking—positioning AI as an active, trusted partner in learning rather than a passive information source.
              </p>
            </div>

                    <p className="text-foreground leading-relaxed text-justify mb-6">
                    This work began with a core question: the role of Higher Education Institutions in the age of AI and the real nature of student AI usage. Evidence shows students already rely on AI as a primary information source, often generic and unvetted. This reality necessitates institutional intervention not through restriction, but through provision of superior, academically validated alternatives.
                    </p>

                    <h3 className="text-xl font-semibold text-[#A10100] mb-4">Future Directions</h3>
                    <p className="text-foreground leading-relaxed text-justify">
                    By combining large language model reasoning with curated institutional expertise, universities can deploy tailored, inclusive AI that safeguards academic quality and deep learning. Next steps include longitudinal evaluations across diverse cohorts, expanded domain coverage, and integration with curricula and assessment to prepare students for increasingly complex professional demands.
            </p>
          </div>
                </CardContent>
            </Card>
        </section>


        {/* References */}
            <section id="references" className="animate-fade-in-up">
            <Card className="p-8 bg-card/80 backdrop-blur-sm border border-border shadow-xl">
                <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold text-card-foreground">
                    <ExternalLink className="h-6 w-6 text-[#A10100]" />
            References
                </CardTitle>
                </CardHeader>
                <CardContent>
                 <div className="space-y-4 text-sm">
                     {[
                     { id: 1, authors: "Neumann, A., et al.", title: "An LLM-Driven Chatbot in Higher Education for Databases and Information Systems", journal: "IEEE Transactions on Education", year: "2024", extra: "PP: 1–14" },
                     { id: 2, authors: "Swacha, J., & Gracel, M.", title: "Retrieval-Augmented Generation (RAG) Chatbots for Education: A Survey of Applications", journal: "Applied Sciences", year: "2025", extra: "15, DOI: 10.3390/app15084234", url: "https://doi.org/10.3390/app15084234" },
                     { id: 3, authors: "Thüs, D., Malone, S., & Brünken, R.", title: "Exploring generative AI in higher education: a RAG system to enhance student engagement with scientific literature", journal: "Frontiers in Psychology", year: "2024", extra: "Volume 15" },
                     { id: 4, authors: "Smith, Z.", title: "From Analog to Digital: Transforming Traditional Prosthodontic Techniques with Digital Workflows", journal: "Journal of Dental Care", year: "2024", extra: "1(2): 79–85" },
                     { id: 5, authors: "Ohde, J., Rost, L., & Overgaard, J.", title: "The Burden of Reviewing LLM-Generated Content", journal: "NEJM AI", year: "2025", extra: "2" },
                     { id: 6, authors: "Gao, Y., et al.", title: "Retrieval-Augmented Generation for Large Language Models: A Survey", journal: "arXiv", year: "2023", extra: "abs/2312.10997", url: "https://arxiv.org/abs/2312.10997" },
                     { id: 7, authors: "Kim, C. Y., et al.", title: "Bridging the Language Gap: Domain-Specific Dataset Construction for Medical LLMs", journal: "In: Generalizing from Limited Resources in the Open World, Springer Nature Singapore", year: "2024", extra: "Singapore" }
                     ].map((ref) => (
                     <div key={ref.id} className="flex items-start gap-3 p-4 bg-muted rounded-lg hover:bg-accent transition-colors">
                         <div className="w-6 h-6 bg-[#A10100] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                         {ref.id}
                         </div>
                         <div className="flex-1">
                         <p className="text-card-foreground font-medium">{ref.authors} ({ref.year})</p>
                         <p className="text-foreground italic">"{ref.title}"</p>
                         <p className="text-muted-foreground">{ref.journal}{ref.extra ? `, ${ref.extra}` : ""}</p>
                         {ref.url && (
                             <a href={ref.url} target="_blank" rel="noreferrer" className="text-[#A10100] hover:underline text-xs mt-1 inline-block">
                                 {ref.url}
                             </a>
                         )}
                         </div>
                     </div>
                     ))}
            </div>
                </CardContent>
            </Card>
            </section>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gradient-to-r from-[#A10100] to-[#F33C04] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
          </div>

      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#A10100] to-[#F33C04] hover:from-[#A10100]/90 hover:to-[#F33C04]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        size="lg"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-full max-h-full">
            {/* Close Button */}
            <Button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              size="sm"
              aria-label="Close image"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <Button
                onClick={zoomOut}
                className="bg-black/50 hover:bg-black/70 text-white"
                size="sm"
                aria-label="Zoom out"
              >
                <span className="text-lg">-</span>
              </Button>
              <Button
                onClick={resetZoom}
                className="bg-black/50 hover:bg-black/70 text-white"
                size="sm"
                aria-label="Reset zoom"
              >
                <span className="text-sm">100%</span>
              </Button>
              <Button
                onClick={zoomIn}
                className="bg-black/50 hover:bg-black/70 text-white"
                size="sm"
                aria-label="Zoom in"
              >
                <span className="text-lg">+</span>
              </Button>
            </div>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain cursor-zoom-in transition-transform duration-200"
              style={{ transform: `scale(${imageScale})` }}
              onClick={zoomIn}
            />

            {/* Caption */}
            {selectedImage.caption && (
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-3 rounded-lg text-sm">
                {selectedImage.caption}
              </div>
            )}

            {/* Zoom Level Indicator */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
              {Math.round(imageScale * 100)}%
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default READ2025;