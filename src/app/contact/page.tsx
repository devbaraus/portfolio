import ContactSection from '@/components/contact-sections/contact-section';
import FormSection from '@/components/contact-sections/form-section';

export const metadata = {
  title: 'Get in touch',
  description:
    'Looking for a freelance web designer or developer to take your website to the next level? Get in touch today to learn more.'
};

export default function ContactPage() {
  return (
    <>
      <main className='container my-16 grid md:grid-cols-2'>
        <ContactSection />
        <FormSection />
      </main>
    </>
  );
}
