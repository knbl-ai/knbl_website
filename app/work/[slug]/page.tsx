import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectPageClient from './ProjectPageClient';
import { JsonLd } from '../../components/JsonLd';

// Metadata for each project (subset used for SEO)
const projectsMeta: Record<string, { title: string; description: string }> = {
  'ho-brands': {
    title: 'H&O',
    description: 'Cinematic brand storytelling for H&O fashion — capturing everyday style through timeless visual narratives.',
  },
  'rafael': {
    title: 'Rafael Defense Systems',
    description: 'Dynamic visual storytelling for Rafael, a world-class leader in advanced defense systems and global security.',
  },
  'xiaomi': {
    title: 'Xiaomi',
    description: 'High-energy brand campaigns and AI productions for Xiaomi Israel — defining the rhythm of a connected generation.',
  },
  'roladin': {
    title: 'Roladin',
    description: 'A visual journey into the heart of Roladin patisserie — capturing the art of baking through cinematic storytelling.',
  },
  'carters': {
    title: "Carter's",
    description: "Authentic and playful storytelling for Carter's Israel — bringing the world's most loved baby brand to life.",
  },
  'safari': {
    title: 'Safari',
    description: "Capturing the breathtaking encounters and untamed beauty of Safari Israel's animal kingdom.",
  },
  'anker': {
    title: 'Anker',
    description: "Cinematic product narratives for Anker Israel — bringing cutting-edge technology to life through sharp storytelling.",
  },
  'lod': {
    title: 'Lod Municipality',
    description: "Reshaping the urban landscape — high-impact visuals documenting Lod's city transformation projects.",
  },
  'electra-precise': {
    title: 'Electra Group',
    description: 'Documenting the strength, precision, and vision behind Electra Group — one of Israel\'s most iconic conglomerates.',
  },
  'takeda': {
    title: 'Takeda Pharmaceuticals',
    description: 'Visualizing the journey from groundbreaking research to life-changing moments for Takeda Pharmaceuticals Israel.',
  },
  'reuth-hospital': {
    title: 'Reuth Rehabilitation Hospital',
    description: 'A soulful look at the moments that define the path to recovery at Reuth Rehabilitation Hospital, Tel Aviv.',
  },
  'aion': {
    title: 'Aion Electric Vehicles',
    description: 'Cinematic visuals capturing the electric pulse of a new era in mobility for Aion electric vehicles in Israel.',
  },
  'trans-israel': {
    title: 'Trans Israel Highway',
    description: "High-impact visuals documenting Trans Israel's massive infrastructure projects connecting the nation.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projectsMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsMeta[slug];

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.title} | KNBL Work`,
      description: project.description,
      url: `/work/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsMeta[slug];

  if (!project) {
    notFound();
  }

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${project.title} — KNBL Case Study`,
    description: project.description,
    url: `https://knbl.co/work/${slug}`,
    creator: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
    },
    genre: 'Brand Campaign',
  };

  return (
    <>
      <JsonLd data={creativeWorkSchema} />
      <ProjectPageClient slug={slug} />
    </>
  );
}
