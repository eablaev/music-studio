'use server';

import { ContactFormSchema } from '@/lib/schemas';
import { z } from 'zod';

type ContactFormValues = z.infer<typeof ContactFormSchema>;

export async function sendContactMessage(values: ContactFormValues) {
  const validatedFields = ContactFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      status: 'error' as const,
      message: 'Invalid data provided. Please check the form and try again.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real-world application, you would integrate an email service here.
  // For example, using Resend, Nodemailer, or SendGrid.
  console.log('Received contact form submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    status: 'success' as const,
    message: "Thank you! Your message has been sent successfully. We'll be in touch soon.",
  };
}
