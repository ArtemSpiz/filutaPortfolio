// Placeholder utilities (Directus replaced with mock data)

/**
 * Get placeholder image URL for mock/development
 */
export function getOptimizedImageUrl(
  imageId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
    fit?: 'cover' | 'contain' | 'inside' | 'outside';
  } = {}
): string {
  const seed = String(imageId).replace(/[^a-z0-9-]/gi, '1') || '1';
  const width = options.width || 800;
  const height = options.height || 600;
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
