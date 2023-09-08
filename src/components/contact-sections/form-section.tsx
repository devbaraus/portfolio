'use client';

import { HTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { TextArea } from '@/components/ui/textarea';
import Section from '@/components/section/section';

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

export default function FormSection(props: Props) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: any) {
    console.log(data);
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
        <Separator />
        <p>
          If you have issues submitting this form, please send a regular email or book in a meeting.
        </p>
      </Section>
    </>
  );
}
