import { createI18nMiddleware } from 'next-international/middleware';
import { defaultLocale, locales } from '@/i18n/config';

export const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
  urlMappingStrategy: 'rewrite'
});