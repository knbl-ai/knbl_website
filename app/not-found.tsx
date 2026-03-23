import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-32 text-center">
        <p className="text-sm font-medium text-neutral-400 tracking-widest uppercase mb-6">404</p>
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
          Page not found
        </h1>
        <p className="text-neutral-400 text-lg max-w-md mb-12">
          This page doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/insights"
            className="px-8 py-3 border border-neutral-200 text-neutral-600 rounded-full text-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            Browse Insights
          </Link>
          <Link
            href="/work"
            className="px-8 py-3 border border-neutral-200 text-neutral-600 rounded-full text-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-colors"
          >
            See our Work
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
