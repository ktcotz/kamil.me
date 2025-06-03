import z from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string({ required_error: 'form.name.required' })
    .min(2, { message: 'form.name.tooShort' })
    .nonempty({ message: 'form.name.required' }),

  email: z
    .string()
    .email({ message: 'form.email.invalid' })
    .nonempty({ message: 'form.email.required' }),
  subject: z
    .string()
    .min(3, { message: 'form.subject.tooShort' })
    .nonempty({ message: 'form.subject.required' }),
  message: z
    .string()
    .min(10, { message: 'form.message.tooShort' })
    .nonempty({ message: 'form.message.required' })
    .max(200, { message: 'form.message.tooLong' }),
  honeypot: z.string().optional(),
  timestamp: z.string(),
});

export type ContactSchema = z.infer<typeof ContactFormSchema>;
