'use client';
import avatar1 from '@/assets/avatar-1.webp';
import avatar2 from '@/assets/avatar-2.webp';
import avatar3 from '@/assets/avatar-3.webp';
import avatar4 from '@/assets/avatar-4.webp';
import avatar5 from '@/assets/avatar-5.webp';
import avatar6 from '@/assets/avatar-6.webp';
import avatar7 from '@/assets/avatar-7.webp';
import avatar8 from '@/assets/avatar-8.webp';
import avatar9 from '@/assets/avatar-9.webp';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
  }[];
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      className="flex flex-col gap-6 pb-6"
      animate={{
        translateY: '-50%',
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: 'linear',
        repeatType: 'loop',
      }}
    >
      {/* eslint-disable-next-line unicorn/no-new-array */}
      {[...new Array(2)].fill(0).map(() => (
        <React.Fragment key={uuidv4()}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={name}>
              <div>{text}</div>
              <div className="mt-5 flex items-center gap-2">
                <Image
                  src={imageSrc}
                  width={40}
                  height={40}
                  alt={name}
                  className="size-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium leading-5 tracking-tight">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      text: t('testimonials.0.text'),
      imageSrc: avatar1.src,
      name: t('testimonials.0.name'),
      username: t('testimonials.0.username'),
    },
    {
      text: t('testimonials.1.text'),
      imageSrc: avatar2.src,
      name: t('testimonials.1.name'),
      username: t('testimonials.1.username'),
    },
    {
      text: t('testimonials.2.text'),
      imageSrc: avatar3.src,
      name: t('testimonials.2.name'),
      username: t('testimonials.2.username'),
    },
    {
      text: t('testimonials.3.text'),
      imageSrc: avatar4.src,
      name: t('testimonials.3.name'),
      username: t('testimonials.3.username'),
    },
    {
      text: t('testimonials.4.text'),
      imageSrc: avatar5.src,
      name: t('testimonials.4.name'),
      username: t('testimonials.4.username'),
    },
    {
      text: t('testimonials.5.text'),
      imageSrc: avatar6.src,
      name: t('testimonials.5.name'),
      username: t('testimonials.5.username'),
    },
    {
      text: t('testimonials.6.text'),
      imageSrc: avatar7.src,
      name: t('testimonials.6.name'),
      username: t('testimonials.6.username'),
    },
    {
      text: t('testimonials.7.text'),
      imageSrc: avatar8.src,
      name: t('testimonials.7.name'),
      username: t('testimonials.7.username'),
    },
    {
      text: t('testimonials.8.text'),
      imageSrc: avatar9.src,
      name: t('testimonials.8.name'),
      username: t('testimonials.8.username'),
    },
  ];
  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section id="testimonials" className="bg-white pt-10">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">{t('tagline')}</div>
          </div>
          <h2 className="section-title mt-5">{t('title')}</h2>
          <p className="section-description mt-5">
            {t('description')}
          </p>
        </div>
        <div className="mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)] ">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
