export const locales = ['en', 'fr', 'pt'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];