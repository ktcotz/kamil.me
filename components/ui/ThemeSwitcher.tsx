'use client';

import { Check, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/Dropdown-menu';
import { Button } from './Button';
import { useTranslations } from 'next-intl';

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={t('theme.change')}>
          <Sun
            className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
              isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'
            }`}
            aria-label={t('theme.light')}
          />
          <Moon
            className={`h-[1.2rem] w-[1.2rem] transition-all ${
              isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
            }`}
            aria-label={t('theme.dark')}
          />
          <span className="sr-only">{t('theme.change')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {t('theme.light')}
          {!isDark && (
            <Check aria-label={t('utils.check')} className="h-4 w-4 ml-auto" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {t('theme.dark')}
          {isDark && (
            <Check aria-label={t('utils.check')} className="h-4 w-4 ml-auto" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {t('theme.system')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
