import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function AboutSection() {
  const founderImage = PlaceHolderImages.find((img) => img.id === 'founder-photo');

  return (
    <section className="py-24 pb-0 sm:py-32 sm:pb-12  bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:gap-24">
          <div className="relative  max-w-md mx-auto lg:max-w-none">
            {founderImage && (
              <Image
                src={founderImage.imageUrl}
                alt={founderImage.description}
                data-ai-hint={founderImage.imageHint}
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
              />
            )}
          </div>
          <div className="text-left">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Give Your Child More Than Music Lessons. Give Them the Tools to Create.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We all know that music lessons are great for a child&apos;s brain. But what if they could teach your child not just how to play an instrument, but how to produce a song from start to finish?;
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              My name is Ervin, and after graduating from Berklee College of Music and working with top artists in LA, I realized the most important skill in modern music isn&apos;t just performance—it&apos;s creation. I&apos;ve designed a new kind of music school right here in Naperville to give your child the skills that are actually being used in the professional world today.;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
