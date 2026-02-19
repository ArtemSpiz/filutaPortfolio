// API Configuration Constants
export const API_CONFIG = {
  SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
} as const;

// Blog Configuration
export const BLOG_CONFIG = {
  DEFAULT_LIMIT: 12,
  DEFAULT_PAGE: 1,
  IMAGE_OPTIONS: {
    width: 800,
    height: 600,
    quality: 85,
    format: 'webp' as const,
    fit: 'cover' as const,
  },
} as const;

// Category Configuration
export const CATEGORIES = {
  ALL: 'all',
  NEWS: 'news',
  RESEARCH: 'research',
  GOVERNMENT_EDUCATION: 'government-education',
} as const;

// Collection names (for reference)
export const COLLECTIONS = {
  BLOG_POSTS: 'blog_posts',
  CATEGORIES: 'categories',
  TEAM_MEMBERS: 'team_members',
} as const;

export const FIELD_NAMES = {
  STATUS: 'status',
  PUBLISHED: 'published',
  CATEGORY: 'category',
  FEATURED_IMAGE: 'featured_image',
  ORDER: 'order',
} as const;
