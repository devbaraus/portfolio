import { Separator } from '@/components/ui/separator';
import ContactSection from '@/components/contact-sections/contact-section';
import FormSection from '@/components/contact-sections/form-section';

export default function ContactPage() {
  return (
    <>
      <main className='my-16 bg-muted/30'>
        <div className='container my-16 grid md:grid-cols-2'>
          <ContactSection />
          <FormSection />
        </div>
      </main>
    </>
  );
}
