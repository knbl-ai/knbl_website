'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { sendAiInquiry } from '../actions/sendAiInquiry';

export default function AiProductionForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);

        try {
            const result = await sendAiInquiry(formData);
            if (result.success) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Something went wrong');
            }
        } catch {
            setStatus('error');
            setErrorMessage('Failed to send inquiry. Please try again.');
        }
    }

    return (
        <section className="py-32 px-6 md:px-[120px] bg-neutral-50 border-t border-neutral-100">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-[56px] font-medium text-black leading-[1.1] tracking-[-0.02em] mb-6"
                    >
                        Ready to start your <br />
                        <span className="text-primary-600">AI production?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-xl text-neutral-500 font-normal"
                    >
                        Get fast and cost efficient Ai video solution for your business
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white rounded-[32px] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-neutral-100"
                >
                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-medium text-black mb-4">Inquiry Sent!</h3>
                                <p className="text-lg text-neutral-500 mb-8">
                                    Thank you for reaching out. Our team will get back to you shortly.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
                                >
                                    Send another inquiry
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-neutral-700 ml-1">
                                            Name <span className="text-primary-600">*</span>
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-primary-600 outline-none transition-all placeholder:text-neutral-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-neutral-700 ml-1">
                                            Email <span className="text-primary-600">*</span>
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-primary-600 outline-none transition-all placeholder:text-neutral-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-neutral-700 ml-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-primary-600 outline-none transition-all placeholder:text-neutral-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-neutral-700 ml-1">
                                        Message <span className="text-primary-600">*</span>
                                    </label>
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:ring-2 focus:ring-primary-600 outline-none transition-all resize-none placeholder:text-neutral-400"
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl text-sm"
                                    >
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        <span>{errorMessage}</span>
                                    </motion.div>
                                )}

                                <button
                                    disabled={status === 'loading'}
                                    type="submit"
                                    className="w-full py-4 bg-[#5046E4] text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#4338ca] transition-all active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Inquiry</span>
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
