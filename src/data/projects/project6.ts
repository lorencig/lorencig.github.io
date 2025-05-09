import { ProjectData } from '@/common/types';

const project6Data: ProjectData = {
  id: 6,
  title: "Literature Mining Tool",
  description: "Tool for extracting synthesis parameters and characterization data from scientific publications on nanomaterials.",
  fullDescription: "This project develops an automated tool for mining scientific literature to extract structured information about nanomaterial synthesis methods and characterization results. By converting unstructured text data from publications into structured, searchable databases, the tool accelerates research by enabling rapid access to published methodologies and results.",
  image: "/placeholder.svg",
  tags: ["NLP", "Data Mining", "Research Tool", "Automation"],
  category: "Community",
  date: "2022-07-18",
  status: "Active",
  collaborators: ["NLP Research Lab H", "Open Knowledge Foundation"],
  features: "Automated extraction of synthesis protocols, parameters, and results; Named entity recognition for nanomaterial concepts; Relationship extraction between materials, methods, and properties; Structured database creation; API access for programmatic queries.",
  impact: "Database currently contains information extracted from over 10,000 publications, saving researchers hundreds of hours in literature review time.",
  futureEnhancements: "Expansion of the extraction capabilities to include reaction mechanisms and theoretical models; Integration with laboratory notebook systems for seamless information flow.",
};

export default project6Data;