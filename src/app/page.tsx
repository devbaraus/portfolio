import { Separator } from '@/components/ui/separator';
import AboutSection from '@/components/home-sections/about/about-section';
import HeroSection from '@/components/home-sections/hero-section';
import PostSection from '@/components/home-sections/post-section';
import ProjectSection from '@/components/home-sections/project-section';
import ServiceSection from '@/components/home-sections/service/service-section';

export default function HomePage() {
  return (
    <>
      <main className='mb-12'>
        <HeroSection />
        <ProjectSection />
        <ServiceSection />
        <PostSection />
        <Separator />
        <AboutSection />
      </main>
    </>
  );
}
