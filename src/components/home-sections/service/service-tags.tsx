import { shuffle } from 'lodash';

import { Badge } from '@/components/ui/badge';

type Props = { tags: string[] };
export default function ServiceTags(props: Props) {
  const shuffledColors = shuffle(['default', 'secondary', 'outline']);

  return (
    <>
      {props.tags.map((tag, jindex) => (
        <Badge
          variant={shuffledColors[jindex % 3] as 'default' | 'secondary' | 'outline'}
          className='uppercase'
        >
          {tag}
        </Badge>
      ))}
    </>
  );
}
