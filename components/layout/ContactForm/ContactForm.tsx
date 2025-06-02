'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ContactInformations } from './components';
import { SocialLinks } from '../Footer/components';

export const ContactForm = () => {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-5xl w-full space-y-12"
    >
      <div className="space-y-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl"
        >
          {t('contact.title')}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto max-w-[700px]"
        >
          <p className="text-muted-foreground md:text-xl">
            {t('contact.description')}
          </p>
        </motion.div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">{t('contact.information')}</h2>
          <ContactInformations />
          <div className="space-y-4">
            <h3 className="text-lg font-medium">{t('contact.connect')}</h3>
            <SocialLinks />
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-lg font-medium">{t('contact.hours')}</h3>
            <div className="mt-2 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t('contact.days.mondayToFriday')}
                </span>
                <span>{t('contact.times.week')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t('contact.days.saturday')}
                </span>
                <span>{t('contact.times.saturday')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">
                  {t('contact.days.sunday')}
                </span>
                <span>{t('contact.times.sunday')}</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">{t('contact.message')}</h2>
        </motion.div>
      </div>
    </motion.div>
  );
};
