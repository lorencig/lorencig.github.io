// src/data/projects/project2.ts
import { ProjectData } from '@/common/types';

const project2Data: ProjectData = {
  id: 2,
  title: "OPC UA Python Interface",
  description: "An open-source Python app that provides a simple graphical interface to control complex laboratory pumps, enabling researchers to easily automate and monitor their fluidic experiments.",
  fullDescription: "Modern laboratory equipment often uses powerful industrial communication protocols like OPC UA, which can be complex for daily lab use. I created this interface to act as a simple bridge to that complexity. It’s an open-source Python application that allows any researcher, regardless of their programming expertise, to create, run, and monitor precise sequences of pump actions. Instead of wrestling with complicated protocols, users can visually build their experiments, saving time, reducing errors, and bringing powerful automation to their fingertips.",
  image: "/OPC UA.svg",
  tags: ["OPC UA", "Pump Control", "Open Source", "Fluidic Systems"],
  category: "Scientific",
  date: "2024-06-23",
  status: "Delivered",
  collaborators: ["Niccolò Silvestri", "Erjon Hysa", "Teresa Pellegrino"],
  methodology: "The primary goal was to abstract away the complexity of the OPC UA protocol. This was achieved by developing a Python application with a clean, intuitive graphical interface (GUI). The design focuses on user experience, allowing researchers to build experimental sequences with simple commands. The codebase is modular for easy customization and was rigorously tested against a live OPC UA server to ensure reliable, error-free communication with lab equipment.",
  results: "The project successfully delivered a standalone, open-source tool that empowers researchers to automate their lab experiments without needing specialized programming skills. It provides a visual interface for creating and executing complex pump sequences, replacing tedious manual control. The application is now permanently archived on Zenodo with a DOI, contributing a valuable, reusable tool to the scientific community.",
  isFeatured: true,
  doi: "10.5281/zenodo.12799898", // Replace with a real DOI if available
};

export default project2Data;