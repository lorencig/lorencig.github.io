export const SITE_URL = "https://lorencig.github.io";
export const SITE_NAME = "Lorenci Gjurgjaj";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/LogoXSOCIAL.svg`;

export const PERSON = {
  name: "Lorenci Gjurgjaj",
  jobTitle: "Research Fellow & PhD Candidate",
  email: "mailto:lorencigjurgjaj@gmail.com",
  description:
    "Researcher at Istituto Italiano di Tecnologia and PhD candidate at The Open University, working on continuous-flow synthesis of magnetic nanoparticles, laboratory automation, and data-driven experimentation for biomedical nanomaterials.",
  image: DEFAULT_OG_IMAGE,
  sameAs: [
    "https://orcid.org/0000-0002-0675-5063",
    "https://www.linkedin.com/in/gjurgjaj/",
    "https://scholar.google.com/citations?hl=en&user=IFf_AbwAAAAJ",
    "https://github.com/lorencig",
  ],
  worksFor: {
    "@type": "Organization" as const,
    name: "Istituto Italiano di Tecnologia",
    url: "https://www.iit.it",
  },
  alumniOf: {
    "@type": "Organization" as const,
    name: "The Open University",
    url: "https://www.open.ac.uk",
  },
};

export const absoluteUrl = (path = "/") => {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
