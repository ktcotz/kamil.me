import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactSchema } from '../schema/ContactFormSchema';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from '@/components/ui';
import { useTranslations } from 'next-intl';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const t = useTranslations();

  const form = useForm<ContactSchema>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
      honeypot: '',
      timestamp: String(Date.now()),
    },
  });

  const handleSubmit = (data: ContactSchema) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2 items-start">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.name.title')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form.name.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('form.email.title')}</FormLabel>
                <FormControl>
                  <Input placeholder={t('form.email.placeholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.subject.title')}</FormLabel>
              <FormControl>
                <Input placeholder={t('form.subject.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => {
            const currentLength = field.value?.length || 0;
            const maxLength = 200;

            return (
              <FormItem className="relative">
                <FormLabel>{t('form.message.title')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('form.message.placeholder')}
                    {...field}
                    rows={5}
                    maxLength={maxLength}
                  />
                </FormControl>
                <span className="absolute right-2 bottom-2 text-sm text-muted-foreground">
                  {currentLength}/{maxLength}
                </span>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="honeypot"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden={true}
                  className="sr-only"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="timestamp"
          render={({ field }) => <Input type="hidden" {...field} />}
        />
        <Button type="submit" className="w-full">
          <span>{t('form.submit')}</span>
          <Send className="h-4 w-4" aria-hidden={true} />
        </Button>
      </form>
    </Form>
  );
};
