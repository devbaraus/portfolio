import { Article } from '@/gql/graphql';
import gql from 'graphql-tag';

import { fetcherGQL } from '@/lib/utils';
import PostCard from '@/components/home-sections/post/post-card';
import Section from '@/components/section/section';

type Props = {};

const query = gql`
  query QueryPostSection {
    article(filter: { status: { _eq: "published" } }) {
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

  return (
    <Section
      id='posts'
      title='Read some of my articles'
      description='I write about web development, design and other stuff.'
      subtitle='Latest posts'
    >
      <div className='grid gap-20 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
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
