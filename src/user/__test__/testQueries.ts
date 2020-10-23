import gql from 'graphql-tag';

export const GET_USER = gql`
  query {
    getUser {
      email
      aud
      email
      exp
      iat
      iss
      name
      nickname
      picture
      sub
    }
  }
`;
