'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Play } from 'lucide-react';
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
  }[];
}> = {
  'ho-brands': {
    title: 'H&O',
    logo: '/images/partners/ho.png',
    logoBg: '#F7F7F8',
    description: "H&O is one of Israel's largest and most influential retail groups, serving as a gateway to global style and quality for families across the nation. By curating a diverse portfolio of international and local brands, they provide a comprehensive 360-degree shopping experience.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'tiktok', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Brand Collection', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176443/H_O_Brand_collection_jt2hv9.mp4' },
      { title: 'Family Campaign', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176453/%D7%94%D7%9E%D7%95%D7%AA%D7%92_%D7%94%D7%9B%D7%99_%D7%97%D7%96%D7%A7_%D7%A9%D7%9C%D7%A0%D7%95_%D7%96%D7%95_%D7%94%D7%9E%D7%A9%D7%A4%D7%97%D7%94_ebatqp.mp4' },
      { title: 'Collection Highlights', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767617551/H_O_Brands_Collection_crsb8a.mp4' },
      { title: 'Black Friday Commercial', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175045/3452_HO_Black_Friday_commerical_VIDEO_1920X1080_C_V7_bgm8ew.mp4' },
      { title: 'Jumbo Collection', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175243/HnO_28sec_16x9_jumbo_lwvuzv.mp4' },
      { title: 'Jeans New Collection', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175274/HO_JEANS_NEW_7-9_VIDEO_1920x1080_25FPS_tm0bbf.mp4' },
    ],
  },
  'rafael': {
    title: 'Rafael',
    logo: 'https://storage.googleapis.com/knbl_website/logos/color%20logos/Rafael_MainLogo_RGB.png',
    logoBg: '#F7F7F8',
    description: "Rafael Advanced Defense Systems is a pioneer in defense technologies, providing innovative solutions for security and protection. Their commitment to excellence and reliability has made them a global leader in the defense industry.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Financial Reports', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767180623/%D7%93%D7%95%D7%97%D7%95%D7%AA_%D7%9B%D7%A1%D7%A4%D7%99%D7%99%D7%9D_%D7%A2%D7%9D_%D7%A1%D7%90%D7%95%D7%A0%D7%93_-_%D7%A8%D7%95%D7%97%D7%91%D7%99_psbzgb.mp4' },
      { title: 'Project Overview', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767625366/1231_1_ixyoq3.mov' },
      { title: 'Timeline & History', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767625434/1002_RAFAEL_TIMELINE_VID_F_STORY_ENG_w3all8.mp4' },
      { title: 'Corporate Video', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767180637/%D7%97%D7%95%D7%9C%D7%A6%D7%95%D7%AA_%D7%A8%D7%A4%D7%90%D7%9C_%D7%A1%D7%A8%D7%98%D7%95%D7%9F_%D7%91%D7%9C%D7%99_%D7%9E%D7%95%D7%A8_gszg4v.mov' },
      { title: 'Event Highlights', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767180657/%D7%90%D7%99%D7%A8%D7%95%D7%A2_%D7%96%D7%95%D7%92%D7%95%D7%AA_%D7%A1%D7%95%D7%A4%D7%99_icmirh.mov' },
    ],
  },
  'xiaomi': {
    title: 'Xiaomi',
    logo: '/images/partners/xiaomi.png',
    logoBg: '#F7F7F8',
    description: "Xiaomi is a global leader in smart electronics and consumer technology, bringing innovation and accessibility to everyone through their cutting-edge AI-driven productions and sleek device launches.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'tiktok', url: '#' },
    ],
    videos: [
      { title: 'Poco X7 Launch AI Production', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767617056/Pocco_X7_launch_for_Xiaomi_-_AI_production_uetowy.mp4' },
      { title: 'Poco X7 Launch AI Production #2', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767617054/Pocco_X7_launch_for_Xiaomi_-_AI_production_no2_f9b9c3.mp4' },
      { title: 'Poco X7 AI Video', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767274462/1723_POCO_X7_AI_3_VID_1920x1080_xuhfdj.mp4' },
      { title: 'Xiaomi B Campaign', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767274318/11269-5_XIAOMI_B_yg4q7n.mp4' },
      { title: 'Brand Story', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767275104/%D7%95%D7%99%D7%93%D7%90%D7%95_%D7%A9%D7%9C_WhatsApp__2024-06-03_%D7%91%D7%A9%D7%A2%D7%94_16.14.53_c9f00e72_o56ori.mp4' },
      { title: 'TLV Edit', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767275107/TLV_EDIT_eoqnqi.mp4' },
    ],
  },
  'roladin': {
    title: 'Roladin',
    logo: 'https://storage.googleapis.com/knbl_website/logos/color%20logos/Roladin_logo_BLACK.png',
    logoBg: '#F7F7F8',
    description: "Roladin is Israel's leading boutique bakery chain, renowned for its exceptional craftsmanship and innovative approach to traditional pastry. From iconic holiday collections to artisanal breads, they set the bar for quality and creativity.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Movie 2', url: 'https://storage.googleapis.com/knbl_website/roladin%20-%20movie%202.mp4' },
      { title: 'Project Summary', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175664/%D7%A8%D7%95%D7%97%D7%91_%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98_%D7%9E%D7%A1%D7%9B%D7%9D_-_ROLADIN_xo1p54.mp4' },
      { title: 'Bakery Factory', url: 'https://storage.googleapis.com/knbl_website/roladin%20-%20%D7%9E%D7%A4%D7%A2%D7%9C%20%D7%9C%D7%97%D7%9D_1.mp4' },
      { title: 'Branches Overview', url: 'https://storage.googleapis.com/knbl_website/roladin%20-%20%D7%A1%D7%A0%D7%99%D7%A4%D7%99%D7%9D.mp4' },
      { title: 'Square Campaign', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175703/ROLADIN_PART_3_-_%D7%A8%D7%99%D7%91%D7%95%D7%A2%D7%99_wisrun.mp4' },
    ],
  },
  'carters': {
    title: "Carter's",
    logo: '/images/partners/carters.png',
    logoBg: '#F7F7F8',
    description: "Carter's is the most trusted name in baby and children's apparel, known for quality, comfort, and timeless designs that have made them a beloved part of childhood memories for families worldwide.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'tiktok', url: '#' },
    ],
    videos: [
      { title: 'With You From The Start', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176444/Carter_s_-_with_you_from_the_start_zb0d6q.mp4' },
    ],
  },
  'safari': {
    title: 'Safari',
    logo: 'https://storage.googleapis.com/knbl_website/logos/color%20logos/logo_eng_brown_full.png',
    logoBg: '#F7F7F8',
    description: "The Safari (Ramat Gan) experience is brought to life through cinematic AI-driven visuals. This project captures the essence of wildlife conservation and family adventure, showcasing the park's vibrant life in high definition.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Safari Experience', url: 'https://storage.googleapis.com/knbl_website/videos/safari/WhatsApp_Video_2026-01-18_at_12.43.55_rjsdeq.mp4' },
    ],
  },
  'takeda': {
    title: 'Takeda',
    logo: '/images/partners/takeda.png',
    logoBg: '#F7F7F8',
    description: "Takeda is a global pharmaceutical leader dedicated to bringing better health and a brighter future to people worldwide through advanced medical research and innovative healthcare solutions.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Takeda Showcase', url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/takeda_fin_LOWER_sgeqe4.mp4' },
      { title: 'Gaucher Project', url: 'https://storage.googleapis.com/knbl_website/2015_TAKEDA_GAUCHER_VID_FIX_1.mp4' },
      { title: 'Plasma Video', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175927/Plasma_video_hp7py2.mp4' },
      { title: 'Corporate Short', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767175955/45_wq8xba.mp4' },
    ],
  },
  'electra-precise': {
    title: 'Electra',
    logo: 'https://storage.googleapis.com/knbl_website/logos/color%20logos/Electra%20Logo%20ENG-01.png',
    logoBg: '#F7F7F8',
    description: "Electra's AI-driven storytelling showcases the intersection of technology and precision. This project highlights the seamless integration of AI in cinematic product visualization, emphasizing speed, accuracy, and innovation.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Precise Speed', url: 'https://storage.googleapis.com/knbl_website/videos/ai%20productions/electra_Precise_Speed_LOW_bv6bzb.mp4' },
    ],
  },
  'aion': {
    title: 'Aion',
    logo: '/images/partners/aion.png',
    logoBg: '#F7F7F8',
    description: "Aion is at the forefront of the electric vehicle revolution, combining cutting-edge technology with sustainable mobility to redefine the driving experience for the modern world.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'tiktok', url: '#' },
    ],
    videos: [
      { title: 'Aion V Showcase', url: 'https://storage.googleapis.com/knbl_website/videos/aion/1008_jr9vrx.mp4' },
      { title: 'Family Campaign', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1769689298/Aion_Family_40s_16x9_V13_HQ_gpg38z.mp4' },
      { title: 'Brand Experience', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176915/AION_-_16X9_%D7%9E%D7%A9%D7%95%D7%9C%D7%91_ngegbm.mp4' },
      { title: 'Parking Campaign', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176972/%D7%97%D7%A0%D7%99%D7%95%D7%9F_%D7%A1%D7%95%D7%A4%D7%99_csahyw.mp4' },
      { title: 'HT Highlight', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176999/HT_ysxnx9.mp4' },
      { title: 'Interior Drive', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767177020/%D7%A0%D7%A1%D7%99%D7%A2%D7%94_%D7%9E%D7%91%D7%A4%D7%A0%D7%99%D7%9D_%D7%9E%D7%AA%D7%95%D7%A7%D7%9F_u95ath.mov' },
      { title: 'Driving Experience', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176961/%D7%97%D7%95%D7%95%D7%99%D7%AA_%D7%A0%D7%A1%D7%99%D7%A2%D7%94_%D7%9ה%D7%9B%D7%99_%D7%A1%D7%95%D7%A4%D7%99_%D7%A9%D7%99%D7%A9_hab4an.mp4' },
    ],
  },
  'lod': {
    title: 'Lod',
    logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628885/CALCALIT_LOD_LOGO_WHITE_yoa6mk.png',
    logoBg: '#F7F7F8',
    description: "The city of Lod's urban transformation and strategic growth are captured through advanced AI-driven cinematography. This project showcases the city's rich heritage alongside its future as a central hub of innovation and development.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Urban Transformation', url: 'https://storage.googleapis.com/knbl_website/videos/lod/lod_16x9_2mbps.mp4' },
    ],
  },
  'anker': {
    title: 'Anker',
    logo: '/images/partners/anker.png',
    logoBg: '#F7F7F8',
    description: "Anker is the global leader in charging technology. This includes wireless charging, car charging, and our best-selling portable and wall chargers. Anker is pioneering Power Delivery technology to charge phones, tablets, and laptops at unprecedented speeds.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Anker Eufy Showcase', url: 'https://storage.googleapis.com/knbl_website/videos/anker/2727_ANKER_EUFY_T2352_PRODUCT_VID_970x250_C%203.mp4' },
      { title: 'Eufy E25 Preview', url: 'https://storage.googleapis.com/knbl_website/videos/anker/HEMILTON_EUFI_E25_f9pu95.mp4' },
    ],
  },
  'reuth-hospital': {
    title: 'Reuth Hospital',
    logo: '/images/partners/reuth.png',
    logoBg: '#F7F7F8',
    description: "Reuth Rehabilitation Hospital is a leading medical center in Israel, specializing in advanced rehabilitation and geriatric care, providing hope and healing to patients through expert medical attention.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Challenging the Impossible', url: 'https://storage.googleapis.com/knbl_website/%D7%9C%D7%90%D7%AA%D7%92%D7%A8%20%D7%90%D7%AA%20%D7%94%D7%91%D7%9C%D7%AA%D7%99%20%D7%90%D7%A4%D7%A9%D7%A8%D7%99%20-%20%D7%91%D7%99%D7%AA%20%D7%94%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%94%D7%A9%D7%99%D7%A7%D7%95%D7%9E%D7%99%20%D7%A8%D7%A2%D7%95%D7%AA.mp4' },
      { title: 'Patient Story', url: 'https://res.cloudinary.com/dbajenfxp/video/upload/v1767176443/%D7%9C%D7%90%D7%AA%D7%92%D7%A8_%D7%90%D7%AA_%D7%94%D7%91%D7%9C%D7%AA%D7%99_%D7%90%D7%A4%D7%A9%D7%A8%D7%99-%D7%91%D7%99%D7%AA_%D7%97%D7%95%D7%9C%D7%99%D7%9D_%D7%A8%D7%A2%D7%95%D7%AA_cvxk0v.mp4' },
      { title: 'Hospital Choir', url: 'https://storage.googleapis.com/knbl_website/4.12%20%D7%9E%D7%A7%D7%94%D7%9C%D7%94%20-%20%D7%91%D7%99%D7%AA%20%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%A9%D7%99%D7%A7%D7%95%D7%9E%D7%99%20%D7%A8%D7%A2%D7%95%D7%AA.mp4' },
    ],
  },
  'trans-israel': {
    title: 'Trans Israel',
    logo: 'https://storage.googleapis.com/knbl_website/logos/color%20logos/Logo%20%D7%9C%D7%95%D7%92%D7%95%20%D7%97%D7%93%D7%A9.png',
    logoBg: '#F7F7F8',
    description: "Trans Israel (Hotze Israel) is connecting the nation through a network of advanced transportation projects. This cinematic AI production highlights the connectivity, speed, and impact of these infrastructure milestones on the landscape.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Connecting the North', url: 'https://storage.googleapis.com/knbl_website/videos/trans%20israel/3785_HOTZE_ISRAEL_CONNECITING_THE_NORTH_AI_VIDEO_1080x1350.mp4' },
    ],
  },
  'petach-tikva-center': {
    title: 'Petach Tikva Center for the Performing Arts',
    logo: 'https://storage.googleapis.com/knbl_website/logos/color%20logos/%D7%9C%D7%95%D7%92%D7%95-%D7%94%D7%99%D7%9B%D7%9C-%D7%94%D7%AA%D7%A8%D7%91%D7%95%D7%AA-%D7%A9%D7%97%D7%95%D7%A8.png',
    logoBg: '#F7F7F8',
    description: "The Petach Tikva Center for the Performing Arts is a premiere cultural destination, showcasing world-class theater, music, and dance in a state-of-the-art facility dedicated to artistic excellence.",
    socialLinks: [
      { type: 'instagram', url: '#' },
      { type: 'facebook', url: '#' },
    ],
    videos: [
      { title: 'Center Showcase', url: 'https://storage.googleapis.com/knbl_website/videos/Culture%20Center/3137_TARBUT_OCT_VID_1080X1920_G.mp4' },
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

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projects[slug];

  if (!project) {
    return (
      <main className="min-h-screen bg-white">
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
      <section className="pt-32 md:pt-48 pb-[60px] px-6 md:px-[120px]">
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
              <p className="text-neutral-300 text-xl leading-relaxed mb-10 w-full">
                {project.description}
              </p>

              {/* Social Links */}
              <div className="flex gap-5">
                {project.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
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
      <section className="pb-[120px] px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          {project.videos.length > 0 && (
            <div className="space-y-12">
              {/* Featured Top Video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                <VideoPlayer
                  url={project.videos[0].url}
                  thumbnail=""
                  title={project.videos[0].title}
                />
                <p className="text-neutral-500 text-2xl tracking-[-0.01em]">
                  {project.videos[0].title}
                </p>
              </motion.div>

              {/* Other Videos Grid */}
              {project.videos.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project.videos.slice(1).map((video, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col gap-6"
                    >
                      <VideoPlayer
                        url={video.url}
                        thumbnail=""
                        title={video.title}
                      />
                      <p className="text-neutral-500 text-xl tracking-[-0.01em]">
                        {video.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function VideoPlayer({ url, thumbnail, title }: { url: string; thumbnail: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-neutral-100">
      <video
        ref={videoRef}
        src={`${url}#t=0.001`}
        className="w-full h-full object-cover"
        poster={thumbnail}
        preload="metadata"
        onClick={togglePlay}
        onEnded={() => setIsPlaying(false)}
      />

      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10 shadow-lg"
          >
            <Play className="w-6 h-6 text-primary-600 ml-1" fill="currentColor" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
