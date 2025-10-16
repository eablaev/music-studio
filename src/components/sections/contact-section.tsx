import { ContactForm } from '@/components/contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container max-w-2xl mx-auto px-4 text-center">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Start Creating?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Have questions or want to enroll? Send us a message and we&apos;ll get back to you shortly.
          </p>
        </div>
        <div className="mt-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
