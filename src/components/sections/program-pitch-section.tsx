import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProgramPitchSection() {
  return (
    <section className="bg-primary text-primary-foreground py-24 px-4 sm:py-32  sm:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Join the Founder&apos;s Program
        </h2>
        <p className="mt-6 text-lg leading-8 text-primary-foreground/80 ">
          I&apos;m looking for a small group of 10 founding students to help me perfect this unique, modern music production curriculum. Founding members will receive private, one-on-one sessions at a special introductory rate and will be first to enroll in our premier weekly program.
        </p>
        <p className="mt-4 text-lg leading-8 text-primary-foreground/80">
          This is a chance to get in on the ground floor of a new and exciting way to learn music.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white uppercase hover:bg-white hover:text-primary">
            <Link href="https://forms.gle/BcBVBCgdWkqMG3jP6">Become a Founding Member</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
