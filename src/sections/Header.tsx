'use client';
import Logo from '@/assets/logo-name.svg';
import { Link } from '@/i18n/i18nNavigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
  { code: 'pt', label: 'PT' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const params = useParams();
  const currentLocale = params.locale as string;

  const t = useTranslations('Header');
  const menuItems = [
    { href: '#features', label: t('Services') },
    { href: '#partners', label: t('Partners') },
    { href: '#stories', label: t('Stories') },
    { href: '#values', label: t('Values') },
    { href: '#team', label: t('Team') },
  ];

  return (
    <header className="sticky top-0 z-20 overflow-x-clip border-b border-gray-200 bg-white/60 backdrop-blur-sm">
      <div className="flex items-center justify-center bg-black py-3 text-white">
        <div className="inline-flex items-center gap-1">
          <p>{t('projectShowcase')}</p>
        </div>
      </div>
      <div className="relative py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image priority src={Logo} alt="Nablify Logo" height={50} />
            <div className="flex items-center gap-4">
              {/* Language Switcher - Desktop */}
              <div className="relative hidden md:block">
                <button
                  type="button"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-[#010D3E]/70 hover:bg-gray-100"
                >
                  {languages.find(lang => lang.code === currentLocale)?.label}
                  <svg
                    className="size-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-40 rounded-lg border border-gray-200 bg-white py-2 shadow-lg"
                    >
                      {languages.map(lang => (
                        <Link
                          key={lang.code}
                          href="/"
                          locale={lang.code}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            currentLocale === lang.code
                              ? 'font-medium text-[#010D3E]'
                              : 'text-[#010D3E]/70'
                          }`}
                          onClick={() => setIsLangMenuOpen(false)}
                        >
                          {lang.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 md:hidden"
                aria-label="Toggle Menu"
                type="button"
              >
                <svg
                  className="size-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  {isMenuOpen
                    ? (
                        <path
                          d="M15 5L5 15M5 5L15 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )
                    : (
                        <path
                          d="M17.8125 10.5C17.8125 10.7486 17.7137 10.9871 17.5379 11.1629C17.3621 11.3387 17.1236 11.4375 16.875 11.4375H3.125C2.87636 11.4375 2.6379 11.3387 2.46209 11.1629C2.28627 10.9871 2.1875 10.7486 2.1875 10.5C2.1875 10.2514 2.28627 10.0129 2.46209 9.83709C2.6379 9.66127 2.87636 9.5625 3.125 9.5625H16.875C17.1236 9.5625 17.3621 9.66127 17.5379 9.83709C17.7137 10.0129 17.8125 10.2514 17.8125 10.5ZM3.125 6.4375H16.875C17.1236 6.4375 17.3621 6.33873 17.5379 6.16291C17.7137 5.9871 17.8125 5.74864 17.8125 5.5C17.8125 5.25136 17.7137 5.0129 17.5379 4.83709C17.3621 4.66127 17.1236 4.5625 16.875 4.5625H3.125C2.87636 4.5625 2.6379 4.66127 2.46209 4.83709C2.28627 5.0129 2.1875 5.25136 2.1875 5.5C2.1875 5.74864 2.28627 5.9871 2.46209 6.16291C2.6379 6.33873 2.87636 6.4375 3.125 6.4375ZM16.875 14.5625H3.125C2.87636 14.5625 2.6379 14.6613 2.46209 14.8371C2.28627 15.0129 2.1875 15.2514 2.1875 15.5C2.1875 15.7486 2.28627 15.9871 2.46209 16.1629C2.6379 16.3387 2.87636 16.4375 3.125 16.4375H16.875C17.1236 16.4375 17.3621 16.3387 17.5379 16.1629C17.7137 15.9871 17.8125 15.7486 17.8125 15.5C17.8125 15.2514 17.7137 15.0129 17.5379 14.8371C17.3621 14.6613 17.1236 14.5625 16.875 14.5625Z"
                          fill="currentColor"
                        />
                      )}
                </svg>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-3 font-medium text-black/70 md:flex lg:gap-6">
                {menuItems.map(item => (
                  <a key={item.href} href={item.href}>{item.label}</a>
                ))}
                <a
                  className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 font-medium tracking-tight text-white"
                  href="#contact"
                >
                  {t('cta')}
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 flex min-h-screen w-full flex-col bg-white"
            >
              <div className="container flex flex-1 flex-col items-center justify-center">
                <nav className="flex flex-col items-center gap-4 text-2xl">
                  {menuItems.map(item => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="text-[#010D3E]/80 transition-colors hover:text-[#010D3E]"
                    >
                      {item.label}
                    </motion.a>
                  ))}

                  {/* Language Switcher - Mobile */}
                  <div className="mt-8 flex flex-col items-center gap-4">
                    {languages.map(lang => (
                      <Link
                        key={lang.code}
                        href="/"
                        locale={lang.code}
                        className={`text-lg ${
                          currentLocale === lang.code
                            ? 'font-medium text-[#010D3E]'
                            : 'text-[#010D3E]/70'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {lang.label}
                      </Link>
                    ))}
                  </div>

                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-lg font-medium tracking-tight text-white"
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Let's talk
                  </motion.a>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
