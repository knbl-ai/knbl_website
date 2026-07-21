import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'וובינר KNBL · מסע לקוח וסטוריטלינג',
  description: 'KNBL Webinar — Customer Journey & Storytelling',
};

export default function WebinarPage() {
  return (
    <div data-logo-theme="black" style={{ position: 'fixed', inset: 0 }}>
      <iframe
        src="/webinar-bundle-v3.html"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="KNBL Webinar"
      />
    </div>
  );
}
