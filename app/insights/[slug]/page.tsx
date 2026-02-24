'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Blog posts data - in a real app this would come from a CMS or database
const blogPosts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: {
    type: 'paragraph' | 'heading';
    text: string;
  }[];
}> = {
  'how-ai-is-redefining-brand-creativity': {
    title: 'How AI Is Redefining Brand Creativity',
    category: 'AI',
    date: 'Oct 14, 2025',
    readTime: '4 min Read',
    excerpt: 'From automated storytelling to adaptive design systems, artificial intelligence is reshaping the creative process in ways brands can no longer ignore.',
    image: '/images/blog/blog-ai.webp',
    content: [
      {
        type: 'paragraph',
        text: 'Artificial intelligence has moved from a futuristic concept to a practical tool that shapes the way brands communicate, design, and evolve. For creative teams, this shift is not only about efficiency. It is about understanding how machines can support human imagination and allow ideas to scale faster than ever. While some fear that AI may dilute originality, the reality inside modern marketing teams is different. AI helps streamline early concepting, remove repetitive production tasks, and open more room for strategic thinking.',
      },
      {
        type: 'heading',
        text: 'One of the most significant',
      },
      {
        type: 'paragraph',
        text: 'One of the most significant transformations is happening in storytelling. AI can identify audience patterns, analyze engagement signals, and suggest different narrative directions that match user intent. It helps teams test angles before investing in full production, ensuring messages feel relevant without losing authenticity. Instead of guessing, brands can now learn in real time how their audience reacts and adjust content with a level of accuracy that was impossible only a few years ago.',
      },
      {
        type: 'heading',
        text: 'Design workflows',
      },
      {
        type: 'paragraph',
        text: 'Design workflows are evolving as well. Creative teams use AI to generate layout variations, adapt compositions to different platforms, and maintain consistent branding even when producing high volumes of assets. This adaptive design approach reduces the time spent on manual resizing and versioning, allowing designers to focus on what matters: the idea itself. For agencies that manage multiple clients across multiple channels, this creates a smoother process that delivers both speed and quality.',
      },
      {
        type: 'heading',
        text: 'Despite its growing',
      },
      {
        type: 'paragraph',
        text: 'Despite its growing capabilities, AI is not replacing the creative mind. It cannot replicate intuition, emotional nuance, or the cultural sensitivity that makes a brand feel alive. Instead, it acts as a partner that sharpens decision making and expands the space for experimentation. The future of brand creativity lies in this balance. Human vision leads the way, and AI supports it by providing insights, precision, and agility. Brands that understand this partnership will continue to stand out in a crowded digital landscape.',
      },
    ],
  },
  'the-end-of-one-size-fits-all-marketing': {
    title: 'The End of "One-Size-Fits-All" Marketing',
    category: 'Data',
    date: 'Sep 28, 2025',
    readTime: '5 min Read',
    excerpt: 'Why brands that personalize their message around real human behavior are winning - and how to start doing it right.',
    image: '/images/blog/blog-data.webp',
    content: [
      {
        type: 'paragraph',
        text: 'The era of generic marketing is over. In a world where consumers are bombarded with thousands of messages daily, the only way to stand out is through relevance. Data-driven personalization has moved from a "nice-to-have" to a fundamental requirement for brand survival.',
      },
      {
        type: 'heading',
        text: 'The power of behavior',
      },
      {
        type: 'paragraph',
        text: 'Modern marketing is no longer about demographics; it is about behavior. By understanding how users interact with content, what they search for, and when they are most active, brands can deliver messages that feel helpful rather than intrusive. This shift requires a robust data engine that can process signals in real time and translate them into actionable creative directions.',
      },
    ],
  },
  'when-trends-become-strategy': {
    title: 'When Trends Become Strategy',
    category: 'Culture',
    date: 'Aug 19, 2025',
    readTime: '3 min Read',
    excerpt: "Understanding cultural signals is more than following hype - it's how smart brands build lasting relevance.",
    image: '/images/blog/blog-culture.webp',
    content: [
      {
        type: 'paragraph',
        text: 'Hyper-speed culture moves faster than traditional strategy can keep up with. For brands, the challenge is no longer just seeing a trend, but knowing which ones to act on and which ones to ignore. True strategy lies in the ability to distinguish between a fleeting moment and a fundamental shift in user behavior.',
      },
      {
        type: 'heading',
        text: 'Cultural Intelligence',
      },
      {
        type: 'paragraph',
        text: 'Building a relevant brand requires cultural intelligence—the ability to read between the lines of social signals. When a brand successfully aligns its core values with a growing cultural movement, it creates a connection that goes beyond a simple transaction. It becomes part of the conversation.',
      },
    ],
  },
  'the-rise-of-micro-communities': {
    title: 'The Rise of Micro-Communities in Brand Building',
    category: 'Culture',
    date: 'Oct 10, 2025',
    readTime: '5 min Read',
    excerpt: 'Why smaller, engaged audiences are becoming more valuable than mass reach for modern brands.',
    image: '/images/blog/blog-culture.webp',
    content: [
      {
        type: 'paragraph',
        text: 'The era of broadcasting to millions is giving way to something more intimate: micro-communities. These tight-knit groups of engaged followers are proving to be more valuable than massive but passive audiences.',
      },
      {
        type: 'heading',
        text: 'Quality over quantity',
      },
      {
        type: 'paragraph',
        text: 'Brands are discovering that a thousand truly engaged fans can drive more business impact than a million casual followers. These micro-communities become brand advocates, creating word-of-mouth momentum that no advertising budget can buy.',
      },
    ],
  },
  'data-driven-storytelling': {
    title: 'Data-Driven Storytelling: The New Creative Frontier',
    category: 'Data',
    date: 'Oct 5, 2025',
    readTime: '3 min Read',
    excerpt: 'How combining analytics with narrative craft is creating more compelling brand stories.',
    image: '/images/blog/blog-data.webp',
    content: [
      {
        type: 'paragraph',
        text: 'Data and creativity were once seen as opposing forces. Today, they work together to create stories that resonate deeply with audiences while delivering measurable results.',
      },
      {
        type: 'heading',
        text: 'The fusion of art and science',
      },
      {
        type: 'paragraph',
        text: 'Modern storytellers use data to understand what moves their audience, then apply creative intuition to craft narratives that connect on an emotional level. This fusion creates content that is both strategically sound and genuinely moving.',
      },
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-[200px] pb-[120px] px-6 text-center">
          <h1 className="text-4xl font-medium mb-4">Post not found</h1>
          <p className="text-neutral-400">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <article className="pt-32 md:pt-48 pb-[120px] px-6 md:px-[120px]">
        <div className="max-w-[640px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Category Tag */}
            <span className="inline-block bg-primary-600 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-[48px] font-medium tracking-[-0.04em] leading-tight mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-neutral-400 text-base leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Meta Tags */}
            <div className="flex gap-3">
              <span className="bg-primary-200 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {post.date}
              </span>
              <span className="bg-primary-200 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                {post.readTime}
              </span>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative w-full h-[427px] rounded-3xl overflow-hidden mb-12"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="640px"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((block, index) => {
              if (block.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-medium tracking-[-0.03em] text-black mt-8 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              return (
                <p
                  key={index}
                  className="text-neutral-400 text-base leading-relaxed mb-6"
                >
                  {block.text}
                </p>
              );
            })}
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
