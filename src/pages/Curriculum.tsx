import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";
import { CVSection, CVItem } from "@/components/CVSection";
import PageLayout from '@/components/PageLayout';

const Curriculum = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const employments: CVItem[] = [
    {
      id: "emp-1",
      title: "Research Fellow",
      org: "Istituto Italiano di Tecnologia (IIT)",
      period: "Sep 2023 — Current",
      location: "Genoa, Italy",
      tags: ["Nanotechnology", "Biomedical Theranostics", "Automation"],
      details: (
        <ul className="list-disc list-inside space-y-2">
          <li>Design and build a continuous-flow system to automate the entire nanoparticle production process, from synthesis to final surface functionalization or encapsulation, directly addressing the core challenges of reproducibility and scalability.</li>
          <li>Author custom applications to interface with and control all system hardware, enabling precise, real-time regulation of critical chemical parameters like reaction temperature, flow rates, and reagent concentrations. Author custom software applications for data management, data analysis, and novel methodologies.</li>
          <li>Optimize the synthesis of Magnetic Nanoparticles (MNPs) to achieve fine-tuned control over their physical properties (size, shape) and magnetic response, enhancing their therapeutic efficacy for magnetic hyperthermia applications.</li>
          <li>Implement a systematic data management workflow that automatically logs, processes, and visualizes all experimental parameters, creating a structured dataset for rigorous trend analysis and process improvement.</li>
          <li>Achieve exponential economic efficiency and multiplefold reductions in toxicity. Accomplished by removing toxic reagents from the process and significantly decreasing the amount of solvent used. </li>
        </ul>
      ),
    },
    {
      id: "emp-2",
      title: "Researcher, Project Manager, and Assistant Lecturer",
      org: "Ivodent Academy",
      period: "May 2018 — Aug 2023",
      location: "Tirana, Albania",
      tags: ["Research", "Project Management", "Education"],
      details: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2">Research & Development</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Managed a funded research project focused on medicinal plant valorization, establishing a novel, near-critical CO2 extraction method that proved more cost-effective and environmentally friendly than traditional extracting techniques.</li>
              <li>Conducted foundational research on the thermal characterization and properties of inorganic biocompatible materials, providing critical data that informed the development of the dental materials curriculum.</li>
              <li>Authored a comprehensive database on local medicinal plants extraction optimization and their biochemical profile, providing a valuable resource to the local community to increase the market value of processed plants.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Program Management & Digital Transformation</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Architected a complete digital transformation from a zero-digitalization baseline in under two months, ensuring 100% digital academic continuity for over 300 students and staff during the Covid-19 emergency lockdown.</li>
              <li>Spearheaded the creation and launch of the first Master program in Digital Dental Techniques in the Western Balkans region, managing the entire project lifecycle from design and infrastructure procurement to implementation through key industry partnerships.</li>
              <li>Developed a custom, Albanian-language RAG chatbot ("Prof. Ivo") trained on institutional literature, achieving an 88% positive ease-of-use rating and an 83% positive perceived value score in post-pilot student surveys.</li>
              <li>Led the development of "IvoPortal," a comprehensive university management web app, utilizing an Agile, user-centric approach to incorporate iterative feedback from staff and students throughout the development cycle, streamlining administrative and academic processes.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-2">Academic Leadership & Instruction</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Delivered engaging, application-focused lectures on highly technical subjects like Dental Materials by connecting complex scientific theory to real-world clinical practice, resulting in consistently high student attendance and positive course evaluations.</li>
              <li>Authored key sections of compliance reports as an active member of working groups for multiple successful institutional and program-level accreditation cycles, helping to secure and maintain the academy's official standings.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "emp-3",
      title: "Administrative Technician",
      org: "Krijon Ltd",
      period: "Oct 2019 — Sep 2020",
      location: "Tirana, Albania",
      tags: ["Technical Sales", "Laboratory Equipment", "Client Support"],
      details: (
        <ul className="list-disc list-inside space-y-2">
          <li>Consulted with academic and industrial clients to assess their analytical needs, recommending and specifying optimal laboratory equipment from leading brands including Thermo Fischer, Sartorius, and Bruker.</li>
          <li>Provided comprehensive technical support for a wide range of laboratory instruments, delivering on-site installation, user training, and servicing with a specialization in high-value thermogravimetry devices (TGA/STA from Netzsch).</li>
          <li>Authored detailed technical tender documentation for client-specific projects, ensuring 100% compliance with procurement requirements and accuracy of all equipment specifications to support successful bids.</li>
        </ul>
      ),
    },
    {
      id: "emp-4",
      title: "Office Manager",
      org: "Treccani, Institute of the Italian Encyclopedia",
      period: "May 2018 — Dec 2018",
      location: "Tirana, Albania",
      tags: ["International Operations", "Encyclopedia", "Cross-border Communication"],
      details: (
        <ul className="list-disc list-inside space-y-2">
          <li>Established and managed the first-ever international office for the prestigious Institute as a key component of its 100th-anniversary global initiatives.</li>
          <li>Orchestrated a series of cultural activities and promotional events by coordinating with diverse stakeholders, including Albanian and Italian cultural institutions, schools, and the Italian Consulate in Tirana.</li>
          <li>Served as the primary communication liaison between the new Tirana office, the corporate headquarters in Rome, and a support office in Puglia (Italy), ensuring seamless cross-border project execution and operational alignment.</li>
        </ul>
      ),
    },
    {
      id: "emp-5",
      title: "Data & Operations Consultant",
      org: "Freelance / International Clients",
      period: "Jan 2014 — Apr 2018",
      location: "Tirana, Albania",
      tags: ["Data Analysis", "Operations", "Business Intelligence"],
      details: (
        <ul className="list-disc list-inside space-y-2">
          <li>Analyzed complex operational and business datasets for multiple international clients to identify key performance trends, generating actionable insights to support strategic decision-making.</li>
          <li>Administered and maintained client databases to ensure high levels of data integrity and accessibility, while optimizing back-office workflows to improve overall operational efficiency.</li>
          <li>Designed and implemented streamlined data-entry and information management protocols that reduced data processing times and minimized errors, enhancing the reliability of business intelligence.</li>
        </ul>
      ),
    },
  ];

  const projects: CVItem[] = [
    {
      id: "proj-1",
      title: "Personal Portfolio Website",
      org: "Personal",
      period: "2024",
      tags: ["React", "TypeScript", "Vite"],
      details: (
        <p>
          Built a modern portfolio website showcasing projects, publications, and thoughts.
          Features responsive design, dark/light themes, and optimized performance.
        </p>
      ),
    },
    {
      id: "proj-2",
      title: "Research Publication Platform",
      org: "Academic",
      period: "2023",
      tags: ["Web Dev", "Research", "Open Source"],
      details: (
        <p>
          Developed a platform for sharing and discovering academic research.
          Implemented search functionality and collaborative features.
        </p>
      ),
    },
  ];

  const education: CVItem[] = [
    {
      id: "edu-1",
      title: "Doctor of Philosophy (PhD) in Nanochemistry",
      org: "The Open University (UK)",
      period: "Apr 2024 — Present",
      location: "In affiliation with the Istituto Italiano di Tecnologia (IIT), Genoa, Italy",
      tags: ["Nanochemistry", "Research", "PhD"],
      details: (
        <p>
          Doctoral research focused on Scalable Synthesis Of Magnetic-inorganic Nanomaterials For 
          Biomedical Applications.
          Conducting research in affiliation with Italian Institute of Technology (IIT).
        </p>
      ),
    },
    {
      id: "edu-2",
      title: "Master of Science (MSc) in Chemistry",
      org: "University of Tirana",
      period: "Oct 2019 — Oct 2022",
      location: "Tirana, Albania",
      tags: ["Chemistry", "Research", "MSc"],
      details: (
        <p>
          Thesis: Comparison of Chemical Composition of Medicinal Plant Extracts When Different Solvents and Techniques Are Used
        </p>
      ),
    },
    {
      id: "edu-3",
      title: "Bachelor of Science (BSc) in Chemistry",
      org: "University of Tirana",
      period: "Jun 2012 — Jun 2016",
      location: "Tirana, Albania",
      tags: ["Chemistry", "Food Technology", "BSc"],
      details: (
        <p>
          Major Focus: Chemistry and Food Technology
        </p>
      ),
    },
  ];

  const certifications: CVItem[] = [
    {
      id: "cert-1",
      title: "Google Project Management: Professional Certificate",
      org: "Google & Coursera",
      period: "Aug 2025",
      tags: ["Project Management", "Agile", "Professional Certificate"],
      details: (
        <p>
          Comprehensive training covering the full project lifecycle, including initiating, planning, and executing projects using both traditional and Agile methodologies.
        </p>
      ),
    },
    {
      id: "cert-2",
      title: "First International School on Advanced Porous Materials",
      org: "Lake Como School of Advanced Studies",
      period: "Jul 2019",
      tags: ["Advanced Materials", "MOFs", "COFs", "Characterization"],
      details: (
        <p>
          Current research advances in metal-organic and covalent-organic frameworks synthesis, (structural and spectroscopic) characterization, and applications.
        </p>
      ),
    },
    {
      id: "cert-3",
      title: "OpenLab Albania: Structural Crystallography",
      org: "IUCr, UNESCO & Bruker Corporation",
      period: "Jun 2016",
      tags: ["Crystallography", "X-ray Diffraction", "Characterization"],
      details: (
        <p>
          Intensive workshop on Single Crystal and Powder X-ray diffraction techniques.
        </p>
      ),
    },
  ];

  const volunteering: CVItem[] = [
    {
      id: "vol-1",
      title: "Firefighter Instructor & Alpine Rescue Team Co-Lead",
      org: "Albanian Fire Protection and Rescue Association",
      period: "Feb 2021 — Present",
      location: "Tirana, Albania",
      tags: ["Emergency Response", "Leadership", "Training"],
      details: (
        <ul className="list-disc list-inside space-y-2">
          <li>Co-found and lead the nation's first dedicated volunteer alpine rescue team, establishing all operational protocols and training standards to address a critical gap in national emergency response capabilities.</li>
          <li>Develop and deliver specialized first-aid training curricula for national firefighter troops, additional focus on high-risk scenarios such as chemical exposures and intoxications to enhance troop readiness and safety.</li>
        </ul>
      ),
    },
    {
      id: "vol-2",
      title: "General Coordinator & Co-Founder",
      org: "Albanian Volunteer Network (NGO)",
      period: "May 2010 — Mar 2016",
      location: "Tirana, Albania",
      tags: ["NGO Leadership", "Youth Development", "Project Management"],
      details: (
        <ul className="list-disc list-inside space-y-2">
          <li>Co-founded and scaled a national network of youth volunteers, providing strategic leadership and vision from its inception to its establishment as a major national actor.</li>
          <li>Directed operational logistics and coordination for nationwide projects and activities, ensuring the successful execution of volunteer initiatives across the country.</li>
          <li>Authored project proposals and managed administrative responsibilities to secure resources and support the NGO's long-term growth and mission sustainability.</li>
        </ul>
      ),
    },
  ];

  const mobilities: CVItem[] = [
    {
      id: "mob-1",
      title: "Short-Term Scientific Mission (STSM) Researcher",
      org: "Saarland University, Institute of Bioorganic Chemistry",
      period: "Jul 2021 — Aug 2021",
      location: "Saarbrücken, Germany",
      tags: ["Research Exchange", "CO2 Extraction", "Bioactivity Analysis"],
      details: (
        <p>
          Optimized a liquid CO2 extraction protocol for Vitex Agnus Castus and conducted comprehensive bioactivity analyses, successfully identifying synergistic effects between the extracted chemical components.
        </p>
      ),
    },
    {
      id: "mob-2",
      title: "Erasmus+ Exchange Semester",
      org: "University of Maribor",
      period: "Sep 2020 — Feb 2021",
      location: "Slovenia",
      tags: ["Student Exchange", "Chemical Engineering", "Coordination Chemistry"],
      details: (
        <p>
          Completed specialized coursework in chemical engineering, process design, and advanced coordination chemistry.
        </p>
      ),
    },
  ];

  const internationalNetworks: CVItem[] = [
                {
                id: "net-1",
                title: "COST Action CA18112 - DAEMON - Data-driven methods for functional materials design",
                org: "European Cooperation in Science and Technology (COST)",
                period: "2023 — 2028",
                location: "Europe-wide Network",
                tags: ["Data-driven Methods", "Functional Materials", "Machine Learning", "Materials Discovery"],
                details: (
                  <p>
                    The DAEMON COST Action accelerates materials discovery in Europe through cutting-edge computational techniques and data-driven methods, building a cross-disciplinary pan-European network that leverages machine learning for functional materials design.
                  </p>
                ),
              },
                {
                id: "net-2",
                title: "COST Action CA18202 - NexMPI - European Network for Magnetic Particle Imaging",
                org: "European Cooperation in Science and Technology (COST)",
                period: "2024 — 2028",
                location: "Europe-wide Network",
                tags: ["Magnetic Particle Imaging", "Magnetic Nanoparticles", "Biomedical Imaging", "Theranostics"],
                details: (
                  <p>
                    The NexMPI COST Action establishes Europe's first network of Magnetic Particle Imaging scientists, fostering collaboration to advance this non-invasive biomedical imaging technology and accelerate its translation from preclinical research to clinical applications.
                  </p>
                ),
              },
                {
                id: "net-3",
                title: "COST Action CA18203 - NutRedOx - European Network on Nutrition and Redox Biology in Ageing",
                org: "European Cooperation in Science and Technology (COST)",
                period: "2017 — 2021",
                location: "Europe-wide Network",
                tags: ["Nutrition", "Redox Biology", "Ageing", "Healthy Ageing", "Chemoprevention"],
                details: (
                  <p>
                    The NutRedOx COST Action creates a European network focused on the impact of redox active compounds in food on healthy ageing and chemoprevention, establishing a Centre of Excellence to advance research on nutrition and redox biology in ageing.
                  </p>
                ),
              },
  {
    id: "net-4",
    title: "Association of Albanian Crystallographers",
    org: "Professional Association",
    period: "2016 — Present",
    location: "Albania",
    tags: ["Professional Network", "Crystallography", "National Association"],
    details: (
      <p>
        The association includes researchers of crystallography, chemistry, physics, and mineralogy, from Albania and Kosovo. The AAC is a national member of the ECA and member of the IUCr.
      </p>
    ),
  },
];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lorenci Gjurgjaj",
    jobTitle: "Research Fellow",
    url: "/",
    sameAs: [
      "https://github.com/lorencig",
      "https://www.linkedin.com/in/lorencigjurgjaj/"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Istituto Italiano di Tecnologia"
    },
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="pt-16">
        <div
          ref={glowRef}
          className="container mx-auto px-6"
          style={{
            "--x": "0px",
            "--y": "0px",
          } as React.CSSProperties}
        >
          <div className="border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#F33C04]/10 hover:border-[#F33C04]/30 backdrop-blur-sm bg-background/40 p-6 md:p-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Curriculum Vitae</p>
            <h1 className="mt-2 text-3xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#A10100] to-[#F33C04] bg-clip-text text-transparent pb-2">
              Lorenci Gjurgjaj
            </h1>
            <p className="mt-1 text-base md:text-xl text-muted-foreground max-w-2xl">
              From Atoms to Automation.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href="mailto:lorencigjurgjaj@gmail.com" aria-label="Contact via email">
                  <Mail className="mr-2 h-4 w-4" /> Contact
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://github.com/lorencig" target="_blank" rel="noreferrer" aria-label="View GitHub profile">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/lorencigjurgjaj/" target="_blank" rel="noreferrer" aria-label="View LinkedIn profile">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

             <main className="container mx-auto px-4 md:px-6 py-8 md:py-12 space-y-8 md:space-y-12">
         <CVSection id="employments" title="Experience" items={employments} />
         <CVSection id="education" title="Education" items={education} />
         <CVSection id="certifications" title="Certifications" items={certifications} />
         <CVSection id="mobilities" title="Mobilities" items={mobilities} />
         <CVSection id="internationalNetworks" title="International Research Networks & Collaborations" items={internationalNetworks} />
         <CVSection id="volunteering" title="Volunteering" items={volunteering} />
       </main>


    </PageLayout>
  );
};

export default Curriculum;
