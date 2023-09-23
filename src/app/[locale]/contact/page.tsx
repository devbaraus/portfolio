import locales from '@/locales/contact';
import { PageParams } from '@/types';

import ContactSection from '@/components/contact/contact-section';
import FormSection from '@/components/contact/form-section';

export function generateMetadata({ params: { locale } }: PageParams) {
  return {
    title: locales[locale].title,
    description: locales[locale].description
  };
}

export default function ContactPage() {
  return (
    <main className='container my-16 grid md:grid-cols-2'>
      <ContactSection />
      <FormSection />
    </main>
  );
}
