// =============================================================================
// MOCK DATA LAYER - Replaces Directus
// =============================================================================

import {
  MOCK_CATEGORIES,
  MOCK_BLOG_POSTS,
  MOCK_TEAM_LEADERSHIP,
  MOCK_TEAM_RESEARCH,
  MOCK_CASE_STUDIES,
  MOCK_TESTIMONIALS,
} from '../data/mock';

// =============================================================================
// PLACEHOLDER IMAGE URL (picsum.photos for consistent demo images)
// =============================================================================

export const getPlaceholderImageUrl = (imageId: string, width = 800, height = 600): string => {
  const seed = imageId.replace('mock-img-', '') || '1';
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

// =============================================================================
// CATEGORIES API
// =============================================================================

export const getCategories = async () => {
  return { data: MOCK_CATEGORIES };
};

const findCategoryId = (categoryParam: string): number | null => {
  const categoryId = parseInt(categoryParam);
  if (!isNaN(categoryId)) return categoryId;
  const cat = MOCK_CATEGORIES.find(
    c => c.slug === categoryParam || c.title === categoryParam || String(c.id) === categoryParam
  );
  return cat?.id ?? null;
};

// =============================================================================
// BLOG POSTS API
// =============================================================================

export const getBlogPosts = async (
  params: { category?: string; page?: number; limit?: number } = {}
) => {
  let posts = [...MOCK_BLOG_POSTS];

  if (params.category && params.category !== 'all') {
    const categoryId = findCategoryId(params.category);
    if (categoryId) {
      posts = posts.filter((p: any) => p.category?.id === categoryId);
    } else {
      return {
        data: [],
        pagination: {
          current: params.page || 1,
          total: 0,
          limit: params.limit || 12,
        },
      };
    }
  }

  const limit = params.limit || 12;
  const page = params.page || 1;
  const offset = (page - 1) * limit;
  const paginatedPosts = posts.slice(offset, offset + limit);

  return {
    data: paginatedPosts,
    pagination: {
      current: page,
      total: posts.length,
      limit,
    },
  };
};

export const getBlogPost = async (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const post = MOCK_BLOG_POSTS.find((p: any) => p.slug === decodedSlug);
  if (!post) return null;

  const result = { ...post };
  result.related = MOCK_BLOG_POSTS.filter((p: any) => p.id !== post.id && p.category?.id === post.category?.id)
    .slice(0, 3);

  return result;
};

// =============================================================================
// TEAM MEMBERS API
// =============================================================================

export const getTeamMembers = async (department: 'leadership' | 'research') => {
  if (department === 'leadership') return MOCK_TEAM_LEADERSHIP;
  return MOCK_TEAM_RESEARCH;
};

// =============================================================================
// CASE STUDIES API
// =============================================================================

export const getCaseStudies = async () => {
  return MOCK_CASE_STUDIES;
};

export const getCaseStudy = async (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const caseStudy = MOCK_CASE_STUDIES.find((c: any) => c.slug === decodedSlug);
  if (!caseStudy) return null;

  const result = { ...caseStudy };
  result.related = MOCK_CASE_STUDIES.filter((c: any) => c.id !== caseStudy.id).slice(0, 3);
  return result;
};

// =============================================================================
// TESTIMONIALS API
// =============================================================================

export const getTestimonials = async () => {
  return MOCK_TESTIMONIALS;
};

// =============================================================================
// LEADS API (mock - logs to console, returns success)
// =============================================================================

export interface LeadFormData {
  fullName: string;
  email: string;
  company: string;
  companySize: string;
  product: string;
  stack: string;
  hasAutomation: string;
  automationTools?: string;
  hasApis: string;
  challenges: string;
  source?: string;
}

export const createLead = async (leadData: LeadFormData) => {
  console.log('[MOCK] Lead received:', leadData);
  return { success: true, data: { id: `mock-${Date.now()}`, ...leadData } };
};
