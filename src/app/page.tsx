import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import CurriculumSection from '@/components/sections/curriculum-section';
import HeroSection from '@/components/sections/hero-section';
import ProgramPitchSection from '@/components/sections/program-pitch-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CurriculumSection />
      <ProgramPitchSection />
      <ContactSection />
    </>
  );
}
