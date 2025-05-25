'use client';

import { Button, Logo } from '@/components/ui';
import { Navigation } from '../Navigation';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatePresence, motion } from 'framer-motion';
import { FocusTrap } from 'focus-trap-react';
import { useResponsiveMenu } from '../Navigation/useResponsiveMenu';

export const Header = () => {
  const { isOpen, toggleMenu } = useResponsiveMenu();
  const t = useTranslations();

  return (
    <FocusTrap active={isOpen}>
      <header className="px-4 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between flex-wrap">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label={
                isOpen
                  ? t('navigation.hamburger.close')
                  : t('navigation.hamburger.open')
              }
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X
                  className="h-5 w-5"
                  aria-label={t('navigation.hamburger.close')}
                />
              ) : (
                <Menu
                  className="h-5 w-5"
                  aria-label={t('navigation.hamburger.open')}
                />
              )}
              <span className="sr-only">
                {t('navigation.hamburger.toggle')}
              </span>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, height: 0 }}
              className="relative z-20"
              id="mobile-menu"
            >
              <Navigation isOpen={isOpen} />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </FocusTrap>
  );
};
