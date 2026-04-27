import { ProjectData } from '@/common/types';

const project8Data: ProjectData = {
  id: 8,
  slug: "MPI",
  title:
    "Standardizing nanoparticle quantification in magnetic particle imaging through an adaptive open source analysis framework",
  description:
    "The problem we are trying to solve is that while Magnetic Particle Imaging is a great way to see tiny iron particles in the body, there is no standard way to measure exactly how much iron is actually there. Currently, most researchers use older computer tools built for regular medical pictures, but these do not work correctly because they do not match the special physics of how this new technology creates an image. Because these tools are not a good fit, scientists have to make their own manual choices when drawing circles around the signals, which causes human error and results that vary depending on who is doing the work. This rigid and one-size-fits-all way of doing things fails to account for the different ways these particles act, making it very hard to get the same reliable measurements in different laboratories.",
  fullDescription: `The problem we are trying to solve is that while Magnetic Particle Imaging is a great way to see tiny iron particles in the body, there is no standard way to measure exactly how much iron is actually there. Currently, most researchers use older computer tools built for regular medical pictures, but these do not work correctly because they do not match the special physics of how this new technology creates an image. Because these tools are not a good fit, scientists have to make their own manual choices when drawing circles around the signals, which causes human error and results that vary depending on who is doing the work. This rigid and one-size-fits-all way of doing things fails to account for the different ways these particles act, making it very hard to get the same reliable measurements in different laboratories.`,
  detailsTabBody: `The scale of this work involved testing over 1.1 million different pipeline combinations to find the absolute best mathematical formulas for different imaging conditions. We competed 40 traditional mathematical methods against 10 different machine learning models to see which ones could most accurately identify iron mass. Our Smart Selector works by analyzing hidden details in the raw data, such as image entropy, signal-to-noise ratios, and the exact shape of the signal peaks (FWHM). This massive benchmarking effort allowed us to find the specific "mathematical synergies" needed to achieve near-perfect accuracy across a wide range of different nanoparticle types and laboratory setups.`,
  image: "/ThumbnailMPI.svg",
  tags: [
    "Magnetic Particle Imaging",
    "Superparamagnetic Iron Oxide Nanoparticles",
    "Nanoparticle Quantification",
    "Preclinical Evaluation",
  ],
  category: "Scientific",
  date: "2025-06-01",
  status: "Developing",
  collaborators: [
    "Lorenci Gjurgjaj",
    "Niccolò Silvestri",
    "Giulia Eugenia Paola Nucci",
    "Nabila Jarmouni",
    "Edoardo Sinibaldi",
    "Teresa Pellegrino",
  ],
  methodology: `To fix these human errors, we built a Smart Selector tool that acts like a decision tree to guide every scan. Instead of using the same steps for every picture, the computer first looks at the specific "fingerprint" of the image, such as how much noise is present and how sharp the signal peaks appear. Based on these unique features, the software automatically builds a custom three-step pipeline to clean the image, find the particles, and measure them accurately. By automating this decision-making process, we ensure that the same raw data always gives the same reliable result, no matter which laboratory is doing the analysis.`,
  results: `Our results show that this framework is incredibly precise, matching the actual amount of iron with nearly 100 percent accuracy. In our tests, the system achieved a very high R^2 score of >0.99, meaning the computer's measurements were almost identical to the official laboratory standards used to prove the real amount of iron present. The entire framework is now available as open-source code so other scientists can use it freely to improve their own research.`,
  nextSteps: `Moving forward, we plan to test this technology in real biological environments and expand the software so it can handle 3D pictures and better separate signals that are crowded together.`,
  isFeatured: true,
  posterUrl: "/posterBari.html",
  keyTechnologies: [
    "Adaptive pipelines",
    "SPION quantification",
    "Classical & ML analytics",
    "Smart Selector",
    "K-Means & DBSCAN",
    "MPI signal processing",
  ],
};

export default project8Data;
