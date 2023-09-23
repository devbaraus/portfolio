import { shuffle } from 'lodash';

import { Badge } from '@/components/ui/badge';

type Props = { tags: string[] };
export default function ServiceTags({ tags }: Props) {
  const shuffledColors = shuffle(['default', 'secondary', 'outline']);

  return (
    <>
      {tags.map((tag, index) => (
        <Badge
          className='uppercase'
          key={tag}
          variant={shuffledColors[index % 3] as 'default' | 'secondary' | 'outline'}
        >
          {tag}
        </Badge>
      ))}
    </>
  );
}
