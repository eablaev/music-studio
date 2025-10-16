import Logo from '@/components/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
     
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Logo />
            <p className="text-center text-sm leading-loose md:text-left">
            &copy; {currentYear} Sound Circle Studio. All rights reserved.
            </p>
        </div>
    
    </footer>
  );
}
