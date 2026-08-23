'use client';

import { useSyncExternalStore } from 'react';
import { MotionConfig } from 'framer-motion';
import { prefersReducedMotion, subscribeReducedMotion } from '@/lib/a11y/reducedMotion';

/**
 * Wires WCAG 2.3.3 (reduced motion) into every Framer Motion animation on the
 * site — scroll reveals, nav text wipes, hero motion — without touching each
 * component. Reacts to both the OS-level `prefers-reduced-motion` media query
 * and the accessibility panel's "Stop animations" toggle.
 *
 * Plain CSS transitions/animations are handled separately in globals.css.
 */
export default function MotionPreferenceProvider({ children }: { children: React.ReactNode }) {
  const reduced = useSyncExternalStore(subscribeReducedMotion, prefersReducedMotion, () => false);
  return <MotionConfig reducedMotion={reduced ? 'always' : 'never'}>{children}</MotionConfig>;
}
