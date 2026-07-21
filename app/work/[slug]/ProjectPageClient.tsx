'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Play, X } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

// Projects data
const projects: Record<string, {
  title: string;
  logo: string;
  logoBg?: string;
  description: string;
  socialLinks: { type: 'instagram' | 'tiktok' | 'facebook'; url: string }[];
  videos: {
    title: string;
    url: string;
    thumbnail?: string;
    aspectRatio?: 'video' | 'portrait' | 'square';
  }[];
}> = {
  'ho-brands': {
    title: 'H&O',
    logo: '/images/partners/ho.png',
    logoBg: '#F7F7F8',
    description: "Where timeless style meets the modern beat.\nCapturing the essence of everyday fashion through cinematic storytelling.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/ho.fashion_?igsh=bnN4azNsNW1jNjZk' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1AeF12pcP2/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Brand Collection', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/H_O_Brand_collection_jt2hv9.webm' },
      { title: 'Family Campaign', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/%D7%94%D7%9E%D7%95%D7%AA%D7%92_%D7%94%D7%9B%D7%99_%D7%97%D7%96%D7%A7_%D7%A9%D7%9C%D7%A0%D7%95_%D7%96%D7%95_%D7%94%D7%9E%D7%A9%D7%A4%D7%97%D7%94_ebatqp.webm' },
      { title: 'Collection Highlights', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/H_O_Brands_Collection_crsb8a%20(1).webm' },
      { title: 'Black Friday Commercial', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/3452_HO_Black_Friday_commerical_VIDEO_1920X1080_C_V7_bubsky.webm' },
      { title: 'Jumbo Collection', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/HnO_28sec_16x9_jumbo_lwvuzv.webm' },
      { title: 'Jeans New Collection', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/ho/HO_JEANS_NEW_7-9_VIDEO_1920x1080_25FPS_ihsjsj.webm' },
      { title: 'H&0 SPRING 2026', url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/4207_HO_SPRING_26_VIDEO_1920X1080_25-3-26.mp4' },
    ],
  },
  'rafael': {
    title: 'Rafael',
    logo: 'https://storage.googleapis.com/knbl_website/optimized/logos/color%20logos/Rafael_MainLogo_RGB.webp',
    logoBg: '#F7F7F8',
    description: "Engineering the future of global security.\nDynamic visual storytelling for a world-class leader in advanced defense systems.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/rafaeldefense_il?igsh=MTVkdzIxcmJvanU4NA==' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1GSDDTkWpf/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Financial Reports', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/rafael/%D7%93%D7%95%D7%97%D7%95%D7%AA_%D7%9B%D7%A1%D7%A4%D7%99%D7%99%D7%9D_%D7%A2%D7%9D_%D7%A1%D7%90%D7%95%D7%A0%D7%93_-_%D7%A8%D7%95%D7%97%D7%91%D7%99_psbzgb.webm', thumbnail: 'https://storage.googleapis.com/knbl_website/optimized/images/rafael/%D7%9B%D7%99%D7%A4%D7%AA_%D7%91%D7%A8%D7%96%D7%9C_1_wlekhg.webp' },
      { title: 'Project Overview', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/rafael/1231_1_ixyoq3.webm' },
      { title: 'Timeline & History', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/rafael/1002_RAFAEL_TIMELINE_VID_F_STORY_ENG_w3all8.webm' },
      { title: 'Corporate Video', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/rafael/%D7%97%D7%95%D7%9C%D7%A6%D7%95%D7%AA_%D7%A8%D7%A4%D7%90%D7%9C_%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%91%D7%9C%D7%99_%D7%9E%D7%95%D7%A8_gszg4v%20(1).webm' },
      { title: 'Event Highlights', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/rafael/%D7%90%D7%99%D7%A8%D7%95%D7%A2_%D7%96%D7%95%D7%92%D7%95%D7%AA_%D7%A1%D7%95%D7%A4%D7%99_icmirh%20(1).webm' },
    ],
  },
  'xiaomi': {
    title: 'Xiaomi',
    logo: '/images/partners/xiaomi.png',
    logoBg: '#F7F7F8',
    description: "Defining the rhythm of a connected generation.\nDynamic storytelling for a powerhouse brand that redefines modern living through endless possibilities.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/xiaomiil?igsh=MXdoY2h0a205dmFlYg==' },
      { type: 'facebook', url: 'https://www.facebook.com/share/189W2LXgm1/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Poco X7 Launch AI Production', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/Pocco_X7_launch_for_Xiaomi_-_AI_production_uetowy.webm' },
      { title: 'Poco X7 Launch AI Production #2', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/Pocco_X7_launch_for_Xiaomi_-_AI_production_no2_f9b9c3.webm' },
      { title: 'Poco X7 AI Video', url: 'https://storage.googleapis.com/knbl_website/videos/xiaomi/1723_POCO_X7_AI_3_VID_1920x1080_xuhfdj.mp4' },
      { title: 'Xiaomi B Campaign', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/11269-5_XIAOMI_B_yg4q7n.webm' },
      { title: 'Brand Story', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/%D7%95%D7%99%D7%93%D7%90%D7%95_%D7%A9%D7%9C_WhatsApp__2024-06-03_%D7%91%D7%A9%D7%A2%D7%94_16.14.53_c9f00e72_o56ori.webm' },
      { title: 'TLV Edit', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/xiaomi/TLV_EDIT_eoqnqi.webm' },
    ],
  },
  'roladin': {
    title: 'Roladin',
    logo: 'https://storage.googleapis.com/knbl_website/optimized/logos/color%20logos/Roladin_logo_BLACK.webp',
    logoBg: '#F7F7F8',
    description: "The art of baking, captured in every frame.\nA visual journey into the heart of world-class patisserie and creative innovation",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/roladin_il?igsh=eXdrazFiYTkyd29x' },
      { type: 'facebook', url: 'https://www.facebook.com/share/17t3nBB9cx/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Bakery Factory', url: 'https://storage.googleapis.com/knbl_website/optimized/roladin%20-%20%D7%9E%D7%A4%D7%A2%D7%9C%20%D7%9C%D7%97%D7%9D_1.webm' },
      { title: 'Branches Overview', url: 'https://storage.googleapis.com/knbl_website/optimized/roladin%20-%20%D7%A1%D7%A0%D7%99%D7%A4%D7%99%D7%9D.webm' },
      { title: 'Square Campaign', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/roladin/ROLADIN_PART_3_-_%D7%A8%D7%99%D7%91%D7%95%D7%A2%D7%99_wisrun.webm' },
    ],
  },
  'carters': {
    title: "Carter's",
    logo: '/images/partners/carters.png',
    logoBg: '#F7F7F8',
    description: "Where quality meets the sweetest memories.\nBringing the world's most loved baby brand to life through authentic and playful storytelling.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/cartersisrael?igsh=MTY3ODkyMjdncDZ0aA==' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1CGyWty72e/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'With You From The Start', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/carters/Carter_s_-_with_you_from_the_start_zb0d6q.webm' },
    ],
  },
  'safari': {
    title: 'Safari',
    logo: 'https://storage.googleapis.com/knbl_website/optimized/logos/color%20logos/logo_eng_brown_full.webp',
    logoBg: '#F7F7F8',
    description: "Bringing the wild heart of Africa to life. \nCapturing the breathtaking encounters and untamed beauty of the animal kingdom.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/safari_israel?igsh=NjJ5NTc0dmMzN2lr' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1FpYYhUG1S/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Safari Experience', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/safari/WhatsApp_Video_2026-01-18_at_12.43.55_rjsdeq.webm' },
    ],
  },
  'takeda': {
    title: 'Takeda',
    logo: '/images/partners/takeda.png',
    logoBg: '#F7F7F8',
    description: "Empowering lives through the art of science. \nVisualizing the journey from groundbreaking research to life-changing moments.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/takeda_il?igsh=c3NyYWVpNHo1dXdu' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1GRfwX6zz4/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Takeda Showcase', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/takeda/takeda_fin_LOWER_sgeqe4.webm' },
      { title: 'Gaucher Project', url: 'https://storage.googleapis.com/knbl_website/optimized/2015_TAKEDA_GAUCHER_VID_FIX_1.webm' },
    ],
  },
  'electra-precise': {
    title: 'Electra group',
    logo: 'https://storage.googleapis.com/knbl_website/optimized/logos/color%20logos/Electra%20Logo%20ENG-01.webp',
    logoBg: '#F7F7F8',
    description: "One group. Infinite impact. \nDocumenting the strength, precision, and vision behind the most iconic projects.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/electragroup_official?igsh=YWJsa3gzbjA3djk=' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1aKnGCNTe8/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Precise Speed', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/electra/electra_Precise_Speed_LOW_bv6bzb.webm' },
      { title: 'Electra "BEYOND" Project', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/electra/1926_ELECTRA_AI_NOFIT_VID_B_ENGLISH_1920x1080_hrnc1a.webm' },
      { title: 'Electra Robotic Parking', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/electra/2749_ELECTRA_Robotic_Parking_VIDEO_1920X1080_02_iakpwj.webm' },
    ],
  },
  'aion': {
    title: 'Aion',
    logo: '/images/partners/aion.png',
    logoBg: '#F7F7F8',
    description: "Driving the next generation of intelligence.\nCinematic visuals that capture the electric pulse of a new era in mobility.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/aion_israel?igsh=MW9jeTVmbXNtb3JwNQ==' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1CG5Xsixtn/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Aion V Showcase', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/aion/1008_jr9vrx.webm' },
      { title: 'Brand Experience', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/aion/AION_-_16X9_%D7%9E%D7%A9%D7%95%D7%9C%D7%91_ngegbm.webm' },
      { title: 'Parking Campaign', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/aion/%D7%97%D7%A0%D7%99%D7%95%D7%9F_%D7%A1%D7%95%D7%A4%D7%99_csahyw.webm' },
      { title: 'HT Highlight', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/aion/HT_ysxnx9.webm' },
      { title: 'Interior Drive', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/aion/%D7%A0%D7%A1%D7%99%D7%A2%D7%94_%D7%9E%D7%91%D7%A4%D7%A0%D7%99%D7%9D_%D7%9E%D7%AA%D7%95%D7%A7%D7%9F_u95ath.webm' },
    ],
  },
  'lod': {
    title: 'Lod',
    logo: 'https://storage.googleapis.com/knbl_website/optimized/logos/color%20logos/CALCALIT_LOD_LOGO.webp',
    logoBg: '#F7F7F8',
    description: "Reshaping the urban landscape, one project at a time",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/calcalit_lod?igsh=dzY0ZHY4N2Fhd253' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1DVYojbZiv/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Urban Transformation', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/lod/lod_16x9_2mbps.webm' },
    ],
  },
  'anker': {
    title: 'Anker',
    logo: '/images/partners/anker.png',
    logoBg: '#F7F7F8',
    description: "Stay charged. Stay connected. Stay ahead.\nBringing Anker's cutting-edge technology - to life through sharp, cinematic narratives",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/anker_israel?igsh=MW41ejJjZGc0dHlvag==' },
      { type: 'facebook', url: 'https://www.facebook.com/share/1HCGgCvNL4/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Anker Eufy Showcase', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/anker/2727_ANKER_EUFY_T2352_PRODUCT_VID_970x250_C%203.webm' },
      { title: 'Eufy E25 Preview', url: 'https://storage.googleapis.com/knbl_website/optimized/videos/anker/HEMILTON_EUFI_E25_f9pu95.webm' },
    ],
  },
  'reuth-hospital': {
    title: 'Reuth Hospital',
    logo: '/images/partners/reuth.png',
    logoBg: '#F7F7F8',
    description: "Restoring life, celebrating progress. \nA soulful look at the moments that define the path to recovery.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/reuth_hospital?igsh=YnA1dmw2cWFkNnZ3' },
      { type: 'facebook', url: 'https://www.facebook.com/share/14TVNU6ybRm/?mibextid=wwXIfr' },
    ],
    videos: [
      { title: 'Challenging the Impossible', url: 'https://storage.googleapis.com/knbl_website/optimized/%D7%9C%D7%90%D7%AA%D7%92%D7%A8%20%D7%90%D7%AA%20%D7%94%D7%91%D7%9C%D7%AA%D7%99%20%D7%90%D7%A4%D7%A9%D7%A8%D7%99%20-%20%D7%91%D7%99%D7%AA%20%D7%94%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%94%D7%A9%D7%99%D7%A7%D7%95%D7%9E%D7%99%20%D7%A8%D7%A2%D7%95%D7%AA.webm' },
      { title: 'Hospital Choir', url: 'https://storage.googleapis.com/knbl_website/optimized/4.12%20%D7%9E%D7%A7%D7%94%D7%9C%D7%94%20-%20%D7%91%D7%99%D7%AA%20%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%A9%D7%99%D7%A7%D7%95%D7%9E%D7%99%20%D7%A8%D7%A2%D7%95%D7%AA.webm' },
    ],
  },
  'trans-israel': {
    title: 'Trans Israel',
    logo: 'https://storage.googleapis.com/knbl_website/optimized/logos/color%20logos/Logo%20%D7%9C%D7%95%D7%92%D7%95%20%D7%97%D7%93%D7%A9.webp',
    logoBg: '#F7F7F8',
    description: "Connecting the nation, accelerating the future. \nHigh-impact visuals documenting the massive infrastructure projects that redefine Israel's landscape.",
    socialLinks: [
      { type: 'instagram', url: 'https://www.instagram.com/trans_israel?igsh=MndqOGdrdWhkb2pz' },
      { type: 'facebook', url: 'https://www.facebook.com/share/183SaAZ4Cv/?mibextid=wwXIfr' },
    ],
    videos: [
      {
        title: 'Connecting the North',
        url: 'https://storage.googleapis.com/knbl_website/optimized/videos/trans%20israel/3785_HOTZE_ISRAEL_CONNECITING_THE_NORTH_AI_VIDEO_1080x1350.webm',
        aspectRatio: 'portrait'
      },
    ],
  },
};

function SocialIcon({ type }: { type: 'instagram' | 'tiktok' | 'facebook' }) {
  const icons = {
    instagram: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    facebook: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  };
  return icons[type];
}

export default function ProjectPageClient({ slug }: { slug: string }) {
  const [selectedVideo, setSelectedVideo] = useState<{ title: string; url: string; thumbnail?: string; aspectRatio?: 'video' | 'portrait' | 'square' } | null>(null);
  const project = projects[slug];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!project) {
    return (
      <main data-logo-theme="white" className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-[200px] pb-[120px] px-6 text-center">
          <h1 className="text-4xl font-medium mb-4">Project not found</h1>
          <p className="text-neutral-400">The project you&apos;re looking for doesn&apos;t exist.</p>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Project Header */}
      <section className="pt-32 md:pt-48 pb-6 md:pb-[60px] px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row gap-16 items-start"
          >
            {/* Logo */}
            <div
              className="w-[160px] h-[160px] rounded-3xl flex items-center justify-center p-8 flex-shrink-0 border border-white/5"
              style={{ backgroundColor: project.logoBg || '#171717' }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={project.logo}
                  alt={project.title}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-[40px] font-medium tracking-[-0.03em] mb-7">
                {project.title}
              </h1>
              <p className="text-neutral-500 text-xl leading-relaxed mb-10 w-full whitespace-pre-line">
                {project.description.includes('\n') ? (
                  <>
                    <span className="font-bold text-black">{project.description.split('\n')[0]}</span>
                    {'\n'}
                    {project.description.split('\n').slice(1).join('\n')}
                  </>
                ) : (
                  project.description
                )}
              </p>

              {/* Social Links */}
              <div className="flex gap-5">
                {project.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[34px] h-[34px] bg-neutral-300 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                  >
                    <SocialIcon type={link.type} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      {project.videos.length > 0 && (
        <>
          {/* Featured Top Video */}
          <section className="pb-6 md:pb-[60px] px-6 md:px-[120px]">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6 w-[85vw] md:w-full mx-auto"
              >
                <VideoPlayer
                  url={project.videos[0].url}
                  thumbnail={project.videos[0].thumbnail || ""}
                  aspectRatio={project.videos[0].aspectRatio}
                  onOpen={() => setSelectedVideo(project.videos[0])}
                />
              </motion.div>
            </div>
          </section>

          {/* Other Videos */}
          {project.videos.length > 1 && (
            (isMobile || project.videos.slice(1).length <= 2) ? (
              <section className="pb-20 md:pb-[120px] px-6 md:px-[120px]">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {project.videos.slice(1).map((video, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col gap-6 w-[85vw] md:w-full mx-auto"
                      >
                        <VideoPlayer
                          url={video.url}
                          thumbnail={video.thumbnail || ""}
                          aspectRatio={video.aspectRatio}
                          onOpen={() => setSelectedVideo(video)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            ) : (
              <VideoCarousel
                videos={project.videos.slice(1)}
                onOpen={(video) => setSelectedVideo(video)}
              />
            )
          )}
        </>
      )}

      <Footer />

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal
            video={selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function VideoCarousel({ videos, onOpen }: {
  videos: { title: string; url: string; thumbnail?: string; aspectRatio?: 'video' | 'portrait' | 'square' }[];
  onOpen: (video: { title: string; url: string; thumbnail?: string; aspectRatio?: 'video' | 'portrait' | 'square' }) => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);
  const [clickStart, setClickStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setInitialScrollLeft(scrollContainerRef.current.scrollLeft);
    setClickStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = initialScrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleClickCapture = (e: React.MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - clickStart.x;
      const dy = e.clientY - clickStart.y;
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  };

  return (
    <section className="pb-20 md:pb-[120px] relative overflow-hidden group/section">
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onClickCapture={handleClickCapture}
        className={`flex gap-4 md:gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 md:px-[120px] pb-10 ${isDragging ? 'cursor-grabbing select-none scroll-auto' : 'cursor-grab'
          }`}
        style={{
          scrollSnapType: isDragging ? 'none' : 'x mandatory',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
          >
            <VideoPlayer
              url={video.url}
              thumbnail={video.thumbnail || ""}
              aspectRatio={video.aspectRatio}
              onOpen={() => onOpen(video)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function VideoPlayer({
  url,
  thumbnail,
  onOpen,
  aspectRatio = 'video'
}: {
  url: string;
  thumbnail: string;
  onOpen: () => void;
  aspectRatio?: 'video' | 'portrait' | 'square';
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked without interaction
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const aspectClass = aspectRatio === 'portrait' ? 'aspect-[4/5]' : aspectRatio === 'square' ? 'aspect-square' : 'aspect-video';
  const containerClass = aspectRatio === 'portrait' ? 'max-w-[450px]' : aspectRatio === 'square' ? 'max-w-[600px]' : 'w-full';

  return (
    <div
      className={`relative ${containerClass} ${aspectClass} rounded-3xl overflow-hidden bg-neutral-100 group cursor-pointer`}
      onClick={onOpen}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={`${url}#t=0.001`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        poster={thumbnail}
        preload="metadata"
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

      <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 group-hover:opacity-0">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform"
        >
          <Play className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" />
        </motion.button>
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }: { video: { title: string; url: string; thumbnail?: string; aspectRatio?: 'video' | 'portrait' | 'square' }, onClose: () => void }) {
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    if (window.innerWidth >= 768) setShowControls(true);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!video) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={() => {
        if (isMobile) setShowControls(!showControls);
        else onClose();
      }}
    >
      <div
        className={`absolute inset-0 transition-colors duration-500 ${showControls ? 'bg-black/90' : 'bg-black/95'} backdrop-blur-xl`}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`relative flex items-center justify-center z-50 group/modal w-full ${video.aspectRatio === 'portrait' ? 'max-w-md aspect-[4/5]' : video.aspectRatio === 'square' ? 'max-w-2xl aspect-square' : 'max-w-6xl aspect-video'}`}
        onClick={(e) => {
          if (isMobile) {
            e.stopPropagation();
            setShowControls(!showControls);
          } else {
            e.stopPropagation();
          }
        }}
      >
        <div className="relative w-full h-full bg-neutral-900 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <video
              src={video.url}
              className="w-full h-full object-contain"
              autoPlay
              controls={showControls}
              playsInline
            />
          </div>

          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            style={isMobile ? { display: showControls ? 'flex' : 'none' } : {}}
            className={`absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full z-[70] border border-white/20 shadow-2xl items-center justify-center ${isMobile ? '' : 'hidden md:flex'}`}
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
