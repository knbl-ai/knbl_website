'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
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
                            Cookie <span className="text-primary-600">Policy</span>
                        </h1>
                        <p className="mt-2 text-neutral-500 text-base md:text-lg max-w-2xl">
                            Information about how we use cookies and similar technologies to improve your experience.
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
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">What Are Cookies</h2>
                            <p className="text-base leading-snug">
                                Cookies are small text files that are stored on your device when you visit a website. They help websites recognize your browser, remember preferences, and collect information about how visitors interact with the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">How We Use Cookies</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>We may use cookies to:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Ensure the website functions properly</li>
                                    <li>Improve performance and user experience</li>
                                    <li>Remember basic user preferences</li>
                                    <li>Analyze website traffic and usage patterns</li>
                                    <li>Support security and website administration</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Types of Cookies We May Use</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-black mb-2">Strictly Necessary Cookies</h3>
                                    <p className="text-base leading-snug">
                                        These cookies are essential for the website to function correctly. They enable core features such as page navigation, security, and access to certain areas of the site. These cookies do not require user consent where permitted by law.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-black mb-2">Performance and Analytics Cookies</h3>
                                    <p className="text-base leading-snug">
                                        These cookies help us understand how visitors use the website, such as which pages are visited most often and how users move through the site. This information helps us improve the website and overall user experience.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-black mb-2">Functionality Cookies</h3>
                                    <p className="text-base leading-snug">
                                        These cookies allow the website to remember choices you make, such as language or display preferences, in order to provide a more personalized experience.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-black mb-2">Third-Party Cookies</h3>
                                    <p className="text-base leading-snug">
                                        Some cookies may be set by third-party services integrated into the website, such as analytics tools, embedded content, or other external features. These third parties may collect information in accordance with their own privacy and cookie policies.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Managing Cookies</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    You can control or disable cookies through your browser settings. Most browsers allow you to review, block, or delete cookies at any time.
                                </p>
                                <p>
                                    Please note that disabling certain cookies may affect the performance or functionality of parts of the website.
                                </p>
                                <p>
                                    Where required, you may also manage your cookie preferences through the cookie banner or settings tool available on the site.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Updates to This Policy</h2>
                            <p className="text-base leading-snug">
                                We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, or how the website uses cookies. Any updates will be posted on this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Contact</h2>
                            <p className="text-base leading-snug">
                                If you have any questions about this Cookie Policy, please contact us through the contact information provided on the website.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
