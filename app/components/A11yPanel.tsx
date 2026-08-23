'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useFocusTrap } from '@/lib/a11y/useFocusTrap';

/**
 * User-preference panel.
 *
 * This is deliberately NOT an accessibility "overlay". It injects nothing into
 * the accessibility tree, rewrites no ARIA, and repairs nothing at runtime —
 * every control simply sets one `data-a11y-*` attribute on <html>, and one rule
 * in globals.css responds to it. The compliance work (landmarks, focus styles,
 * dialog behaviour, alt text) lives in the markup itself; this exists because
 * visitors reasonably expect the control, and the preferences it offers are
 * genuinely useful to people whose needs the OS settings don't cover.
 *
 * Overlay widgets that claim to *produce* WCAG conformance don't — the FTC
 * settled with accessiBe for $1M in January 2025 over exactly that claim.
 */

type Prefs = {
  zoom: 100 | 110 | 125 | 150;
  contrast: 'off' | 'invert';
  grayscale: boolean;
  links: boolean;
  motion: boolean;          // true = animations stopped
  readableFont: boolean;
  bigCursor: boolean;
};

const DEFAULTS: Prefs = {
  zoom: 100,
  contrast: 'off',
  grayscale: false,
  links: false,
  motion: false,
  readableFont: false,
  bigCursor: false,
};

export const A11Y_STORAGE_KEY = 'knbl-a11y-prefs';
const ZOOMS: Prefs['zoom'][] = [100, 110, 125, 150];

/*
 * Preferences live in a tiny external store rather than component state.
 *
 * They are read from localStorage, which does not exist during server render,
 * so the component subscribes with useSyncExternalStore: React renders the
 * defaults for hydration and then re-renders with the stored values. A no-flash
 * inline script in the root layout applies the same values to <html> before
 * paint, so there is no flash of unstyled preferences on reload.
 */
let store: Prefs | null = null;
const listeners = new Set<() => void>();

function readStore(): Prefs {
  if (store) return store;
  try {
    const raw = window.localStorage.getItem(A11Y_STORAGE_KEY);
    store = raw ? { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Prefs>) } : DEFAULTS;
  } catch {
    store = DEFAULTS; // private mode, blocked storage
  }
  return store;
}

function writeStore(next: Prefs) {
  store = next;
  applyPrefs(next);
  try {
    if (next === DEFAULTS) window.localStorage.removeItem(A11Y_STORAGE_KEY);
    else window.localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(next));
  } catch { /* ignore */ }
  listeners.forEach((l) => l());
}

const subscribe = (l: () => void) => { listeners.add(l); return () => { listeners.delete(l); }; };

/** Single source of truth for the attribute mapping — also used by the
 *  no-flash script in the layout, which is why it is written as plain data. */
export function applyPrefs(p: Prefs) {
  const el = document.documentElement;
  const set = (name: string, value: string | null) => {
    if (value === null) el.removeAttribute(`data-a11y-${name}`);
    else el.setAttribute(`data-a11y-${name}`, value);
  };
  set('zoom', p.zoom === 100 ? null : String(p.zoom));
  set('contrast', p.contrast === 'invert' ? 'invert' : null);
  set('grayscale', p.grayscale ? 'on' : null);
  set('links', p.links ? 'on' : null);
  set('motion', p.motion ? 'off' : null);
  set('font', p.readableFont ? 'readable' : null);
  set('cursor', p.bigCursor ? 'big' : null);
  window.dispatchEvent(new CustomEvent('a11y-motion-change'));
}

const T = {
  panelTitle: 'Accessibility preferences',
  textSize: 'Text size',
  contrast: 'High contrast',
  grayscale: 'Grayscale',
  links: 'Highlight links',
  motion: 'Stop animations',
  readableFont: 'Readable font',
  bigCursor: 'Large cursor',
  reset: 'Reset',
  statementLink: 'Accessibility statement',
  openPanel: 'Accessibility preferences',
  closePanel: 'Close accessibility preferences',
};

export default function A11yPanel() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const prefs = useSyncExternalStore(subscribe, readStore, () => DEFAULTS);

  const update = useCallback((patch: Partial<Prefs>) => {
    writeStore({ ...readStore(), ...patch });
  }, []);

  const reset = useCallback(() => writeStore(DEFAULTS), []);
  const close = useCallback(() => setOpen(false), []);

  useFocusTrap(panelRef, open, close);

  // Clicking outside dismisses, but only via pointerdown so a click that
  // starts inside the panel and ends outside does not close it mid-drag.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [open]);

  const toggles: { key: keyof Prefs; label: string; on: boolean }[] = [
    { key: 'contrast', label: T.contrast, on: prefs.contrast === 'invert' },
    { key: 'grayscale', label: T.grayscale, on: prefs.grayscale },
    { key: 'links', label: T.links, on: prefs.links },
    { key: 'motion', label: T.motion, on: prefs.motion },
    { key: 'readableFont', label: T.readableFont, on: prefs.readableFont },
    { key: 'bigCursor', label: T.bigCursor, on: prefs.bigCursor },
  ];

  const zoomIndex = ZOOMS.indexOf(prefs.zoom);
  const NAVY = '#0F0F10';
  const ACCENT = '#4F39F6';

  return (
    <>
      {open && (
        <div
          ref={panelRef}
          id="a11y-panel"
          className="a11y-fx"
          role="dialog"
          aria-modal="false"
          aria-label={T.panelTitle}
          style={{
            position: 'fixed',
            left: '24px',
            bottom: '96px',
            width: 'min(300px, calc(100vw - 32px))',
            maxHeight: 'min(72vh, 560px)',
            overflowY: 'auto',
            background: '#FFFFFF',
            border: `1px solid rgba(79,57,246,0.25)`,
            borderRadius: '16px',
            boxShadow: '0 20px 50px rgba(15,15,16,0.22)',
            padding: '18px',
            zIndex: 60,
            fontFamily: 'inherit',
            color: NAVY,
            textAlign: 'start',
          }}
        >
          <div style={{ fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>
            {T.panelTitle}
          </div>

          {/* --- text size --- */}
          <div
            role="group"
            aria-label={T.textSize}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              gap: '8px', marginBottom: '14px',
            }}
          >
            <span style={{ fontSize: '15px', fontWeight: 600 }}>{T.textSize}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={() => update({ zoom: ZOOMS[Math.max(0, zoomIndex - 1)] })}
                disabled={zoomIndex <= 0}
                aria-label={`${T.textSize} −`}
                style={stepBtn(zoomIndex <= 0, NAVY)}
              >−</button>
              <span aria-live="polite" style={{
                fontSize: '13px', fontWeight: 700, minWidth: '44px', textAlign: 'center',
              }}>{prefs.zoom}%</span>
              <button
                type="button"
                onClick={() => update({ zoom: ZOOMS[Math.min(ZOOMS.length - 1, zoomIndex + 1)] })}
                disabled={zoomIndex >= ZOOMS.length - 1}
                aria-label={`${T.textSize} +`}
                style={stepBtn(zoomIndex >= ZOOMS.length - 1, NAVY)}
              >+</button>
            </span>
          </div>

          {/* --- switches --- */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '4px' }}>
            {toggles.map(({ key, label, on }) => (
              <li key={key}>
                <button
                  type="button"
                  role="switch"
                  aria-checked={on}
                  onClick={() => update(
                    key === 'contrast'
                      ? { contrast: on ? 'off' : 'invert' }
                      : ({ [key]: !on } as Partial<Prefs>),
                  )}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    gap: '10px',
                    background: on ? 'rgba(79,57,246,0.08)' : 'transparent',
                    border: '1px solid transparent',
                    borderRadius: '10px',
                    padding: '9px 10px',
                    font: 'inherit',
                    fontSize: '15px',
                    color: NAVY,
                    cursor: 'pointer',
                    textAlign: 'start',
                  }}
                >
                  <span>{label}</span>
                  <span aria-hidden="true" style={{
                    flex: 'none',
                    width: '36px', height: '20px', borderRadius: '999px',
                    background: on ? ACCENT : '#C9CDD6',
                    position: 'relative',
                    transition: 'background .2s',
                  }}>
                    <span style={{
                      position: 'absolute', top: '2px',
                      left: on ? '18px' : '2px',
                      width: '16px', height: '16px', borderRadius: '50%',
                      background: '#FFFFFF',
                      transition: 'left .2s',
                    }} />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '10px', marginTop: '14px', paddingTop: '12px',
            borderTop: '1px solid rgba(79,57,246,0.15)',
          }}>
            <button
              type="button"
              onClick={reset}
              style={{
                background: 'transparent', border: `1px solid rgba(79,57,246,0.35)`, borderRadius: '999px',
                padding: '8px 14px', font: 'inherit', fontSize: '14px', fontWeight: 600,
                color: NAVY, cursor: 'pointer',
              }}
            >{T.reset}</button>
            <Link
              href="/accessibility"
              onClick={close}
              style={{ fontSize: '14px', fontWeight: 600, color: ACCENT }}
            >{T.statementLink}</Link>
          </div>
        </div>
      )}

      <button
        ref={triggerRef}
        type="button"
        className="a11y-fab a11y-fx"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={open ? T.closePanel : T.openPanel}
        style={{
          position: 'fixed',
          left: '24px',
          bottom: '24px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#0F0F10',
          border: '1px solid rgba(79,57,246,0.35)',
          boxShadow: '0 12px 32px rgba(15,15,16,0.28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 60,
        }}
      >
        {/* The internationally recognised accessibility mark. */}
        <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
          <circle cx="12" cy="4" r="2" />
          <path d="M20.5 7.4a1.1 1.1 0 0 0-1.3-.8L15 7.5a3 3 0 0 1-.6.1H9.6a3 3 0 0 1-.6-.1L4.8 6.6a1.1 1.1 0 1 0-.45 2.15l4 .85V13l-1.7 6.6a1.15 1.15 0 0 0 2.22.57L10.4 15h3.2l1.53 5.17a1.15 1.15 0 0 0 2.22-.57L15.65 13V9.6l4-.85a1.1 1.1 0 0 0 .85-1.35z" />
        </svg>
      </button>
    </>
  );
}

function stepBtn(disabled: boolean, navy: string): React.CSSProperties {
  return {
    width: '32px', height: '32px', borderRadius: '50%',
    border: '1px solid rgba(79,57,246,0.35)',
    background: disabled ? 'transparent' : '#FFFFFF',
    color: disabled ? '#9AA0AC' : navy,
    fontSize: '18px', fontWeight: 700, lineHeight: 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'inherit',
  };
}
