import { getCaseStudies } from '../../utils/mock-data';

export default defineEventHandler(async () => {
  try {
    const caseStudies = await getCaseStudies();
    return caseStudies;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
});
