'use client';

import useCase3Image from '@/assets/use-case-3.webp';
import useCase4Image from '@/assets/use-case-4.webp';
import useCase10Image from '@/assets/use-case-10.webp';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

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

const toolUrls: Record<string, string> = {
  mysql: 'https://www.nablify.com/assets/img/tools/mysql.svg',
  latex: 'https://www.nablify.com/assets/img/tools/latex.svg',
  r: 'https://www.nablify.com/assets/img/tools/r.svg',
  fortran: 'https://www.nablify.com/assets/img/tools/fortran.svg',
  julia: 'https://www.nablify.com/assets/img/tools/julia.svg',
  postgresql: 'https://www.nablify.com/assets/img/tools/postgresql.svg',
  docker: 'https://www.nablify.com/assets/img/tools/docker.svg',
  gitlab: 'https://www.nablify.com/assets/img/tools/gitlab.svg',
  python: 'https://www.nablify.com/assets/img/tools/python.svg',
  google_cloud: 'https://www.nablify.com/assets/img/tools/google_cloud.svg',
  kubernetes: 'https://www.nablify.com/assets/img/tools/kubernetes.svg',
  apptainer: 'https://www.nablify.com/assets/img/tools/apptainer.svg',
  slurm: 'https://www.nablify.com/assets/img/tools/slurm.svg',
};

const Story = ({ story, index }: { story: any; index: number }) => {
  const t = useTranslations('Stories');

  return (
    <motion.div
      variants={itemVariants}
      className="mt-24 grid gap-16 md:grid-cols-12"
    >
      {/* Left Column - Question & Image */}
      <div className="md:col-span-5">
        <div className="text-center">
          <h3 className="whitespace-pre-line text-xl font-medium leading-relaxed text-[#010D3E]/80">
            {story.question}
            <span className="font-bold text-[#010D3E]"> nablify?</span>
            "
          </h3>
          <motion.div
            className="relative mx-auto mt-12 aspect-square w-[300px] overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={story.image}
              alt="Use Case Image"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="md:col-span-7">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold tracking-tight text-[#010D3E]">
            {story.title}
          </h3>

          <div className="mt-8 space-y-8">
            <div>
              <h4 className="text-lg font-medium text-[#010D3E]/60">
                {t('subtitles.challenge')}
              </h4>
              <p className="mt-2 text-[#010D3E]/80">{story.challenge}</p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#010D3E]/60">
                {t('subtitles.solution')}
              </h4>
              <ul className="mt-2 space-y-2">
                {story.solution.map((item: string) => (
                  <li key={item} className="text-[#010D3E]/80">
                    -
                    {' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-[#010D3E]/60">
                {t('subtitles.benefits')}
              </h4>
              <ul className="mt-2 space-y-2">
                {story.benefits.map((item: string) => (
                  <li key={item} className="text-[#010D3E]/80">
                    -
                    {' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            {story.tools.map((tool: string) => (
            // eslint-disable-next-line @next/next/no-img-element
              <img
                key={tool}
                src={toolUrls[tool]}
                alt={`${tool} logo`}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {index < 2 && (
        <div className="md:col-span-12">
          <div className="mt-16 h-px w-full bg-[#010D3E]/10" />
        </div>
      )}
    </motion.div>
  );
};

export const Stories = () => {
  const t = useTranslations('Stories');
  const stories = [
    {
      question: t('stories.workflow.question'),
      image: useCase3Image,
      title: t('stories.workflow.title'),
      challenge: t('stories.workflow.challenge'),
      solution: t.raw('stories.workflow.solution'),
      benefits: t.raw('stories.workflow.benefits'),
      tools: t.raw('stories.workflow.tools'),
    },
    {
      question: t('stories.data.question'),
      image: useCase4Image,
      title: t('stories.data.title'),
      challenge: t('stories.data.challenge'),
      solution: t.raw('stories.data.solution'),
      benefits: t.raw('stories.data.benefits'),
      tools: t.raw('stories.data.tools'),
    },
    {
      question: t('stories.modernization.question'),
      image: useCase10Image,
      title: t('stories.modernization.title'),
      challenge: t('stories.modernization.challenge'),
      solution: t.raw('stories.modernization.solution'),
      benefits: t.raw('stories.modernization.benefits'),
      tools: t.raw('stories.modernization.tools'),
    },
  ];

  return (
    <section id="stories" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">{t('tagline')}</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stories.map((story, index) => (
            <Story key={story.title} story={story} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
