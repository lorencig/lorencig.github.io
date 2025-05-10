import { ProjectData } from '@/common/types';

const project1Data: ProjectData = {
  id: 1,
  title: "NanoDB - Research Activity Data Management System",
  description: "NanoDB is a Python-based application developed to optimize the management of experimental data in research settings. It supports collection, organization, and export of laboratory metadata across diverse research line types.",
  fullDescription: "NanoDB is a Python-based application developed to optimize the management of experimental data in research settings. Designed with flexibility in mind, it supports the collection, organization, and export of laboratory metadata across diverse research line types. Built on the FAIR principles, by ensuring clean and well-structured datasets, NanoDB also lays the foundation for integrating machine learning, enabling more advanced data analysis and modeling in future research stages. This system aims to streamline data capture, improve data quality, and facilitate collaboration among researchers by providing a centralized and structured repository for experimental metadata.",
  image: "/NanoDB.svg", // Replace with actual image path if available
  tags: ["Research Data Management", "Python", "FAIR Principles", "Research Workflow", "Data Integrity", "Open Source"],
  category: "Scientific",
  date: "2024-10-10",
  status: "Delivered",
  collaborators: ["Niccolò Silvestri", "Erjon Hysa", "Teresa Pellegrino"],
  methodology: "NanoDB is a Python-based application with a modular software architecture designed for flexible research data management. Built using Tkinter and ttkbootstrap for an intuitive GUI, it features a tabbed interface (Intro, Synthesis, Characterization, Save & Export) that guides users through dynamic data entry, storage, and export. Data is stored locally in an Excel file via OpenPyXL, ensuring offline access, while ReportLab generates PDF reports and custom scripts handle image compression. The codebase, structured into modular files (e.g., main.py, intro_tab.py), supports customization and scalability. NanoDB operates offline, with a workflow that allows users to input, edit, retrieve, and export experimental data, adhering to FAIR principles and enabling future machine learning integration.",
  results: "NanoDB is an open-source Python tool for managing research data, freely downloadable and customizable from GitHub. It features a user-friendly interface for dynamic data entry, Excel storage, PDF reports, and image management. Available under a Creative Commons BY 4.0 License with Zenodo documentation and a DOI, it supports FAIR-compliant intelligence datasets for machine learning.",
  nextSteps: "Future development aims to create a no-code version with automated field creation, making customization accessible to non-coders. Plans include cloud storage, expanded export options, and machine learning integration, with ongoing community engagement to enhance scalability and inclusivity.",
  isFeatured: true,
  doi: "10.5281/zenodo.13912817",
};

export default project1Data;