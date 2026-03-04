'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsOfUsePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Header */}
            <section className="pt-32 md:pt-48 pb-12 px-6 md:px-[120px] bg-neutral-50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    >
                        <h1 className="text-4xl md:text-[56px] font-medium text-black leading-[1.1] tracking-[-0.04em]">
                            Terms of <span className="text-primary-600">Use</span>
                        </h1>
                        <p className="mt-2 text-neutral-500 text-base md:text-lg max-w-2xl">
                            Welcome to KNBL360. Please read these terms carefully before using our website.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pt-10 pb-20 px-6 md:px-[120px]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-neutral-600 space-y-10"
                    >
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">1. Acceptance of Terms</h2>
                            <p className="text-base leading-snug">
                                By visiting, browsing, or using this website, you confirm that you accept these Terms of Use and agree to comply with them. If you do not agree, please do not use this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">2. Website Purpose</h2>
                            <p className="text-base leading-snug">
                                This website is provided for general informational and promotional purposes. It is intended to present our agency, services, work, insights, and contact information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">3. Intellectual Property</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    All content on this website, including but not limited to text, visuals, designs, branding, logos, graphics, videos, and other materials, is owned by or licensed to KNBL360 unless otherwise stated.
                                </p>
                                <p>
                                    You may view the content for personal, non-commercial use only. You may not copy, reproduce, distribute, modify, republish, or use any content from this website without prior written permission.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">4. Use of the Website</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    You agree to use this website only for lawful purposes and in a way that does not damage, disrupt, or interfere with the website, its functionality, or the experience of other users.
                                </p>
                                <p>
                                    You must not attempt to gain unauthorized access to any part of the website, its server, or related systems.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">5. Accuracy of Information</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    We make reasonable efforts to keep the information on this website accurate and up to date. However, we do not guarantee that all content is complete, accurate, or current at all times.
                                </p>
                                <p>
                                    The content on this website is provided for general information only and should not be relied upon as professional, legal, or business advice.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">6. Third-Party Links</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    This website may include links to third-party websites or services for convenience or reference. We are not responsible for the content, availability, or privacy practices of those external websites.
                                </p>
                                <p>
                                    Accessing third-party links is at your own discretion and risk.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">7. Limitation of Liability</h2>
                            <p className="text-base leading-snug">
                                To the fullest extent permitted by law, KNBL360 shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of, or inability to use, this website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">8. Changes to the Website or Terms</h2>
                            <p className="text-base leading-snug">
                                We may update, modify, or remove website content at any time without notice. We may also revise these Terms of Use from time to time. Continued use of the website after changes are made constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">9. Contact</h2>
                            <p className="text-base leading-snug">
                                If you have any questions regarding these Terms of Use, please contact us through the contact details provided on the website.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
