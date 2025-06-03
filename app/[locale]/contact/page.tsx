import { ContactWrapper } from '@/components/layout';
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
    title: t('metadata-home.contact-title'),
    description: t('metadata-home.contact-description'),
  };
}

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 md:py-24 lg:py-32 md:px-6 gap-10">
      <ContactWrapper />
    </div>
  );
}
