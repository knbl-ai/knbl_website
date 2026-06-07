import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'וובינר KNBL · מסע לקוח וסטוריטלינג',
  description: 'KNBL Webinar — Customer Journey & Storytelling',
};

export default function WebinarPage() {
  return (
    <iframe
      src="/webinar-bundle.html"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', border: 'none' }}
      title="KNBL Webinar"
    />
  );
}
