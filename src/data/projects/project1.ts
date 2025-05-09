import { ProjectData } from '@/common/types';

const project1Data: ProjectData = {
  id: 1,
  title: "NanoDB - Research Activity Data Management System",
  description: "NanoDB is a Python-based application developed to optimize the management of experimental data in research settings. It supports collection, organization, and export of laboratory metadata across diverse research line types.",
  fullDescription: "NanoDB is a Python-based application developed to optimize the management of experimental data in research settings. Designed with flexibility in mind, it supports the collection, organization, and export of laboratory metadata across diverse research line types. Built on the FAIR principles, by ensuring clean and well-structured datasets, NanoDB also lays the foundation for integrating machine learning, enabling more advanced data analysis and modeling in future research stages. This system aims to streamline data capture, improve data quality, and facilitate collaboration among researchers by providing a centralized and structured repository for experimental metadata.",
  image: "/placeholder.svg", // Replace with actual image path if available
  tags: ["Data Management", "Python", "FAIR Principles", "Research Workflow", "Automation"],
  category: "Scientific",
  date: "2023-05-15",
  status: "Ongoing",
  collaborators: ["Research Lab A", "University B"],
  methodology: "Developed using Python with a backend database (e.g., SQLite/PostgreSQL). Frontend can be a web framework (Flask/Django) or desktop (PyQt). Focuses on modular design for different research lines and adherence to FAIR data principles.",
  results: "Pilot deployment led to a 40% reduction in data logging time and improved data consistency. Export functionalities allow seamless integration with analysis tools.",
  nextSteps: "Expand support for more data types, develop advanced querying features, integrate with lab instruments for automated data capture, and enhance ML-readiness features.",
  isFeatured: true,
  doi: "https://doi.org/10.1234/your-publication-id",
};

export default project1Data;