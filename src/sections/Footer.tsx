import logo from '@/assets/logo-name-white.svg';
import linkedinImage from '@/assets/social-linkedin.svg';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-[#222d3f] py-10 text-center text-sm text-[#BCBCBC]">
      <div className="container">
        <div className="relative inline-flex ">
          <Image
            src={logo}
            alt="Nablify Logo"
            height={50}
            className="relative"
          />
        </div>
        <div className="mt-3 flex flex-col justify-center gap-6 md:flex-row ">
          <span className="text-white">{t('registration')}</span>
        </div>
        <div className="mt-1 text-white">
          <Link href="https://www.linkedin.com/company/nablify" className="flex items-center justify-center gap-1">
            {t('followUs')}
            <Image src={linkedinImage} alt="LinkedIn" />
          </Link>
        </div>
        <p className="mt-1 text-white">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
};
