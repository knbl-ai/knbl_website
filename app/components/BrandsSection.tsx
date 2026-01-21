'use client';

import { motion } from 'framer-motion';


interface Brand {
  name: string;
  logo: string;
  className?: string;
}

const topRowBrands: Brand[] = [
  { name: 'Rafael', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767629498/rafael_logo-02_qcfdyr.png', className: 'h-16 md:h-24' },
  { name: 'Reuth', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1768982987/REUTH_white_p74tld.png', className: 'h-16 md:h-24' },
  { name: 'KKL', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628950/logo_heb_white_full_kklft6.png' },
  { name: 'Calcalit', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628885/CALCALIT_LOD_LOGO_WHITE_yoa6mk.png' },
  { name: 'Logo New', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628727/Logo_%D7%9C%D7%95%D7%92%D7%95_%D7%97%D7%93%D7%A9_%D7%9C%D7%91%D7%9F_a7pzgj.png' },
  { name: 'Heichal Hatarbut', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628565/%D7%9C%D7%95%D7%92%D7%95-%D7%94%D7%99%D7%9B%D7%9C-%D7%94%D7%AA%D7%A8%D7%91%D7%95%D7%AA-%D7%9C%D7%91%D7%9F-%D7%9E%D7%9C%D7%90_u3xjih.png', className: 'translate-y-3' },
  { name: 'Anker', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628505/Logo_Anker_White_nqtpe8.png', className: 'h-32 md:h-48' },
  { name: 'Xiaomi', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628142/logo_xiaomi_white_gk7vlk.png', className: 'h-16 md:h-24' },
];

const bottomRowBrands: Brand[] = [
  { name: 'Electra', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767628438/%D7%9C%D7%95%D7%92%D7%95_%D7%90%D7%9C%D7%A7%D7%98%D7%A8%D7%94_%D7%9C%D7%91%D7%9F_2_swqjjk.png' },
  { name: 'Takeda', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627891/takeda_WHITE_oghfsj.png' },
  { name: 'Roladin', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627396/Roladin_logo_B2_nxsyzd.png' },
  { name: 'Reserved', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627358/reserved_logo_white-01_pywhgf.png', className: 'h-24 md:h-36' },
  { name: 'Carters', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627282/carters_logo_LAVAN-01_otlo6i.png' },
  { name: 'H&O', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627203/H_O_brands_collection_FACE_WHITE-01_nfzjua.png', className: 'h-20 md:h-32' },
  { name: 'Aion', logo: 'https://res.cloudinary.com/dbajenfxp/image/upload/v1767627141/AION_LOGO_WHITE_rooieu.png', className: 'h-6 md:h-8' },
];

const Marquee = ({ children, direction = 'left', duration = 20 }: { children: React.ReactNode, direction?: 'left' | 'right', duration?: number }) => {
  return (
    <div className="flex overflow-hidden relative fade-sides">
      <motion.div
        initial={{ x: direction === 'left' ? "0%" : "-50%" }}
        animate={{ x: direction === 'left' ? "-50%" : "0%" }}
        transition={{ ease: "linear", duration: duration, repeat: Infinity }}
        className="flex gap-12 md:gap-20 items-center whitespace-nowrap min-w-full pr-12 md:pr-20"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function BrandsSection() {
  return (
    <section className="bg-neutral-900 py-24 md:py-32 overflow-hidden">
      <div className="px-6 md:px-24 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-3xl"
          >
            <h2 className="text-5xl md:text-6xl font-medium text-white leading-tight flex items-baseline flex-wrap">
              <span>Brands that trust</span>
              <img
                src="https://res.cloudinary.com/dbajenfxp/image/upload/v1768739081/5_otsmdt.png"
                alt="KNBL"
                className="h-[1.9em] w-auto translate-y-[0.65em] -translate-x-4"
              />
            </h2>
            <p className="text-2xl text-neutral-300">
              From early stage companies to global teams, these are the partners we help move forward.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-6 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-2 md:space-y-4">
            <Marquee direction="left" duration={30}>
              {topRowBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}`} className={`relative h-10 md:h-14 flex-shrink-0 ${brand.className || ''}`}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </Marquee>

            {/* Bottom Row - Moves Right */}
            <Marquee direction="right" duration={30}>
              {bottomRowBrands.map((brand, index) => (
                <div key={`${brand.name}-${index}-rev`} className={`relative h-10 md:h-14 flex-shrink-0 ${brand.className || ''}`}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 pointer-events-none select-none"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
