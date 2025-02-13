import { CallToAction } from '@/sections/CallToAction';
import { Features } from '@/sections/Features';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { LogoTicker } from '@/sections/LogoTicker';
import { Partners } from '@/sections/Partners';
import { Principles } from '@/sections/Principles';
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Stories } from '@/sections/Stories';
import { Team } from '@/sections/Team';
import { Testimonials } from '@/sections/Testimonials';
import { Values } from '@/sections/Values';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return {
    title: t('home'),
    description: t('description'),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  // const t = await getTranslations({ locale, namespace: 'Home' });

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Header></Header>
      {/* <main className="flex h-screen flex-col items-center justify-center">
        <div className="mb-9 flex">
          <Link href="/" locale="en">
            In english
          </Link>
          |
          <Link href="/" locale="ja">
            In Japanese
          </Link>
        </div>
        <p className="w-96">{t('desc')}</p>
      </main> */}
      <main>
        <Hero />
        <LogoTicker />
        <Features />
        <ProductShowcase />
        <Principles />
        <Partners />
        <Stories />
        <Values />
        <Team />
        <Testimonials />

        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
