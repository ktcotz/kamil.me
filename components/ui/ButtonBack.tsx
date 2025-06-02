'use client';

import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export const ButtonBack = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <Button size="lg" variant="outline" onClick={() => router.back()}>
      <ArrowLeft className="h-5 w-5" aria-hidden={true} />
      <span> {t('notFound.back')}</span>
    </Button>
  );
};
