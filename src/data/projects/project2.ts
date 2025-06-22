// src/data/projects/project2.ts
import { ProjectData } from '@/common/types';

const project2Data: ProjectData = {
  id: 2,
  title: "OPC UA Python Interface",
  description: "OPC UA Interface is an open-source Python application providing a user-friendly GUI to control laboratory pumps via the OPC UA protocol. It enables precise automation and monitoring of pump actions, with customizable sequences.",
  fullDescription: "OPC UA Interface is a Python-based, open-source platform designed for precise control of laboratory pumps using the OPC UA protocol. Featuring a Tkinter and ttkbootstrap GUI, it allows users to create, execute, and monitor sequences of pump actions (e.g., pump, fill, empty, stop) with defined time intervals. Hosted on GitHub under a Creative Commons Attribution License, it supports fluidic system automation and is accessible for customization by researchers and engineers.",
  image: "/OPC UA.svg",
  tags: ["OPC UA", "Pump Control", "Open Source", "Fluidic Systems"],
  category: "Scientific",
  date: "2024-06-23",
  status: "Delivered",
  collaborators: ["Niccolò Silvestri", "Erjon Hysa", "Teresa Pellegrino"],
  methodology: "The OPC UA Interface was developed through a streamlined methodology: requirements were gathered to address precise pump control needs in laboratory fluidic systems using the OPC UA protocol. A modular GUI was designed with Tkinter and ttkbootstrap, integrated with python-opcua for server communication, emphasizing action sequencing and monitoring. The application was coded with a program table, action/control buttons, and threaded execution, tested for accuracy with an OPC UA server, and validated via Codacy. It was released on GitHub with comprehensive documentation and a Zenodo DOI, licensed under Creative Commons for open customization.",
  results: "OPC UA Interface is a fully functional, open-source Python tool for automating laboratory pump control, freely downloadable and customizable from its GitHub repository. It offers a robust GUI for creating and executing pump action sequences, with real-time status and timing feedback, published under a Creative Commons Attribution License on GitHub and Zenodo with a DOI for academic referencing.",
  isFeatured: true,
  doi: "10.5281/zenodo.12799898", // Replace with a real DOI if available
};

export default project2Data;