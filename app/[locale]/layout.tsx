import { Locale, NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { CustomCursor, ThemeProvider } from '@/components/ui';
import { getTranslations } from 'next-intl/server';

import './../globals.css';
import { Footer, Header } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

type Params = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Params) {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    keywords: [
      'portfolio',
      'blog',
      'frontend',
      'next.js',
      'kamil.me',
      'frontend-developer',
      'backend',
    ],
    authors: [{ name: 'Kamil Naskręt', url: 'https://kamil-me.vercel.app/' }],
    creator: 'Kamil Naskręt',
    openGraph: {
      title: t('metadata-home.title'),
      description: t('metadata-home.open-graph-description'),
      url: 'https://kamil-me.vercel.app/',
      sitename: 'kamil.me',
      images: [
        {
          url: 'https://kamil-me.vercel.app/og-image.png',
          width: 1200,
          height: 630,
          alt: t('metadata-home.title'),
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <NextIntlClientProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
