import { Logo } from '@/components/ui';
import { SocialLinks } from './components';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export const Footer = () => {
  const t = useTranslations();

  const navItems = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/services', label: t('navigation.services') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ];

  const services = [
    { href: `/services`, hash: 'frontend', label: t('services.frontend') },
    { href: `/services`, hash: 'backend', label: t('services.backend') },
    { href: `/services`, hash: 'maintain', label: t('services.maintain') },
  ];

  return (
    <footer className="border-t bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <div className="w-fit">
              <Logo />
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              {t('footer.showcase')}
            </p>
            <SocialLinks />
          </div>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-medium">{t('footer.pages')}</h2>
              <ul className="flex flex-col gap-2 text-sm">
                {navItems.map(({ href, label }) => {
                  return (
                    <li
                      key={label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-medium">{t('footer.services')}</h2>
              <ul className="flex flex-col gap-2 text-sm">
                {services.map(({ href, label, hash }) => {
                  return (
                    <li
                      key={label}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Link href={{ pathname: href, hash }}>{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-sm font-medium">{t('footer.contact')}</h2>
              <ul className="flex flex-col gap-2 text-sm">
                <li className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.localization')}
                </li>
                <li className="text-muted-foreground transition-colors hover:text-foreground">
                  <Link href="mailto:naskret.kamil@gmail.com">
                    naskret.kamil@gmail.com
                  </Link>
                </li>
                <li className="text-muted-foreground transition-colors hover:text-foreground">
                  <Link href="tel:+48537273082">(+48) 537-273-082</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Kamil.me. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
