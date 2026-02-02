import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { GuideMetadata, Guide } from './guides-types';

export type { GuideMetadata, Guide };
export { categoryInfo } from './guides-types';

const guidesDirectory = path.join(process.cwd(), 'resources/Guides');

// Get all categories
export function getGuideCategories(): string[] {
  const categories = fs.readdirSync(guidesDirectory, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  return categories;
}

// Get all guides in a category
export function getGuidesInCategory(category: string): GuideMetadata[] {
  const categoryPath = path.join(guidesDirectory, category);

  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const items = fs.readdirSync(categoryPath, { withFileTypes: true });
  const guides: GuideMetadata[] = [];

  for (const item of items) {
    if (item.isFile() && item.name.endsWith('.md')) {
      const slug = item.name.replace(/\.md$/, '');
      const fullPath = path.join(categoryPath, item.name);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract title from first H1 or filename
      const titleMatch = content.match(/^#\s+(.+)$/m);
      const title = data.title || (titleMatch ? titleMatch[1] : formatSlugToTitle(slug));

      // Calculate reading time (roughly 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readingTime = `${Math.ceil(wordCount / 200)} min read`;

      // Extract description from first paragraph or use default
      const descMatch = content.match(/^(?!#)(?!\s*$)(.+?)(?:\n|$)/m);
      const description = data.description || (descMatch ? descMatch[1].slice(0, 160) : '');

      guides.push({
        slug,
        category,
        title,
        description,
        readingTime
      });
    } else if (item.isDirectory()) {
      // Handle nested directories (like GameDesign/Tools, GameDesign/Theory)
      const subCategoryPath = path.join(categoryPath, item.name);
      const subFiles = fs.readdirSync(subCategoryPath).filter(f => f.endsWith('.md'));

      for (const file of subFiles) {
        const slug = `${item.name}/${file.replace(/\.md$/, '')}`;
        const fullPath = path.join(subCategoryPath, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = data.title || (titleMatch ? titleMatch[1] : formatSlugToTitle(file.replace(/\.md$/, '')));

        const wordCount = content.split(/\s+/).length;
        const readingTime = `${Math.ceil(wordCount / 200)} min read`;

        const descMatch = content.match(/^(?!#)(?!\s*$)(.+?)(?:\n|$)/m);
        const description = data.description || (descMatch ? descMatch[1].slice(0, 160) : '');

        guides.push({
          slug,
          category,
          title,
          description,
          readingTime
        });
      }
    }
  }

  return guides;
}

// Get all guides across all categories
export function getAllGuides(): GuideMetadata[] {
  const categories = getGuideCategories();
  const allGuides: GuideMetadata[] = [];

  for (const category of categories) {
    const guides = getGuidesInCategory(category);
    allGuides.push(...guides);
  }

  return allGuides;
}

// Get all guide paths for static generation
export function getAllGuidePaths(): { category: string; slug: string[] }[] {
  const categories = getGuideCategories();
  const paths: { category: string; slug: string[] }[] = [];

  for (const category of categories) {
    const guides = getGuidesInCategory(category);
    for (const guide of guides) {
      paths.push({
        category: category.toLowerCase(),
        slug: guide.slug.split('/')
      });
    }
  }

  return paths;
}

// Get a single guide by category and slug
export async function getGuide(category: string, slugParts: string[]): Promise<Guide | null> {
  // Find the actual category (case-insensitive)
  const categories = getGuideCategories();
  const actualCategory = categories.find(c => c.toLowerCase() === category.toLowerCase());

  if (!actualCategory) {
    return null;
  }

  const slug = slugParts.join('/');
  const possiblePaths = [
    path.join(guidesDirectory, actualCategory, `${slug}.md`),
    path.join(guidesDirectory, actualCategory, ...slugParts.slice(0, -1), `${slugParts[slugParts.length - 1]}.md`)
  ];

  let fullPath = '';
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      fullPath = p;
      break;
    }
  }

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  // Extract title
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = data.title || (titleMatch ? titleMatch[1] : formatSlugToTitle(slugParts[slugParts.length - 1]));

  // Calculate reading time
  const wordCount = content.split(/\s+/).length;
  const readingTime = `${Math.ceil(wordCount / 200)} min read`;

  // Extract description
  const descMatch = content.match(/^(?!#)(?!\s*$)(.+?)(?:\n|$)/m);
  const description = data.description || (descMatch ? descMatch[1].slice(0, 160) : '');

  return {
    slug,
    category: actualCategory,
    title,
    description,
    readingTime,
    content: contentHtml
  };
}

// Helper to format slug to title
function formatSlugToTitle(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

