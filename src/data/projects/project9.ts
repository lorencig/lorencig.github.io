import { ProjectData } from '@/common/types';

const project9Data: ProjectData = {
  id: 9,
  slug: "pdf-renamer",
  title: "Papername — Scientific PDF Renamer",
  description:
    "A privacy-first browser tool that turns inconsistent scientific PDF filenames into a clean, searchable research library.",
  fullDescription:
    "Papername reads scientific PDFs directly in the browser and proposes consistent filenames using the article title, authors, publication year, DOI, and publisher metadata. The documents remain on the user's device, and every suggestion can be reviewed before renamed copies are downloaded.",
  detailsTabBody:
    "The tool reconstructs the first-page layout, identifies likely title and author blocks, detects publication years and identifiers, and checks scholarly metadata against Crossref when available. It is delivered as a static web application, so visitors use their own browser's processing power without a backend server.",
  image: "/Papername.svg",
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
  features: `Local first-page PDF text and layout extraction
DOI, bioRxiv, Elsevier PII, title, author, and year detection
Crossref-assisted scholarly metadata verification
Editable filename suggestions
Batch download of renamed PDFs as a ZIP`,
  impact:
    "Papername removes repetitive manual cleanup from literature management while keeping research documents private. Because processing happens in the browser, the tool can be used without installing Python or uploading papers to a third-party service.",
  futureEnhancements:
    "Planned improvements include broader validation across publisher layouts, optional direct folder access in supported browsers, and OCR support for image-only scans.",
  isFeatured: true,
  externalLink: "/tools/pdf-renamer/",
  keyTechnologies: [
    "JavaScript",
    "PDF.js",
    "Crossref REST API",
    "JSZip",
    "Web Workers",
  ],
};

export default project9Data;
