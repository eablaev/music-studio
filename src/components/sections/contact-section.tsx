

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
       
        <div className="mt-16 text-center">
   
            <a
                href="https://forms.gle/BcBVBCgdWkqMG3jP6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl border-2 border-primary bg-transparent px-7 py-4 font-lg text-primary text-xl transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg"
            >
                Book Your First Lesson
            </a>

            {/* Stylish & Minimalistic Divider */}
            <div className="my-6 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 flex-shrink text-sm uppercase text-gray-500">Or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Clean Secondary Link */}
            <a href="tel:708-966-9270" className="text-center font-semibold text-primary transition-all duration-300 hover:text-primary-dark">
            <svg className="mx-auto h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span className="mt-2 block">(708) 966-9270</span>
        </a>
        </div>
        
      </div>
    </section>
  );
}
