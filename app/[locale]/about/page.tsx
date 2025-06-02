import { Locale } from 'next-intl';
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
  };
}

export default function About() {
  return <div>ABOUT PAGE!</div>;
}
