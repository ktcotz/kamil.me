'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

export const Navigation = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  return (
    <nav className="hidden md:flex ">
      <ul className="flex gap-6">
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
              {isActive && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
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
