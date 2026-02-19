import { getTestimonials } from '../../utils/mock-data';

export default defineEventHandler(async () => {
  try {
    const testimonials = await getTestimonials();
    return testimonials;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
});
