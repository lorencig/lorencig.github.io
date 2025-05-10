// src/common/types.ts
export interface ProjectData {
    id: number;
    title: string;
    description: string; // Short description for cards
    fullDescription: string; // Detailed description for detail page
    image: string;
    tags: string[];
    category: "Scientific" | "Community";
    date: string; // e.g., "YYYY-MM-DD"
    status: string; // e.g., "Ongoing", "Completed", "Active", "In Development"
  
    // Scientific-specific (optional)
    collaborators?: string[];
    methodology?: string;
    results?: string;
    nextSteps?: string;
  
    // Community-specific (optional)
    features?: string;
    impact?: string;
    futureEnhancements?: string;
  
    isFeatured?: boolean; // Optional: to mark projects for the homepage
    repositoryUrl?: string;
    keyTechnologies?: string[];
    fundingSource?: string;

    doi?: string; 
}

export interface PublicationData {
    id: number;
    title: string;
    authors: string;
    journal: string;
    volume?: string;
    issue?: string;
    pages?: string;
    year: number;
    doi: string;
    isFeatured?: boolean; // Added for homepage feature
    link?: string; // Optional direct link to the publication PDF or page
    abstract?: string; 
  }