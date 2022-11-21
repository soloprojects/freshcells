import gql from "graphql-tag";

export const UserQuery = gql`
  query user($id: ID!){
  user(id: $id){
    id
    email
    firstName
    lastName
  }
}
`;
