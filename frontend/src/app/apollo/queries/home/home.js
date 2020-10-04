import gql from "graphql-tag";

const HOME_QUERY = gql`
query Home {
    home {
      Title,
      Subtitle,
      Toptitle,
      Topsub,
      Topvideo {
        url
      }
    }
  }
`;

export default HOME_QUERY;