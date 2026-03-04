'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
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
                            Privacy <span className="text-primary-600">Policy</span>
                        </h1>
                        <p className="mt-2 text-neutral-500 text-base md:text-lg max-w-2xl">
                            Your privacy is important to us. This policy outlines how we handle your personal information.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pt-10 pb-20 px-6 md:px-[120px]">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-neutral-600 space-y-10"
                    >
                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">1. Information We May Collect</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>When you use this website, we may collect certain information, including:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Personal information you voluntarily submit, such as your name, email address, phone number, or message when contacting us</li>
                                    <li>Basic technical information such as browser type, device type, IP address, pages visited, and general usage data</li>
                                    <li>Information collected through cookies or similar technologies, where applicable</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">2. How We Use Information</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>We may use the information we collect to:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Respond to inquiries or contact requests</li>
                                    <li>Improve the website and user experience</li>
                                    <li>Analyze website performance and traffic</li>
                                    <li>Maintain website security and functionality</li>
                                    <li>Communicate with you regarding services or relevant updates, where appropriate</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">3. Cookies and Similar Technologies</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    This website may use cookies and similar technologies to enhance browsing, remember preferences, and understand how visitors interact with the site.
                                </p>
                                <p>
                                    You may control or disable cookies through your browser settings. Please note that some parts of the website may not function properly if cookies are disabled.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">4. Sharing of Information</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    We do not sell personal information. We may share information with trusted service providers who support the operation of the website or related business functions, only when reasonably necessary and subject to appropriate confidentiality and security measures.
                                </p>
                                <p>
                                    We may also disclose information where required by law or where necessary to protect our rights, website, or users.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">5. Data Security</h2>
                            <p className="text-base leading-snug">
                                We take reasonable technical and organizational measures to protect information from unauthorized access, loss, misuse, or disclosure. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">6. Third-Party Services and Links</h2>
                            <p className="text-base leading-snug">
                                This website may contain links to third-party websites or may rely on third-party tools or integrations. We are not responsible for the privacy practices, content, or policies of those third parties. We encourage users to review their privacy policies separately.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">7. Data Retention</h2>
                            <p className="text-base leading-snug">
                                We may retain information for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, including communication, operational needs, legal obligations, or dispute resolution.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">8. Your Choices</h2>
                            <p className="text-base leading-snug">
                                You may choose not to provide certain personal information. However, this may limit your ability to use certain features of the website, such as contact forms or service inquiries.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">9. Updates to This Policy</h2>
                            <p className="text-base leading-snug">
                                We may update this Privacy Policy from time to time to reflect changes in website practices, operations, or legal requirements. Any updates will be posted on this page with the revised version.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">10. Contact</h2>
                            <p className="text-base leading-snug">
                                If you have any questions about this Privacy Policy or how information is handled, please contact us through the contact details provided on the website.
                            </p>
                        </section>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
