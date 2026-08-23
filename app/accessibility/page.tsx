'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const COORDINATOR_NAME = 'Roni';
const COORDINATOR_EMAILS = ['ronit@kanibal.co.il', 'AI@kanibal.co.il'];
const COORDINATOR_PHONE = '03-6322242';
const HAS_PLACEHOLDERS = [COORDINATOR_NAME, ...COORDINATOR_EMAILS, COORDINATOR_PHONE]
  .some((v) => v.includes('{{'));

export default function AccessibilityStatementPage() {
    return (
        <main id="main-content" className="min-h-screen bg-white">
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
                            Accessibility <span className="text-primary-600">Statement</span>
                        </h1>
                        <p className="mt-2 text-neutral-500 text-base md:text-lg max-w-2xl">
                            Last updated 23 August 2026
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
                        {HAS_PLACEHOLDERS && (
                            <div role="alert" className="rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-amber-900 text-sm leading-relaxed">
                                This statement is not yet complete: the accessibility coordinator&apos;s contact
                                details below are placeholders. Replace them in{' '}
                                <code className="font-mono">app/accessibility/page.tsx</code> before relying on this page.
                            </div>
                        )}

                        <section>
                            <p className="text-base leading-snug">
                                KNBL works to make its digital services accessible to everyone, including people
                                with disabilities, on the principle that every visitor is entitled to full and
                                equal access to our content.
                            </p>
                            <p className="text-base leading-snug mt-3">
                                This site has been built with accessibility in mind, in line with Israeli Standard
                                IS 5568, which adopts the W3C Web Content Accessibility Guidelines (WCAG) 2.1 at
                                conformance level AA.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Level of accessibility</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>This site aims to meet Israeli Standard 5568 / WCAG 2.1 at level AA.</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Tested with keyboard-only navigation and current desktop and mobile browsers.</li>
                                    <li>Checked with automated tooling (axe-core), which catches roughly a third of WCAG issues — this is a floor, not a certification.</li>
                                    <li>We do not use, and will not rely on, third-party accessibility &quot;overlay&quot; widgets to claim conformance.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">What has been made accessible</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Semantic page structure — navigation, main content, and footer landmarks for screen readers.</li>
                                    <li>A &quot;Skip to main content&quot; link at the start of every page, ahead of the navigation bar.</li>
                                    <li>Full keyboard navigation, with a visible focus indicator on every interactive element.</li>
                                    <li>The mobile menu behaves as a dialog: focus is kept inside it, Escape closes it, and focus returns to the button that opened it.</li>
                                    <li>Motion and scroll-reveal animations honour your operating system&apos;s reduced-motion setting, and can also be stopped from the accessibility panel below.</li>
                                    <li>An accessibility preferences panel (the icon in the bottom-left corner) offering larger text, high contrast, grayscale, highlighted links, stopped animations, a readable font, and an enlarged cursor. Preferences are remembered in your browser.</li>
                                    <li>Descriptive alternative text on informative images.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Parts that are not yet fully accessible</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>Despite our efforts, some parts of the site may not yet be fully accessible:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Some animated and video content is still being reviewed for captions and reduced-motion coverage.</li>
                                    <li>Third-party embeds (e.g. video players) follow their own vendor&apos;s accessibility support, which is outside our direct control.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-semibold text-black mb-1">Accessibility enquiries</h2>
                            <div className="space-y-1 text-base leading-snug">
                                <p>
                                    Did you encounter an accessibility problem on this site? Please let us know.
                                    Describe the problem, the page you found it on, and the browser and assistive
                                    technology you were using, so we can address it quickly.
                                </p>
                                <ul className="list-none pl-0 space-y-1 mt-2">
                                    <li><span className="font-semibold text-black">Accessibility coordinator:</span> {COORDINATOR_NAME}</li>
                                    <li>
                                        <span className="font-semibold text-black">Email:</span>{' '}
                                        {COORDINATOR_EMAILS.map((email, i) => (
                                            <span key={email}>
                                                {i > 0 && ', '}
                                                <a href={`mailto:${email}`} className="text-primary-600 hover:underline">{email}</a>
                                            </span>
                                        ))}
                                    </li>
                                    <li>
                                        <span className="font-semibold text-black">Phone:</span>{' '}
                                        <a href={`tel:${COORDINATOR_PHONE.replace(/-/g, '')}`} className="text-primary-600 hover:underline">{COORDINATOR_PHONE}</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
