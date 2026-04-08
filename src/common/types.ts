// src/common/types.ts
export interface ProjectData {
    id: number;
    /** URL segment for HashRouter links, e.g. /#/projects/MPI */
    slug: string;
    title: string;
    description: string; // Short description for cards
    fullDescription: string; // Detailed description for detail page
    image: string;
    tags: string[];
    category: "Scientific" | "Community";
    date: string; // e.g., "YYYY-MM-DD"
    status: string; // e.g., "Ongoing", "Completed", "Active", "In Development"
  
    /** Shown in the Details tab before collaborators (e.g. technical overview + team together). */
    detailsTabBody?: string;

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
    externalLink?: string;

    doi?: string;

    /** Optional path or URL to a static poster (e.g. HTML in /public). Shown as “View poster” on the project page. */
    posterUrl?: string;
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
    showFullPaperButton?: boolean; // If true, shows "Show Full Paper" button instead of abstract
    fullPaperRoute?: string; // Route to navigate to when "Show Full Paper" is clicked
  }