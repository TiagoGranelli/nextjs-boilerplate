'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const FeatureCard = ({ item, index }: { item: any; index: number }) => (
  <motion.div
    key={item.title}
    className="card group cursor-pointer"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
      {item.icon}
    </div>
    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
    {Array.isArray(item.description)
      ? (
          <ul className="list-inside list-disc space-y-2 text-gray-600">
            {item.description.map((desc: string) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
        )
      : (
          <p className="text-gray-600">{item.description}</p>
        )}
  </motion.div>
);

export const Features = () => {
  const t = useTranslations('Features');

  const features = {
    expertise: [
      {
        title: t('expertise.engineering.title'),
        description: t.raw('expertise.engineering.description'),
        icon: (
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ),
      },
      {
        title: t('expertise.scientificComputing.title'),
        description: t.raw('expertise.scientificComputing.description'),
        icon: (
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        ),
      },
      {
        title: t('expertise.smartSystems.title'),
        description: t.raw('expertise.smartSystems.description'),
        icon: (
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ),
      },
    ],
    services: [
      {
        title: t('services.implementation.title'),
        description: t.raw('services.implementation.description'),
        icon: (
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
      },
      {
        title: t('services.advisory.title'),
        description: t.raw('services.advisory.description'),
        icon: (
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        ),
      },
      {
        title: t('services.academy.title'),
        description: t.raw('services.academy.description'),
        icon: (
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
      },
    ],
  };

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-gray-50 to-white py-24"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">{t('tagline')}</div>
          </div>
          <h2 className="section-title mt-5">{t('title')}</h2>
          <p className="section-description mt-5">{t('description')}</p>
        </div>

        <div className="relative mt-16">
          {/* Left side - Expertise */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.expertise.map((item, index) => (
              <FeatureCard key={item.title} item={item} index={index} />
            ))}
          </div>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            <div className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
              Plus
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>

          {/* Right side - Services */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.services.map((item, index) => (
              <FeatureCard
                key={item.title}
                item={item}
                index={index + features.expertise.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
