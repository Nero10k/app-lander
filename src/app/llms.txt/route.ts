import { getAllPosts, getAllCategories } from '@/lib/blog';

const BASE_URL = 'https://powerquitporn.com';

export async function GET() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  const blogList = posts
    .map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.description}`)
    .join('\n');

  const categoryList = categories.join(', ');

  const content = `# POWER – Porn Addiction Recovery App & Blog

> POWER is a science-backed platform helping men quit pornography, rewire their brains, and reclaim their lives. The site combines an iOS recovery app with an extensive educational blog covering neuroscience, practical strategies, success stories, and lifestyle guidance for pornography addiction recovery.

## App

- [Download POWER on the App Store](https://apps.apple.com/nl/app/power-quit-porn-now/id6743706444): Neuroscience-backed recovery tools including urge tracking, brain rewiring exercises, personalized 90-day recovery plans, and progress tracking.
- [Take the Recovery Assessment](${BASE_URL}/quiz): A free quiz that evaluates addiction severity and generates a personalized recovery plan.

## Blog

The POWER blog publishes science-based, long-form articles on pornography addiction recovery. Categories include: ${categoryList}.

All articles are written to be informative, evidence-based, and helpful to men seeking recovery from pornography addiction.

### All Articles

${blogList}

## FAQ

POWER hosts a comprehensive FAQ page covering 40+ questions across 7 categories: What Is Porn Addiction, Science & the Brain, Recovery Process, NoFap & Abstinence, Porn & Sexual Function (PIED), Relationships, and The POWER App.

- [Full FAQ](${BASE_URL}/faq): Authoritative answers to every major question about porn addiction and recovery, with FAQPage JSON-LD schema.

### Key FAQ Topics Covered

- Is porn addiction real?
- What does porn addiction do to the brain?
- How long does brain recovery take after quitting porn?
- What is dopamine downregulation?
- What is the flatline in porn recovery?
- How to quit porn — where to start
- What is a reboot and how long does it take?
- Porn withdrawal symptoms
- How to handle urges and cravings
- What to do after a relapse
- What is NoFap?
- NoFap benefits — what the science actually says
- Does NoFap increase testosterone?
- What is PIED (porn-induced erectile dysfunction)?
- How does porn cause erectile dysfunction?
- How long does PIED take to recover?
- Should I tell my partner about my porn addiction?
- Can a relationship survive porn addiction?

## Key Pages

- [Homepage](${BASE_URL}): App features, benefits, testimonials, and download links.
- [Blog Index](${BASE_URL}/blog): Full list of recovery articles with category filtering.
- [Full FAQ](${BASE_URL}/faq): 40+ expert answers to every question about porn addiction and recovery.
- [Sitemap](${BASE_URL}/sitemap.xml): Complete sitemap of all pages and blog posts.

## About

POWER was built for men struggling with pornography addiction. All content is grounded in neuroscience research on dopamine, neuroplasticity, and behavioral addiction. The app and blog focus on practical, evidence-based recovery tools rather than shame or willpower-based approaches.

## Optional: Full Content

For full article content, see [llms-full.txt](${BASE_URL}/llms-full.txt).
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
