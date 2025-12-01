export default function Footer() {
  const socialLinks = [
    { name: 'Instagram', icon: 'instagram' },
    { name: 'TikTok', icon: 'tiktok' },
    { name: 'Facebook', icon: 'facebook' },
    { name: 'LinkedIn', icon: 'linkedin' },
    { name: 'YouTube', icon: 'youtube' },
  ];

  const exploreLinks = ['Home', 'About', 'Projects', 'FAQ', 'Contact'];
  const legalLinks = ['Terms of use', 'Privacy policy', 'Cookies'];

  return (
    <footer className="bg-black text-white px-6 md:px-24 py-24 rounded-t-[32px]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Left Column - Description */}
          <div className="flex flex-col gap-6 max-w-md">
            <p className="text-neutral-400 text-base leading-normal">
              KNBL is a strategy-driven creative collective that turns insights into impact. We combine strategy, storytelling, and technology to make brands impossible to ignore.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-white text-xs">{social.icon[0].toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="flex gap-20">
            {/* Explore Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-normal text-base">Explore</h3>
              <div className="flex flex-col gap-3">
                {exploreLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-neutral-400 text-base font-medium hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-normal text-base">Legal</h3>
              <div className="flex flex-col gap-3">
                {legalLinks.map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-neutral-400 text-base font-medium hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 pt-8 border-t border-neutral-900">
          {/* KNBL Logo */}
          <div className="text-4xl font-bold">KNBL</div>

          {/* Copyright */}
          <p className="text-neutral-400 text-xs">© 2025 KNBL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
