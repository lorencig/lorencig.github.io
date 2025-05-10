// src/data/publications.ts
import { PublicationData } from '@/common/types';

export const allPublicationsData: PublicationData[] = [
  {
    id: 1,
    title: "Novel Synthesis Method for Gold Nanorods with Enhanced Stability for Biomedical Applications",
    authors: "Lorenci Gjurgjaj, Collaborator A, Collaborator B",
    journal: "Journal of Nanomaterials",
    volume: "15",
    issue: "3",
    pages: "245-258",
    year: 2023,
    doi: "10.1000/example.2023.001",
    isFeatured: true // Mark as featured for homepage
  },
  {
    id: 2,
    title: "Machine Learning Approaches to Predict Nanoparticle Toxicity from Physicochemical Properties",
    authors: "Lorenci Gjurgjaj, Collaborator C",
    journal: "ACS Nano",
    volume: "16",
    issue: "2",
    pages: "1205-1217",
    year: 2022,
    doi: "10.1000/example.2022.002",
    isFeatured: true // Mark as featured for homepage
  },
  {
    id: 3,
    title: "Data-Driven Optimization of Liposomal Drug Delivery Systems",
    authors: "Collaborator D, Lorenci Gjurgjaj, Collaborator E",
    journal: "Advanced Drug Delivery Reviews",
    volume: "174",
    pages: "45-62",
    year: 2021,
    doi: "10.1000/example.2021.003",
    isFeatured: false
  },
  {
    id: 4,
    title: "Computational Framework for Analysis of Nanoparticle-Protein Interactions",
    authors: "Lorenci Gjurgjaj, Collaborator F, Collaborator G",
    journal: "Nanoscale",
    volume: "12",
    issue: "8",
    pages: "4378-4390",
    year: 2021,
    doi: "10.1000/example.2021.004",
    isFeatured: false // Not featured
  },
  {
    id: 5,
    title: "Sustainable Synthesis of Gold Nanoparticles Using Plant Extracts and Their Antimicrobial Properties",
    authors: "Collaborator H, Lorenci Gjurgjaj",
    journal: "Green Chemistry",
    volume: "22",
    issue: "5",
    pages: "672-688",
    year: 2020,
    doi: "10.1000/example.2020.005",
    isFeatured: false
  },
  {
    id: 6,
    title: "Structure-Function Relationships in Engineered Nanomaterials for Cancer Therapy",
    authors: "Lorenci Gjurgjaj, Collaborator I, Collaborator J, Collaborator K",
    journal: "Biomaterials",
    volume: "232",
    pages: "119740",
    year: 2020,
    doi: "10.1000/example.2020.006",
    isFeatured: false
  }
  // Add more publications as needed
];