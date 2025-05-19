import { Check, Globe } from 'lucide-react';
import { Button } from './Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './Dropdown-menu';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export const LanguageSwitcher = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const t = useTranslations();

  const setLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.replace(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" data-cursor-hover>
          <Globe
            className="h-[1.2rem] w-[1.2rem]"
            aria-label={t('language.change')}
          />
          <span className="sr-only">{t('language.change')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage('pl')}
          className="flex items-center justify-between"
        >
          <span>{t('language.polish')}</span>
          {currentLocale === 'pl' && (
            <Check aria-label={t('utils.check')} className="h-4 w-4 ml-2" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('en')}
          className="flex items-center justify-between"
        >
          <span>{t('language.english')}</span>
          {currentLocale === 'en' && (
            <Check aria-label={t('utils.check')} className="h-4 w-4 ml-2" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
