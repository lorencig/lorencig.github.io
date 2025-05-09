import { ProjectData } from '@/common/types';
import project1Data from './project1';
import project2Data from './project2';
import project3Data from './project3';
import project4Data from './project4';
import project5Data from './project5';
import project6Data from './project6';
import project7Data from './project7';

export const allProjectsData: ProjectData[] = [
  project1Data,
  project2Data,
  project3Data,
  project4Data,
  project5Data,
  project6Data,
  project7Data,
].sort((a, b) => a.id - b.id); // Ensure sorted by ID

export const getProjectById = (id: number): ProjectData | undefined => {
  return allProjectsData.find(project => project.id === id);
};