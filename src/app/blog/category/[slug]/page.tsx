import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

function slugToCategory(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function categoryToSlug(cat: string): string {
  return cat.toLowerCase().replace(/\s+/g, '-');
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: categoryToSlug(cat) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const categories = getAllCategories();
  const matched = categories.find((c) => categoryToSlug(c) === params.slug);
  if (!matched) return { title: 'Category Not Found' };

  return {
    title: `${matched} Articles | POWER Blog`,
    description: `Browse all ${matched.toLowerCase()} articles on POWER — science-backed guides to help you quit porn, rewire your brain, and rebuild your life.`,
    alternates: { canonical: `https://powerquitporn.com/blog/category/${params.slug}` },
    openGraph: {
      title: `${matched} – POWER Blog`,
      description: `All articles about ${matched.toLowerCase()} on POWER.`,
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const categories = getAllCategories();
  const matched = categories.find((c) => categoryToSlug(c) === params.slug);
  if (!matched) notFound();

  const posts = getAllPosts().filter((p) => p.category === matched);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${matched} – POWER Blog`,
    description: `All ${matched.toLowerCase()} articles on POWER`,
    url: `https://powerquitporn.com/blog/category/${params.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://powerquitporn.com' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://powerquitporn.com/blog' },
        { '@type': 'ListItem', position: 3, name: matched, item: `https://powerquitporn.com/blog/category/${params.slug}` },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#8A4FFF]">{matched}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block bg-[#8A4FFF]/20 text-[#8A4FFF] text-sm font-medium px-3 py-1 rounded-full border border-[#8A4FFF]/30 mb-4">
              Category
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{matched}</h1>
            <p className="text-white/60 text-lg">
              {posts.length} article{posts.length !== 1 ? 's' : ''} · Science-backed guides and expert advice
            </p>
          </div>

          {/* Other categories */}
          <div className="flex flex-wrap gap-2 mb-12">
            <Link
              href="/blog"
              className="px-4 py-1.5 rounded-full text-sm border border-white/10 text-white/50 hover:border-white/30 hover:text-white/80 transition-all"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/category/${categoryToSlug(cat)}`}
                className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                  cat === matched
                    ? 'bg-[#8A4FFF]/20 border-[#8A4FFF]/50 text-[#8A4FFF]'
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white/80'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/8 hover:border-[#8A4FFF]/30 transition-all">
                  <span className="inline-block text-xs bg-[#8A4FFF]/20 text-[#8A4FFF] px-2.5 py-1 rounded-full border border-[#8A4FFF]/30 mb-3">
                    {post.category}
                  </span>
                  <h2 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#8A4FFF] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-white/30">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-20 text-white/40">
              No articles found in this category yet.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
