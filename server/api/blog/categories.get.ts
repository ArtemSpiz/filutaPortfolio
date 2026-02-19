import { getCategories } from '../../utils/mock-data';

export default defineEventHandler(async () => {
  try {
    const categoriesResponse = await getCategories();

    return {
      categories: categoriesResponse.data || [],
      message: 'Categories fetched successfully',
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      categories: [],
      message: 'Error fetching categories',
      error: error.message,
    };
  }
});
