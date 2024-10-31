import { getLocaleServer } from '@/hooks/get-locale-server';
import PostCard from '@/components/home/post/post-card';
import Section from '@/components/section/section';
import { articlesData } from '@/data';
import { cn } from '@/lib/utils';
import locales from '@/locales';

type Props = {};

export default async function PostSection(props: Props) {
  const article = articlesData;

  const locale = await getLocaleServer();

  return (
    <Section
      description={locales[locale].post.description}
      id='posts'
      subtitle={locales[locale].post.subtitle}
      title={locales[locale].post.title}
    >
      <div
        className={cn('grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4', {
          'md:grid-cols-2': article.length % 2 === 0,
          'md:grid-cols-3': article.length % 3 === 0,
          'lg:grid-cols-2': article.length == 2,
          'lg:grid-cols-3': article.length == 3,
          'lg:grid-cols-4': article.length == 4
        })}
      >
        {article.map((article) => (
          <PostCard
            article={article}
            key={article.id}
          />
        ))}
      </div>
    </Section>
  );
}
