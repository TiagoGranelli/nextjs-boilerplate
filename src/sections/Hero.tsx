'use client';

import cogImage from '@/assets/cog.webp';
import cylinderImage from '@/assets/cylinder.webp';
import noodleImage from '@/assets/noodle.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const t = useTranslations('Hero');

  return (
    <section
      id="home"
      ref={heroRef}
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[468px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-full border border-[#222]/10 px-4 py-1.5 text-sm font-medium">
                {t('tagline')}
              </div>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-[#010D3E] md:text-7xl">
                {t('title')}
              </h1>

              <p className="mt-8 text-xl leading-relaxed text-[#010D3E]/60">
                {t('description')}
              </p>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-lg font-medium tracking-tight text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('cta.primary')}
                </motion.a>
                <motion.a
                  href="#features"
                  className="inline-flex items-center justify-center  px-6 py-3 text-lg font-medium tracking-tight"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('cta.secondary')}
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              src={cogImage.src}
              alt="Cog image"
              className="h-full w-auto md:absolute md:max-w-none"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
              width={648}
              height={648}
            />
            <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="cylinderImage image"
              className="-left-32 -top-8 hidden md:absolute md:block"
              style={{
                translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="Noodle Image"
              width={220}
              className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
              style={{
                rotate: 30,
                translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
