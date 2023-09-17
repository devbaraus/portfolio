import AboutSection from '@/components/home-sections/about/about-section';
import ContactSection from '@/components/home-sections/contact-section';
import HeroSection from '@/components/home-sections/hero-section';
import PostSection from '@/components/home-sections/post/post-section';
import ProjectSection from '@/components/home-sections/project/project-section';
import ServiceSection from '@/components/home-sections/service/service-section';

export default function HomePage() {
  return (
    <>
      <main className='mb-16'>
        <HeroSection />
        <ProjectSection />
        <ServiceSection />
        <PostSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
