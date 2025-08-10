import { ProjectData } from '@/common/types';

const project1Data: ProjectData = {
  id: 1,
  title: "NanoDB - Research Activity Data Management System",
  description: "An intuitive Python application that simplifies the collection, organization, and export of experimental data, making research workflows more efficient, collaborative, and reproducible.",
  fullDescription: "In modern research, managing the vast amount of data from countless experiments is a major challenge that slows down discovery. I created NanoDB to solve this problem directly. It’s a desktop application that provides a single, centralized hub for all experimental details, guiding researchers through data entry to ensure every dataset is complete, structured, and compliant with FAIR principles. This not only streamlines daily lab work and improves collaboration but also creates high-quality, AI-ready datasets, paving the way for future machine learning and predictive modeling.",
  image: "/NanoDB.svg", // Replace with actual image path if available
  tags: ["Research Data Management", "Python", "FAIR Principles", "Research Workflow", "Data Integrity", "Open Source"],
  category: "Scientific",
  date: "2024-10-10",
  status: "Delivered",
  collaborators: ["Niccolò Silvestri", "Erjon Hysa", "Teresa Pellegrino"],
  methodology: "NanoDB was built with a user-centric philosophy, featuring an intuitive graphical interface (GUI) developed in Python. Its modular architecture ensures the application is both scalable and easy to customize. To prioritize data security and accessibility, all information is stored locally, while built-in tools handle professional PDF reporting, data export, and image management, creating a complete, offline-first workflow.",
  results: "Successfully delivered a fully functional, open-source tool, now freely available on GitHub with a permanent DOI from Zenodo. The system generates FAIR-compliant datasets, directly enabling more robust and reproducible science. The user-friendly interface has been validated for ease of use, empowering researchers to manage their data with confidence.",
  nextSteps: "The future vision for NanoDB is to increase accessibility and power. The roadmap includes developing a no-code version for easier customization, integrating optional cloud storage for enhanced collaboration, and implementing direct machine learning models for predictive analysis within the app.",
  isFeatured: true,
  doi: "10.5281/zenodo.13912817",
};

export default project1Data;