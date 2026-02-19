// =============================================================================
// MOCK DATA - Replace Directus for development/demo
// =============================================================================

export const MOCK_CATEGORIES = [
  { id: 1, title: 'News', value: 'news', slug: 'news', order: 1 },
  { id: 2, title: 'Research', value: 'research', slug: 'research', order: 2 },
  {
    id: 3,
    title: 'Government & Education',
    value: 'government-education',
    slug: 'government-education',
    order: 3,
  },
];

const createMockImage = (seed: number) => ({
  id: `mock-img-${seed}`,
  filename_download: `placeholder-${seed}.png`,
  width: 800,
  height: 600,
});

export const MOCK_BLOG_POSTS = [
  {
    id: 1,
    title: 'How AI is Transforming Compliance in Education',
    slug: 'how-ai-transforming-compliance-education',
    subtitle:
      'Exploring the impact of AI-powered solutions on school district compliance workflows.',
    content: '<p>Content about AI transforming compliance in education...</p>',
    category: MOCK_CATEGORIES[0],
    featured_image: createMockImage(1),
    published_at: '2025-01-15T10:00:00Z',
    status: 'published',
    meta_title: 'AI Compliance in Education | Filuta',
    meta_description: 'Exploring AI-powered compliance solutions for education.',
    seo_keywords: ['AI', 'compliance', 'education'],
  },
  {
    id: 2,
    title: 'Automated Testing for Government Systems',
    slug: 'automated-testing-government-systems',
    subtitle: 'Best practices for implementing automated testing in government software systems.',
    content: '<p>Content about automated testing...</p>',
    category: MOCK_CATEGORIES[2],
    featured_image: createMockImage(2),
    published_at: '2025-01-10T10:00:00Z',
    status: 'published',
    meta_title: 'Government Automated Testing | Filuta',
    meta_description: 'Best practices for government system testing.',
    seo_keywords: ['government', 'testing', 'automation'],
  },
  {
    id: 3,
    title: 'Research: Synthetic Reasoning in QA',
    slug: 'research-synthetic-reasoning-qa',
    subtitle: 'Our latest research on applying synthetic reasoning to quality assurance.',
    content: '<p>Research content...</p>',
    category: MOCK_CATEGORIES[1],
    featured_image: createMockImage(3),
    published_at: '2025-01-05T10:00:00Z',
    status: 'published',
    meta_title: 'Synthetic Reasoning Research | Filuta',
    meta_description: 'Research on synthetic reasoning in QA.',
    seo_keywords: ['research', 'synthetic reasoning', 'QA'],
  },
  {
    id: 4,
    title: 'Reducing Risk with AI-Powered Audits',
    slug: 'reducing-risk-ai-powered-audits',
    subtitle: 'How AI can help identify compliance gaps before they become problems.',
    content: '<p>Content about AI audits...</p>',
    category: MOCK_CATEGORIES[0],
    featured_image: createMockImage(4),
    published_at: '2024-12-20T10:00:00Z',
    status: 'published',
    meta_title: 'AI Audits | Filuta',
    meta_description: 'AI-powered compliance audits.',
    seo_keywords: ['AI', 'audits', 'risk'],
  },
];

export const MOCK_TEAM_LEADERSHIP = [
  {
    id: 1,
    name: 'Jane Smith',
    position: 'CEO & Co-Founder',
    bio: 'Former tech executive with 15+ years in compliance and automation.',
    image: createMockImage(10),
    department: 'leadership',
    linkedIn: 'https://linkedin.com/in/janesmith',
    order: 1,
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'CTO',
    bio: 'Expert in AI and automation systems for enterprise software.',
    image: createMockImage(11),
    department: 'leadership',
    linkedIn: 'https://linkedin.com/in/johndoe',
    order: 2,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    position: 'Head of Product',
    bio: 'Product leader focused on government and education solutions.',
    image: createMockImage(12),
    department: 'leadership',
    linkedIn: 'https://linkedin.com/in/sarahjohnson',
    order: 3,
  },
];

export const MOCK_TEAM_RESEARCH = [
  {
    id: 4,
    name: 'Dr. Alex Chen',
    position: 'Lead AI Researcher',
    bio: 'PhD in Machine Learning, specializing in synthetic reasoning.',
    image: createMockImage(13),
    department: 'research',
    linkedIn: 'https://linkedin.com/in/alexchen',
    order: 1,
  },
  {
    id: 5,
    name: 'Maria Garcia',
    position: 'Senior Research Scientist',
    bio: 'Focused on AI applications for quality assurance.',
    image: createMockImage(14),
    department: 'research',
    linkedIn: 'https://linkedin.com/in/mariagarcia',
    order: 2,
  },
  {
    id: 6,
    name: 'David Kim',
    position: 'Research Engineer',
    bio: 'Building AI agents for automated testing workflows.',
    image: createMockImage(15),
    department: 'research',
    linkedIn: 'https://linkedin.com/in/davidkim',
    order: 3,
  },
];

export const MOCK_CASE_STUDIES = [
  {
    id: 1,
    title: 'Streamlining Compliance for Large School District',
    slug: 'streamlining-compliance-school-district',
    subtitle: 'How we helped a district reduce compliance time by 60%.',
    content: '<p>Case study content...</p>',
    featured_image: createMockImage(20),
    published_at: '2025-01-12T10:00:00Z',
    status: 'published',
    meta_title: 'School District Case Study | Filuta',
    meta_description: 'Reducing compliance time in education.',
    seo_keywords: ['case study', 'education', 'compliance'],
  },
  {
    id: 2,
    title: 'Government Portal Testing at Scale',
    slug: 'government-portal-testing-scale',
    subtitle: 'Automated testing for a state government citizen portal.',
    content: '<p>Case study content...</p>',
    featured_image: createMockImage(21),
    published_at: '2025-01-08T10:00:00Z',
    status: 'published',
    meta_title: 'Government Portal Case Study | Filuta',
    meta_description: 'Testing government systems at scale.',
    seo_keywords: ['government', 'testing', 'scale'],
  },
  {
    id: 3,
    title: 'University System Integration',
    slug: 'university-system-integration',
    subtitle: 'Integrating AI testing across multiple university campuses.',
    content: '<p>Case study content...</p>',
    featured_image: createMockImage(22),
    published_at: '2024-12-15T10:00:00Z',
    status: 'published',
    meta_title: 'University Integration | Filuta',
    meta_description: 'AI testing across university systems.',
    seo_keywords: ['university', 'integration', 'education'],
  },
];

export const MOCK_TESTIMONIALS = [
  {
    id: 1,
    title:
      "With Filuta Al's Planning Agents, we uncovered bugs we never would've found manually. The full test coverage and streamlined process saved us time and let our team focus on building a better game.",
    name: 'Martin Melicharek',
    position: 'Lead Developer',
    company: 'Bohemia Interactive',
    video_url: 'https://youtu.be/2HG63WAxLtc',
    video: null,
    company_logo: createMockImage(30),
    status: 'published',
  },
  {
    id: 2,
    title:
      "With Filuta Al's Planning Agents, we uncovered bugs we never would've found manually. The full test coverage and streamlined process saved us time and let our team focus on building a better game.",
    name: 'Martin Melicharek',
    position: 'Lead Developer',
    company: 'Bohemia Interactive',
    video_url: 'https://youtu.be/2HG63WAxLtc',
    video: null,
    company_logo: createMockImage(30),
    status: 'published',
  },
  {
    id: 3,
    title:
      "With Filuta Al's Planning Agents, we uncovered bugs we never would've found manually. The full test coverage and streamlined process saved us time and let our team focus on building a better game.",
    name: 'Martin Melicharek',
    position: 'Lead Developer',
    company: 'Bohemia Interactive',
    video_url: 'https://youtu.be/2HG63WAxLtc',
    video: null,
    company_logo: createMockImage(30),
    status: 'published',
  },
];
