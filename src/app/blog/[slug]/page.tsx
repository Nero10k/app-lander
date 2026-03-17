import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { getAuthorBySlug } from '@/lib/authors';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE_URL = 'https://powerquitporn.com';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: getAuthorBySlug(post.author)?.name ?? 'POWER Editorial Team' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: 'POWER',
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 3);
  const author = getAuthorBySlug(post.author);
  const isHowTo = post.title.toLowerCase().startsWith('how to');

  // Article JSON-LD
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: author?.name ?? 'POWER Editorial Team',
      url: `${SITE_URL}/authors/${post.author}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'POWER',
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
  };

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.category, item: `${SITE_URL}/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}` },
      { '@type': 'ListItem', position: 4, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  // HowTo JSON-LD for "how to" articles
  const howToJsonLd = isHowTo ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: author?.name ?? 'POWER Editorial Team',
    },
  } : null;

  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {howToJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      )}
      <Header />

      <main className="pt-24 pb-20">
        {/* Article Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-black z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A4FFF]/20 rounded-full blur-3xl z-0" />
          <div className="container mx-auto px-4 py-16 relative z-10 max-w-4xl">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
              <span>/</span>
              <Link
                href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-white/70 transition-colors"
              >
                {post.category}
              </Link>
              <span>/</span>
              <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
            </nav>

            <span className="inline-block bg-[#8A4FFF]/20 text-[#8A4FFF] text-sm font-medium px-3 py-1 rounded-full border border-[#8A4FFF]/30 mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author + meta row */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href={`/authors/${post.author}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8A4FFF] to-[#6D28D9] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                  {(author?.name ?? 'P').charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {author?.name ?? 'POWER Editorial Team'}
                  </div>
                  {author && (
                    <div className="text-xs text-white/40">{author.title}</div>
                  )}
                </div>
              </Link>
              <span className="text-white/20">·</span>
              <time dateTime={post.date} className="text-sm text-white/50">
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span className="text-white/20">·</span>
              <span className="text-sm text-white/50">{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
            {/* Main content */}
            <article className="prose prose-invert prose-purple max-w-none
              prose-headings:font-bold prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-white/80 prose-p:leading-relaxed prose-p:mb-4
              prose-li:text-white/80 prose-li:leading-relaxed
              prose-strong:text-white
              prose-a:text-[#8A4FFF] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-[#8A4FFF] prose-blockquote:text-white/70
              prose-table:text-sm
              prose-th:text-white prose-th:bg-[#1a1a1a]
              prose-td:text-white/80 prose-td:border-white/10
              prose-hr:border-white/10
              prose-code:text-[#8A4FFF] prose-code:bg-[#1a1a1a] prose-code:px-1 prose-code:rounded
            ">
              <MDXRemote source={post.content} />
            </article>

            {/* End-of-article CTA — visible on all screen sizes, including mobile */}
            <div className="mt-12 bg-gradient-to-br from-[#8A4FFF]/20 to-[#8E2DE2]/10 rounded-2xl p-6 md:p-8 border border-[#8A4FFF]/20 lg:hidden">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">Ready to quit for good?</h3>
                  <p className="text-white/60 text-sm">
                    POWER gives you structured tools, daily tracking, and urge management — built on the neuroscience in this article. 250,000+ men are already on their recovery journey.
                  </p>
                </div>
                <a
                  href="https://apps.apple.com/us/app/power-quit-porn-now/id6743706444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all whitespace-nowrap"
                >
                  Download Free
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Tags */}
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-[#8A4FFF]/10 text-[#8A4FFF] px-2 py-1 rounded-full border border-[#8A4FFF]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author card */}
              {author && (
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">About the Author</h3>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8A4FFF] to-[#6D28D9] flex items-center justify-center text-sm font-bold text-white flex-shrink-0">
                      {author.name.charAt(0)}
                    </div>
                    <div>
                      <Link href={`/authors/${post.author}`} className="text-sm font-semibold text-white hover:text-[#8A4FFF] transition-colors">
                        {author.name}
                      </Link>
                      <p className="text-xs text-[#8A4FFF] mb-2">{author.title}</p>
                      <p className="text-xs text-white/50 leading-relaxed line-clamp-3">{author.bio}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#8A4FFF]/20 to-[#8E2DE2]/10 rounded-2xl p-5 border border-[#8A4FFF]/20">
                <h3 className="font-bold text-white mb-2">Ready to start your recovery?</h3>
                <p className="text-white/60 text-sm mb-4">
                  The POWER app gives you structured tools, daily tracking, and urge management — built on the science in this article.
                </p>
                <a
                  href="https://apps.apple.com/us/app/power-quit-porn-now/id6743706444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-[#8A4FFF] to-[#8E2DE2] text-white px-4 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  Download Free
                </a>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/blog/${r.slug}`}
                        className="block group"
                      >
                        <span className="text-xs text-[#8A4FFF] mb-1 block">{r.category}</span>
                        <span className="text-sm text-white/80 group-hover:text-white transition-colors leading-snug">
                          {r.title}
                        </span>
                        <span className="text-xs text-white/40 mt-1 block">{r.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
