import { getTeamMembers } from '../../utils/mock-data';

export default defineEventHandler(async () => {
  try {
    const teamMembers = await getTeamMembers('research');
    return teamMembers;
  } catch (error) {
    console.error('Error fetching research team members:', error);
    return [];
  }
});
