'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { Locale, locales } from '@/i18n/config';

const languageNames = {
  en: 'English',
  fr: 'Français',
  pt: 'Português'
};

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLanguageChange = (locale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, '');
    router.push(`/${locale}${newPath}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 text-white/90 hover:text-white transition-colors"
      >
        <Globe className="w-5 h-5" />
        <span>{languageNames[currentLocale]}</span>
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full mt-2 right-0 bg-gray-900/90 backdrop-blur-sm border border-gray-800/50 rounded-lg overflow-hidden min-w-[150px]"
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLanguageChange(locale)}
              className={`w-full px-4 py-2 text-left hover:bg-gray-800/50 transition-colors ${
                currentLocale === locale ? 'text-purple-400' : 'text-white/90'
              }`}
            >
              {languageNames[locale]}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}