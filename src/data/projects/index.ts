import { ProjectData } from '@/common/types';
import project1Data from './project1';
import project2Data from './project2';
import project3Data from './project3';
import project4Data from './project4';
import project5Data from './project5';
import project8Data from './project8';


export const allProjectsData: ProjectData[] = [
  project1Data,
  project2Data,
  project3Data,
  project4Data,
  project5Data,
  project8Data,
].sort((a, b) => a.id - b.id); // Ensure sorted by ID

export const getProjectById = (id: number): ProjectData | undefined => {
  return allProjectsData.find(project => project.id === id);
};

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return allProjectsData.find((project) => project.slug === slug);
};

/** Resolves /projects/:param when param is a slug (e.g. MPI) or legacy numeric id (e.g. 8). */
export const getProjectBySlugOrLegacyId = (
  param: string | undefined
): ProjectData | undefined => {
  if (!param) return undefined;
  if (/^\d+$/.test(param)) {
    return getProjectById(parseInt(param, 10));
  }
  return getProjectBySlug(param);
};