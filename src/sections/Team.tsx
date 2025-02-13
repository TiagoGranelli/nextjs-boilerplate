'use client';

import christopherImage from '@/assets/christopher_jones.webp';
import ezhilmathiImage from '@/assets/ezhilmathi_krishnasamy.webp';
import laurentImage from '@/assets/laurent_heirendt.webp';
import marioImage from '@/assets/mario_bauer.webp';
import pyramidImage from '@/assets/pyramid.webp';
import ronanImage from '@/assets/ronan_tremoureux.webp';
import tubeImage from '@/assets/tube.webp';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRef } from 'react';

type TeamMemberType = {
  name: string;
  lastName: string;
  role: string;
  subRole?: string;
  image: any;
  description: string[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const TeamMember = ({ member }: { member: TeamMemberType }) => (
  <motion.div
    className="text-center"
    variants={itemVariants}
    whileHover={{ y: -10 }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative mx-auto mb-8 size-60 overflow-hidden rounded-full">
      <Image
        src={member.image.src}
        alt={`${member.name} ${member.lastName}`}
        fill
        className="object-cover"
      />
    </div>
    <h3 className="text-2xl font-medium">
      {member.name}
      {' '}
      <span className="font-bold tracking-tight">{member.lastName}</span>
    </h3>
    <p className="mt-2 text-lg text-gray-600">
      {member.role}
      {member.subRole && (
        <>
          <br />
          <span className="font-medium">{member.subRole}</span>
        </>
      )}
    </p>
    <div className="mx-auto mt-4 h-px w-12 bg-gray-200" />
    <ul className="mt-4 space-y-2 text-gray-600">
      {Array.isArray(member.description) && member.description.map((desc: string) => (
        <li key={desc}>{desc}</li>
      ))}
    </ul>
  </motion.div>
);

export const Team = () => {
  const t = useTranslations('Team');

  const team = {
    leadership: [
      {
        name: t('members.leadership.name'),
        lastName: t('members.leadership.lastName'),
        role: t('members.leadership.role'),
        image: laurentImage,
        description: t.raw('members.leadership.description'),
      },
    ],
    specialists: [
      {
        name: t('members.specialists.ronan.name'),
        lastName: t('members.specialists.ronan.lastName'),
        role: t('members.specialists.ronan.role'),
        image: ronanImage,
        description: t.raw('members.specialists.ronan.description'),
      },
      {
        name: t('members.specialists.ezhilmathi.name'),
        lastName: t('members.specialists.ezhilmathi.lastName'),
        role: t('members.specialists.ezhilmathi.role'),
        image: ezhilmathiImage,
        description: t.raw('members.specialists.ezhilmathi.description'),
      },
    ],
    advisors: [
      {
        name: t('members.advisors.mario.name'),
        lastName: t('members.advisors.mario.lastName'),
        role: t('members.advisors.mario.role'),
        image: marioImage,
        description: t.raw('members.advisors.mario.description'),
      },
      {
        name: t('members.advisors.thomas.name'),
        lastName: t('members.advisors.thomas.lastName'),
        role: t('members.advisors.thomas.role'),
        image: christopherImage,
        description: t.raw('members.advisors.thomas.description'),
      },
    ],
  };

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [-150, 400]);

  return (
    <section id="team" ref={sectionRef} className="overflow-x-clip bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container relative">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">{t('tagline')}</div>
          </div>
          <h2 className="section-title mt-5">{t('title')}</h2>
          <p className="section-description mt-5">
            {t('description')}
          </p>
        </div>

        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Leadership */}
          <div className="mx-auto max-w-2xl">
            {team.leadership.map(member => (
              <TeamMember key={member.lastName} member={member} />
            ))}
          </div>

          {/* Specialists */}
          <div className="mt-20 grid gap-12 md:grid-cols-2">
            {team.specialists.map(member => (
              <TeamMember key={member.lastName} member={member} />
            ))}
          </div>

          {/* Advisory Team */}
          <div className="mt-32">
            <div className="section-heading">
              <div className="flex justify-center">
                <div className="tag">{t('tagline2')}</div>
              </div>
              <h2 className="section-title mt-5">{t('title2')}</h2>
            </div>
            <div className="mt-16 grid gap-12 md:grid-cols-2">
              {team.advisors.map(member => (
                <TeamMember key={member.lastName} member={member} />
              ))}
            </div>
          </div>
        </motion.div>
        {/* Decorative Images */}
        <motion.img
          src={pyramidImage.src}
          alt="Pyramid Image"
          height={262}
          width={262}
          className="absolute -right-36 top-24 z-10 hidden md:block"
          style={{
            translateY,
          }}
        />
        <motion.img
          src={tubeImage.src}
          alt="Tube Image"
          height={248}
          width={248}
          className="absolute -left-36 bottom-40 z-10 hidden md:block"
          style={{
            translateY,
          }}
        />
      </div>
    </section>
  );
};
