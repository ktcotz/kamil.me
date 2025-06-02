import { Button } from '@/components/ui';
import { ArrowLeft, Home } from 'lucide-react';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type Params = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Params) {
  const { locale } = await params;

  const t = await getTranslations({ locale });

  return {
    title: t('metadata-home.not-found-title'),
    description: t('metadata-home.not-found-description'),
    openGraph: null,
    twitter: null,
  };
}

export default async function MissingCatchAll() {
  const t = await getTranslations();

  return (
    <div className="text-center flex flex-col items-center justify-center px-4 py-12 md:px-6 gap-10">
      <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative z-10 cursor-pointer select-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        {t('notFound.title')}
      </h2>
      <p className="text-muted-foreground text-lg max-w-md mx-auto text-center">
        {t('notFound.description')}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button asChild size="lg">
          <Link href="/" className="flex gap-1">
            <Home className="h-5 w-5" aria-hidden={true} />
            <span> {t('notFound.toHome')}</span>
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/" className="flex gap-1">
            <ArrowLeft className="h-5 w-5" aria-hidden={true} />
            <span> {t('notFound.back')}</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
