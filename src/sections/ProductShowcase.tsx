'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export const ProductShowcase = () => {
  const t = useTranslations('ProductShowcase');

  return (
    <section
      id="showcase"
      className="overflow-x-clip bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24"
    >
      <div className="container relative">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-5xl font-bold tracking-tight text-[#010D3E]">{t('word')}</p>
            <div className="mt-4 flex items-center gap-4 text-2xl">
              <span className="italic text-[#010D3E]/90">{t('pronunciation')}</span>
              <span className="rounded-lg bg-[#010D3E]/5 px-3 py-1 text-sm font-medium tracking-wide text-[#010D3E]">
                {t('type')}
              </span>
            </div>
            <div className="my-8 h-px w-full bg-[#010D3E]/10" />
            <p className="text-2xl leading-relaxed text-[#010D3E]/90">
              {t('definition')}
            </p>
            <div className="mt-12">
              <div className="flex flex-wrap items-baseline gap-x-4 text-[#010D3E]/80">
                <span className="text-2xl font-semibold tracking-wide">
                  {t('origin.label')}
                </span>
                <span className="text-xl">{t('origin.from')}</span>
                <span className="text-xl italic">
                  {t('origin.word')}
                </span>
                <span className="text-xl">{t('origin.description')}</span>
                <span className="text-3xl">∇</span>
                <span className="text-xl">
                  {t('origin.explanation')}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
