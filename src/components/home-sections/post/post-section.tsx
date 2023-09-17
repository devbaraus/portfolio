import { Article } from '@/gql/graphql';
import locales from '@/locales';
import gql from 'graphql-tag';

import { fetcherGQL } from '@/lib/utils';
import { useLocaleServer } from '@/hooks/use-locale-server';
import PostCard from '@/components/home-sections/post/post-card';
import Section from '@/components/section/section';

type Props = {};

const query = gql`
  query QueryPostSection {
    article(filter: { status: { _eq: "published" } }, limit: 4) {
      id
      title
      lead
      published_on
      cover {
        id
        width
        height
      }
    }
  }
`;

export default async function PostSection(props: Props) {
  const { article } = await fetcherGQL<{
    article: Article[];
  }>(query);

  const locale = useLocaleServer();

  return (
    <Section
      id='posts'
      title={locales[locale].post.title}
      description={locales[locale].post.description}
      subtitle={locales[locale].post.subtitle}
    >
      <div className='grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
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
