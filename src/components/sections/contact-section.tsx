

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 sm:py-24 bg-secondary">
      <div className="container max-w-2xl mx-auto px-4 text-center">
        <div>
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Start Creating?
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Fill out our quick sign-up form and book your first lesson today — it only takes a minute!
          </p>
        </div>
        <div className="mt-16">
            <a
            href="https://forms.gle/BcBVBCgdWkqMG3jP6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl  border-2 border-primary bg-transparent px-7 py-4 font-lg text-primary text-xl transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
>
                Book Your First Lesson
            </a>
        </div>
        
        
      </div>
    </section>
  );
}
