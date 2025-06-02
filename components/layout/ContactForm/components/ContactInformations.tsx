import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

const informations = [
  {
    id: 1,
    title: 'contact.email',
    value: 'naskret.kamil@gmail.com',
    icon: Mail,
  },
  {
    id: 2,
    title: 'contact.phone',
    value: '(+48) 537-273-082',
    icon: Phone,
  },
  {
    id: 3,
    title: 'contact.localization',
    value: 'footer.localization',
    icon: MapPin,
  },
] as const;

export const ContactInformations = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-4">
      {informations.map(({ id, icon: Icon, title, value }) => {
        return (
          <div className="flex items-center gap-3" key={id}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon className="w-5 h-5" aria-hidden={true} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{t(title)}</p>
              <p className="font-medium">
                {value === 'footer.localization' ? t(value) : value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
