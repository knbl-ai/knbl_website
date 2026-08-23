/**
 * True when the visitor has asked for less motion — either through the OS/browser
 * setting (WCAG 2.3.3) or through the site's own accessibility panel, which
 * stamps `data-a11y-motion="off"` on <html>.
 *
 * Client-only: callers are ref callbacks and effects, never render.
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    || document.documentElement.dataset.a11yMotion === 'off';
}

/** Event the a11y panel fires after toggling "Stop animations", so anything
 *  subscribed (e.g. MotionPreferenceProvider) can react without a shared store. */
export const MOTION_PREF_EVENT = 'a11y-motion-change';

/** Subscribe to both the OS-level media query and the panel's own toggle. */
export function subscribeReducedMotion(callback: () => void): () => void {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  window.addEventListener(MOTION_PREF_EVENT, callback);
  return () => {
    mq.removeEventListener('change', callback);
    window.removeEventListener(MOTION_PREF_EVENT, callback);
  };
}
