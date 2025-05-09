// src/data/projects/project2.ts
import { ProjectData } from '@/common/types';

const project2Data: ProjectData = {
  id: 2,
  title: "Drug Delivery Simulation",
  description: "Computational model for simulating drug release kinetics from various nanocarriers in different physiological environments.",
  fullDescription: "This project develops a comprehensive computational framework for predicting drug release profiles from different types of nanocarriers under various physiological conditions. The simulation incorporates factors such as nanocarrier composition, drug properties, and environmental parameters to provide accurate predictions of release kinetics, helping to optimize drug delivery system design.",
  image: "/placeholder.svg",
  tags: ["Simulation", "Pharmacokinetics", "Modeling", "Nanocarriers"],
  category: "Scientific",
  date: "2022-11-03",
  status: "Completed",
  collaborators: ["Pharma Institute C", "University D"],
  methodology: "The model uses a multi-scale approach combining molecular dynamics simulations at the nanoscale with compartmental pharmacokinetic modeling at the tissue and organ level. Differential equations govern the release kinetics and are solved numerically.",
  results: "The simulation accurately predicted release profiles for five different drug-nanocarrier combinations, with an average deviation of less than 10% from experimental results across various pH and temperature conditions.",
  nextSteps: "Extension of the model to include biodegradable matrices and integration with physiologically-based pharmacokinetic (PBPK) models for whole-body simulations.",
  isFeatured: true,
  // --- ADDING DOI ---
  doi: "https://doi.org/10.1234/your-publication-id", // Replace with a real DOI if available
};

export default project2Data;