import { Metadata } from 'next';
import Link from 'next/link';
import { getAuthorBySlug, authors } from '@/lib/authors';
import { getAllPosts } from '@/lib/blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const author = getAuthorBySlug(params.slug);
  if (!author) return { title: 'Author Not Found' };

  return {
    title: `${author.name} | POWER Blog`,
    description: author.bio,
    alternates: { canonical: `https://powerquitporn.com/authors/${params.slug}` },
    openGraph: {
      title: `${author.name} – ${author.title}`,
      description: author.bio,
      type: 'profile',
    },
  };
}

export default function AuthorPage({ params }: PageProps) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const posts = getAllPosts().filter((p) => p.author === params.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    jobTitle: author.title,
    description: author.bio,
    url: `https://powerquitporn.com/authors/${author.slug}`,
    worksFor: {
      '@type': 'Organization',
      name: 'POWER',
      url: 'https://powerquitporn.com',
    },
    knowsAbout: author.credentials,
    ...(author.twitterHandle && {
      sameAs: [`https://twitter.com/${author.twitterHandle}`],
    }),
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-10">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white/70 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#8A4FFF]">{author.name}</span>
          </nav>

          {/* Author profile */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16 pb-16 border-b border-white/10">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#8A4FFF] to-[#8E2DE2] flex items-center justify-center text-3xl font-black text-white">
                {author.name.charAt(0)}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">{author.name}</h1>
              <p className="text-[#8A4FFF] font-medium mb-4">{author.title}</p>
              <p className="text-white/70 leading-relaxed mb-6 max-w-2xl">{author.bio}</p>

              {/* Credentials */}
              <div className="flex flex-wrap gap-2 mb-4">
                {author.credentials.map((cred) => (
                  <span
                    key={cred}
                    className="text-xs bg-white/5 border border-white/10 text-white/60 px-3 py-1 rounded-full"
                  >
                    {cred}
                  </span>
                ))}
              </div>

              {author.twitterHandle && (
                <a
                  href={`https://twitter.com/${author.twitterHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  @{author.twitterHandle}
                </a>
              )}
            </div>
          </div>

          {/* Articles by this author */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Articles by {author.name.split(' ')[0]}
              <span className="text-white/30 text-lg font-normal ml-3">({posts.length})</span>
            </h2>

            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                    <article className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/8 hover:border-[#8A4FFF]/30 transition-all">
                      <span className="inline-block text-xs bg-[#8A4FFF]/20 text-[#8A4FFF] px-2.5 py-1 rounded-full border border-[#8A4FFF]/30 mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-white font-bold text-lg leading-snug mb-3 group-hover:text-[#8A4FFF] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
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
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-white/40">
                No articles published yet under this author profile. All POWER content is attributed to the Editorial Team by default.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
