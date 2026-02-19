import { getBlogPost } from '../../utils/mock-data';

export default defineEventHandler(async event => {
  try {
    const slug = getRouterParam(event, 'slug');
    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Slug parameter is required',
      });
    }

    const decodedSlug = decodeURIComponent(slug);
    const post = await getBlogPost(decodedSlug);

    if (!post) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Blog post not found',
      });
    }

    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch blog post',
    });
  }
});
