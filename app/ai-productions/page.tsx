import type { Metadata } from 'next';
import AiProductionsPageClient from './AiProductionsPageClient';
import { JsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'AI Productions',
  description: 'KNBL AI Productions — Generative AI video content, virtual spokespersons, motion design, and immersive brand experiences. See our AI-powered campaigns for Electra, H&O, Xiaomi, Takeda, and more.',
  alternates: { canonical: '/ai-productions' },
  openGraph: {
    title: 'KNBL AI Productions — Generative AI Brand Content',
    description: 'AI-powered video productions, virtual spokespersons, and immersive brand experiences. Campaigns for Electra, H&O, Xiaomi, Takeda.',
    url: '/ai-productions',
  },
};

export default function AIProductionsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Productions',
    provider: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
    },
    description: 'Generative AI video production, virtual spokespersons, motion design, and immersive brand experiences using cutting-edge AI technology.',
    url: 'https://knbl.co/ai-productions',
    serviceType: 'AI Video Production',
    areaServed: ['Israel', 'International'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Production Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Generative AI Video',
            description: 'Commercial video content created with generative AI technology',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Virtual Spokesperson',
            description: 'Photorealistic AI-generated brand spokespeople for campaigns',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Agents & Automation',
            description: 'Trends research agents, newsletter automation, and social media AI platforms',
          },
        },
      ],
    },
  };

  const baseUrl = 'https://knbl.co';
  const gcpBase = 'https://storage.googleapis.com/knbl_website/optimized/videos';

  const videoSchemas = [
    {
      name: 'Electra "BEYOND" Project',
      description: 'AI-generated brand film for Electra\'s BEYOND product line, featuring generative visuals and tech-forward storytelling produced entirely with AI.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/electra-beyond.jpg`,
      contentUrl: `${gcpBase}/electra/1926_ELECTRA_AI_NOFIT_VID_B_ENGLISH_1920x1080_hrnc1a.webm`,
      uploadDate: '2024-10-01',
      keywords: 'AI video production, Electra, brand film, generative AI',
    },
    {
      name: 'Electra Robotic Parking',
      description: 'AI video production showcasing Electra\'s robotic parking innovation, combining motion design and generative visuals to demonstrate cutting-edge infrastructure technology.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/electra-robotic-parking.jpg`,
      contentUrl: `${gcpBase}/electra/2749_ELECTRA_Robotic_Parking_VIDEO_1920X1080_02_iakpwj.webm`,
      uploadDate: '2024-11-01',
      keywords: 'AI video, Electra, robotic parking, innovation, motion design',
    },
    {
      name: 'Electra Precise Speed',
      description: 'Gen-AI storytelling video for Electra Shneider, using AI-generated sequences to communicate engineering precision and speed.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/electra-shneider.jpg`,
      contentUrl: `${gcpBase}/electra/electra_Precise_Speed_LOW_bv6bzb.webm`,
      uploadDate: '2024-12-01',
      keywords: 'generative AI storytelling, Electra, engineering, AI production',
    },
    {
      name: 'H&O Black Friday Commercial',
      description: 'AI motion design commercial for H&O fashion brand\'s Black Friday campaign, produced with generative AI to create high-impact retail advertising at speed.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/ho-black-friday.jpg`,
      contentUrl: `${gcpBase}/ho/3452_HO_Black_Friday_commerical_VIDEO_1920X1080_C_V7_bubsky.webm`,
      uploadDate: '2024-11-01',
      keywords: 'AI commercial, H&O fashion, Black Friday, motion design, retail advertising',
    },
    {
      name: 'H&O Jeans Collection',
      description: 'AI product launch video for H&O\'s jeans collection, blending cinematic storytelling with generative AI to create fashion content at scale.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/ho-jeans.jpg`,
      contentUrl: `${gcpBase}/ho/HO_JEANS_NEW_7-9_VIDEO_1920x1080_25FPS_ihsjsj.webm`,
      uploadDate: '2024-09-01',
      keywords: 'AI fashion video, H&O, jeans collection, product launch, generative AI',
    },
    {
      name: 'Takeda Pharmaceuticals — Health Campaign',
      description: 'AI-produced health awareness campaign video for Takeda Pharmaceuticals, using generative AI to translate complex medical messaging into compelling visual storytelling.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/takeda.jpg`,
      contentUrl: `${gcpBase}/takeda/takeda_fin_LOWER_sgeqe4.webm`,
      uploadDate: '2024-09-01',
      keywords: 'AI video, Takeda, pharmaceutical, health campaign, generative AI',
    },
    {
      name: 'POCO X7 Series Launch — AI Production',
      description: 'Generative AI launch video for Xiaomi\'s POCO X7 Series smartphone, creating immersive product visuals and dynamic sequences entirely through AI production.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/poco-x7-1.jpg`,
      contentUrl: `${gcpBase}/xiaomi/Pocco_X7_launch_for_Xiaomi_-_AI_production_uetowy.webm`,
      uploadDate: '2026-01-01',
      keywords: 'AI product video, Xiaomi, POCO X7, smartphone launch, generative AI',
    },
    {
      name: 'POCO X7 Series — Immersive AI Experience',
      description: 'Second AI production video for Xiaomi\'s POCO X7 Series, focusing on immersive visual experience and creative AI-generated environments.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/poco-x7-2.jpg`,
      contentUrl: `${gcpBase}/xiaomi/Pocco_X7_launch_for_Xiaomi_-_AI_production_no2_f9b9c3.webm`,
      uploadDate: '2026-01-01',
      keywords: 'AI immersive video, Xiaomi, POCO X7, creative AI, product launch',
    },
    {
      name: 'AI Emotional Brand Film',
      description: 'Emotionally-driven generative AI video showcasing KNBL\'s capability to produce deeply resonant brand content using advanced AI production techniques.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/ai-emotional.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/8u2Q50QoEmcqTVa6DJdGe_output_1_mxzzbt.webm`,
      uploadDate: '2024-10-01',
      keywords: 'AI emotional storytelling, generative AI, brand film, AI production',
    },
    {
      name: 'Roladin Moon — AI Brand Film',
      description: 'Generative AI brand film for Roladin, Israel\'s leading patisserie, creating a visually poetic campaign around their seasonal Moon collection.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/roladin-moon.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/roladin_moon-video-export-2025-12-30T08-37-46.443Z_qk44k2.webm`,
      uploadDate: '2025-12-30',
      keywords: 'AI brand film, Roladin, patisserie, generative AI, food marketing',
    },
    {
      name: 'AI Virtual Spokesperson',
      description: 'Photorealistic AI-generated virtual spokesperson demonstration, showing KNBL\'s capability to create credible, human-like brand ambassadors entirely through generative AI.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/ai-spokesperson.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/Woman_talking_in_202601021508_ab1pf_k46tar.webm`,
      uploadDate: '2026-01-02',
      keywords: 'AI virtual spokesperson, generative AI, brand ambassador, AI avatar',
    },
    {
      name: 'AI Creative Production — Spec Work',
      description: 'AI creative production spec work demonstrating KNBL\'s generative video capabilities across narrative storytelling, visual effects, and brand communication.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/ai-spec-work.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/WhatsApp_Video_2026-01-08_at_19.41.18__without_end_of_video_czxoce.webm`,
      uploadDate: '2026-01-08',
      keywords: 'AI creative production, generative AI, spec work, AI video',
    },
    {
      name: 'Xiaomi Redmi Note 15 Series',
      description: 'AI production video for Xiaomi\'s Redmi Note 15 Series launch in Israel, combining product-focused visuals with dynamic AI-generated motion content.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/xiaomi-redmi-15.jpg`,
      contentUrl: `${gcpBase}/xiaomi/WhatsApp_Video_2026-01-22_at_13.59.38_lw2ehh.webm`,
      uploadDate: '2026-01-22',
      keywords: 'AI video, Xiaomi, Redmi Note 15, smartphone, product launch Israel',
    },
    {
      name: 'Rafael Developer Day',
      description: 'AI event video production for Rafael Advanced Defense Systems\' Developer Day, creating engaging content that showcases Rafael\'s innovation culture.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/rafael-developer-day.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/IMG_1820_nxuyj4.webm`,
      uploadDate: '2024-10-01',
      keywords: 'AI event video, Rafael, defense, developer day, corporate video',
    },
    {
      name: 'Rafael Science Fiction Day',
      description: 'AI-generated creative video for Rafael\'s Science Fiction Day event, using generative AI to bring futuristic defense and technology concepts to life.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/rafael-science-fiction-day.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/%D7%99%D7%95%D7%9D_%D7%94%D7%9E%D7%93%D7%A2_%D7%94%D7%91%D7%93%D7%99%D7%95%D7%A0%D7%99_-_%D7%9E%D7%AA%D7%95%D7%A7%D7%9F_ldcugm.webm`,
      uploadDate: '2024-09-01',
      keywords: 'AI video, Rafael, science fiction, defense technology, generative AI',
    },
    {
      name: 'Rafael 2026 — Year End Corporate Film',
      description: 'AI-produced year-end corporate film for Rafael Advanced Defense Systems, celebrating achievements and looking ahead with cinematic generative AI visuals.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/rafael-2026.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/%D7%A1%D7%95%D7%A3_%D7%A9%D7%A0%D7%94_%D7%A2%D7%91%D7%A8%D7%99%D7%AA_gvo3xc.webm`,
      uploadDate: '2025-12-01',
      keywords: 'AI corporate film, Rafael, defense, year-end, generative AI production',
    },
    {
      name: 'Trans Israel — Connecting the North',
      description: 'AI brand film for Trans Israel Highway documenting the massive infrastructure project connecting northern Israel, combining aerial perspectives with generative AI storytelling.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/trans-israel.jpg`,
      contentUrl: `${gcpBase}/trans%20israel/3785_HOTZE_ISRAEL_CONNECITING_THE_NORTH_AI_VIDEO_1080x1350.webm`,
      uploadDate: '2024-09-01',
      keywords: 'AI brand film, Trans Israel, infrastructure, highway, generative AI',
    },
    {
      name: 'Trends Agents — AI Research & Newsletter Automation',
      description: 'KNBL\'s Trends Agents platform: AI-powered market research and newsletter automation that continuously monitors category trends and delivers curated intelligence to marketing teams.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/trends-agents.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/0112_ylhhh4.webm`,
      uploadDate: '2025-12-01',
      keywords: 'AI trends agent, newsletter automation, market research, AI marketing tools',
    },
    {
      name: 'iGentity — AI Social Media Platform',
      description: 'iGentity is KNBL\'s AI-powered platform for social media creation and management, enabling brands to generate, schedule, and optimise content at scale using artificial intelligence.',
      thumbnailUrl: `${baseUrl}/images/ai-productions/igentity.jpg`,
      contentUrl: `${gcpBase}/ai%20productions/0108_jow8a4.webm`,
      uploadDate: '2025-12-01',
      keywords: 'AI social media, iGentity, content creation, social media management, AI platform',
    },
  ].map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.name,
    description: v.description,
    thumbnailUrl: v.thumbnailUrl,
    contentUrl: v.contentUrl,
    uploadDate: v.uploadDate,
    keywords: v.keywords,
    publisher: {
      '@type': 'Organization',
      name: 'KNBL',
      url: 'https://knbl.co',
    },
  }));

  return (
    <>
      <JsonLd data={serviceSchema} />
      {videoSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <AiProductionsPageClient />
    </>
  );
}
