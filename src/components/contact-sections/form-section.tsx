'use client';

import { HTMLAttributes } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TextArea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Section from '@/components/section/section';
import { formSubmit } from '@/app/contact/actions';

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
    // Get client IP
    fetch('https://api.ipify.org?format=json')
      .then((res) => res.json())
      .then((res) => {
        const ip = res.ip;
        const body = {
          ...data,
          ip
        };

        const formData = new FormData();

        Object.entries(body).forEach(([key, value]) => {
          formData.append(key, value);
        });

        formSubmit(formData).catch(() => {
          toast({
            title: 'Error',
            description: 'An error occurred while sending your message',
            variant: 'destructive'
          });
        });
      });
  }

  return (
    <>
      <Section className='p-0'>
        <form
          className='space-y-12'
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className='space-y-12'>
            <legend className='text-lg uppercase'>YOUR DETAILS*</legend>
            <div className='grid gap-12 md:grid-cols-2 '>
              <div className='relative'>
                <Input
                  {...register('first_name')}
                  id='first_name'
                  type='text'
                  className='peer focus:border-b-secondary'
                  required
                  placeholder=' '
                />
                {errors.first_name && (
                  <span className='text-xs text-destructive'>{errors.first_name.message}</span>
                )}
                <FloatingLabel htmlFor='first_name'>First Name</FloatingLabel>
              </div>
              <div className='relative'>
                <Input
                  {...register('last_name')}
                  id='last_name'
                  type='text'
                  className='peer focus:border-b-secondary'
                  required
                  placeholder=' '
                />
                {errors.last_name && (
                  <span className='text-xs text-destructive'>{errors.last_name.message}</span>
                )}
                <FloatingLabel htmlFor='last_name'>Last Name</FloatingLabel>
              </div>
            </div>
            <div className='grid gap-12 md:grid-cols-2'>
              <div className='relative'>
                <Input
                  {...register('email')}
                  id='email'
                  type='email'
                  className='peer focus:border-b-secondary'
                  required
                  placeholder=' '
                />
                {errors.email && (
                  <span className='text-xs text-destructive'>{errors.email.message}</span>
                )}
                <FloatingLabel htmlFor='email'>E-mail</FloatingLabel>
              </div>
              <div className='relative'>
                <Input
                  {...register('phone')}
                  id='phone'
                  type='tel'
                  className='peer focus:border-b-secondary'
                  required
                  placeholder=' '
                />
                {errors.phone && (
                  <span className='text-xs text-destructive'>{errors.phone.message}</span>
                )}
                <FloatingLabel htmlFor='phone'>Phone</FloatingLabel>
              </div>
            </div>
          </fieldset>
          <fieldset className='space-y-12'>
            <legend className='text-lg uppercase'>Tell me about your project*</legend>
            <div className='relative'>
              <TextArea
                {...register('message')}
                id='message'
                className='peer placeholder:uppercase focus:border-b-secondary'
                placeholder='Your message...'
                required
                rows={5}
              />
              {errors.message && (
                <span className='text-xs text-destructive'>{errors.message.message}</span>
              )}
            </div>
          </fieldset>
          <Button
            variant='secondary'
            className='float-right uppercase'
            size='lg'
          >
            send
          </Button>
          <div className='clear-both' />
        </form>
      </Section>
    </>
  );
}
