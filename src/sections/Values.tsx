'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export const Values = () => {
  const t = useTranslations('Values');
  const values = [
    {
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
      icon: (
        <svg
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: t('values.integrity.title'),
      description: t('values.integrity.description'),
      icon: (
        <svg
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      title: t('values.continuity.title'),
      description: t('values.continuity.description'),
      icon: (
        <svg
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: t('values.responsibility.title'),
      description: t('values.responsibility.description'),
      icon: (
        <svg
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
    },
    {
      title: t('values.adaptability.title'),
      description: t('values.adaptability.description'),
      icon: (
        <svg
          className="size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="values" className="relative overflow-hidden bg-gradient-to-br from-[#2a3649] to-[#1a212e] py-24 text-white">
      {/* Glassmorphism background elements */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5 }}
          className="absolute size-[800px] rounded-full bg-blue-500/15 blur-[120px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, delay: 0.2 }}
          className="absolute size-[600px] translate-x-[-40%] translate-y-[20%] rounded-full bg-indigo-500/10 blur-[90px]"
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.4 }}
          className="absolute size-[300px] translate-x-[60%] translate-y-[-40%] rounded-full bg-white/5 blur-[60px]"
        />
      </div>
      <div className="container">
        <div className="text-center">
          <div className="inline-block rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium">
            {t('tagline')}
          </div>
          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            {t('title')}
          </h2>
        </div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {values.map(value => (
            <motion.div
              key={value.title}
              className="group text-center"
              variants={itemVariants}
            >
              <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-colors group-hover:bg-white/20">
                {value.icon}
              </div>
              <h3 className="mb-4 text-2xl font-semibold">
                {value.title}
              </h3>
              <div className="mx-auto mb-4 h-px w-12 bg-white/20" />
              <p className="text-white/90">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
