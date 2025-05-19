'use client';

import { Logo } from '@/components/ui';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Navigation } from '../Navigation';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  console.log(isOpen);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
