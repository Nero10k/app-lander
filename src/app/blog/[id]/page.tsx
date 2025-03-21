import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This generates metadata for each blog post dynamically
export async function generateMetadata({ params }: { params: { id: string } }) {
  // In a real app, you would fetch this data from a CMS or API
  const post = getBlogPostById(parseInt(params.id));
  
  if (!post) {
    return {
      title: "Post Not Found - PWR Blog",
      description: "The blog post you're looking for could not be found.",
    };
  }
  
  return {
    title: `${post.title} - PWR Blog`,
    description: post.excerpt,
    keywords: ["porn addiction recovery", "nofap", post.category.toLowerCase(), "recovery journey"],
  };
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);
  const post = getBlogPostById(postId);
  
  if (!post) {
    notFound();
  }
  
  // Sample related posts - in a real app, this would be dynamically generated
  const relatedPosts = [
    {
      id: postId === 1 ? 2 : 1,
      title: postId === 1 ? "5 Emergency Techniques to Beat Urges" : "The Science Behind Brain Rewiring",
      category: postId === 1 ? "Strategies" : "Science",
      image: postId === 1 ? "/blog-image2.svg" : "/blog-image1.svg",
    },
    {
      id: postId === 3 ? 4 : 3,
      title: postId === 3 ? "Building Healthy Relationships After Addiction" : "From 3 Days to 300: John's Recovery Journey",
      category: postId === 3 ? "Relationships" : "Success Story",
      image: postId === 3 ? "/blog-image4.svg" : "/blog-image3.svg",
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

      {/* Blog Post Hero */}
      <section className="relative pt-20 pb-10 overflow-hidden">
        <div className="absolute inset-0 deep-purple-gradient opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            
            <div className="bg-[#8A4FFF]/80 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-4">
              {post.category}
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-400 mb-8">
              <span>{post.date}</span>
              <span className="mx-3">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-10 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="premium-card rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl text-gray-300 mb-6">
                  {post.excerpt}
                </p>
                
                {/* Sample blog content - in a real app, this would come from a CMS */}
                <h2 className="text-2xl font-bold mt-8 mb-4">Understanding the Challenge</h2>
                <p className="mb-6">
                  Porn addiction is a complex issue that affects millions of men worldwide. The neurological impact of excessive porn consumption can lead to changes in brain chemistry similar to those seen in substance addiction. This article explores the science behind these changes and provides practical strategies for recovery.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">The Science of Recovery</h2>
                <p className="mb-6">
                  When you consistently avoid pornographic content, your brain begins a healing process known as neuroplasticity. This process involves the formation of new neural pathways and the weakening of old ones associated with addictive behaviors. Research shows that significant improvements can be observed within 90 days of abstinence.
                </p>
                
                <div className="bg-[#121212] p-6 rounded-xl border border-[#333] my-8">
                  <h3 className="text-xl font-bold mb-3">Key Recovery Milestones</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Days 1-7: Initial withdrawal symptoms, including irritability and strong urges</li>
                    <li>Days 8-30: Gradual normalization of dopamine sensitivity</li>
                    <li>Days 31-90: Significant reduction in intrusive thoughts and cravings</li>
                    <li>Beyond 90 days: Substantial rewiring of neural pathways and lasting changes</li>
                  </ul>
                </div>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Practical Applications</h2>
                <p className="mb-6">
                  Understanding the science behind recovery can help you develop more effective strategies. By recognizing that your brain is physically changing during the recovery process, you can approach setbacks with greater patience and persistence.
                </p>
                
                <p className="mb-6">
                  The PWR app is designed to support this neurological healing process through features like streak tracking, which helps you visualize your progress, and emergency tools that provide immediate support during moments of temptation.
                </p>
                
                <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
                <p className="mb-6">
                  Recovery from porn addiction is not just about willpower—it's about allowing your brain the time and space to heal and form new, healthier neural pathways. By understanding the science behind this process, you can approach your recovery journey with greater confidence and clarity.
                </p>
              </div>
              
              {/* Author Section */}
              <div className="mt-12 flex items-center p-6 glass-effect rounded-xl">
                <div className="w-16 h-16 rounded-full bg-[#8A4FFF]/20 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#8A4FFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Michael Thompson</h3>
                  <p className="text-gray-400">Neuroscientist and Addiction Recovery Specialist</p>
                </div>
              </div>
              
              {/* Share Section */}
              <div className="mt-8 flex items-center">
                <span className="mr-4 text-gray-400">Share this article:</span>
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2]/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#4267B2]/20 flex items-center justify-center text-[#4267B2] hover:bg-[#4267B2]/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#0077B5]/20 flex items-center justify-center text-[#0077B5] hover:bg-[#0077B5]/30 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Posts */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                <div className="space-y-6">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="premium-card rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                      <div className="relative h-40 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0A] z-10"></div>
                        <div className="absolute top-3 left-3 bg-[#8A4FFF]/80 text-white px-2 py-1 rounded-full text-xs font-medium z-20">
                          {relatedPost.category}
                        </div>
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          width={300}
                          height={150}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold hover:text-[#8A4FFF] transition-colors">
                          <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Categories */}
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/blog" className="bg-[#8A4FFF] px-4 py-2 rounded-full text-sm font-medium">All</Link>
                  <Link href="/blog?category=science" className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Science</Link>
                  <Link href="/blog?category=strategies" className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Strategies</Link>
                  <Link href="/blog?category=success-stories" className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Success Stories</Link>
                  <Link href="/blog?category=relationships" className="bg-[#121212] hover:bg-[#1A1A1A] px-4 py-2 rounded-full text-sm font-medium transition-colors">Relationships</Link>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="premium-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-400 mb-4">Get the latest recovery tips and strategies delivered to your inbox.</p>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-[#121212] border border-[#333] focus:border-[#8A4FFF] focus:outline-none mb-4"
                />
                <button className="btn-primary w-full px-4 py-3 rounded-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
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

// Helper function to get blog post by ID
function getBlogPostById(id: number) {
  // This would typically come from a database or CMS
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
  
  return blogPosts.find(post => post.id === id);
} 