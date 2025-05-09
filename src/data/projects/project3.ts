import { ProjectData } from '@/common/types';

const project3Data: ProjectData = {
  id: 3,
  title: "Nanoparticle Characterization Toolkit",
  description: "Software package for automated analysis of TEM, DLS, and zeta potential data for nanoparticle characterization.",
  fullDescription: "This toolkit provides a unified platform for processing and analyzing data from multiple nanoparticle characterization techniques. It automates the analysis workflow from raw data processing to result interpretation, ensuring consistent methodology and reducing analysis time while enhancing reproducibility in nanoparticle characterization.",
  image: "/placeholder.svg",
  tags: ["Data Analysis", "Imaging", "Automation", "Nanoparticles"],
  category: "Scientific",
  date: "2023-01-20",
  status: "Ongoing",
  collaborators: ["Nanotechnology Center E", "Industry Partner F"],
  methodology: "The software implements computer vision algorithms for TEM image analysis, including particle detection and size measurement. For DLS data, it applies cumulant analysis and CONTIN algorithms, while zeta potential analysis includes PALS methodology implementation.",
  results: "Testing on standardized samples showed a 70% reduction in analysis time compared to manual methods, with equivalent or improved accuracy in particle size and distribution measurements.",
  nextSteps: "Integration of machine learning approaches for improved particle detection in complex matrices and expansion to include additional characterization techniques.",
};

export default project3Data;