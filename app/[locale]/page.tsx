import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui';

export default function Home() {
  const t = useTranslations();
  return (
    <div>
      <Button>{t('greeting')}</Button>
    </div>
  );
}
