import { ProjectData } from '@/common/types';
import project1Data from './project1';
import project2Data from './project2';
import project3Data from './project3';
import project4Data from './project4';


export const allProjectsData: ProjectData[] = [
  project1Data,
  project2Data,
  project3Data,
  project4Data,
].sort((a, b) => a.id - b.id); // Ensure sorted by ID

export const getProjectById = (id: number): ProjectData | undefined => {
  return allProjectsData.find(project => project.id === id);
};