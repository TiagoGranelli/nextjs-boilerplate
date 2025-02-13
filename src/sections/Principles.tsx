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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Principles = () => {
  const t = useTranslations('Principles');

  const principles = [
    {
      title: t('principles.ownable.title'),
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
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      points: t.raw('principles.ownable.points'),
    },
    {
      title: t('principles.scalable.title'),
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
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      points: t.raw('principles.scalable.points'),
    },
    {
      title: t('principles.sustainable.title'),
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
            d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
          />
        </svg>
      ),
      points: t.raw('principles.sustainable.points'),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2a3649] to-[#1a212e] py-24">
      {/* Glassmorphism background elements */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 5 }}
          className="absolute size-[800px] rounded-full bg-blue-500/10 blur-[120px]"
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

      <div className="container relative">
        <div className="text-center">
          <div className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm">
            {t('tagline')}
          </div>
          <h2 className="section-title-white mt-8">
            {t('title')}
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {principles.map(principle => (

            <motion.div
              key={principle.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0 size-[200px] translate-x-[30%] translate-y-[-30%] rounded-full bg-blue-500/10 blur-[60px] transition-all duration-500 group-hover:translate-y-[10%]"
              />

              <div className="relative">
                <div className="mb-6 flex size-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                  {principle.icon}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {principle.title}
                </h3>
                <div className="mb-6 h-px w-12 bg-white/10" />
                <ul className="space-y-3">
                  {principle.points.map((point: string) => (
                    <motion.li
                      key={point}
                      className="text-white/80"
                      whileHover={{
                        x: 4,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};
