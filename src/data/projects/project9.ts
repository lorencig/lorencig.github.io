import { ProjectData } from '@/common/types';

const project9Data: ProjectData = {
  id: 9,
  slug: "pdf-renamer",
  title: "Renaminator — Scientific PDF Renamer",
  description:
    "A small browser tool I made for a friend who needed a simple way to clean up the names of downloaded research papers.",
  fullDescription: `A friend of mine was writing a review and struggling with the messy, inconsistent names of the papers she was downloading. Finding anything again was becoming a pain, so I made a small tool for her. It worked well, and I decided to bring it online in case it could help someone else too.

Renaminator reads the first page of a scientific PDF and suggests a clean name using the FirstAuthor_Year_ShortTitle.pdf format. It uses PDF.js to read the file in your browser and can check the paper's details with Crossref when needed. You can review and edit every suggestion before downloading the renamed files.

Privacy is simple: your PDFs stay on your device. The tool does not upload or store them on a server. Most of the work happens directly in your browser.

I do not have a big roadmap for Renaminator. It already does the small job it was made for, so I only plan to change it if something genuinely needs improving, or if another friend asks for something useful.`,
  image: "/Renaminator.svg",
  tags: [
    "Research Workflow",
    "PDF.js",
    "Crossref",
    "Privacy-first",
    "Browser Tool",
  ],
  category: "Community",
  date: "2026-09-14",
  status: "Active",
  isFeatured: true,
  embeddedToolUrl: "/tools/pdf-renamer/embed.html",
};

export default project9Data;
