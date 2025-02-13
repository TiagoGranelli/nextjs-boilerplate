'use client';

import cogImage from '@/assets/cog.webp';
import cylinderImage from '@/assets/cylinder.webp';
import noodleImage from '@/assets/noodle.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const HeroImages = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <div ref={heroRef} className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
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
        height={220}
        className="absolute left-[448px] top-[524px] hidden rotate-[30deg] lg:block"
        style={{
          rotate: 30,
          translateY,
        }}
      />
    </div>
  );
};
