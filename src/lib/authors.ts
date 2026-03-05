export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  twitterHandle?: string;
}

export const authors: Author[] = [
  {
    slug: 'power-editorial-team',
    name: 'POWER Editorial Team',
    title: 'Recovery & Neuroscience Writers',
    bio: 'The POWER editorial team consists of researchers, recovery coaches, and neuroscience writers dedicated to providing evidence-based guidance on porn addiction recovery. Every article is reviewed for scientific accuracy and practical applicability.',
    credentials: ['Neuroscience Research', 'Addiction Recovery Coaching', 'Mental Health Education'],
  },
  {
    slug: 'dr-james-carter',
    name: 'Dr. James Carter',
    title: 'Addiction Neuroscience Researcher',
    bio: 'Dr. Carter specializes in the neurological effects of compulsive behavior and has spent over a decade researching dopamine dysregulation in behavioral addictions. He advises the POWER team on scientific accuracy and content rigor.',
    credentials: ['PhD Neuroscience', 'Behavioral Addiction Specialist', '12+ years research experience'],
    twitterHandle: 'drjamescarter',
  },
  {
    slug: 'mark-stevenson',
    name: 'Mark Stevenson',
    title: 'Recovery Coach & Author',
    bio: 'Mark is a certified addiction recovery coach who overcame a decade-long porn addiction himself. He now helps thousands of men through the POWER platform and has written extensively on habit change, urge management, and rebuilding healthy relationships.',
    credentials: ['Certified Recovery Coach (CRC)', 'Former addict turned coach', '8+ years coaching experience'],
    twitterHandle: 'markstevensoncoach',
  },
];

export function getAuthorBySlug(slug: string): Author | null {
  return authors.find((a) => a.slug === slug) ?? null;
}
