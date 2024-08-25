import { gql } from '@apollo/client'


export const REGISTER_USER = gql`
    mutation Mutation($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
        firstName
        lastName
        email
        password
  }
}
`;
