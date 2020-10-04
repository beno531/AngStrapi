import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Articles {
    articles (sort: "published_at:desc" limit:5){
        id,
        title,
        subtitle,
        category {
            id
            name
        },
        image {url},
        published_at,
        user {
          username
        }
      }
  }
`;

export default ARTICLES_QUERY;