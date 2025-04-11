import { Button } from '@/components/ui';
import { Locale, useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

type Params = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Params) {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: t('metadata-home.title'),
    description: t('metadata-home.description'),
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

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <Button>{t('greeting')}</Button>
    </div>
  );
}
