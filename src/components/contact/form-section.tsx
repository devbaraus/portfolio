'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { HTMLAttributes } from 'react';
import { z } from 'zod';

import { formSubmit } from '@/app/[locale]/contact/actions';
import { useToast } from '@/components/ui/use-toast';
import { TextArea } from '@/components/ui/textarea';
import Section from '@/components/section/section';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import locales from '@/locales/contact';
import { cn } from '@/lib/utils';

function FloatingLabel({
  children,
  className,
  htmlFor,
  ...props
}: { htmlFor: string } & HTMLAttributes<HTMLLabelElement>) {
  return (
    <Label
      htmlFor={htmlFor}
      {...props}
      className={cn(
        'absolute -top-4 left-0 translate-y-0 uppercase text-secondary/60 transition-all duration-500 peer-placeholder-shown:left-4 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:-top-4 peer-focus:left-0 peer-focus:translate-y-0',
        className
      )}
    >
      {children}
    </Label>
  );
}

type Props = {};

const formSchema = z.object({
  first_name: z.string().min(2, { message: 'First name is required' }),
  last_name: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z
    .string()
    .min(10, { message: 'Phone is required' })
    .refine((value) => value.match(/^\+?([0-9]|\(|\))+$/) !== null, { message: 'Invalid phone' }),
  message: z.string()
});

type FormValues = z.infer<typeof formSchema>;

export default function FormSection(props: Props) {
  const { toast } = useToast();
  const locale = useLocale();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
    // defaultValues: {
    //   first_name: 'Bruno',
    //   last_name: 'Araujo',
    //   email: 'teste@gmail.com',
    //   phone: '+5562993794290',
    //   message: 'Teste'
    // }
  });

  function onSubmit(data: FormValues) {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formSubmit(formData).catch(() => {
      toast({
        title: 'Error',
        description: 'An error occurred while sending your message',
        variant: 'destructive'
      });
    });
  }

  return (
    <Section className='p-0'>
      <form
        className='space-y-12'
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className='space-y-12'>
          <legend className='text-lg uppercase'>{locales[locale].form.fieldsetDetails}*</legend>
          <div className='grid gap-12 md:grid-cols-2 '>
            <div className='relative'>
              <Input
                {...register('first_name')}
                className='peer focus:border-b-secondary'
                id='first_name'
                placeholder=' '
                required
                type='text'
              />
              {errors.first_name ? (
                <span className='text-xs text-destructive'>{errors.first_name.message}</span>
              ) : null}
              <FloatingLabel htmlFor='first_name'>{locales[locale].form.firstName}</FloatingLabel>
            </div>
            <div className='relative'>
              <Input
                {...register('last_name')}
                className='peer focus:border-b-secondary'
                id='last_name'
                placeholder=' '
                required
                type='text'
              />
              {errors.last_name ? (
                <span className='text-xs text-destructive'>{errors.last_name.message}</span>
              ) : null}
              <FloatingLabel htmlFor='last_name'>{locales[locale].form.lastName}</FloatingLabel>
            </div>
          </div>
          <div className='grid gap-12 md:grid-cols-2'>
            <div className='relative'>
              <Input
                {...register('email')}
                className='peer focus:border-b-secondary'
                id='email'
                placeholder=' '
                required
                type='email'
              />
              {errors.email ? (
                <span className='text-xs text-destructive'>{errors.email.message}</span>
              ) : null}
              <FloatingLabel htmlFor='email'>{locales[locale].form.email}</FloatingLabel>
            </div>
            <div className='relative'>
              <Input
                {...register('phone')}
                className='peer focus:border-b-secondary'
                id='phone'
                placeholder=' '
                required
                type='tel'
              />
              {errors.phone ? (
                <span className='text-xs text-destructive'>{errors.phone.message}</span>
              ) : null}
              <FloatingLabel htmlFor='phone'>{locales[locale].form.phone}</FloatingLabel>
            </div>
          </div>
        </fieldset>
        <fieldset className='space-y-12'>
          <legend className='text-lg uppercase'>{locales[locale].form.fieldsetProject}*</legend>
          <div className='relative'>
            <TextArea
              {...register('message')}
              className='peer placeholder:uppercase focus:border-b-secondary'
              id='message'
              placeholder={locales[locale].form.message}
              required
              rows={5}
            />
            {errors.message ? (
              <span className='text-xs text-destructive'>{errors.message.message}</span>
            ) : null}
          </div>
        </fieldset>
        <Button
          className='float-right uppercase'
          size='lg'
          variant='secondary'
        >
          {locales[locale].form.button}
        </Button>
        <div className='clear-both' />
      </form>
    </Section>
  );
}
