import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PWR Blog - Recovery Resources & Insights",
  description: "Explore articles, guides, and success stories to help you on your journey to break free from porn addiction.",
  keywords: ["porn addiction recovery", "nofap blog", "addiction recovery", "brain rewiring", "success stories"],
};

export default function BlogPage() {
  // Sample blog posts data - in a real app, this would come from a CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "The Science Behind Brain Rewiring",
      excerpt: "Understanding the neurological changes that occur during recovery from porn addiction and how to accelerate the healing process.",
      date: "June 15, 2023",
      category: "Science",
      image: "/blog-image1.svg",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "5 Emergency Techniques to Beat Urges",
      excerpt: "Practical strategies you can implement immediately when facing strong urges to relapse.",
      date: "July 3, 2023",
      category: "Strategies",
      image: "/blog-image2.svg",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "From 3 Days to 300: John's Recovery Journey",
      excerpt: "How one man went from constant relapses to complete freedom from porn addiction.",
      date: "August 12, 2023",
      category: "Success Story",
      image: "/blog-image3.svg",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Building Healthy Relationships After Addiction",
      excerpt: "How to develop meaningful connections and restore trust in relationships affected by porn addiction.",
      date: "September 5, 2023",
      category: "Relationships",
      image: "/blog-image4.svg",
      readTime: "9 min read",
    },
    {
      id: 5,
      title: "The Role of Exercise in Recovery",
      excerpt: "How physical activity can accelerate your recovery and help manage urges effectively.",
      date: "October 20, 2023",
      category: "Lifestyle",
      image: "/blog-image5.svg",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Meditation Techniques for Addiction Recovery",
      excerpt: "Simple mindfulness practices that can strengthen your resolve and improve focus.",
      date: "November 8, 2023",
      category: "Mindfulness",
      image: "/blog-image6.svg",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-luxury-gradient text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/pwr-logo.svg"
                alt="PWR Logo"
                width={120}
                height={40}
                priority
                className="hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="hover:text-[#8A4FFF] transition-colors">Features</Link>
            <Link href="/#benefits" className="hover:text-[#8A4FFF] transition-colors">Benefits</Link>
            <Link href="/#how-it-works" className="hover:text-[#8A4FFF] transition-colors">How It Works</Link>
            <Link href="/blog" className="text-[#8A4FFF] transition-colors">Blog</Link>
            <Link href="/#faq" className="hover:text-[#8A4FFF] transition-colors">FAQ</Link>
          </nav>
          <Link 
            href="/#download" 
            className="btn-primary px-6 py-2 rounded-full font-medium"
          >
            Download
          </Link>
        </div>
      </header>

      {/* Blog Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 deep-purple-gradient opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#8A4FFF]/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#8E2DE2]/10 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Recovery</span> Resources & <span className="gold-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Expert advice, success stories, and practical strategies to support your journey to freedom
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Latest <span className="text-gradient">Articles</span></h2>
            
            {/* Categories Filter - Static for now */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button className="bg-[#8A4FFF] px-4 py-2 rounded-full text-sm font-medium">All</button>
              <button className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Science</button>
              <button className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Strategies</button>
              <button className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Success Stories</button>
              <button className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Relationships</button>
              <button className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Lifestyle</button>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="premium-card rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10"></div>
                  <div className="absolute top-4 left-4 bg-[#8A4FFF]/80 text-white px-3 py-1 rounded-full text-xs font-medium z-20">
                    {post.category}
                  </div>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-[#8A4FFF] transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-[#8A4FFF] font-medium hover:underline inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-[#8A4FFF] flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#1A1A1A] flex items-center justify-center">2</button>
              <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#1A1A1A] flex items-center justify-center">3</button>
              <button className="w-10 h-10 rounded-full bg-[#121212] hover:bg-[#1A1A1A] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8A4FFF]/5 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get <span className="text-gradient">Recovery Tips</span> in Your Inbox
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our newsletter for exclusive content, tips, and motivation delivered straight to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 rounded-full bg-[#121212] border border-[#333] focus:border-[#8A4FFF] focus:outline-none"
              />
              <button className="btn-primary px-8 py-4 rounded-full font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#0A0A0A] to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <Image
                  src="/pwr-logo.svg"
                  alt="PWR Logo"
                  width={120}
                  height={40}
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
              <p className="text-gray-500 mt-4 max-w-md">
                Empowering men to break free from porn addiction and reclaim their lives through science-based tools and community support.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4 text-gradient">App</h4>
                <ul className="space-y-2">
                  <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                  <li><Link href="/#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</Link></li>
                  <li><Link href="/#download" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 text-gradient">Resources</h4>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Recovery Guide</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4 text-gradient">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#222] pt-8 mt-8 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} PWR App. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 