import { PageProps, graphql } from 'gatsby';

import { Post } from '@components/post';
import { SEO } from '@components/seo';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <div>
      <Post.List>
        {data.allMdx.nodes.map((node) => {
          return <Post.Item key={node.id} node={node} />;
        })}
      </Post.List>
    </div>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEO title="홈" />;
};

export const pageQuery = graphql`
  query IndexPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        fields {
          slug
          readingTime
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          description
        }
      }
    }
  }
`;
