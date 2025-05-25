import { Button } from '@/components/ui';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import Link from 'next/link';

export const SocialLinks = () => {
  return (
    <div className="flex gap-2">
      {links.map(({ label, id, href, icon: Icon }) => {
        return (
          <Button asChild key={id} variant="ghost" size="icon">
            <Link href={href} target="_blank">
              <Icon className="h-5 w-5" aria-label={label} />
              <span className="sr-only">{label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

const links = [
  {
    id: 1,
    href: 'https://github.com/ktcotz',
    label: 'Github',
    icon: Github,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/naskret-kamil/',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    id: 3,
    href: 'https://x.com/ktcotzKamil',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    id: 4,
    href: 'mailto:naskret.kamil@gmail.com',
    label: 'Email',
    icon: Mail,
  },
];
