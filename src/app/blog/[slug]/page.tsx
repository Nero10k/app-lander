import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  const siteUrl = 'https://powerquitporn.com';

  return {
    title: `${post.title} | POWER Blog`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      url: `${siteUrl}/blog/${post.slug}`,
      siteName: 'POWER',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(params.slug, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'POWER',
      url: 'https://powerquitporn.com',
    },
    keywords: post.tags.join(', '),
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="pt-24 pb-20">
        {/* Article Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-black z-0" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8A4FFF]/20 rounded-full blur-3xl z-0" />
          <div className="container mx-auto px-4 py-16 relative z-10 max-w-4xl">
            <div className="mb-4">
              <Link
                href="/blog"
                className="text-[#8A4FFF] hover:text-purple-400 transition-colors text-sm inline-flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                All Articles
              </Link>
            </div>

            <span className="inline-block bg-[#8A4FFF]/20 text-[#8A4FFF] text-sm font-medium px-3 py-1 rounded-full border border-[#8A4FFF]/30 mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-white/50 text-sm mb-8">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
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

              {/* CTA */}
              <div className="bg-gradient-to-br from-[#8A4FFF]/20 to-[#8E2DE2]/10 rounded-2xl p-5 border border-[#8A4FFF]/20">
                <h3 className="font-bold text-white mb-2">Ready to start your recovery?</h3>
                <p className="text-white/60 text-sm mb-4">
                  The POWER app gives you structured tools, daily tracking, and urge management — built on the science in this article.
                </p>
                <a
                  href="https://apps.apple.com/nl/app/power-quit-porn-now/id6743706444"
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
