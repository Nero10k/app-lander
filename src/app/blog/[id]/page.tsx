import { Metadata } from 'next';

// Mock blog post data
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  content: string;
}

function getBlogPostById(id: number): BlogPost | null {
  // Mock data - in a real app, this would fetch from a database or API
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with Recovery",
      excerpt: "First steps in your recovery journey",
      category: "Recovery",
      content: "Full blog post content here..."
    }
  ];
  
  return posts.find(post => post.id === id) || null;
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

export default async function BlogPost({ params }: PageProps) {
  const postId = parseInt(params.id);
  const post = getBlogPostById(postId);
  
  if (!post) {
    return null;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="prose max-w-none">
        {post.content}
      </div>
    </article>
  );
}
