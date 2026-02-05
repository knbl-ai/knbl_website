'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email us',
    value: 'info@knbl360.com',
    href: 'mailto:info@knbl360.com',
  },
  {
    icon: MapPin,
    label: 'Visit us',
    value: '114 Derech Menachem Begin, Tel Aviv - Israel',
    href: 'https://maps.google.com/?q=114+Derech+Menachem+Begin+Tel+Aviv',
  },
  {
    icon: Phone,
    label: 'Call us',
    value: '+972 3 632 2242',
    href: 'tel:+97236322242',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-[60px] px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-neutral-200 text-xl mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-[56px] font-medium tracking-[-0.04em]"
          >
            Let&apos;s Build Something{' '}
            <span className="text-primary-600">That Works.</span>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pt-6 md:pt-12 pb-[120px] px-6 md:px-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Cards */}
            <div className="flex flex-col gap-6 lg:w-[486px]">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.icon === MapPin ? '_blank' : undefined}
                  rel={item.icon === MapPin ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-50 rounded-3xl p-6 flex items-center gap-5 hover:bg-primary-100 transition-colors"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-neutral-300 text-base mb-1">{item.label}</p>
                    <p className="text-black text-base font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map/Image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 h-[500px] rounded-3xl overflow-hidden bg-neutral-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.0876!2d34.7876!3d32.0731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b9e0e3c7c8d%3A0x5c5c5c5c5c5c5c5c!2s114%20Derech%20Menachem%20Begin%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KNBL Office Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
