'use client';
import springImage from '@/assets/spring.webp';
import starImage from '@/assets/star.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Load map when component mounts
  useEffect(() => {
    // Small delay to ensure it's not loaded immediately on page load
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const t = useTranslations('CallToAction');

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24"
    >
      <div className="container">
        {/* Hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32 text-center"
        >
          <h2 className="section-title mb-8">{t('title')}</h2>
          <Link
            href="https://www.linkedin.com/company/nablify"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#222d3f] bg-transparent px-6 py-3 text-lg font-medium text-[#222d3f] transition-colors hover:bg-[#222d3f] hover:text-white"
          >
            <span>{t('cta')}</span>
            <svg
              className="size-5 transition-transform group-hover:scale-110"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
        </motion.div>

        {/* Contact Info */}
        <div className="relative grid gap-16 md:grid-cols-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-heading"
            >
              <h2 className="section-title text-left">
                {t('title2')}
              </h2>
              <p className="mt-8 max-w-[320px] text-xl leading-relaxed tracking-tight text-[#010D3E]">
                {t('description')}
              </p>
              <div className="mt-12 flex items-center gap-4 text-xl tracking-tight text-[#010D3E]">
                <a
                  href="mailto:hello@nablify.com"
                  className="hover:text-blue-600"
                >
                  hello@nablify.com
                </a>
                <span>/</span>
                <Link
                  href="https://www.linkedin.com/company/nablify/"
                  target="_blank"
                  className="hover:text-blue-600"
                  aria-label="LinkedIn link"
                >
                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
              <div className="mt-16 space-y-2 text-xl tracking-tight text-[#010D3E]">
                <p>4, Op de Leemen</p>
                <p>L-5846 Fentange</p>
                <p>Luxembourg, Europe</p>
                <p className="mt-4 text-base text-gray-500">
                  49°33'43.7"N 6°08'54.6"E
                </p>
              </div>
            </motion.div>
            <motion.img
              src={starImage.src}
              alt="Star Image"
              className="absolute left-[-250px] top-[-300px]"
              width={360}
              loading="lazy"
              style={{
                translateY,
              }}
            />
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="aspect-square overflow-hidden rounded-full"
            >
              {mapLoaded
                ? (
                    <iframe
                      className="size-full"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=5.95836639404297%2C49.42325732410983%2C6.338424682617188%2C49.70050312905713&marker=49.56215181072835%2C6.148392856121063"
                      frameBorder="0"
                      loading="lazy"
                      title="Map of Luxembourg office location"
                    />
                  )
                : (
                    <div className="size-full bg-gray-100" />
                  )}
            </motion.div>
            <motion.img
              src={springImage.src}
              alt="Sprint Image"
              width={360}
              loading="lazy"
              className="absolute bottom-[-150px] right-[-200px]"
              style={{
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
