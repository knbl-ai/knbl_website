'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SubmissionPage() {
    return (
        <main id="main-content" className="min-h-screen bg-white">
            <Navigation />

            <section className="pt-48 pb-32 px-6 md:px-[120px] flex flex-col items-center justify-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="max-w-2xl bg-white rounded-[40px] p-12 md:p-20 shadow-[0_32px_80px_-16px_rgba(80,70,228,0.12)] border border-neutral-100 flex flex-col items-center"
                >
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-10">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-medium text-black leading-tight tracking-tight mb-6">
                        Thank you for <br />
                        <span className="text-primary-600">reaching out!</span>
                    </h1>

                    <p className="text-xl text-neutral-500 font-light mb-12 leading-relaxed">
                        Your inquiry has been received. Our team of specialists is already reviewing your request and will get back to you within 24 hours.
                    </p>

                    <Link
                        href="/"
                        className="group flex items-center gap-3 px-10 py-5 bg-[#5046E4] text-white rounded-full font-bold text-lg hover:bg-[#4338ca] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-200"
                    >
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        Return to Home
                    </Link>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
