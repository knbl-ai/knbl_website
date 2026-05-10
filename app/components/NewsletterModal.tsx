'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset state on close after animation
      setTimeout(() => {
        setStatus('idle');
        setEmail('');
        setAgreed(false);
        setErrorMessage('');
      }, 500);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const subscribeToNewsletter = async (email: string) => {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        pageUrl: window.location.href,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!agreed) {
      setStatus('error');
      setErrorMessage('Please approve receiving the newsletter before signing up.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      await subscribeToNewsletter(email);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative pointer-events-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="newsletter-title"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-medium tracking-tight mb-3 text-black">You&apos;re in.</h2>
                      <p className="text-gray-600">The next newsletter will land in your inbox.</p>
                      <button
                        onClick={onClose}
                        className="mt-8 px-6 py-2.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
                      >
                        Close
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <h2 
                        id="newsletter-title"
                        className="text-[32px] leading-[1.1] font-medium tracking-[-0.02em] mb-4 text-black"
                      >
                        Stay in the loop.
                      </h2>
                      <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                        Be the first to receive KNBL insights, updates and perspectives on strategy, creativity and AI.
                      </p>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div className="relative">
                          <label htmlFor="email-input" className="sr-only">
                            Enter your email
                          </label>
                          <input
                            ref={inputRef}
                            id="email-input"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (status === 'error') setStatus('idle');
                            }}
                            placeholder="Enter your email"
                            className={`w-full px-5 py-4 bg-gray-50 border rounded-xl outline-none transition-all text-black placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-black/5 ${
                              status === 'error' ? 'border-red-500' : 'border-gray-200 focus:border-black'
                            }`}
                          />
                          {status === 'error' && (
                            <p className="absolute -bottom-6 left-1 text-sm text-red-500">
                              {errorMessage}
                            </p>
                          )}
                        </div>

                        <label className="flex items-start gap-3 mt-4 mb-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={agreed}
                            onChange={(e) => {
                              setAgreed(e.target.checked);
                              if (status === 'error') setStatus('idle');
                            }}
                            className="mt-1 flex-shrink-0 w-4 h-4 text-black border-gray-300 rounded focus:ring-black cursor-pointer"
                            required
                          />
                          <span className="text-[13px] text-gray-500 leading-snug">
                            I agree to receive the KNBL360 newsletter, updates and marketing content. I can unsubscribe at any time.
                          </span>
                        </label>

                        <button
                          type="submit"
                          disabled={status === 'loading' || !agreed}
                          className="w-full mt-2 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {status === 'loading' ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            'Sign me up'
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
