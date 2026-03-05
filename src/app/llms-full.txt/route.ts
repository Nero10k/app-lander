import { getAllPosts, getPostBySlug } from '@/lib/blog';

const BASE_URL = 'https://powerquitporn.com';

export async function GET() {
  const metas = getAllPosts();

  const sections = metas.map((meta) => {
    const post = getPostBySlug(meta.slug);
    if (!post) return '';

    return [
      `---`,
      `# ${post.title}`,
      `URL: ${BASE_URL}/blog/${post.slug}`,
      `Category: ${post.category}`,
      `Date: ${post.date}`,
      `Tags: ${post.tags.join(', ')}`,
      ``,
      post.content.trim(),
    ].join('\n');
  });

  const content = [
    `# POWER – Full Blog Content`,
    ``,
    `This file contains the full text of all articles published on ${BASE_URL}/blog.`,
    `Last updated: ${new Date().toISOString().split('T')[0]}`,
    ``,
    ...sections,
  ].join('\n\n');

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
