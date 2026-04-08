import { ProjectData } from '@/common/types';

const project8Data: ProjectData = {
  id: 8,
  slug: "MPI",
  title:
    "Synergistic MPI-Ops: A Multi-Stage Adaptive Framework for High-Fidelity SPION Quantification",
  description:
    "An adaptive pipeline framework for Magnetic Particle Imaging that dynamically selects analytical paths from raw signal to precise iron mass determination—modular, context-aware, and structured for AI-ready datasets toward autonomous in-vivo analysis.",
  fullDescription: `In modern bioimaging, quantifying Magnetic Particle Imaging (MPI) data across diverse nanoparticle formulations is a significant bottleneck that limits reproducibility. I developed an Adaptive Pipeline framework to solve this problem directly. It is a modular system that dynamically selects the most effective analytical path for a given dataset, guiding researchers from raw signal to precise iron mass determination. By ensuring datasets are processed with optimized, context-aware algorithms, this framework not only improves quantification accuracy but also generates structured, AI-ready datasets, paving the way for autonomous in-vivo imaging analysis.`,
  detailsTabBody: `The system is built on an exhaustive library of 40 classical analytical methods and 10 advanced Machine Learning models, designed to work in synergy. At its core lies a "Smart Selector" engine that analyzes global image statistics like entropy and SNR alongside local morphology descriptors such as eccentricity and physical area. This allows the platform to navigate over 10,000 potential algorithm configurations, automatically identifying the specific pipeline—be it a Gaussian fit or a GMM-based mask—that best suits the unique characteristics of the SPION sample.`,
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
  methodology: `To map the true analytical performance space, I executed a massive-scale benchmarking study involving over 1.1 million iterative tests across four distinct dataset geometries. The methodology isolates the workflow into three core pillars: Detection, Filtering, and ROI Masking. Each pillar was rigorously tested against varying iron concentrations ranging from 0.3 to 32.55 mg Fe and diverse sample mediums to determine combinatorial synergy. Finally, unsupervised ML clustering, including K-Means and DBSCAN, was utilized to correlate image types with optimal processing routes, effectively creating a self-optimizing "brain" for the pipeline.`,
  results: `Preliminary findings confirm that while static filters often fail to improve peak detection, an adaptive methodology consistently targets the optimal performance space, bridging the gap between classical and ML accuracy. The framework has successfully identified 21 "gold-standard" configurations that achieve peak F1-scores across varying signal-to-noise ratios.`,
  nextSteps: `Moving forward, the focus shifts to MPI 4.0, which integrates deconvolution and image upsampling to resolve overlapping sources in complex in-vivo environments. This expansion will enable accurate quantification of irregular iron distributions where standard peak separation typically fails.`,
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
