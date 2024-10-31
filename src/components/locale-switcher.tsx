import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

import { switchLocale } from '@/app/[locale]/actions';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/hooks/use-locale';
import { cn } from '@/lib/utils';
import { Lang } from '@/types';

type Props = {} & HTMLAttributes<HTMLDivElement>;

export default function LangSwitcher({ className, ...props }: Props) {
  const locale = useLocale();
  const router = useRouter();

  async function handleSwitchLocale(locale: Lang) {
    const formData = new FormData();
    formData.append('locale', locale);
    await switchLocale(formData);
    router.refresh();
  }

  return (
    <div className={cn('flex gap-2 rounded-full bg-muted p-2', className)}>
      <Button
        className='!size-6 rounded-full text-xs'
        onClick={() => handleSwitchLocale('en')}
        size='icon'
        variant={locale === 'en' ? 'default' : 'secondary'}
      >
        en
      </Button>

      <Button
        className='!size-6 rounded-full text-xs'
        onClick={() => handleSwitchLocale('pt')}
        size='icon'
        variant={locale === 'pt' ? 'default' : 'secondary'}
      >
        pt
      </Button>
    </div>
  );
}
