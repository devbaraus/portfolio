import AboutSection from '@/components/home/about/about-section';
import ContactSection from '@/components/home/contact-section';
import HeroSection from '@/components/home/hero-section';
import ProjectSection from '@/components/home/project/project-section';
import ServiceSection from '@/components/home/service/service-section';

export default function HomePage() {
  return (
    <main className='mb-16'>
      <HeroSection />
      <ProjectSection />
      <ServiceSection />
      {/*<PostSection />*/}
      <AboutSection />
      <ContactSection />
    </main>
  );
}
