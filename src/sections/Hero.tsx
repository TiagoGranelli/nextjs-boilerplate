import { useTranslations } from 'next-intl';
import { HeroImages } from '../components/HeroImages';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section
      id="home"
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[468px]">
            <div>
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
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-lg font-medium tracking-tight text-white hover:scale-105 active:scale-95"
                >
                  {t('cta.primary')}
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tight hover:scale-105 active:scale-95"
                >
                  {t('cta.secondary')}
                </a>
              </div>
            </div>
          </div>
          <HeroImages />
        </div>
      </div>
    </section>
  );
};
