'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type NavigationProps = {
  isOpen?: boolean;
};

export const Navigation = ({ isOpen }: NavigationProps) => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/services', label: t('navigation.services') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const navContainer = twMerge(
    'hidden md:flex',
    isOpen && 'flex',
    isOpen !== undefined && 'md:hidden',
  );
  const listContainer = twMerge('flex gap-6', isOpen && 'flex-col p-4');

  return (
    <nav className={navContainer}>
      <ul className={listContainer}>
        {navItems.map(({ href, label }) => {
          const localizedHref = `/${locale}${href}`;
          const isActive =
            pathname === localizedHref ||
            (href === '/' && pathname === `/${locale}`);

          return (
            <Link
              key={href}
              href={href}
              className={`relative text-sm font-medium transition-colors hover:text-primary ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              } flex items-center gap-1`}
              data-cursor-hover
            >
              {label}
              {isActive && !isOpen && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
