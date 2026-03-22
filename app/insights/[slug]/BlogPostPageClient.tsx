'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Blog posts data
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
  'precision-is-the-new-competitive-moat': {
    title: 'Precision Is the New Competitive Moat',
    category: 'Strategy',
    date: 'Mar 15, 2026',
    readTime: '4 min read',
    excerpt: 'The easier it becomes to produce content, the less any individual piece is worth. The marketers winning now are not out-producing AI. They are being precise.',
    image: '/images/blog/2026-03-15_precision-is-the-new-competitive-moat_header.webp',
    content: [
      { type: 'paragraph', text: 'There is a paradox at the center of the AI content boom. The easier it becomes to produce content, the less any individual piece of it is worth. Brands are generating more than ever, audiences are consuming it less than ever, and the gap between volume and value has never been wider.' },
      { type: 'paragraph', text: 'The marketers who understand this are not trying to out-produce AI. They are doing something harder and more durable: they are being precise.' },
      { type: 'heading', text: 'The Volume Trap' },
      { type: 'paragraph', text: 'When production costs drop to near zero, the instinct is to flood. More blog posts, more social content, more email sequences, more ad variations. The logic feels sound — if content drives results, more content drives more results.' },
      { type: 'paragraph', text: 'But that is not what is happening. What is happening is that audiences are becoming more selective under higher noise conditions, not less. When everything competes for attention, the threshold for what actually earns it rises. Generic content does not just underperform — it actively damages brand perception by signaling that a company does not know enough to be genuinely useful.' },
      { type: 'paragraph', text: 'Forrester has put a number on the counter-trend: the perceived value of data-grounded human expertise has increased by roughly 30% as AI-generated content has proliferated. The market is correcting. The signal is getting more valuable as the noise gets louder.' },
      { type: 'heading', text: 'What Precision Actually Looks Like' },
      { type: 'paragraph', text: 'Precision in marketing is not about being more careful with words. It is about understanding your category deeply enough to say something that could only come from you — something that requires context, judgment, and accumulated expertise to produce.' },
      { type: 'paragraph', text: 'Your customers are not searching for more content. They are searching for three specific things: accuracy about their actual situation, strategic insight that connects their problem to a path forward, and business truth that a generalist could not extract from the same data they already have.' },
      { type: 'paragraph', text: 'The distinction matters. Anyone can write an article about marketing trends in 2026. Only a team that has spent years inside specific industries, with specific clients, across specific competitive dynamics, can produce a piece of analysis that a CFO reads and thinks: this person understands my problem better than my last three consultants did.' },
      { type: 'paragraph', text: 'That is not a function of effort. It is a function of depth.' },
      { type: 'heading', text: 'The New Competitive Logic' },
      { type: 'paragraph', text: 'This creates an unusual strategic situation. In most markets, scale is a moat. In the attention economy right now, depth is the moat. And depth cannot be automated, at least not in any meaningful sense.' },
      { type: 'paragraph', text: 'You cannot prompt your way to genuine category expertise. You can use AI to research faster, synthesize more efficiently, and distribute more broadly — but the underlying judgment that makes content precise still has to come from somewhere real. The brands that are winning audience trust in high-noise environments are the ones treating expertise as an asset to be developed and deployed, not a commodity to be scaled.' },
      { type: 'paragraph', text: 'This has direct implications for how marketing budgets and priorities should be structured. The question is not: how do we produce more content? The question is: how do we become genuinely worth reading?' },
      { type: 'heading', text: 'Outshine the Noise' },
      { type: 'paragraph', text: 'KNBL\'s operating principle — "outshine the noise, be impossible to ignore" — is not aspirational language. It is a strategic position. In an environment where most content is interchangeable, differentiation comes from the willingness to be specific, to take a position, to make a claim that requires real expertise to back up.' },
      { type: 'paragraph', text: 'The brands that will still have audience relationships worth something in three years are the ones currently making the harder choice: producing less, but making each piece count for more.' },
      { type: 'paragraph', text: 'Precision does not scale the way volume does. That is precisely why it is a moat.' },
    ],
  },
  'your-best-influencers-are-already-on-payroll': {
    title: 'Your Best Influencers Are Already on Payroll',
    category: 'Content',
    date: 'Feb 19, 2026',
    readTime: '4 min read',
    excerpt: 'Content shared by employees generates 8x more engagement than the same post from a company page. Your most credible voices are not for hire — they already show up to work every day.',
    image: '/images/blog/2026-02-19_your-best-influencers-are-already-on-payroll_header.webp',
    content: [
      { type: 'paragraph', text: 'Most brands looking to build credibility and reach go looking in the same place: external influencers, paid partnerships, sponsored content. The assumption is that influence lives outside the organization and needs to be purchased.' },
      { type: 'paragraph', text: 'That assumption is increasingly wrong — and the data behind it is hard to ignore.' },
      { type: 'heading', text: 'The Underused Asset' },
      { type: 'paragraph', text: 'Research from Social Media Today and the Hinge Research Institute points to something that should change how B2B brands think about content distribution: content shared by individual employees generates roughly eight times more engagement than the same content posted from a company\'s official page.' },
      { type: 'paragraph', text: 'Eight times. Not a marginal improvement — a structural difference in how audiences respond to the same message depending on who delivers it.' },
      { type: 'paragraph', text: 'The reason is not complicated. People trust people. This is not a quirk of social media algorithms — it is a feature of human psychology that predates digital platforms entirely. A recommendation from someone you know, or feel you know, carries more weight than a message from an institution. When an employee shares their perspective on something their company does, it lands differently than a polished corporate post because it is perceived as genuine rather than managed.' },
      { type: 'paragraph', text: 'This is what Internal Influencers are: employees who build authentic professional voices and become a distributed network of brand ambassadors — not because they are performing a function, but because they have something real to say.' },
      { type: 'heading', text: 'Why This Matters More Right Now' },
      { type: 'paragraph', text: 'The AI era has introduced a specific challenge for brand content: everything is starting to sound the same. When any company can generate a polished LinkedIn post in 30 seconds, the volume of interchangeable professional content rises, and audience trust in branded content falls accordingly.' },
      { type: 'paragraph', text: 'The one thing that cannot be replicated by an AI model is a specific person\'s actual experience, perspective, and professional history. An employee who has spent five years solving a particular problem for clients in a particular industry has a point of view that is genuinely unique. When they share it, it stands out — not because it is better produced, but because it is real.' },
      { type: 'paragraph', text: 'This creates a practical moat. Internal influence programs do not just drive reach; they create differentiation that becomes harder to copy the more consistently it is practiced.' },
      { type: 'heading', text: 'What Good Programs Actually Look Like' },
      { type: 'paragraph', text: 'Adobe launched a formal employee ambassador initiative that has become one of the more cited examples in B2B marketing. The structure is deliberately light: it equips willing employees with content resources and a framework, then gets out of the way. The content that performs best is almost never the most polished — it is the most specific and personal.' },
      { type: 'paragraph', text: 'Starbucks takes a more cultural approach, referring to its employees as "partners" and building a company identity that employees feel genuinely connected to. The result is organic advocacy at scale, driven not by a content calendar but by people who actually want to represent the brand.' },
      { type: 'paragraph', text: 'The common thread: both approaches treat employees as participants in the brand, not recipients of communications about it.' },
      { type: 'heading', text: 'Building an Internal Influence Program' },
      { type: 'paragraph', text: 'The starting point is not a policy — it is a culture question. Do employees understand the company\'s positioning well enough to represent it authentically? Do they feel ownership over the brand or distance from it?' },
      { type: 'paragraph', text: 'If the answer is ownership, the mechanics are straightforward. Identify employees who are already communicating publicly and have natural credibility in their space. Give them content support without over-scripting them. Create internal forums where interesting work gets visibility that can be turned into external content. Measure the output in terms of reach and trust signals, not volume.' },
      { type: 'paragraph', text: 'The goal is not to turn employees into a content factory. It is to remove the friction between genuine expertise that already exists inside the organization and the audience that would benefit from hearing it.' },
      { type: 'paragraph', text: 'Your most credible voices are not for hire. They already show up to work every day.' },
    ],
  },
  'stop-renting-attention': {
    title: 'Stop Renting Attention: Why Marketing Infrastructure Outlasts Every Campaign',
    category: 'Strategy',
    date: 'Mar 17, 2026',
    readTime: '5 min read',
    excerpt: 'Most marketing budgets are structured like short-term rentals. The moment the spend stops, so does your presence. The brands that win long-term are the ones building assets, not buying impressions.',
    image: '/images/blog/2026-03-17_stop-renting-attention_header.webp',
    content: [
      { type: 'paragraph', text: 'Most marketing budgets are structured like short-term rentals. You pour money into a campaign, enjoy the traffic and impressions for 30 days, and the moment the budget runs out, you vanish from your customer\'s awareness. Six months of silence, then another spike at the next "peak." Repeat.' },
      { type: 'paragraph', text: 'This is renting attention. And in the current environment, the lease terms are getting worse every cycle.' },
      { type: 'heading', text: 'The Expense vs. Asset Distinction' },
      { type: 'paragraph', text: 'There is a structural difference between a campaign and a marketing infrastructure, and it is not a matter of scale or sophistication. It is a matter of what the investment actually creates.' },
      { type: 'paragraph', text: 'A campaign is an expense. It produces activity during its runtime and little beyond that. An infrastructure is an asset. It produces returns that compound: content that surfaces in organic search for years, communities that generate peer-to-peer trust without media spend, thought leaders inside the company whose credibility accumulates with every article and conversation.' },
      { type: 'paragraph', text: 'The Ehrenberg-Bass Institute has documented this in practice. Brands that maintain a consistent presence in customer awareness, not just during campaign windows, grow faster than competitors who rely on burst strategies. The core insight is deceptively simple: if you are not present when the customer is not actively looking, you will not be present when they are.' },
      { type: 'paragraph', text: 'This is the timing problem that campaign-only thinking cannot solve.' },
      { type: 'heading', text: 'What Infrastructure Actually Means' },
      { type: 'paragraph', text: 'The shift being predicted across marketing leadership right now is significant: somewhere in the range of 75% of incremental budgets redirected toward structural assets rather than transactional campaigns. That is not a rounding error. That is a fundamental reallocation of how brand investment is understood.' },
      { type: 'paragraph', text: 'What does that infrastructure look like in practice?' },
      { type: 'paragraph', text: 'Content assets that belong to you. Long-form articles, point-of-view pieces, data-driven analysis. These are not about volume. A single genuinely useful piece that addresses a real problem in your category will generate more trust over 18 months than a hundred undifferentiated promotional posts.' },
      { type: 'paragraph', text: 'Expert communities built around your brand. Not an audience you rent from a platform, but a network you build around shared professional interests. People who come back not because an algorithm serves them your content, but because the conversation has actual value.' },
      { type: 'paragraph', text: 'Internal thought leaders. The most underused asset in most organizations is the expertise that already exists inside them. B2B brands are beginning to recognize what the data has shown for years: content shared by individual employees gets substantially higher engagement than the same content posted from a corporate account. Because people trust people.' },
      { type: 'paragraph', text: 'Automated systems that maintain presence. Lead nurture workflows, email sequences, retargeting logic. Not glamorous, but not optional if you are serious about consistent presence.' },
      { type: 'heading', text: 'The Skyscraper Problem' },
      { type: 'paragraph', text: 'Building a 50-story structure requires an entirely different foundation than building a single-story one. You cannot pour a shallow foundation, get excited about the view from the second floor, and then wonder why it collapses when the structural load increases.' },
      { type: 'paragraph', text: 'Campaign-only marketing is the equivalent of constantly repainting the exterior while skipping the foundation work entirely. It looks active. It generates reports. It does not build anything that lasts.' },
      { type: 'paragraph', text: 'The brands that will dominate their categories in three to five years are not necessarily the ones with the biggest current campaign budgets. They are the ones currently making the less glamorous decisions: investing in content infrastructure, building communities that do not require paid activation to stay engaged, and developing the internal voices that make the brand recognizable even when no media is running.' },
      { type: 'heading', text: 'What Ownership Looks Like' },
      { type: 'paragraph', text: 'The goal is not to eliminate campaigns. It is to stop making them the entire strategy.' },
      { type: 'paragraph', text: 'A campaign built on top of a functioning infrastructure performs differently than one launched into a vacuum. The audience already knows who you are. The trust is pre-installed. The campaign activates an existing relationship rather than trying to create one from scratch in 30 days.' },
      { type: 'paragraph', text: 'That is the difference between renting attention and owning it. One requires continuous spending just to maintain position. The other builds a foundation that holds value even when the media goes quiet.' },
      { type: 'paragraph', text: 'The marketing leaders who understand this distinction are not just allocating budgets differently. They are building organizations that are structurally harder to compete with.' },
    ],
  },
  'the-cmo-as-navigator': {
    title: 'The CMO as Navigator: Why Brand Direction Is the Scarcest Skill in the AI Era',
    category: 'AI & Tech',
    date: 'Mar 19, 2026',
    readTime: '5 min read',
    excerpt: 'AI has collapsed the cost of content creation, but judgment, direction, and brand clarity have never been more expensive. The marketers who last won\'t be the ones who generate the most. They\'ll be the ones who know where they\'re going.',
    image: '/images/blog/2026-03-19_the-cmo-as-navigator_header.webp',
    content: [
      { type: 'heading', text: 'The marketers who last won\'t be the ones who generate the most. They\'ll be the ones who know where they\'re going.' },
      { type: 'paragraph', text: 'There\'s a paradox sitting at the center of modern marketing. The cost of content creation has collapsed to near zero. Anyone with a laptop and a subscription can generate campaigns, copy, visuals, and strategies in minutes. The barrier to producing marketing has never been lower, and yet the results for most brands have never felt more incoherent.' },
      { type: 'paragraph', text: 'More output. Less signal. More tactics. Less direction.' },
      { type: 'paragraph', text: 'In this environment, the competitive advantage has quietly shifted. It no longer belongs to the team that executes fastest. It belongs to the one that knows, with precision, what it\'s trying to become, and can hold that line under pressure.' },
      { type: 'heading', text: 'From Executor to Navigator' },
      { type: 'paragraph', text: 'For decades, the strongest CMO competencies were operational: media buying acumen, creative oversight, campaign management, funnel optimization. These still matter. But they\'re increasingly table stakes, capabilities that AI is absorbing faster than any job description can keep up with.' },
      { type: 'paragraph', text: 'What AI cannot absorb is the function of orientation. The ability to read a noisy landscape and say, with conviction: this is our path, these are our values, this is where the brand is heading, regardless of which platforms exist tomorrow, regardless of which tools are hot this quarter.' },
      { type: 'paragraph', text: 'This is the navigator\'s role. Not to row harder. To set the compass.' },
      { type: 'paragraph', text: 'The most durable CMOs of the next decade won\'t be defined by their tool stack. They\'ll be defined by their capacity to distill business truth, to identify what is actually true about their company, their customers, and their competitive position, and translate that truth into a coherent brand direction that everyone in the organization can follow.' },
      { type: 'heading', text: 'Why "Expertise" Has Been Repriced' },
      { type: 'paragraph', text: 'Forrester\'s latest research is worth sitting with: the perceived value of human data-driven expertise has jumped 30% in the past 18 months. That number isn\'t a coincidence. It\'s a direct response to the flood.' },
      { type: 'paragraph', text: 'When AI can produce ten versions of a brief in seconds, the question of which version is right becomes more expensive to answer, not less. Judgment, real, earned, context-rich judgment, is the scarce input. The market is repricing it accordingly.' },
      { type: 'paragraph', text: 'Senior marketing professionals who understand this are already repositioning. They\'re not trying to out-generate the machine. They\'re investing in the capabilities that make their direction irreplaceable: deep category knowledge, customer empathy that runs below the surface of survey data, and an ability to translate complex business realities into simple, resonant brand narratives.' },
      { type: 'paragraph', text: 'These aren\'t soft skills. They\'re the hardest skills in the room.' },
      { type: 'heading', text: 'The Three Capabilities That Will Separate Navigators from Everyone Else' },
      { type: 'paragraph', text: 'Expertise as a business asset. Not expertise in tools or channels, but expertise in the specific market the brand inhabits. What drives purchasing behavior in this category? What do customers actually believe, as opposed to what they say they believe? What are the structural tensions in this industry that nobody is addressing directly? The CMO who can answer these questions with specificity is worth ten times the one who can\'t, and the gap is widening.' },
      { type: 'paragraph', text: 'The ability to distill business truth. Every brand sits on a set of genuine truths: what it\'s unusually good at, what it stands for under pressure, what it will not compromise on. The navigator\'s job is to find these truths, articulate them clearly, and make them the center of gravity for all marketing decisions. This sounds obvious. It is shockingly rare.' },
      { type: 'paragraph', text: 'A brand value compass. Not a guidelines document. A living, tested orientation that functions under real conditions: when the budget is cut, when a trend is tempting, when a competitor moves. A compass is only useful when the terrain is confusing. The brands that hold their direction in noise are the ones that built this compass before they needed it.' },
      { type: 'heading', text: 'The Shift That Changes Everything' },
      { type: 'paragraph', text: 'The most important reframe for senior marketers right now is this: your value is not in your output. It\'s in your orientation.' },
      { type: 'paragraph', text: 'In an era where anyone can produce, the question every brand team should be asking is not are we producing enough? It\'s do we know where we\'re going, and does everything we produce point there?' },
      { type: 'paragraph', text: 'The teams that can answer yes, without hesitation, with evidence, are the ones that will build something that lasts. Everyone else is just adding to the noise they claim to be cutting through.' },
    ],
  },
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

export default function BlogPostPageClient({ slug }: { slug: string }) {
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
