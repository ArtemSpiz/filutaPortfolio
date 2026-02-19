import { getTeamMembers } from '../../utils/mock-data';

export default defineEventHandler(async () => {
  try {
    const teamMembers = await getTeamMembers('leadership');
    return teamMembers;
  } catch (error) {
    console.error('Error fetching about team members:', error);
    return [];
  }
});
